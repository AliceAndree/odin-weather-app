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
  return location;
};

export const getFeelsLike = (weatherData, unit) => {
  const feelsLike = weatherData.currentConditions.feelslike;
  const feelsLikeNode = document.querySelector('#feels-like');
  feelsLikeNode.textContent = `${Math.round(feelsLike)}°`;

  const unitNode = displayUnit(unit);
  feelsLikeNode.appendChild(unitNode);
};

export const getCurrentIcon = async (weatherData) => {
  const currentIcon = weatherData.currentConditions.icon;
  const currentIconNode = document.querySelector('#current-icon');
  try {
    const iconSrc = await selectWeatherIcon(currentIcon);

    currentIconNode.src = iconSrc.default;
    currentIconNode.style.width = '250px';
    currentIconNode.style.height = '250px';
  } catch (error) {
    console.log(error);
  }
};
