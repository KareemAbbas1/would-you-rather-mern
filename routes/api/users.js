import express from "express";
import User from "../../models/User.js";


const router = express.Router();

// Route:  GET request -> api/users
// Description:  Register new user
// Access: Public
router.get('/', (req, res) => {
    res.send('register');
});

// Route:  POST request -> api/users
// Description:  Register new User
// Access: Public
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        answers: req.body.answers
    });

    newUser.save().then(user => res.json(user));
});

export default router;