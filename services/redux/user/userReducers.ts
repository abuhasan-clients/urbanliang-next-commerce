import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT,
    USER_REGISTER_ACTIVATION_REQUEST,
    USER_REGISTER_ACTIVATION_SUCCESS,
    USER_REGISTER_ACTIVATION_FAIL
} from './userType';

// User Login Reducer
export const userLoginReducer = (state = {}, action: any) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                error: null,
                user: action.payload
            };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
};

// User Register Reducer
export const userRegisterReducer = (state = {}, action: any) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                error: null,
                success: true,
                message: action.payload
            };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
};

// User Register Activation Reducer
export const userActivationReducer = (state = {}, action: any) => {
    switch (action.type) {
        case USER_REGISTER_ACTIVATION_REQUEST:
            return { loading: true };
        case USER_REGISTER_ACTIVATION_SUCCESS:
            return {
                loading: false,
                error: null,
                success: true,
                user: action.payload
            };
        case USER_REGISTER_ACTIVATION_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
};
