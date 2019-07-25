import {GET_START, GET_SUCCESS, GET_FAILURE} from '../actions/actions';

let defaultState = {
    launches: []
}

//title
//release_date
//image_url
//url

export default function reducer (state = defaultState, action){
    switch(action.type){
        case GET_START:
            return {
                ...state
            }      
        case GET_SUCCESS:
            return {
                ...state,
                launches: action.payload.data
            }          
        case GET_FAILURE:
            return {
                ...state
            } 
        default:
            return state
    }
}

