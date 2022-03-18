// import * as types from './actionsType';
// import { addAnswer } from './questionActions';
// import { saveQuestionAnswer } from '../../utils/api';

// export const getUsers = (users) => {
//     return {
//         type: types.GET_USERS,
//         users
//     };
// };

// const addAnswerToUser = ({ qid, authReducer, answer }) => {
//     return {
//         type: types.ADD_ANSWER_TO_USER,
//         info: {
//             qid,
//             authReducer,
//             answer
//         }
//     }
// };

// export const addQuestionToUser = ({ id, author }) => {
//     return {
//         type: types.ADD_QUESTION_TO_USER,
//         id,
//         author
//     };
// };



// export function handleAddAnswer(qid, answer) {
//     return async (dispatch, getState) => {
//         const { authReducer } = getState();

//         return saveQuestionAnswer({ qid, authReducer, answer })
//             .then(() => {
//                 dispatch(addAnswerToUser({ qid, authReducer, answer }))
//                 dispatch(addAnswer({ qid, authReducer, answer }))
//             })



//     };
// };
