import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { mongoURI } from "./config/keys.js";

// Import routes
import questions from './routes/api/questions.js';
import users from './routes/api/users.js';


// Initialize the server
const app = express();


// BodyParser Middleware
app.use(bodyParser.json());


// DB config
const db = mongoURI;


// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Database is connected'))
    .catch(error => console.log(error));



// Use routes
app.use('/api/questions', questions);
app.use('/api/users', users);


// Define the port
const port = process.env.PORT || 5000;


// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
