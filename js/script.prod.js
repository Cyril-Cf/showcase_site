"use strict";var i18nextInstance=null;function initI18next(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(n,r){if(i18nextInstance)return console.log("I18n déjà instanciée"),void n(i18nextInstance.t);var a=i18next.createInstance();a.use(i18nextBrowserLanguageDetector).use(i18nextHttpBackend).init({debug:!0,fallbackLng:"fr-FR",backend:{loadPath:"locales/{{lng}}/{{ns}}.json"}},function(e,t){e?r(e):(i18nextInstance=a,n(t))})}));case 1:case"end":return e.stop()}})}function changeContent(t,n){var r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(initI18next());case 2:r=e.sent,document.querySelector(".".concat(n)).innerHTML=r("index.use_case.".concat(n,t?".text":".h3"));case 5:case"end":return e.stop()}})}var buttons=document.querySelectorAll(".buttons li");function changeSelectPanelContent(t){var n,r,a,c;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(initI18next());case 2:n=e.sent,r=document.querySelector(".container .main .content img"),a=document.querySelector(".container .main .content h3"),c=document.querySelector(".container .main .content p"),buttons.forEach(function(e){return e.classList.remove("button-selected")}),t.classList.add("button-selected"),console.log(t),e.t0=t.id,e.next="security"===e.t0?12:"performance"===e.t0?17:"concurrency"===e.t0?22:"abstraction"===e.t0?27:"ecosystem"===e.t0?32:"use_case"===e.t0?37:42;break;case 12:return r.src="img/security.avif",r.alt="lock",a.innerText=n("index.why_rust.select_panel.security.h3"),c.innerText=n("index.why_rust.select_panel.security.text"),e.abrupt("break",42);case 17:return r.src="img/speed.avif",r.alt="a speed meter",a.innerText=n("index.why_rust.select_panel.performance.h3"),c.innerText=n("index.why_rust.select_panel.performance.text"),e.abrupt("break",42);case 22:return r.src="img/race.avif",r.alt="a race between athletes",a.innerText=n("index.why_rust.select_panel.concurrency.h3"),c.innerText=n("index.why_rust.select_panel.concurrency.text"),e.abrupt("break",42);case 27:return r.src="img/helpful.avif",r.alt="a small robot",a.innerText=n("index.why_rust.select_panel.abstraction.h3"),c.innerText=n("index.why_rust.select_panel.abstraction.text"),e.abrupt("break",42);case 32:return r.src="img/group.avif",r.alt="a group of hands",a.innerText=n("index.why_rust.select_panel.ecosystem.h3"),c.innerText=n("index.why_rust.select_panel.ecosystem.text"),e.abrupt("break",42);case 37:return r.src="img/mobile.avif",r.alt="a mobile phone",a.innerText=n("index.why_rust.select_panel.use_case.h3"),c.innerText=n("index.why_rust.select_panel.use_case.text"),e.abrupt("break",42);case 42:case"end":return e.stop()}})}document.addEventListener("DOMContentLoaded",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:buttons.forEach(function(e){e.addEventListener("click",function(){changeSelectPanelContent(e)})});case 1:case"end":return e.stop()}})});