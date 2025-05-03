import { selectWeatherIcon } from './selectWeatherIcon';
import { displayUnit } from './displayUnit';

export const getCurrentTemperature = (weatherData, unit) => {
  const currentTemp = weatherData.currentConditions.temp;
  const currentTempNode = document.querySelector('#current-temperature');
  currentTempNode.textContent = `${Math.round(currentTemp)}°`;

  const unitNode = displayUnit(unit);
  currentTempNode.appendChild(unitNode);
};

export const getCurrentCondition = (weatherData) => {
  const currentCondition = weatherData.currentConditions.conditions;
  const currentConditionNode = document.querySelector('#current-condition');
  currentConditionNode.textContent = currentCondition;
};

export const getLocation = (weatherData) => {
  const location = weatherData.address;
  const locationNode = document.querySelector('#location');
  locationNode.textContent = location;
};

export const getFeelsLike = (weatherData, unit) => {
  const feelsLike = weatherData.currentConditions.feelslike;
  const feelsLikeNode = document.querySelector('#feels-like');
  feelsLikeNode.textContent = `${Math.round(feelsLike)}°`;

  const unitNode = displayUnit(unit);
  feelsLikeNode.appendChild(unitNode);
};

export const getCurrentIcon = (weatherData) => {
  const currentIcon = weatherData.currentConditions.icon;
  selectWeatherIcon(currentIcon);
};
