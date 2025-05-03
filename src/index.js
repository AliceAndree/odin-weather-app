import './styles.css';
import { displayLogo } from './modules/displayLogo';
import { fetchWeatherData } from './modules/weatherAPI';
import {
  getCurrentTemperature,
  getCurrentCondition,
  getLocation,
  getFeelsLike,
  getCurrentIcon,
} from './modules/currentWeather';
import { getConditionByHour } from './modules/conditionByHour';
import { getNextDaysPrevisions } from './modules/nextDaysPrevisions';

displayLogo();

const submitLocation = document.querySelector('#submit-location');

submitLocation.addEventListener('click', async () => {
  const location = document.querySelector('#search-location').value;
  const unit = 'metric';
  const data = await fetchWeatherData(location, unit);

  console.log(data);
  getCurrentTemperature(data, unit);
  getCurrentCondition(data);
  getLocation(data);
  getFeelsLike(data, unit);
  getConditionByHour(data);
  getNextDaysPrevisions(data);
  getCurrentIcon(data);
});
