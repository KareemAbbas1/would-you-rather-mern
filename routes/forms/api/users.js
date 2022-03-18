/* Start Imports */

import express from "express";
import User from "../../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
// Set up dotenv to be able to access the local enviornment variables 
dotenv.config();

/* End Imports */


const router = express.Router();

// Route:  POST request -> api/users
// Description:  Register new User
// Access: Public
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    // Basic Validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Pleas enter all fields" });
    };

    // Check for existing user
    await User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ message: "User already exists" });

            // Create a new user
            const newUser = new User({
                name,
                email,
                password
            });

            // Hash the user's password
            bcrypt.hash(password, 10, (error, hash) => {
                if (error) throw error;
                newUser.password = hash;

                // Add the new user to the database
                newUser.save()
                    .then(user => {

                        // Create a new token
                        jwt.sign(

                            // The token's payload
                            { id: user.id },
                            process.env.JWT_SECRET,
                            { expiresIn: 3600 },
                            (error, token) => {
                                if (error) throw error;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            }
                        );
                    });
            });
        });
});



// Route:  PATCH request -> api/users/:id
// Description:  Add question to user
// Access: Private
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    await User.findByIdAndUpdate(id, { $addToSet: updates }, options)
        .then(user => user.save().then(user => res.status(201).json(user)))
        .catch(error => res.status(400).json({ message: `Failed to add question to the user, ${error.message}` }));
});


// Route: PATCH request -> api/users/:id
// Description:  Add answer to user
// Access: Private
router.patch('/:id/answers', async (req, res) => {
    const id = req.params.id;
    const newAnswer = req.body;
    const options = { new: true };

    await User.findByIdAndUpdate(
        id,
        /* Update the answers object using the aggregation operator to pass new key-value pair without
           removing the existing pairs 
           https://stackoverflow.com/questions/40766450/mongoose-add-more-items-to-existing-object   
        */
        [{
            "$set": {
                "answers": {
                    "$mergeObjects": [
                        "$answers", newAnswer
                    ]
                }
            }
        }],
        options
    )
        .then(user => user.save().then(user => res.status(201).json(user)))
        .catch(error => res.status(400).json({ message: `Failed to add answer to use, ${error.message}` }));
});


export default router;