import React from 'react';
import PhotosCarousel from "../photoscarousel/PhotosCarousel";
import './SksHome.css';

export default class SksHome extends React.Component {
    render() {
        return (
            <div className={'sks-home text-center'}>
                <div className={'carousel-div'}>
                    <PhotosCarousel />
                </div>
            </div>
        );
    }
}