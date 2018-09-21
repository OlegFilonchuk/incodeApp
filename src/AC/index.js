import {CHANGE_ACTIVE_CLIENT} from '../constants';

export function changeActiveClient(client) {
    return {
        type: CHANGE_ACTIVE_CLIENT,
        payload: {
            ...client
        }
    }
}