import { combineReducers} from 'redux';
import userDiscReducer from './userDisc';

export default combineReducers({
    userDiscs: userDiscReducer
});