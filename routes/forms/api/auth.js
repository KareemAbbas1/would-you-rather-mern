/* Start Imports */

import express from "express";
import User from "../../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import auth from "../../../middleware/auth.js";

import dotenv from 'dotenv';
// Set up dotenv to be able to access the local enviornment variables 
dotenv.config();

/* End Imports */


const router = express.Router();


// Route:  POST request -> api/auth
// Description:  Authenticate a user
// Access: Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Basic Validation
    if(!email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    };

    // Validating user's email
    User.findOne({ email })
    .then(user => {
        if(!user) return res.status(400).json({ message: "User does not exist" });
        
        // Validating user's password
        bcrypt.compare(password, user.password)
        .then(Match => {
            if(!Match) return res.status(400).json({ message: "Invalid credentials" });

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
        })
    })
});


/* Constantly authenticating the user */

// Route:  GET request -> api/auth/user
// Description:  Get user's data
// Access: private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

export default router;