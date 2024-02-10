"use strict";

var i18nextInstance = null;

function initI18next() {
  return regeneratorRuntime.async(function initI18next$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            // Si i18next est déjà initialisé, renvoyer directement l'instance
            if (i18nextInstance) {
              console.log("I18n déjà instanciée");
              resolve(i18nextInstance.t);
              return;
            } // Créer une nouvelle instance i18next


            var newInstance = i18next.createInstance(); // Configurer la nouvelle instance

            newInstance.use(i18nextBrowserLanguageDetector).use(i18nextHttpBackend).init({
              debug: true,
              fallbackLng: "fr-FR",
              backend: {
                loadPath: "locales/{{lng}}/{{ns}}.json"
              }
            }, function (err, t) {
              if (err) {
                reject(err);
              } else {
                // Conserver l'instance i18next pour les appels ultérieurs
                i18nextInstance = newInstance;
                resolve(t);
              }
            });
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function changeContent(onHover, item) {
  var t, listItem;
  return regeneratorRuntime.async(function changeContent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(initI18next());

        case 2:
          t = _context2.sent;
          listItem = document.querySelector(".".concat(item));

          if (!onHover) {
            listItem.innerHTML = t("index.use_case.".concat(item, ".h3"));
          } else {
            listItem.innerHTML = t("index.use_case.".concat(item, ".text"));
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var buttons = document.querySelectorAll(".buttons li");

function changeSelectPanelContent(button) {
  var t, img, h3, paragraph;
  return regeneratorRuntime.async(function changeSelectPanelContent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(initI18next());

        case 2:
          t = _context3.sent;
          img = document.querySelector(".container .main .content img");
          h3 = document.querySelector(".container .main .content h3");
          paragraph = document.querySelector(".container .main .content p");
          buttons.forEach(function (btn) {
            return btn.classList.remove("button-selected");
          });
          button.classList.add("button-selected"); // img.src = t(`index.why_rust.select_panel.${button.id}.h3`);
          // img.alt = t(`index.why_rust.select_panel.${button.id}.h3`);
          // h3.innerText = t(`index.why_rust.select_panel.${button.id}.h3`);
          // paragraph.innerText = t(`index.why_rust.select_panel.${button.id}.text`);

          console.log(button);
          _context3.t0 = button.id;
          _context3.next = _context3.t0 === "security" ? 12 : _context3.t0 === "performance" ? 17 : _context3.t0 === "concurrency" ? 22 : _context3.t0 === "abstraction" ? 27 : _context3.t0 === "ecosystem" ? 32 : _context3.t0 === "use_case" ? 37 : 42;
          break;

        case 12:
          img.src = "img/security.avif";
          img.alt = "lock";
          h3.innerText = t("index.why_rust.select_panel.security.h3");
          paragraph.innerText = t("index.why_rust.select_panel.security.text");
          return _context3.abrupt("break", 42);

        case 17:
          img.src = "img/speed.avif";
          img.alt = "a speed meter";
          h3.innerText = t("index.why_rust.select_panel.performance.h3");
          paragraph.innerText = t("index.why_rust.select_panel.performance.text");
          return _context3.abrupt("break", 42);

        case 22:
          img.src = "img/race.avif";
          img.alt = "a race between athletes";
          h3.innerText = t("index.why_rust.select_panel.concurrency.h3");
          paragraph.innerText = t("index.why_rust.select_panel.concurrency.text");
          return _context3.abrupt("break", 42);

        case 27:
          img.src = "img/helpful.avif";
          img.alt = "a small robot";
          h3.innerText = t("index.why_rust.select_panel.abstraction.h3");
          paragraph.innerText = t("index.why_rust.select_panel.abstraction.text");
          return _context3.abrupt("break", 42);

        case 32:
          img.src = "img/group.avif";
          img.alt = "a group of hands";
          h3.innerText = t("index.why_rust.select_panel.ecosystem.h3");
          paragraph.innerText = t("index.why_rust.select_panel.ecosystem.text");
          return _context3.abrupt("break", 42);

        case 37:
          img.src = "img/mobile.avif";
          img.alt = "a mobile phone";
          h3.innerText = t("index.why_rust.select_panel.use_case.h3");
          paragraph.innerText = t("index.why_rust.select_panel.use_case.text");
          return _context3.abrupt("break", 42);

        case 42:
        case "end":
          return _context3.stop();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          buttons.forEach(function (button) {
            button.addEventListener("click", function () {
              changeSelectPanelContent(button);
            });
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
});