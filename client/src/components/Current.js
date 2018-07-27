import React, { Component } from 'react';

class Current extends Component {
    render() {
        const { location, summary, temp, feelsLike } = this.props;
        return (
            <div>
                <div>Current Weather For {location} is:</div>
                <div>{summary}</div>
                <div>Temp: {temp} °F</div>
                <div>Feels Like: {feelsLike}</div>
            </div>
        );
    }
}

export default Current;