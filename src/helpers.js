import uuid from 'js-uuid';

export const generateIds = (array) => {
    return array.map((item) => {
        return {
            ...item,
            id: uuid.v1()
        }
    })
};