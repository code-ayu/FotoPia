import {combineReducers} from 'redux'
import posts from './posts';
import authReducer from './auth';

//Reducers -> Index
export default combineReducers({
    posts ,authReducer
})