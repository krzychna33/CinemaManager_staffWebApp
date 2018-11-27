import axiosInstance from '../config/axios';

export default (token) => {
    if(token){
        axiosInstance.defaults.headers.common['Authorization'] =`Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
}