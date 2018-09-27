import {CHANGE_ACTIVE_CLIENT} from '../constants';


export default (activeClient = {}, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_ACTIVE_CLIENT:
            return {...payload};
        default:
            return activeClient;
    }
};