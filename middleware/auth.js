/* A middleware to make private routes that can only be accessed by a jwt token */

/* Start Imports */

import jwt from 'jsonwebtoken';

import dotenv from 'dotenv'
// Configure dotenv to access the local environment variables 
dotenv.config();

/* End Imports */



const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    // Check for a token
    if (!token) return res.status(401).json({ message: "Authorization denied" });

    try {
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Add the user from the token's payload
        req.user = decodedToken;
        next();
    }
    catch (exception) {
        res.status(400).json({ message: "Invalid token" });
    }
};

export default auth;