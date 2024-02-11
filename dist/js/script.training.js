document.addEventListener("DOMContentLoaded", function () {
  const arrayCheckbox = document.querySelectorAll(".menu li input");
  const allCheckbox = document.getElementById("all");
  const itemCards = document.querySelectorAll(".card");

  allCheckbox.addEventListener("click", function () {
    if (allCheckbox.checked) {
      arrayCheckbox.forEach((checkbox) => (checkbox.checked = true));
    }
  });

  arrayCheckbox.forEach((checkbox) => {
    checkbox.checked = true;
    checkbox.addEventListener("click", function () {
      filter();
    });
  });

  function filter() {
    let checkedCategories = [];
    arrayCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCategories.push(
          checkbox.parentElement
            .querySelector("p")
            .textContent.replace(/\(\d+\)/g, "")
            .trim()
        );
      }
    });
    if (checkedCategories.length < arrayCheckbox.length) {
      allCheckbox.checked = false;
    }
    itemCards.forEach((card) => {
      let check = false;
      card.querySelectorAll(".categories li").forEach((li) => {
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
    const hashmap = new Map();
    itemCards.forEach((card) => {
      if (card.parentElement.attributes.getNamedItem("hidden") == null) {
        card.querySelectorAll(".categories li").forEach((li) => {
          const key = li.textContent.trim();
          if (hashmap.has(key)) {
            hashmap.set(key, hashmap.get(key) + 1);
          } else {
            hashmap.set(key, 1);
          }
        });
      }
    });
    arrayCheckbox.forEach((checkbox) => {
      let key = checkbox.parentElement.querySelector("p").textContent;
      if (/\(\d+\)/.test(key)) {
        key = key.replace(/\(\d+\)/g, "");
      }
      if (key == "Toutes" || key == "All") {
        const total = Array.from(hashmap.values()).reduce(
          (acc, valeur) => acc + valeur,
          0
        );
        checkbox.parentElement.querySelector("p").textContent =
          key + `(${total})`;
      }
      if (hashmap.has(key)) {
        checkbox.parentElement.querySelector("p").textContent =
          key + `(${hashmap.get(key)})`;
      }
    });
  }
  count();
});
