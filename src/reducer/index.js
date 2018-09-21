import {combineReducers} from 'redux';
import clients from './clients';
import activeClient from './activeClient';

export default combineReducers({
    clients,
    activeClient
});