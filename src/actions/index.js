import { FETCH_WEATHER } from './types';
import axios from 'axios';

const API_KEY = '07e4519179d868e013e9baa19c701502';
const REQ_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `${REQ_URL}&q=${encodedCity},us`;
  const req = axios.get(url);
  console.log('The reques is', req);

  return {
    type: FETCH_WEATHER,
    payload: req
  }
}
