import {
  ACTIONS,
  DEFAULT_STATE,
} from '../constants';

export default (
  state = DEFAULT_STATE.sidebar,
  { type, payload },
) => {
  switch (type) {
    case ACTIONS.SET_SIDEBAR_OPEN:
      return Object.assign(
        {},
        state,
        { isOpen: payload },
      );
    case ACTIONS.SET_SELECTED_PLACE:
      return Object.assign(
        {},
        state,
        { selectedPlace: payload },
      );
    default:
      break;
  }
  return state;
};
