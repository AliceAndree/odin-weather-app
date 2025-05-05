export const fetchIPlocation = async () => {
  const key = '4249c5ed31f04839a4d5cfb4472bfac1'; // todo : hide key in server env.
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/ipinfo?apiKey=${key}`,
      { mode: 'cors' },
    );
    const ipGeolocation = await response.json();
    console.log(ipGeolocation);
    return ipGeolocation;
  } catch (error) {
    console.log(error);
  }
};
