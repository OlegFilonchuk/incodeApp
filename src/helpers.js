export const generateIds = (array) => {
    return array.map((item) => {
        return {
            ...item,
            id:(Date.now() + Math.random()).toString()
        }
    })
};