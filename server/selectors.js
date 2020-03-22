const glob = require('glob');
const { basename } = require('path');

const selectAvailableLocales = (path, extension, wildcard) => {
  const filePattern = [wildcard, extension].join('');
  const relativePath = [path, filePattern].join('/');

  const files = glob.sync(relativePath);

  return files.map(file => basename(file, extension));
};

const selectLocaleCache = () => new Map();

const selectLocaleMessages = (locale, options, root) => {
  const localeFile = new Array(locale, options.extension).join('');
  const localeRelativePath = new Array(root, options.path, localeFile).join('/');

  return require(localeRelativePath);
};

const selectLocaleDataScript = (locale, cache, builder) => {
  const lang = locale.split('-')[0];
  const uncachedLang = ! cache.has(lang);

  uncachedLang
    && builder(lang, cache);

  return cache.get(lang);
};

module.exports.selectAvailableLocales = selectAvailableLocales;
module.exports.selectLocaleCache = selectLocaleCache;
module.exports.selectLocaleMessages = selectLocaleMessages;
module.exports.selectLocaleDataScript = selectLocaleDataScript;
