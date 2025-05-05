import faviconPNG from '../assets/logo.png';

export const addFavicon = () => {
  const favicon = document.querySelector("link[rel~='icon']");
  favicon.href = faviconPNG;
};
