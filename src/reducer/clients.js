import {dataWithIds} from '../helpers';

export default (clients = dataWithIds, action) => {
  const {type} = action;

  switch (type) {
    default:
      return [...clients];
  }
}