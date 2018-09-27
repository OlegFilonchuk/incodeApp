import {data} from './clients';
import uuid from 'js-uuid';

const generateIds = (array) => {
    return array.map((item) => {
        return {
            ...item,
            id: uuid.v1()
        }
    })
};

export const dataWithIds = generateIds(data);