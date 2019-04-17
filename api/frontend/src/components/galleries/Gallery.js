import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import {Row, Col} from "reactstrap";
import './Gallery.css';
import * as actions from "../../model/actions/GalleryActions";
import {connect} from "react-redux";
import Album from "./album/Album";

class Gallery extends React.Component {
    state = {
        images: null
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <TitleSection title={'OUR EVENT GALLERIES'}/>
                <div className={'sks-gallery-gallery'}>
                    <Row>
                        <Col md={6} lg={6}>
                            <Album albumId={'Tw5hjZbZpZA5v1ET7'} title={'Ugadi'}/>
                        </Col>
                        <Col md={6} lg={6}>
                            <Album albumId={'d5L9vko2t4dEcS1j6'} title={'Deepavali'}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.gallery.albums
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotosUrl: (albumId) => dispatch(actions.getPhotosUrl(albumId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
