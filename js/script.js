const buttons = document.querySelectorAll(".buttons li");
const useCases = document.querySelectorAll("#use-case ul li");
const localeSelector = document.querySelectorAll("#locale-selector img");

async function changeLocale(value) {
  const i18next = await window.i18next;
  if (value === "en-US" && i18next.language !== value) {
    window.location.href = "/en" + window.location.pathname;
  }
  if (value === "fr-FR" && i18next.language !== value) {
    window.location.href = window.location.href.replace("/en", "");
  }
}

async function changeContent(onHover, item) {
  const t = await window.i18next.t;
  const listItem = document.getElementById(item);
  if (!onHover) {
    listItem.innerHTML = t(`index.use_case.${item}.h3`);
  } else {
    listItem.innerHTML = t(`index.use_case.${item}.text`);
  }
}

async function changeSelectPanelContent(button) {
  const t = await window.i18next.t;
  const img = document.querySelector(".container .main .content img");
  const h3 = document.querySelector(".container .main .content h3");
  const paragraph = document.querySelector(".container .main .content p");
  buttons.forEach((btn) => btn.classList.remove("button-selected"));
  button.classList.add("button-selected");
  img.src = t(`index.why_rust.select_panel.${button.id}.src`);
  img.alt = t(`index.why_rust.select_panel.${button.id}.alt`);
  h3.innerText = t(`index.why_rust.select_panel.${button.id}.h3`);
  paragraph.innerText = t(`index.why_rust.select_panel.${button.id}.text`);
}

function changeFlagOpacity(targetLangage) {
  localeSelector.forEach((img) => {
    img.classList.remove("selected");
    if (img.id === targetLangage) {
      img.classList.add("selected");
    }
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  const i18next = await window.i18next;
  if (window.location.pathname.startsWith("/en")) {
    await i18next.changeLanguage("en-US");
    changeFlagOpacity("en-US");
  } else {
    await i18next.changeLanguage("fr-FR");
    changeFlagOpacity("fr-FR");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      changeSelectPanelContent(button);
    });
  });
  useCases.forEach((useCase) => {
    useCase.addEventListener("mouseenter", function () {
      changeContent(true, useCase.id);
    });
    useCase.addEventListener("mouseleave", function () {
      changeContent(false, useCase.id);
    });
  });
  localeSelector.forEach((button) => {
    button.addEventListener("click", function () {
      changeLocale(button.id);
    });
  });
  document.querySelector(".burger-menu").addEventListener("click", () => {
    document.querySelector("header .top nav ul").classList.toggle("active");
  });
});
