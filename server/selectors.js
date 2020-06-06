const glob = require('glob');
const accepts = require('accepts');
const { basename } = require('path');
const { parseCookies } = require('nookies');

const selectAvailableLocales = (path, extension, wildcard) => {
  const filePattern = [wildcard, extension].join('');
  const relativePath = [path, filePattern].join('/');

  const files = glob.sync(relativePath);

  return files.map((file) => basename(file, extension));
};

const selectLocaleCache = () => new Map();

const selectLocaleMessages = (locale, options, root) => {
  const localeFile = [locale, options.extension].join('');
  const localeRelativePath = [root, options.path, localeFile].join('/');

  return require(localeRelativePath); // eslint-disable-line global-require
};

const selectLocaleDataScript = (locale, cache, builder) => {
  const lang = locale.split('-')[0];
  const uncachedLang = !cache.has(lang);

  uncachedLang // eslint-disable-line no-unused-expressions
    && builder(lang, cache);

  return cache.get(lang);
};

const selectCurrentLocale = (req, availableLocales) => {
  const accept = accepts(req);
  const browserLocale = accept.language(availableLocales) || locale.default;
  const cookies = parseCookies({ req });
  const overwrittenLocale = availableLocales.includes(cookies.locale) ? cookies.locale : null;

  return overwrittenLocale || browserLocale;
};

const selectCookies = (rawCookies) => rawCookies.split(';');

module.exports.selectAvailableLocales = selectAvailableLocales;
module.exports.selectLocaleCache = selectLocaleCache;
module.exports.selectLocaleMessages = selectLocaleMessages;
module.exports.selectLocaleDataScript = selectLocaleDataScript;
module.exports.selectCurrentLocale = selectCurrentLocale;
