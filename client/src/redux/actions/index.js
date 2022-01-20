import { getInitialData } from '../../utils/api';
import { getQuestions } from './questionActions';
import { getUsers } from './usersAction';


// const user = loggedOut
export function handleInitialData() {
    return async dispatch => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
        });
    };
};
