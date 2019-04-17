import * as httputils from '../../utils/HttpUtils';

export const GET_PHOTOS_SUCCESSFUL = "get_photos_successful";
export const LOADING_PHOTOS = "loading_photos";
export const GET_PHOTOS_FAILED = "get_photos_failed";

const url = 'https://google-photos-album-demo.glitch.me/';

const fetchedPhotosUrl = (albumId, photoUrlArray) => {
    return {
        type: GET_PHOTOS_SUCCESSFUL,
        data: {
            albumId: albumId,
            photos: formatPhotoUrls(photoUrlArray)
        }
    }
};

export const loadingPhotos = () => {
    return {
        type: LOADING_PHOTOS,
        data: true
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

export const getPhotosUrl = (albumId) => {
    return (dispatch) => {
        httputils.externalget(url + albumId)
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