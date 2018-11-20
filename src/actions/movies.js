import axiosInstance from '../config/axios';

const getMovies = (movies) => ({
    type: "GET_MOVIES",
    movies
});

export const startGetMovies = () => {
    return (dispatch) => {
        return axiosInstance.get('/movies').then((res) => {
            dispatch(getMovies(res.data));
        })
    }
}
