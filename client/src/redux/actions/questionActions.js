import * as types from './actionsTypes';
import { saveQuestion } from '../../utils/api';
import { addQuestionToUser } from './usersAction';

export const getQuestions = (questions) => {
    return {
        type: types.GET_QUESTIONS,
        questions
    };;
};

export function addQuestion(question) {
    return {
        type: types.ADD_QUESTION,
        question
    }
};

export function addAnswer({ qid, authedUser, answer }) {
    return {
        type: types.ADD_ANSWER,
        info: {
            qid,
            authedUser,
            answer
        }
    }
};

// export const questionsLoading = () => {
//     return{
//         type: types.LOADING_STATE
//     }
// }


export function handleAddQuestion(optionOne, optionTwo) {
    return async (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser })
            .then(question => {
                dispatch(addQuestion(question));
                dispatch(addQuestionToUser(question));
            })
    };
};



