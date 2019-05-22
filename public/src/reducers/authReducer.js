//libraries
import _ from 'lodash';

/**
 * Import all constants as an object.
 */
import * as ActionType from '../constants/actionType';

const initialState = {
    token: null,
    isAuthenticated: false,
    name: null,
    lastName: null,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case ActionType.LOG_IN_SUCCESS:
            return _.assign({}, state, {
                isAuthenticated: true,
                token: action.payload,
                name: action.user.first_name,
                lastName: action.user.last_name
            });

        case ActionType.LOG_IN_FAILURE:
            return _.assign({}, state, {
                isAuthenticated: false,
                token: null,
                name: null,
                lastName: null,
            });

        case ActionType.LOG_OUT:
            return _.assign({}, state, {
                isAuthenticated: false,
                token: null,
                name: null,
                lastName: null,
            });

        default:
            return state;
    }
}