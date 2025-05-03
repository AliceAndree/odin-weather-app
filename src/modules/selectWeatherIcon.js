export const selectWeatherIcon = async (icon) => {
  const iconSrc = await import(`../assets/icons/${icon}.svg`);
  return iconSrc;
};
