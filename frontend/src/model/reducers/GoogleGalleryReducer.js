import * as Actions from '../actions/GoogleGalleryActions';

const initialState = {
    albums: []
};

const getIndex = (albums, albumId) => {
    for (let i = 0; i < albums.length; i++) {
        if (albumId === albums[i].albumId) {
            return i;
        }
    }
    return -1;
};

const googleGalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADING_PHOTOS:
            let curAlbums = [];
            curAlbums = curAlbums.concat(state.albums);
            let index = getIndex(curAlbums, action.data.albumId);
            if (index === -1) {
                curAlbums.push(action.data)
            } else {
                curAlbums[index] = action.data;
            }
            return {
                ...state,
                albums: curAlbums
            };
        case Actions.GET_PHOTOS_SUCCESSFUL:
            curAlbums = [];
            curAlbums = curAlbums.concat(state.albums);
            index = getIndex(curAlbums, action.data.albumId);
            curAlbums[index] = action.data;
            return {
                ...state,
                albums: curAlbums
            };
        default:
            return {
                ...state
            }
    }
};

export default googleGalleryReducer;