import {
  getCurrentTemperature,
  getCurrentCondition,
  getLocation,
  getFeelsLike,
  getCurrentIcon,
} from './currentWeather';

export const displayCurrentWeather = (data, unit) => {
  getCurrentTemperature(data, unit);
  getCurrentCondition(data);
  getLocation(data);
  getFeelsLike(data, unit);
  getCurrentIcon(data);
};
