import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  movie: movieReducer,
});
