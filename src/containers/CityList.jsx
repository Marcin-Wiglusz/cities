import React, {Component} from "react";
import { connect } from 'react-redux';

import Chart from '../components/Chart.jsx';
import GoogleMaps from '../components/GoogleMaps.jsx';
import '../styles/CityList.css';



class CityList extends Component {

  renderData(cityData) {

    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const hums = cityData.list.map(weather => weather.main.humidity);
    //create 2 const. automatically add them behind coord
    const { lat, lon } = cityData.city.coord;

    return(
      <tr
        className = 'background'
        key = {cityData.city.id}>
        <td className = 'map'><GoogleMaps lat = {lat} lon = {lon} /></td>
        <td>
          <Chart
            data = {temps}
            color = 'green'
            units = ' &deg;C' />
        </td>
        <td>
          <Chart
            data = {press}
            color = 'red'
            units = ' hPa' />
        </td>
        <td>
          <Chart
            data = {hums}
            color = 'blue'
            units = '%' />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className = 'cityMap'>City</th>
            <th>Temperature (&deg;C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderData)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  //app state from reducer_index
  return { weather: state.weather }
}

export default connect(mapStateToProps)(CityList);
