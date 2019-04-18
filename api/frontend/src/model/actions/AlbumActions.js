import * as httputils from '../../utils/HttpUtils';

export const LOADING_PHOTOS = 'loading_photos';
export const LOADING_ALBUMS = "loading_albums";
export const LOADED_PHOTOS = 'loaded_photos';
export const LOADED_ALBUMS = 'loaded_albums';
export const GET_PHOTOS_SUCCESSFUL = "get_photos_successful";
export const GET_PHOTOS_FAILED = "get_photos_failed";
export const GET_ALBUMS_SUCCESSFUL = "get_albums_successful";
export const GET_ALBUMS_FAILED = "get_albums_failed";

export const loadingAlbum = (isLoading) => {
    return {
        type: LOADED_ALBUMS,
        data: isLoading
    }
};

const fetchedPhotos = (album) => {
    return {
        type: LOADED_PHOTOS,
        data: album.photos
    }
};

const fetchedAlbums = (data) => {
    return {
        type: LOADED_ALBUMS,
        data: formatAlbums(data.albums)
    }
};

const formatAlbums = (albums) => {
    return albums.map(album => {
        return {
            [album.key]: {
                url: album.url,
                name: album.name,
                source: album.source,
            }
        }
    });
};

export const loadAlbumPhotos = (albumId) => {
    return (dispatch) => {
        httputils.get('/public/albums/' + albumId)
            .then(response => {
                if (response.status === 200) {
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

export const loadAlbums = () => {
    return (dispatch) => {
        httputils.get('/public/albums/')
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch(fetchedAlbums(data));
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