import mongoose from 'mongoose';

const Schema = mongoose.Schema;


// Option Schema (Text/NestedObject) 
const OptionSchema = new Schema({
    votes: [String],
    text: {
        type: String,
        required: true
    }
});


// Question Schema(Final Schema)
const QuestionSchema = new Schema({
    timeStamp: {
        type: Date,
        default: Date.now
    },
    author: String,
    optionOne: {
        type: OptionSchema,
        required: true
    },
    optionTwo: {
        type: OptionSchema,
        required: true
    }
});

const Question = mongoose.model('question', QuestionSchema);

export default Question;