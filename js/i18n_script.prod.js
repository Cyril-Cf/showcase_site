"use strict";i18next.use(i18nextBrowserLanguageDetector).use(i18nextHttpBackend).init({debug:!0,fallbackLng:"fr-FR",backend:{loadPath:"locales/{{lng}}/{{ns}}.json"}});