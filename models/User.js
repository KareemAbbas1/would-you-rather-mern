import mongoose from 'mongoose';

const Schema = mongoose.Schema


// User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    answers: {
        type: Map,
        of: String,
    },
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }] /*or [String] */
});


const User = mongoose.model('user', UserSchema);

export default User;