import * as Actions from '../actions/AlbumActions';

const initialState = {
    loadingAlbum: false,
    albums: []
};

const photoCarousel = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADED_ALBUMS:
            return {
                ...state,
                albums: action.data,
                loadingAlbum: false
            };
        case Actions.LOADING_ALBUMS:
            return {
                ...state,
                loadingAlbum: true
            };
        default:
            return {
                ...state
            }
    }
};

export default photoCarousel;