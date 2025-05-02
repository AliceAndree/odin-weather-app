export const getConditionByHour = (weatherData) => {
  const conditionByHour = weatherData.days[0].hours;
  const hours = [2, 5, 8, 11, 14, 17, 20, 23];

  for (let i = 0; i < hours.length; i++) {
    const hoursData = conditionByHour[hours[i]];
    console.log(hoursData);
  }
};
