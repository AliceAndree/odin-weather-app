import { selectWeatherIcon } from './selectWeatherIcon';

export const getCurrentTemperature = (weatherData) => {
  const currentTemp = weatherData.currentConditions.temp;
  const currentTempNode = document.querySelector('#current-temperature');
  currentTempNode.textContent = currentTemp;
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

export const getFeelsLike = (weatherData) => {
  const feelsLike = weatherData.currentConditions.feelslike;
  const feelsLikeNode = document.querySelector('#feels-like');
  feelsLikeNode.textContent = feelsLike;
};

export const getCurrentIcon = (weatherData) => {
  const currentIcon = weatherData.currentConditions.icon;
  selectWeatherIcon(currentIcon);
};
