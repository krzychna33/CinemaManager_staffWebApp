import axiosInstance from "../config/axios";

const getReservations = (showingId, movieTitle, reservations) => ({
    type: "GET_RESERVATIONS",
    showingId,
    movieTitle,
    reservations,
})

export const startGetReservations = (id) => {
    return (dispatch) => {
        return axiosInstance.get(`/showings/${id}`).then((res) => {
            if(res.status === 200){
                dispatch(getReservations(res.data.data.id, res.data.data.movieTitle, res.data.data.reservations))
            } else {
                dispatch(getReservations(undefined, undefined))
            }
        }).catch((e) => {
            dispatch(getReservations(undefined, undefined))
        })
    }
}

export const setEmailFilter = (emailFilter = '') => ({
    type: 'SET_EMAIL_FILTER',
    emailFilter
})
