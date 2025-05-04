import './styles.css';
import { displayLogo } from './modules/displayLogo';
import { getUnit } from './modules/getUnit';
import { fetchWeatherData } from './modules/weatherAPI';
import { displayCurrentWeather } from './modules/displayCurrentWeather';
import { getConditionByHour } from './modules/conditionByHour';
import { getNextDaysPrevisions } from './modules/nextDaysPrevisions';

const submitLocation = document.querySelector('#submit-location');
const toggleSwitch = document.querySelector('#toggle');
let location = 'brussels';

const sendNewRequest = async (location) => {
  const hoursWeather = document.querySelector('#hours-weather');
  const unit = getUnit();
  hoursWeather.innerHTML = '';

  try {
    const data = await fetchWeatherData(location, unit);
    displayCurrentWeather(data, unit);
    getConditionByHour(data);
    getNextDaysPrevisions(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

submitLocation.addEventListener('click', async () => {
  location = document.querySelector('#search-location').value;
  sendNewRequest(location);
});

toggleSwitch.addEventListener('change', async () => {
  sendNewRequest(location);
});

displayLogo();
sendNewRequest(location);
