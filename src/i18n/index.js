import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from '../translations/en';
import common_vi from '../translations/vi';

i18n.use(LanguageDetector).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    vi: {
      common: common_vi
    }
  }
});
export default i18n;
