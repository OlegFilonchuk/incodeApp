import {CHANGE_ACTIVE_CLIENT, CHANGE_CLIENTS_LIST} from '../constants';

export function changeActiveClient(client) {
    return {
        type: CHANGE_ACTIVE_CLIENT,
        payload: {
            ...client
        }
    }
}

export function changeClientsList(clients) {
  return {
    type: CHANGE_CLIENTS_LIST,
    payload: {
      clients: [...clients]
    }
  }
}