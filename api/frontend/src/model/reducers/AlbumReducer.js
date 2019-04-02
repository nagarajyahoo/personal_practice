import * as Actions from '../actions/AlbumActions';

const initialState = {
    maincarousel: []
};

const photoCarousel = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADED_PHOTOS:
            return {
                ...state,
                maincarousel: action.data
            };
        default:
            return {
                ...state
            }
    }
};

export default photoCarousel;