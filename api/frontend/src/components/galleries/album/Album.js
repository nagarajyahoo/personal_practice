import React from 'react';
import * as actions from "../../../model/actions/GalleryActions";
import {connect} from "react-redux";
import {Card} from "reactstrap";
import ImageGallery from "react-image-gallery";
import './Album.css';
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Loader from "react-loader-spinner";

class Album extends React.Component {
    componentDidMount() {
        this.props.loadingPhotos();
        this.props.getPhotosUrl(this.props.albumId);
    }

    render() {
        const content = this.props.loading ?
            <Loader type="Puff" color={'#F38E4B'} height="100" width="100"/> :
            <ImageGallery items={this.props.albums[this.props.albumId]}/>;
        return (
            <Card>
                <CardHeader>{this.props.title} - 2018</CardHeader>
                <CardBody className={'sks-gallery-card'}>
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
        getPhotosUrl: (albumId) => dispatch(actions.getPhotosUrl(albumId)),
        loadingPhotos: () => dispatch(actions.loadingPhotos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);