import React from 'react';
import * as actions from "../../../model/actions/GoogleGalleryActions";
import {connect} from "react-redux";
import {Card} from "reactstrap";
import ImageGallery from "react-image-gallery";
import './Album.css';
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Loader from "react-loader-spinner";

class Album extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getAlbum = this.getAlbum.bind(this);
    }

    componentDidMount() {
        this.props.loadingPhotos(this.props.albumId);
        this.props.getPhotosUrl(this.props.albumId, this.props.albumurl);
    }

    getAlbum(albums) {
        for(let i = 0; i < albums.length; i++) {
            let album = albums[i];
            if(album.albumId === this.props.albumId) {
                return album;
            }
        }
        return null;
    }

    render() {
        const album = this.getAlbum(this.props.albums);
        const content = (album && album.loaded) ?
            <ImageGallery items={album.photos}/> :
            <Loader type="Puff" color={'#F38E4B'} height="100" width="100"/> ;

        return (
            <Card className={'sks-gallery-card'}>
                <CardHeader>{this.props.title}</CardHeader>
                <CardBody className={'sks-gallery-card-body'}>
                    {content}
                </CardBody>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.gallery.albums,
        loading: state.gallery.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotosUrl: (albumId, url) => dispatch(actions.getPhotosUrl(albumId, url)),
        loadingPhotos: (albumId) => dispatch(actions.loadingPhotos(albumId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);