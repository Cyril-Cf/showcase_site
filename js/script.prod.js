"use strict";var buttons=document.querySelectorAll(".buttons li"),useCases=document.querySelectorAll("#use-case ul li");function changeContent(n,t){var c;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("change content"),e.next=3,regeneratorRuntime.awrap(window.i18next.t);case 3:c=e.sent,document.querySelector(".".concat(t)).innerHTML=c("index.use_case.".concat(t,n?".text":".h3"));case 6:case"end":return e.stop()}})}function changeSelectPanelContent(n){var t,c,o,r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(window.i18next.t);case 2:t=e.sent,c=document.querySelector(".container .main .content img"),o=document.querySelector(".container .main .content h3"),r=document.querySelector(".container .main .content p"),buttons.forEach(function(e){return e.classList.remove("button-selected")}),n.classList.add("button-selected"),c.src=t("index.why_rust.select_panel.".concat(n.id,".src")),c.alt=t("index.why_rust.select_panel.".concat(n.id,".alt")),o.innerText=t("index.why_rust.select_panel.".concat(n.id,".h3")),r.innerText=t("index.why_rust.select_panel.".concat(n.id,".text"));case 12:case"end":return e.stop()}})}document.addEventListener("DOMContentLoaded",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:buttons.forEach(function(e){e.addEventListener("click",function(){changeSelectPanelContent(e)})}),console.log(useCases),useCases.forEach(function(e){return function(){console.log("test"),e.addEventListener("mouseover",function(){changeContent(!0,e)}),e.addEventListener("mouseout",function(){changeContent(!1,e.id)})}});case 3:case"end":return e.stop()}})});