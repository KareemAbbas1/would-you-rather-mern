// import { getInitialData } from '../../utils/api';
// import { getUsers } from './usersActions';
import { getQuestions } from './questionActions';


export function handleInitialData(questions) {
    return async dispatch => {
        dispatch(getQuestions(questions))
        // return getInitialData().then(({ users, questions }) => {
        //     // dispatch(getUsers(users));
        //     dispatch(getQuestions(questions));
        // })
    }
}