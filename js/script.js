const buttons = document.querySelectorAll(".buttons li");
const useCases = document.querySelectorAll("#use-case ul li");

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

document.addEventListener("DOMContentLoaded", async function () {
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
  console.log("end");
});
