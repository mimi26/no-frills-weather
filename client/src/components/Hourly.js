import React, { Component } from 'react';
import moment from 'moment';

class Hourly extends Component {
    render() {
        const { hour } = this.props;
        return (
            <div>
                <div>Time: {moment.unix(hour.time).format('dddd, MMMM Do, h:mm:ss a')}</div>
                <div>Temp: {hour.temperature} °F</div>
                <div>Feels Like: {hour.apparentTemperature} °F</div>
                <div>Chance of Rain: {hour.precipProbability}</div>
                <div>Wind Speed: {hour.windSpeed} mph</div>
                <div>Summary: {hour.summary}</div>
            </div>
        );
    }
}

export default Hourly;