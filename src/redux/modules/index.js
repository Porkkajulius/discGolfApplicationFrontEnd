import { combineReducers} from 'redux';
import userDiscReducer from './userDisc';
import discReducer from './disc';

export default combineReducers({
    userDiscs: userDiscReducer,
    disc: discReducer
});