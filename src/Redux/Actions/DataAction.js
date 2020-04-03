import { GET_POSTS } from '../Actions/types';

export const handleAction = () => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => dispatch({
        type: GET_POSTS,
        payload: res
    }));
}