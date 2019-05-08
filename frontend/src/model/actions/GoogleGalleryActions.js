import * as httputils from '../../utils/HttpUtils';

export const GET_PHOTOS_SUCCESSFUL = "get_photos_successful";
export const LOADING_PHOTOS = "loading_photos";
export const GET_PHOTOS_FAILED = "get_photos_failed";

const fetchedPhotosUrl = (albumId, photoUrlArray) => {
    return {
        type: GET_PHOTOS_SUCCESSFUL,
        data: {
            albumId: albumId,
            loaded: true,
            photos: formatPhotoUrls(photoUrlArray)
        }
    }
};

export const loadingPhotos = (albumId) => {
    return {
        type: LOADING_PHOTOS,
        data: {
            albumId: albumId,
            loaded: false
        }
    }
};

const formatPhotoUrls = (photoUrlArray) => {
    return photoUrlArray.map((photoUrl, index) => {
        return {
            key: index,
            original: photoUrl + '=w1024',
            thumbnail: photoUrl + '=w100'
        }
    });
};

export const getPhotosUrl = (albumId, url) => {
    return (dispatch) => {
        httputils.externalget(url)
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch(fetchedPhotosUrl(albumId, data));
                        })
                        .catch(error => {
                            console.log('error', error);
                        })
                }
            })
            .catch(error => {

            })
    }
};