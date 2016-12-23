import {
  ACTIONS,
  DEFAULT_STATE,
} from '../constants';

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_SEARCH_VALUE:
      return Object.assign(
        {},
        state,
        { value: payload }
      );
    case ACTIONS.GET_SEARCH_RESULTS:
      return Object.assign({}, state, { isLoading: true });
    default:
      break;
  }
  return state;
};
