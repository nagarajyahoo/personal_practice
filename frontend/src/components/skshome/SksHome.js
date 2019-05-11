import React from 'react';
import './SksHome.css';
import EventCards from "../eventscards/EventCards";

export default class SksHome extends React.Component {
    render() {
        return (
            <div>
                <div id={'showcase'} className={'sks-home text-center'}>
                    <div className="primary-overlay text-white">
                        <div className="col-lg text-center">
                            <h1 className="pt-4 mt-5">Welcome to Scottish - Kannada family</h1>
                        </div>
                    </div>
                </div>
                <div className={'skshome-events-header'}>Upcoming Events</div>
                <div className={'skshome-events-cards'}>
                    <EventCards />
                </div>
            </div>
        );
    }
}