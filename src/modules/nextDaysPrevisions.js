export const getNextDaysPrevisions = (weatherData) => {
  const nextDaysPrevisions = weatherData.days;

  for (let i = 0; i < 8; i++) {
    const dayData = nextDaysPrevisions[i];
    console.log(dayData);
  }
};
