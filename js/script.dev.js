"use strict";

var buttons = document.querySelectorAll(".buttons li");
var useCases = document.querySelectorAll("#use-case ul li");

function changeContent(onHover, item) {
  var t, listItem;
  return regeneratorRuntime.async(function changeContent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(window.i18next.t);

        case 2:
          t = _context.sent;
          listItem = document.getElementById(item);

          if (!onHover) {
            listItem.innerHTML = t("index.use_case.".concat(item, ".h3"));
          } else {
            listItem.innerHTML = t("index.use_case.".concat(item, ".text"));
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function changeSelectPanelContent(button) {
  var t, img, h3, paragraph;
  return regeneratorRuntime.async(function changeSelectPanelContent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(window.i18next.t);

        case 2:
          t = _context2.sent;
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
          return _context2.stop();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
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
          console.log("end");

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
});