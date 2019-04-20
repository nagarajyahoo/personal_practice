import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import {Row, Col} from "reactstrap";
import './Gallery.css';
import * as googleActions from "../../model/actions/GoogleGalleryActions";
import * as albumActions from "../../model/actions/AlbumActions";
import {connect} from "react-redux";
import Album from "./album/Album";
import Loader from "react-loader-spinner";

class Gallery extends React.Component {
    state = {
        images: null
    };

    componentDidMount() {
        this.props.loadingAlbum();
        this.props.getAlbums();
    }

    render() {
        console.log(this.props.albums);
        const content = this.props.loadingAlbumInProgress ?
            <Loader type="Puff" color={'#F38E4B'} height="100" width="100"/> :
            this.createAlbums(this.props.albums);

        return (
            <div>
                <TitleSection title={'OUR EVENT GALLERIES'}/>
                {content}
            </div>
        );
    }

    createAlbums(albums) {
        if(albums && albums instanceof Array) {
            const values = albums.map(album => {
                const albumKey = Object.keys(album)[0];
                return (
                    <Album key={albumKey} albumId={albumKey} title={album.name}/>
                );
            });

            return <div className={'sks-gallery-gallery'}>
                {values}
            </div>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.album.albums,
        loadingAlbumInProgress: state.album.loadingAlbum,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotosUrl: (albumId) => dispatch(googleActions.getPhotosUrl(albumId)),
        getAlbums: () => dispatch(albumActions.loadAlbums()),
        loadingAlbum: () => dispatch(albumActions.loadingAlbum(true)),
        loadedAlbum: () => dispatch(albumActions.loadingAlbum(false))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
