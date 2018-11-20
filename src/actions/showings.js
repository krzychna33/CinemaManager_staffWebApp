import axiosInstance from '../config/axios';

export const getShowings = (showings) => ({
    type: 'GET_SHOWINGS',
    showings
});

export const startGetShowings = () => {
    return (dispatch) => {
        return axiosInstance.get('/showings').then((res) => {
            dispatch(getShowings(res.data));
        })
    }
}

