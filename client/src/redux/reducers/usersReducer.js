// import * as types from '../actions/actionsType';


// const users = (state = {}, action) => {
//     switch (action.type) {

//         case types.GET_USERS:
//             return {
//                 ...state,
//                 ...action.users
//             };

//         case types.ADD_ANSWER_TO_USER:
//             const { qid, authReducer, answer } = action.info;

//             return {
//                 ...state,
//                 [authReducer]: {
//                     ...state[authReducer],
//                     answers: {
//                         ...state[authReducer].answers,
//                         [qid]: answer
//                     }
//                 }
//             };

//         case types.ADD_QUESTION_TO_USER:
//             const { id, author } = action;

//             return {
//                 ...state,
//                 [author]: {
//                     ...state[author],
//                     questions: state[author].questions.concat(id)
//                 }
//             }

//         default:
//             return state;
//     };
// };

// export default users;