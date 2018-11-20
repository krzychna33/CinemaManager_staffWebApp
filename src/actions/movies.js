import axiosInstance from '../config/axios';

const getMovies = (movies) => ({
    type: "GET_MOVIES",
    movies
});

const startGetMovies = () => {
    return (dispatch) => {
        axiosInstance.get('/movies').then((res) => {
            dispatch(getMovies(res.data));
        })
    }
}
