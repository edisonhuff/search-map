/* eslint no-param-reassign: 0*/
import { ACTIONS } from '../constants';

// a factory for action creators
export default Object
  .keys(ACTIONS)
  .reduce((accum, key) => {
    accum[key] = value => ({
      type: key,
      value,
    });
    return accum;
  }, {});
