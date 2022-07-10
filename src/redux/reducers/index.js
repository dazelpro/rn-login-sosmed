import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';

// export setiap reducer kedalam variabel
export default combineReducers({
    login: LoginReducer,
});
