import './styles.css';
import fetchWeatherData from './modules/weatherAPI';

const submitLocation = document.querySelector('#submit-location');

submitLocation.addEventListener('click', () => {
  const location = document.querySelector('#search-location').value;
  getWeatherData(location);
});

const getWeatherData = async (location) => {
  const data = await fetchWeatherData(location);
  console.log(data);
  getCurrentTemperature(data);
  getCurrentCondition(data);
  getFeelsLike(data);
  getConditionByHour(data);
  getNextDaysPrevisions(data);
};

const getCurrentTemperature = (weatherData) => {
  const currentTemp = weatherData.currentConditions.temp;
  console.log(`Current Temp: ${currentTemp}`);
};

const getCurrentCondition = (weatherData) => {
  const currentCondition = weatherData.currentConditions.conditions;
  console.log(`Current condition: ${currentCondition}`);
};

const getFeelsLike = (weatherData) => {
  const feelsLike = weatherData.currentConditions.feelslike;
  console.log(`Feels like: ${feelsLike}`);
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
