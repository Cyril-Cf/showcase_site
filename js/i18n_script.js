i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextHttpBackend)
  .init({
    debug: true,
    fallbackLng: "fr-FR",
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
  });
