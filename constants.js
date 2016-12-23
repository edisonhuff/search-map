export const ACTIONS = {
  IS_LOADING: 'IS_LOADING',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_PLACES: 'SET_PLACES',
  SET_SELECTED_PLACE: 'SET_SELECTED_PLACE',
  SET_CENTER: 'SET_CENTER',
  SET_SIDEBAR_OPEN: 'SET_SIDEBAR_OPEN',
};

export const ASYNC_ACTIONS = {
  GET_SEARCH_RESULTS: 'GET_SEARCH_RESULTS',
};

export const DEFAULT_STATE = {
  map: {
    center: {
      lat: 37.785112,
      lng: -122.395584,
    },
    places: [
      {
        label: 'Opportunity',
        position: {
          lat: 37.785112,
          lng: -122.395584,
        },
      },
    ],
  },
  searchBar: {
    value: '',
    liveResults: [],
  },
  sideBar: {
    selectedPlace: 0,
    isSideBarOpen: false,
  }
};
