import * as types from './actionsType';


export const login = (id) => {
    return {
        type: types.LOG_IN,
        id
    };
};

export const logout = (id) => {
    return {
        type: types.LOG_OUT
    };
};