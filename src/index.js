import './styles.css';
import { displayLogo } from './modules/displayLogo';
import { fetchWeatherData } from './modules/weatherAPI';
import {
  getCurrentTemperature,
  getCurrentCondition,
  getLocation,
  getFeelsLike,
} from './modules/currentWeather';
import { getConditionByHour } from './modules/conditionByHour';
import { getNextDaysPrevisions } from './modules/nextDaysPrevisions';

displayLogo();

const submitLocation = document.querySelector('#submit-location');

submitLocation.addEventListener('click', async () => {
  const location = document.querySelector('#search-location').value;
  const data = await fetchWeatherData(location);

  console.log(data);
  getCurrentTemperature(data);
  getCurrentCondition(data);
  getLocation(data);
  getFeelsLike(data);
  getConditionByHour(data);
  getNextDaysPrevisions(data);
});
