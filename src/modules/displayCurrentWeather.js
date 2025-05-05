import {
  getCurrentTemperature,
  getCurrentCondition,
  getLocation,
  getFeelsLike,
  getCurrentIcon,
} from './currentWeather';

export const displayCurrentWeather = (data, unit, location, country) => {
  getCurrentTemperature(data, unit);
  getCurrentCondition(data);
  getLocation(location, country);
  getFeelsLike(data, unit);
  getCurrentIcon(data);
};
