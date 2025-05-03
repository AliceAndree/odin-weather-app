export const getUnit = () => {
  const toggleSwitch = document.querySelector('#toggle');

  if (toggleSwitch.checked) {
    const unit = 'us';
    return unit;
  } else {
    const unit = 'metric';
    return unit;
  }
};
