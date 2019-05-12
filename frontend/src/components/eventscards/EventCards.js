import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import EventCard from "./EventCard";
import './EventCards.css';

export default class EventCards extends React.Component {

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 1,
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(10),
            })
        }, 100);
    }

    createChildren = n => range(n).map(i => <EventCard key={i}/>);

    changeActiveItem = (activeItemIndex) => this.setState({activeItemIndex});

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <div className={'skshome-eventcards'}>
                <ItemsCarousel
                    minWidth={'600'}
                    // Carousel configurations
                    numberOfCards={3}
                    gutter={12}

                    // Active item configurations
                    requestToChangeActive={this.changeActiveItem}
                    activeItemIndex={activeItemIndex}
                    activePosition={'center'}

                    rightChevron={<i className="fas fa-2x fa-arrow-circle-right"/>}
                    leftChevron={<i className="fas fa-2x fa-arrow-circle-left"/>}
                    chevronWidth={60}
                    outsideChevron>
                    {children}
                </ItemsCarousel>
            </div>
        );
    }
}