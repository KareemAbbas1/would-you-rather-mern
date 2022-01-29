import { getInitialData } from '../../utils/api';
import { getQuestions } from './questionActions';
import { getUsers } from './usersAction';




export function handleInitialData() {
    return async dispatch => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
        });
    };
};
