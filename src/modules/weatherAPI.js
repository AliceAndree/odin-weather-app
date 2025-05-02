export const fetchWeatherData = async (location) => {
  const key = 'GD7P5QXY996SPP994RLADPFMW'; // Todo : hide key in server
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Chours%2Ccurrent&key=${key}&contentType=json`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
    return null;
  }
};
