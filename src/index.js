import './styles.css';
import { fetchIPlocation } from './modules/ipGeolocation';
import { displayLogo } from './modules/displayLogo';
import { getUnit } from './modules/getUnit';
import { fetchWeatherData } from './modules/weatherAPI';
import { displayCurrentWeather } from './modules/displayCurrentWeather';
import { getConditionByHour } from './modules/conditionByHour';
import { getNextDaysPrevisions } from './modules/nextDaysPrevisions';
import { autocompleteLocation } from './modules/geocoderAutocompleteAPI';
import { addFavicon } from './modules/addFavicon';

const toggleSwitch = document.querySelector('#toggle');
const burgerMenu = document.querySelector('#burger-menu');
const body = document.querySelector('body');
const wrapper = document.querySelector('#wrapper');
const sidebar = document.querySelector('#sidebar');
const container = document.querySelector('#container');
const iconClose = document.querySelector('#icon-close');

let location;
let country;

const getIpLocation = async () => {
  const ipLocationDatas = await fetchIPlocation();
  location = ipLocationDatas.city.name;
  country = ipLocationDatas.country.name;
  sendNewRequest(location, country);
};

export const sendNewRequest = async (location, country) => {
  const hoursWeather = document.querySelector('#hours-weather');
  const previsionsWeather = document.querySelector('#previsions-weather');
  const unit = getUnit();
  hoursWeather.innerHTML = '';
  previsionsWeather.innerHTML = '';

  try {
    const data = await fetchWeatherData(location, unit);
    displayCurrentWeather(data, unit, location, country);
    getConditionByHour(data);
    getNextDaysPrevisions(data);
  } catch (error) {
    console.log(error);
  }
};

const autocompleteCity = async () => {
  try {
    const autocomplete = await autocompleteLocation();

    autocomplete.on('select', (data) => {
      if (data) {
        location = data.properties.city;
        country = data.properties.country;
        sendNewRequest(location, country);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

toggleSwitch.addEventListener('change', () => {
  sendNewRequest(location, country);
});

burgerMenu.addEventListener('click', () => {
  body.style.width = '100svw';
  wrapper.style.width = '100%';
  sidebar.style.width = '100%';
  sidebar.style.display = 'flex';
  container.style.display = 'none';
  iconClose.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
  body.style.width = 'unset';
  wrapper.style.width = 'unset';
  sidebar.style.width = 'unset';
  sidebar.style.display = 'none';
  container.style.display = 'block';
  iconClose.style.display = 'none';
});

addFavicon();
displayLogo();
getIpLocation();
autocompleteCity();
