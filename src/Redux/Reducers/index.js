import { combineReducers } from 'redux';
import { handleReducer } from './DataReducer';

const rootReducer = combineReducers({
    post: handleReducer
});

export default rootReducer;