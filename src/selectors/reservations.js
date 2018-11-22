export default (reservations, emailFilter) => {
    return reservations.filter((reservation) => {
        if(reservation.email.toLowerCase().search(emailFilter.toLowerCase()) >= 0){
            return reservation
        }
    })
}