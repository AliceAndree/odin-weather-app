export const selectWeatherIcon = async (icon) => {
  try {
    const iconSrc = await import(`../assets/icons/${icon}.svg`);
    return iconSrc;
  } catch (error) {
    console.log(error);
  }
};
