import React from 'react';
import TitleSection from "../titlesec/TitleSection";
import {Row, Col} from "reactstrap";
import './Gallery.css';
import * as actions from "../../model/actions/GalleryActions";
import {connect} from "react-redux";
import Album from "./album/Album";

const images = [
    {
        original: 'https://lh3.googleusercontent.com/j47MWygwnBK5EdHyx9BwmY2cWyMbUh69CVbp8tM6yyjPuu97AD7lzctbVUhjan_XvnyeEdN8wtKoW4tWJDykP6RTjgTZhBFasO_8CDKl3qEpvjUj-aICGPoCZP7SOztG60NXNcc1=w1024',
        thumbnail: 'https://lh3.googleusercontent.com/j47MWygwnBK5EdHyx9BwmY2cWyMbUh69CVbp8tM6yyjPuu97AD7lzctbVUhjan_XvnyeEdN8wtKoW4tWJDykP6RTjgTZhBFasO_8CDKl3qEpvjUj-aICGPoCZP7SOztG60NXNcc1=w200',
    }
];

class Gallery extends React.Component {
    state = {
        images: null
    };

    componentDidMount() {

    }

    render() {
        console.log('nmr : ', this.props.albums['d5L9vko2t4dEcS1j6']);
        return (
            <div>
                <TitleSection title={'OUR EVENT GALLERIES'}/>
                <div className={'sks-gallery-gallery'}>
                    <Row>
                        <Col md={6} lg={6}>
                            <Album albumId={'d5L9vko2t4dEcS1j6'}/>
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
