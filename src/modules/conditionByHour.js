import { selectWeatherIcon } from './selectWeatherIcon';
import { getUnit } from './getUnit';
import { displayUnit } from './displayUnit';

export const getConditionByHour = (weatherData) => {
  const conditionByHour = weatherData.days[0].hours;
  const hours = [2, 5, 8, 11, 14, 17, 20, 23];

  for (let i = 0; i < hours.length; i++) {
    const hoursData = conditionByHour[hours[i]];
    const formattedHours = formatHours(hoursData);
    const icon = hoursData.icon;
    const temp = Math.round(hoursData.temp);

    displayConditionByHour(formattedHours, icon, temp);

    console.log(formattedHours);
    console.log(icon);
    console.log(temp);
  }
};

const formatHours = (hoursData) => {
  const datetimeEpoch = hoursData.datetimeEpoch;
  const date = new Date(0);
  date.setUTCSeconds(datetimeEpoch);

  let formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
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
  const unit = getUnit();
  const unitNode = displayUnit(unit);

  hourCardNode.classList.add('hour-card');
  hourNode.classList.add('hour');
  iconNode.classList.add('hour-icon');
  tempNode.classList.add('hour-temp');

  hourNode.textContent = formattedHours;
  iconNode.src = iconSrc.default;
  tempNode.textContent = `${temp}°`;
  tempNode.appendChild(unitNode);

  iconNode.style.width = '60px';
  iconNode.style.height = '60px';

  hourCardNode.appendChild(hourNode);
  hourCardNode.appendChild(iconNode);
  hourCardNode.appendChild(tempNode);

  hoursWeatherBlock.appendChild(hourCardNode);
};
