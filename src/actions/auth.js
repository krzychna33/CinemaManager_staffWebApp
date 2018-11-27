import axiosInstance from "../config/axios";
import jwt from 'jsonwebtoken';
import { key } from '../config/jwt/public';
import setAuthorizationTokenHeader from '../utils/setAuthTokenHeader';

export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const startLogin = (data) => {
    return (dispatch) => {
        return axiosInstance.post('/login', data).then((res) => {
            if (res.status === 200) {
                const token = res.data.access_token;
                jwt.verify(token, key, (err, decoded) => {
                    if (!err) {
                        localStorage.setItem('jwtToken', token);
                        setAuthorizationTokenHeader(token);
                        dispatch(setUser(decoded));
                    }
                })
            }
        })
    }
};

export const startLogout = () => {
    return (dispatch) => {
        return axiosInstance.post('/logout').then((res) => {
            if(res.status === 200){
                localStorage.removeItem('jwtToken');
                setAuthorizationTokenHeader(false);
                dispatch(setUser());
            }
        })
    }
}

