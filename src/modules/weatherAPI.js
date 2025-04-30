const fetchWeatherData = async () => {
  const key = 'GD7P5QXY996SPP994RLADPFMW';
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brussels?unitGroup=metric&include=days%2Chours%2Ccurrent&key=${key}&contentType=json`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeatherData;
