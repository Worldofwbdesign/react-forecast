import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export class WeatherList extends Component {
  renderWeather(cityData) {
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.temp);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <Chart data={temp} color="red" units="K"/>
        <Chart data={pressure} color="green" units="hPA"/>
        <Chart data={humidity} color="gold" units="%"/>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
          {this.props.weather.map(this.renderWeather)}
        </thead>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
