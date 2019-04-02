import * as httputils from '../../utils/HttpUtils';

export const LOADING_PHOTOS = 'loading_photos';
export const LOADED_PHOTOS = 'loaded_photos';

const fetchedPhotos = (album) => {
    return {
        type: LOADED_PHOTOS,
        data: album.photos
    }
};

export const loadPhotos = (albumId) => {
    return (dispatch) => {
        httputils.get('/public/galleries/' + albumId)
            .then(response => {
                if (response.status === 200) {
                    console.log("Nmr : ", response);
                    response.json()
                        .then(data => {
                            dispatch(fetchedPhotos(data));
                        })
                        .catch(error => {
                            console.log('error', error);
                        })
                }
            })
            .catch(error => {
                console.log('error occurred', error);
            });
    }
};