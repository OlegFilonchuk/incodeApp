import {dataWithIds} from '../helpers';
import {CHANGE_CLIENTS_LIST} from '../constants';

export default (candidates = dataWithIds, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_CLIENTS_LIST:
      return [...payload.clients];
    default:
      return [...candidates];
  }
}