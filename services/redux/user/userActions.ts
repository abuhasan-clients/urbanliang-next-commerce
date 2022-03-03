import axios from 'axios';
import toast from 'react-hot-toast';
import {
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_ACTIVATION_REQUEST,
    USER_REGISTER_ACTIVATION_SUCCESS,
    USER_REGISTER_ACTIVATION_FAIL
} from './userType';

export const logout = () => (dispatch: any) => {
    localStorage.removeItem('shopkpr_userInfo');
    dispatch({ type: USER_LOGOUT });
};

// User Login Action
export const login = (email: string, password: any) => async (dispatch: any) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`, { email, password }, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        toast.success('Logged in successfully');
        localStorage.setItem('shopkpr_userInfo', JSON.stringify(data));
    } catch (err) {
        const error = err.response && err.response.data.message ? err.response.data.message : err.message;
        toast.error(error);
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        });
    }
};

// User Register Action
export const register = (userData: any) => async (dispatch: any) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/register`, userData, config);
        toast.success(data.message);
        // console.log(data);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (err) {
        const error = err.response && err.response.data.message ? err.response.data.message : err.message;
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error
        });
    }
};

//User Register Activation Action
export const userActivation = (token: any) => async (dispatch: any) => {
    try {
        dispatch({ type: USER_REGISTER_ACTIVATION_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/activation`, token, config);

        dispatch({ type: USER_REGISTER_ACTIVATION_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        toast.success('User activation successful');

        localStorage.setItem('shopkpr_userInfo', JSON.stringify(data));
    } catch (err) {
        const error = err.response && err.response.data.message ? err.response.data.message : err.message;
        dispatch({
            type: USER_REGISTER_ACTIVATION_FAIL,
            payload: error
        });
    }
};
