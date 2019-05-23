import axios from 'axios';
import cookies from '../utils/cookies';

const cookie = cookies();


/**
 * Import all constants as an object.
 */
import * as ActionType from '../constants/actionType';
import AppConstant from '../constants/app';

/**
 * Import all apiAction as an object.
 */
import * as apiAction from '../actions/apiAction';

/**
 * Import flashMessage.
 */
import * as FlashMessage from '../actions/flashMessage';

export function login({ email, password }) {
    return function (dispatch) {
        dispatch(apiAction.apiRequest());
        return axios.post(AppConstant.API_URL + 'auth/login', { email, password }).then((response) => {
                dispatch({
                    type: ActionType.LOG_IN_SUCCESS,
                    payload: response.data.token,
                    user: {
                        first_name: response.data.user.first_name,
                        last_name: response.data.user.last_name
                    }
                });
                cookie.set(AppConstant.TOKEN, response.data.token, { path: '/' });
                cookie.set(AppConstant.USER_FIRST_NAME, response.data.user.first_name, { path: '/' });
                cookie.set(AppConstant.USER_LAST_NAME, response.data.user.last_name, { path: '/' });
            })
            .catch((error) => {
                authErrorHandler(dispatch, error.response, ActionType.LOG_IN_FAILURE);
                dispatch(FlashMessage.addFlashMessage('error', 'Usuário ou senha inválidos.'));
            });
    };
}


export function logout() {
    return function (dispatch) {
        cookie.remove(AppConstant.TOKEN, { path: '/' });
        cookie.remove(AppConstant.USER_FIRST_NAME, { path: '/' });
        cookie.remove(AppConstant.USER_LAST_NAME, { path: '/' });
        dispatch({ type: ActionType.LOG_OUT });

        window.location.href = AppConstant.ROOT_URL;
        return false;
    };
}

export function authErrorHandler(dispatch, error, type) {
    let errorMessage = (error.data.message) ? error.data.message : error.data;

    // NOT AUTHENTICATED ERROR
    if (error.status === 401) {
        errorMessage = 'Você não está autorizado a fazer isso. Por favor, faça login e tente novamente.';
    }

    dispatch({
        type,
        payload: errorMessage,
    });
}
