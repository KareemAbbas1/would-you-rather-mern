import * as types from '../actions/actionsType';

// const initialState = {
//     state: {},
//     loading: false
// }

// const loadingState = { loading: false };
const questions = (state = {}, action) => {

    switch (action.type) {

        case types.GET_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };

        case types.ADD_QUESTION:

            return {
                ...state,
                [action.question.id]: action.question
            };

        case types.ADD_ANSWER:

            const { qid, authReducer, answer } = action.info;

            return {

                ...state, [qid]: {
                    ...state[qid], [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authReducer)
                    }
                }

            };

        case types.QUESTIONS_LOADING:

            return {
                ...state,
                loading: true
            }

        default:
            return state;
    };
};

export default questions;