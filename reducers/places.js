import {
  ACTIONS,
  DEFAULT_STATE,
} from '../constants';

export default (
  state = DEFAULT_STATE.places,
  { type, payload },
) => {
  switch (type) {
    case ACTIONS.GET_SEARCH_RESULTS:
      return Object.assign({}, state, { isLoading: true });
    default:
      break;
  }
  return state;
};
