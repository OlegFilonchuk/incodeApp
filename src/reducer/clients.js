import {data} from '../clients';
import {generateIds} from '../helpers';

export default (clients = generateIds(data), action) => {
    const {type} = action;

    return clients;
}