import React, { Component } from 'react';
import moment from 'moment';

class Minutely extends Component {
    render() {
        const { minute } = this.props;
        return (
            <div>
                <div>
                    Time: {moment.unix(minute.time).format('dddd MMMM Do, h:mm:ss a')}
                </div>
                <div>Chance of Rain: {minute.precipProbability}</div>
            </div>
        );
    }
}

export default Minutely;