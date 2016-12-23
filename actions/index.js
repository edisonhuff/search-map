/* eslint no-param-reassign: 0*/
import { ACTIONS, ASYNC_ACTIONS } from '../constants';

// a factory for action creators
export const ACTION_CREATORS = Object
  .keys(ACTIONS)
  .reduce((accum, key) => {
    accum[key] = (payload, meta) => ({
      type: key,
      payload,
      meta,
    });
    return accum;
  }, {});

export const ASYNC_ACTION_CREATORS = {
  ASYNC_ACTIONS,
};

export default ACTION_CREATORS;
