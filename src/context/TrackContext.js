import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// Reducer
const trackReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

// Actions
const fetchTracks = dispatch => async () => {
    const response = await trackerAPI.get('/tracks');
    dispatch({ 
        type: 'fetch_tracks',
        payload: response.data
    });
};
const createTrack = dispatch => async (name, locations) => {
    await trackerAPI.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
    trackReducer, 
    { 
        fetchTracks, 
        createTrack 
    },
    []
);