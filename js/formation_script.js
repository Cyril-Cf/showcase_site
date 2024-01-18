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
          checkbox.parentElement.querySelector("p").textContent.trim()
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
  }
});
