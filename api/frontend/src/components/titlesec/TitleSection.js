import React from 'react';
import './TitleSection.css';

export default  class TitleSection extends React.Component {
    render() {
        return(
            <div className={'sks-title-sec'}>
                {this.props.title}
            </div>
        )
    }
}