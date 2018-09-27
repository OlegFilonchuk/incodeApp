import {data} from '../clients';
import {generateIds} from '../helpers';
import {CHANGE_CLIENTS_LIST} from "../constants";

export default (clients = generateIds(data), action) => {
    const {type, payload} = action;

  switch (type) {
    case CHANGE_CLIENTS_LIST:
      return [...payload.clients];
    default:
      return [...clients];
  }
}