import { displayUnit } from './displayUnit';
import { getUnit } from './getUnit';
import { selectWeatherIcon } from './selectWeatherIcon';

export const getNextDaysPrevisions = (weatherData) => {
  const nextDaysPrevisions = weatherData.days;

  for (let i = 0; i < 8; i++) {
    const dayData = nextDaysPrevisions[i];
    console.log(dayData);
    const date = formatDate(dayData);
    const minTemp = dayData.tempmin;
    const maxTemp = dayData.tempmax;
    const icon = dayData.icon;

    displayNextDaysPrevisions(date, minTemp, maxTemp, icon);
  }
};

const formatDate = (dayData) => {
  const datetimeEpoch = dayData.datetimeEpoch;
  const date = new Date(0);
  date.setUTCSeconds(datetimeEpoch);

  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    date,
  );
  const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date);
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
    date,
  );

  const formattedDate = `${month} ${day}, ${weekday}`;
  return formattedDate;
};

const displayNextDaysPrevisions = async (date, minTemp, maxTemp, icon) => {
  const previsionsWeatherNode = document.querySelector('#previsions-weather');
  const previsionNode = document.createElement('div');
  const divider = document.createElement('hr');
  const dateNode = document.createElement('div');
  const previsionsDataNode = document.createElement('div');
  const tempsDataNode = document.createElement('div');
  const iconNode = document.createElement('img');
  const iconSrc = await selectWeatherIcon(icon);
  const unit = getUnit();
  const unitNode = displayUnit(unit);

  previsionNode.classList.add('previsions');
  dateNode.classList.add('previsions-date');
  previsionsDataNode.classList.add('previsions-data');
  tempsDataNode.classList.add('previsions-temps');
  iconNode.classList.add('previsions-icon');

  dateNode.textContent = date;
  tempsDataNode.textContent = `${Math.round(minTemp)}° / ${Math.round(maxTemp)}°`;
  iconNode.src = iconSrc.default;
  iconNode.style.width = '40px';
  iconNode.style.height = '40px';

  tempsDataNode.appendChild(unitNode);
  previsionsDataNode.appendChild(tempsDataNode);
  previsionsDataNode.appendChild(iconNode);
  previsionNode.appendChild(dateNode);
  previsionNode.appendChild(previsionsDataNode);
  previsionsWeatherNode.appendChild(previsionNode);
  previsionsWeatherNode.appendChild(divider);
};
