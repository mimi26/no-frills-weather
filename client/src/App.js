import React, { Component } from 'react';
import Hourly from './components/Hourly';
import Minutely from './components/Minutely';

import './App.css';
import Current from './components/Current';
import Forecast from './components/Forecast';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      weather: {}
     };
  }

  async fetchWeather() {
    const response = await fetch(`/api`);
    const weather = await response.json();
    this.setState({ weather });
  }

  componentDidMount() {
    this.fetchWeather();
  }

  render() {
    const { feelsLike, forecast, hourly, minute, summary, temp, location } = this.state.weather;
    return (
      <div className="main">
      <h1>Outlook for the next 8 days</h1>
      {forecast 
        ? forecast.map(day => (
            <Forecast key={day.time}
                      forecast={forecast} />
          ))
        : null}
        <Current  feelsLike={feelsLike}
                  summary={summary}
                  temp={temp}
                  location={location} />
        <h1>Hourly Weather for the Next 48 Hours</h1>
        {hourly
          ? hourly.map(hour =>  ( 
              <Hourly key={hour.time}
                      hour={hour} />
            ))
          : null}
        <h1>Weather By The Minute</h1>
        <div>{minute? minute.summary : null}</div>
        {minute
          ? minute.data.map(minute => (
              <Minutely key={minute.time}
                        minute={minute} />
            ))
          : null}
      </div>
    );
  }
}

export default App;
