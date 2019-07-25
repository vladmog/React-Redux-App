import axios from 'axios';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const fetchData = () => (dispatch) => {
    dispatch ({type: GET_START})
    axios
    .get('https://api.spacexdata.com/v3/launches/past')
    .then(res => {
        console.log("GETPOSTS RES: ", res)
        dispatch({type: GET_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log("GETPOSTS ERR: ", err)
        dispatch({type: GET_FAILURE})
    })
  }