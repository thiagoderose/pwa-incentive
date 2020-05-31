import { setCookie } from 'nookies';

export const switchLanguage = (locale) => {
  setCookie(null, 'locale', locale);
  window.location.reload();

  return null
};
