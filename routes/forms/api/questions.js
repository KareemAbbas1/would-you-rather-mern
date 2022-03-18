/* Start Imports */

import express from "express";
import Question from "../../../models/Question.js"
import auth from "../../../middleware/auth.js";

/* End Imports */



const router = express.Router();


// Route:  GET request -> api/questions
// Description:  Get all questions
// Access: Private
router.get('/', async (req, res) => {
    await Question.find()
        .then(questions => res.json(questions))
        .catch(error => res.status(404).json({ message: `Failed to get all questions, ${error.message}` }))
});


// Route:  GET request -> api/questions/:id
// Description:  Get question by ID
// Access: Private
router.get('/:id', async (req, res) => {
    await Question.findById(req.params.id)
        .then(questions => res.json(questions));
});


// Route:  POST request -> api/questions
// Description:  Create a question
// Access: Private
router.post('/', async (req, res) => {
    const newQuestion = new Question({
        author: req.body.author,
        options: req.body.options
    });

    await newQuestion.save()
        .then(question => res.status(201).json(question))
        .catch(error => res.status(400).json({ message: `Failed to create new Question, ${error.message}` }));
    // Create a new form and redirect to the new form page
    //     const id = res.body._id;
    // await Question.findById(id)
    // .then()
    // .catch()
});


// Route: Delete request -> api/questions/:id
// Description: Delete a question
// Access: Private
router.delete('/:id', async (req, res) => {
    await Question.findById(req.params.id)
        .then(question => question.remove().then(() => res.json({ Success: "Question Deleted" })))
        .catch(error => res.status(404).json({ Fail: `Failed to Delete Question, ${error.message}` }));
});


// Route: Patch request -> api/questions/:id
// Description:  Add answer to question
// Access: Private
router.patch('/:question_id/options/:option_id', async (req, res) => {
    const questionID = req.params.question_id;
    const optionID = req.params.option_id;
    const newVote = req.body.votes;
    const options = { new: true, /*upsert: true,*/ arrayFilters: [{ 'option._id': optionID }]/*Selecting the targeted option wiht its id */ };

    await Question.findByIdAndUpdate(
        questionID,
        // Selecting and updating the votes of the targeted option
        // https://www.youtube.com/watch?v=r_Xz8kyhE48&t=37s
        { $addToSet: { 'options.$[option].votes': newVote } },
        options
    )
        .then(question => question.save().then(question => res.status(201).json(question)))
        .catch(error => res.status(400).json({ message: `Failed to add answer to the question, ${error.message}` }));
});


export default router; 