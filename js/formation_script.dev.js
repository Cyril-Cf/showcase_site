"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var arrayCheckbox = document.querySelectorAll(".menu li input");
  var allCheckbox = document.getElementById("all");
  var itemCards = document.querySelectorAll(".card");
  allCheckbox.addEventListener("click", function () {
    if (allCheckbox.checked) {
      arrayCheckbox.forEach(function (checkbox) {
        return checkbox.checked = true;
      });
    }
  });
  arrayCheckbox.forEach(function (checkbox) {
    checkbox.checked = true;
    checkbox.addEventListener("click", function () {
      filter();
    });
  });

  function filter() {
    var checkedCategories = [];
    arrayCheckbox.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkedCategories.push(checkbox.parentElement.querySelector("p").textContent.replace(/\(\d+\)/g, "").trim());
      }
    });

    if (checkedCategories.length < arrayCheckbox.length) {
      allCheckbox.checked = false;
    }

    itemCards.forEach(function (card) {
      var check = false;
      card.querySelectorAll(".categories li").forEach(function (li) {
        if (checkedCategories.includes(li.textContent.trim())) {
          check = true;
        }
      });

      if (check) {
        card.parentElement.removeAttribute("hidden");
      } else {
        card.parentElement.setAttribute("hidden", "");
      }
    });
    count();
  }

  function count() {
    var hashmap = new Map();
    itemCards.forEach(function (card) {
      if (card.parentElement.attributes.getNamedItem("hidden") == null) {
        card.querySelectorAll(".categories li").forEach(function (li) {
          var key = li.textContent.trim();

          if (hashmap.has(key)) {
            hashmap.set(key, hashmap.get(key) + 1);
          } else {
            hashmap.set(key, 1);
          }
        });
      }
    });
    arrayCheckbox.forEach(function (checkbox) {
      var key = checkbox.parentElement.querySelector("p").textContent;

      if (/\(\d+\)/.test(key)) {
        key = key.replace(/\(\d+\)/g, "");
      }

      if (key == "Toutes" || key == "All") {
        var total = Array.from(hashmap.values()).reduce(function (acc, valeur) {
          return acc + valeur;
        }, 0);
        checkbox.parentElement.querySelector("p").textContent = key + "(".concat(total, ")");
      }

      if (hashmap.has(key)) {
        checkbox.parentElement.querySelector("p").textContent = key + "(".concat(hashmap.get(key), ")");
      }
    });
  }

  count();
});