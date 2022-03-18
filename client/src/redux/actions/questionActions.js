import * as types from './actionsType';
// import { saveQuestion } from '../../utils/api';
// import { addQuestionToUser } from './usersActions';
import axios from 'axios';


export const getQuestions = questions => dispatch => {
    // dispatch(setQuestionsLoading());
    axios
        .get('/api/questions')
        .then(res =>
            dispatch({
                type: types.GET_QUESTIONS,
                questions: res.data
            })
        );
};

export const addQuestion = question => dispatch => {
    axios
        .post('/api/questions')
        .then(res =>
            dispatch({
                type: types.ADD_QUESTION,
                question: res.data
            })
        );
};

export const addAnswer = ({ qid, authReducer, answer }) => {
    return {
        type: types.ADD_ANSWER,
        info: {
            qid,
            authReducer,
            answer
        }
    }
};

export const setQuestionsLoading = () => {
    return {
        type: types.QUESTIONS_LOADING
    }
}

export const handleAddQuestion = (optionOne, optionTwo) => {
    return async (dispatch, getState) => {
        // const { authReducer } = getState();

        // return saveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: authReducer })
        //     .then(question => {
        //         dispatch(addQuestion(question));
        //         dispatch(addQuestionToUser(question));
        //     })
    };
};



