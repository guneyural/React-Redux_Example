import { GET_POSTS } from '../Actions/types';

const initialState = {
    posts: []
};

export const handleReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
};