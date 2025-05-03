export const selectWeatherIcon = async (icon) => {
  const currentIconNode = document.querySelector('#current-icon');
  const iconSrc = await import(`../assets/icons/${icon}.svg`);
  currentIconNode.src = iconSrc.default;
};
