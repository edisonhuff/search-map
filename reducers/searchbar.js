import {
  ACTIONS,
  DEFAULT_STATE,
} from '../constants';

export default (state = DEFAULT_STATE, { type, value }) => {
  switch (type) {
    case ACTIONS.SET_SEARCH_TERM:
      return Object.assign(
        {},
        state,
        { searchTerm: value }
      );
    case ACTIONS.GET_SEARCH_RESULTS:
      return Object.assign({}, state, { isLoading: true });
    default:
      break;
  }
  return state;
};
