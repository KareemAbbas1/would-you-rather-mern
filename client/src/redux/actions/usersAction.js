import * as types from './actionsTypes';
import { addAnswer } from './questionActions';
import { saveQuestionAnswer } from '../../utils/api';

export const getUsers = (users) => {
    return {
        type: types.GET_USERS,
        users
    };
};

const addAnswerToUser = ({ qid, authedUser, answer }) => {
    return {
        type: types.ADD_ANSWER_TO_USER,
        info: {
            qid,
            authedUser,
            answer
        }
    }
};

export const addQuestionToUser = ({ id, author }) => {
    return {
        type: types.ADD_QUESTION_TO_USER,
        id,
        author
    };
};



export function handleAddAnswer(qid, answer) {
    return async (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestionAnswer({ qid, authedUser, answer })
            .then(() => {
                dispatch(addAnswerToUser({ qid, authedUser, answer }))
                dispatch(addAnswer({ qid, authedUser, answer }))
            })



    };
};
