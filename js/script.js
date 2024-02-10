let i18nextInstance = null;

async function initI18next() {
  return new Promise((resolve, reject) => {
    // Si i18next est déjà initialisé, renvoyer directement l'instance
    if (i18nextInstance) {
      console.log("I18n déjà instanciée");
      resolve(i18nextInstance.t);
      return;
    }

    i18next
      .use(i18nextBrowserLanguageDetector)
      .use(i18nextHttpBackend)
      .init(
        {
          debug: true,
          fallbackLng: "fr-FR",
          backend: {
            loadPath: "locales/{{lng}}/{{ns}}.json",
          },
        },
        (err, t) => {
          if (err) {
            reject(err);
          } else {
            // Conserver l'instance i18next pour les appels ultérieurs
            i18nextInstance = { t };
            resolve(t);
          }
        }
      );
  });
}

async function changeContent(onHover, item) {
  const t = await initI18next();
  var listItem = document.querySelector(`.${item}`);
  if (!onHover) {
    listItem.innerHTML = t(`index.use_case.${item}.h3`);
  } else {
    listItem.innerHTML = t(`index.use_case.${item}.text`);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const t = await initI18next();
  const buttons = document.querySelectorAll(".buttons li");
  const img = document.querySelector(".container .main .content img");
  const h3 = document.querySelector(".container .main .content h3");
  const paragraph = document.querySelector(".container .main .content p");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("button-selected"));
      button.classList.add("button-selected");

      // img.src = t(`index.why_rust.select_panel.${button.id}.h3`);
      // img.alt = t(`index.why_rust.select_panel.${button.id}.h3`);
      // h3.innerText = t(`index.why_rust.select_panel.${button.id}.h3`);
      // paragraph.innerText = t(`index.why_rust.select_panel.${button.id}.text`);

      switch (button.id) {
        case "security":
          img.src = "img/security.avif";
          img.alt = "lock";
          h3.innerText = t("index.why_rust.select_panel.security.h3");
          paragraph.innerText = t("index.why_rust.select_panel.security.text");
          break;
        case "performance":
          img.src = "img/speed.avif";
          img.alt = "a speed meter";
          h3.innerText = t("index.why_rust.select_panel.performance.h3");
          paragraph.innerText = t(
            "index.why_rust.select_panel.performance.text"
          );
          break;
        case "concurrency":
          img.src = "img/race.avif";
          img.alt = "a race between athletes";
          h3.innerText = t("index.why_rust.select_panel.concurrency.h3");
          paragraph.innerText = t(
            "index.why_rust.select_panel.concurrency.text"
          );
          break;
        case "abstraction":
          img.src = "img/helpful.avif";
          img.alt = "a small robot";
          h3.innerText = t("index.why_rust.select_panel.abstraction.h3");
          paragraph.innerText = t(
            "index.why_rust.select_panel.abstraction.text"
          );
          break;
        case "ecosystem":
          img.src = "img/group.avif";
          img.alt = "a group of hands";
          h3.innerText = t("index.why_rust.select_panel.ecosystem.h3");
          paragraph.innerText = t("index.why_rust.select_panel.ecosystem.text");
          break;
        case "use_case":
          img.src = "img/mobile.avif";
          img.alt = "a mobile phone";
          h3.innerText = t("index.why_rust.select_panel.use_case.h3");
          paragraph.innerText = t("index.why_rust.select_panel.use_case.text");
          break;
      }
    });
  });
  buttons[0].click();
});
