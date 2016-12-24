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
  GET_LIVE_SEARCH: 'GET_LIVE_SEARCH',
};

export const DEFAULT_STATE = {
  map: {
    center: {
      lat: 37.785112,
      lng: -122.395584,
    },
  },
  searchbar: {
    value: '',
    liveResults: [],
  },
  sidebar: {
    selectedPlace: null,
    isOpen: true,
  },
  places: [
    {
      description: 'Zenefits HQ',
      label: 'Opportunity',
      position: {
        lat: 37.785112,
        lng: -122.395584,
      },
    },
    {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
        {
      description: 'herp',
      label: 'Somewhere',
      position: {
        lat: 37.785,
        lng: -122.395584,
      },
    },
  ],
};
