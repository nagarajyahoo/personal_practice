import * as Actions from '../actions/GalleryActions';

const initialState = {
    loading: false,
    albums: {}
};

const galleryReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case Actions.LOADING_PHOTOS:
            return {
                ...state,
                loading: true,
            };
        case Actions.GET_PHOTOS_SUCCESSFUL:
            console.log(action.data);
            const cur = Object.assign(state.albums);
            cur[action.data.albumId] = action.data.photos;
            return {
                ...state,
                albums: cur,
                loading: false
            };
        default:
            return {
                ...state
            }
    }
};

export default galleryReducer;