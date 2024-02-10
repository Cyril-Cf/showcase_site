i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextHttpBackend)
  .init({
    debug: true,
    fallbackLng: "fr-FR",
    lng: ["fr-FR", "en-US"],
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
  });
