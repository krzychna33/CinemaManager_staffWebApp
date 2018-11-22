
const reservationsDefaultState = {
    showingId: undefined,
    movieTitle: undefined,
    reservationsList: [],
    emailFilter: ''
};

export default (state = reservationsDefaultState, action) => {
    switch(action.type){
        case 'GET_RESERVATIONS':
            return {
                ...state,
                showingId: action.showingId,
                movieTitle: action.movieTitle,
                reservationsList: action.reservations
            }
        case 'SET_EMAIL_FILTER': {
            return {
                ...state,
                emailFilter: action.emailFilter
            }
        }
        default:
            return state
    }
}