"use strict";

function initI18next() {
  return regeneratorRuntime.async(function initI18next$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            i18next.use(i18nextBrowserLanguageDetector).use(i18nextHttpBackend).init({
              fallbackLng: "fr",
              backend: {
                loadPath: "locales/{{lng}}/{{ns}}.json"
              }
            }, function (err, t) {
              if (err) {
                reject(err);
              } else {
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

document.addEventListener("DOMContentLoaded", function _callee() {
  var t, buttons, img, h3, paragraph;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(initI18next());

        case 2:
          t = _context3.sent;
          buttons = document.querySelectorAll(".buttons li");
          img = document.querySelector(".container .main .content img");
          h3 = document.querySelector(".container .main .content h3");
          paragraph = document.querySelector(".container .main .content p");
          buttons.forEach(function (button) {
            button.addEventListener("click", function () {
              buttons.forEach(function (btn) {
                return btn.classList.remove("button-selected");
              });
              button.classList.add("button-selected"); // img.src = t(`index.why_rust.select_panel.${button.id}.h3`);
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
                  paragraph.innerText = t("index.why_rust.select_panel.performance.text");
                  break;

                case "concurrency":
                  img.src = "img/race.avif";
                  img.alt = "a race between athletes";
                  h3.innerText = t("index.why_rust.select_panel.concurrency.h3");
                  paragraph.innerText = t("index.why_rust.select_panel.concurrency.text");
                  break;

                case "abstraction":
                  img.src = "img/helpful.avif";
                  img.alt = "a small robot";
                  h3.innerText = t("index.why_rust.select_panel.abstraction.h3");
                  paragraph.innerText = t("index.why_rust.select_panel.abstraction.text");
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

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
});