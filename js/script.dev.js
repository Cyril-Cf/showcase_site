"use strict";

var buttons = document.querySelectorAll(".buttons li");
var useCases = document.querySelectorAll("#use-case ul li");
var localeSelector = document.querySelectorAll("#locale-selector button");

function changeLocale(value) {
  var i18next;
  return regeneratorRuntime.async(function changeLocale$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(window.i18next);

        case 2:
          i18next = _context.sent;
          console.log(value);

          if (!(value === "en-US" && i18next.language !== value)) {
            _context.next = 8;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(i18next.changeLanguage(value));

        case 7:
          window.location.href = "/en" + window.location.pathname;

        case 8:
          console.log(i18next.language);

          if (!(value === "fr-FR" && i18next.language !== value)) {
            _context.next = 13;
            break;
          }

          _context.next = 12;
          return regeneratorRuntime.awrap(i18next.changeLanguage(value));

        case 12:
          window.location.href = window.location.href.replace("/en", "");

        case 13:
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
          return regeneratorRuntime.awrap(window.i18next.t);

        case 2:
          t = _context2.sent;
          listItem = document.getElementById(item);

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

function changeSelectPanelContent(button) {
  var t, img, h3, paragraph;
  return regeneratorRuntime.async(function changeSelectPanelContent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(window.i18next.t);

        case 2:
          t = _context3.sent;
          img = document.querySelector(".container .main .content img");
          h3 = document.querySelector(".container .main .content h3");
          paragraph = document.querySelector(".container .main .content p");
          buttons.forEach(function (btn) {
            return btn.classList.remove("button-selected");
          });
          button.classList.add("button-selected");
          img.src = t("index.why_rust.select_panel.".concat(button.id, ".src"));
          img.alt = t("index.why_rust.select_panel.".concat(button.id, ".alt"));
          h3.innerText = t("index.why_rust.select_panel.".concat(button.id, ".h3"));
          paragraph.innerText = t("index.why_rust.select_panel.".concat(button.id, ".text"));

        case 12:
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
          useCases.forEach(function (useCase) {
            useCase.addEventListener("mouseenter", function () {
              changeContent(true, useCase.id);
            });
            useCase.addEventListener("mouseleave", function () {
              changeContent(false, useCase.id);
            });
          });
          localeSelector.forEach(function (button) {
            button.addEventListener("click", function () {
              changeLocale(button.value);
            });
          });

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
});