import * as types from '../actions/actionsType';


const authReducer = (state = null, action) => {
    
    switch(action.type) {

        case types.LOG_IN:
            return action.id;

        case types.LOG_OUT:
            return null;

        default:
            return state
    };
};

export default authReducer;