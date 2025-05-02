export const displayLogo = async () => {
  const imgSource = await import('../assets/logo.png');
  const imgNode = document.querySelector('#logo');
  imgNode.src = imgSource.default;
};
