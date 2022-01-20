import express from "express";
import Question from "../../models/Question.js";

const router = express.Router();


// Route:  GET request -> api/questions
// Description:  Get all questions
router.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions));
});


// Route:  GET request -> api/questions/:id
// Description:  Get question by ID
router.get('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(questions => res.json(questions));
});


// Route:  POST request -> api/questions
// Description:  Create a question
router.post('/', (req, res) => {
    const newQuestion = new Question({
        author: req.body.author,
        optionOne: req.body.optionOne,
        optionTwo: req.body.optionTwo
    });

    newQuestion.save().then(question => res.json(question));
});


// Route: Delete request -> api/questions/:id
// Description: Delete a question
router.delete('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(question => question.remove().then(() => res.json({success: "Question Deleted"})))
        .catch(err => res.status(404).json({success: "Failed to Delete Question"}));
});

export default router; 