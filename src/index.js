import './styles.css';
import fetchWeatherData from './modules/weatherAPI';

const submitLocation = document.querySelector('#submit-location');

submitLocation.addEventListener('click', () => {
  const location = document.querySelector('#search-location').value;
  getWeatherData(location);
});

const addLogoImg = async () => {
  const imgSource = await import('./assets/logo.png');
  const imgNode = document.querySelector('#logo');
  imgNode.src = imgSource.default;
};

addLogoImg();

const getWeatherData = async (location) => {
  const data = await fetchWeatherData(location);
  console.log(data);
  getCurrentTemperature(data);
  getCurrentCondition(data);
  getLocation(data);
  getFeelsLike(data);
  getConditionByHour(data);
  getNextDaysPrevisions(data);
};

const getCurrentTemperature = (weatherData) => {
  const currentTemp = weatherData.currentConditions.temp;
  const currentTempNode = document.querySelector('#current-temperature');
  currentTempNode.textContent = currentTemp;
};

const getCurrentCondition = (weatherData) => {
  const currentCondition = weatherData.currentConditions.conditions;
  const currentConditionNode = document.querySelector('#current-condition');
  currentConditionNode.textContent = currentCondition;
};

const getLocation = (weatherData) => {
  const location = weatherData.address;
  const locationNode = document.querySelector('#location');
  locationNode.textContent = location;
};

const getFeelsLike = (weatherData) => {
  const feelsLike = weatherData.currentConditions.feelslike;
  const feelsLikeNode = document.querySelector('#feels-like');
  feelsLikeNode.textContent = feelsLike;
};

const getConditionByHour = (weatherData) => {
  const conditionByHour = weatherData.days[0].hours;
  const hours = [2, 5, 8, 11, 14, 17, 20, 23];

  for (let i = 0; i < hours.length; i++) {
    const hoursData = conditionByHour[hours[i]];
    console.log(hoursData);
  }
};

const getNextDaysPrevisions = (weatherData) => {
  const nextDaysPrevisions = weatherData.days;

  for (let i = 0; i < 8; i++) {
    const dayData = nextDaysPrevisions[i];
    console.log(dayData);
  }
};
