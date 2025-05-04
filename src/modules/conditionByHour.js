import { selectWeatherIcon } from './selectWeatherIcon';

export const getConditionByHour = (weatherData) => {
  const conditionByHour = weatherData.days[0].hours;
  const hours = [2, 5, 8, 11, 14, 17, 20, 23];

  for (let i = 0; i < hours.length; i++) {
    const hoursData = conditionByHour[hours[i]];
    const formattedHours = formatHours(hoursData);
    const icon = hoursData.icon;
    const temp = Math.round(hoursData.temp);

    displayConditionByHour(formattedHours, icon, temp);
  }
};

const formatHours = (hoursData) => {
  const datetimeEpoch = hoursData.datetimeEpoch;
  const date = new Date(0);
  date.setUTCSeconds(datetimeEpoch);

  let formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: true,
  });

  const formattedDate = formatter.format(date);
  return formattedDate;
};

const displayConditionByHour = async (formattedHours, icon, temp) => {
  const hoursWeatherBlock = document.querySelector('#hours-weather');
  const hourCardNode = document.createElement('div');
  const hourNode = document.createElement('div');
  const iconNode = document.createElement('img');
  const iconSrc = await selectWeatherIcon(icon);
  const tempNode = document.createElement('div');

  hourCardNode.classList.add('hour-card');
  hourNode.classList.add('hour');
  iconNode.classList.add('hour-icon');
  tempNode.classList.add('hour-temp');

  hourNode.textContent = formattedHours;
  iconNode.src = iconSrc.default;
  tempNode.textContent = `${temp}°`;

  iconNode.style.width = '56px';
  iconNode.style.height = '56px';

  hourCardNode.appendChild(hourNode);
  hourCardNode.appendChild(iconNode);
  hourCardNode.appendChild(tempNode);

  hoursWeatherBlock.appendChild(hourCardNode);
};
