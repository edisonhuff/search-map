export const ACTIONS = {
  IS_LOADING: 'IS_LOADING',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  GET_SEARCH_RESULTS: 'GET_SEARCH_RESULTS',
  SET_PLACES: 'SET_PLACES',
  SET_SELECTED_PLACE: 'SET_SELECTED_PLACE',
  SET_CENTER: 'SET_CENTER',
  SET_SIDEBAR_OPEN: 'SET_SIDEBAR_OPEN',
};

export const DEFAULT_STATE = {
  center: {
    lat: 37.7853406,
    lng: -122.3975658,
  },
  searchTerm: '',
  selectedPlace: 0,
  isSideBarOpen: false,
  places: [
    {
      label: 'Opportunity',
      position: {
        lat: 37.7853406,
        lng: -122.3975658,
      },
    },
  ],
};
