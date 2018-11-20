import axiosInstance from '../config/axios';

export const getShowings = (showings) => ({
    type: 'GET_SHOWINGS',
    showings
});

export const addShowing = (showing) => ({
    type: 'ADD_SHOWING',
    showing
})

export const startGetShowings = () => {
    return (dispatch) => {
        return axiosInstance.get('/showings').then((res) => {
            dispatch(getShowings(res.data));
        })
    }
}

export const startAddShowing = (showingData = {}) => {
    return (dispatch) => {
        console.log(showingData)
        return new Promise((resolve, reject) => {
            axiosInstance.post('/showings', showingData).then((res) => {
                if(res.status == 201){
                    console.log(res.data.data)
                    dispatch(addShowing(res.data.data));
                    resolve();
                }
            }).catch((e) => {
                console.log(e)
                reject();
            })
        });
    }
}
