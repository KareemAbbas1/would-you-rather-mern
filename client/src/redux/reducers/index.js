import { combineReducers } from 'redux';

import authReducer from './authReducer';
// import users from './usersReducer';
import questions from './questionsReducer';


export default combineReducers({
    authReducer,
    questions
})