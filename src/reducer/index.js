import {combineReducers} from 'redux';
import clients from './clients';
import activeClient from './activeClient';
import candidates from './candidates';

export default combineReducers({
  clients,
  activeClient,
  candidates
});