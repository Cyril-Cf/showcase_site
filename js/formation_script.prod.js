"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".menu li input"),r=document.getElementById("all"),c=document.querySelectorAll(".card");function o(){var r=new Map;c.forEach(function(e){null==e.parentElement.attributes.getNamedItem("hidden")&&e.querySelectorAll(".categories li").forEach(function(e){var t=e.textContent.trim();r.has(t)?r.set(t,r.get(t)+1):r.set(t,1)})}),t.forEach(function(e){var t,n=e.parentElement.querySelector("p").textContent;/\(\d+\)/.test(n)&&(n=n.replace(/\(\d+\)/g,"")),"Toutes"!=n&&"All"!=n||(t=Array.from(r.values()).reduce(function(e,t){return e+t},0),e.parentElement.querySelector("p").textContent=n+"(".concat(t,")")),r.has(n)&&(e.parentElement.querySelector("p").textContent=n+"(".concat(r.get(n),")"))})}r.addEventListener("click",function(){r.checked&&t.forEach(function(e){return e.checked=!0})}),t.forEach(function(e){e.checked=!0,e.addEventListener("click",function(){!function(){var n=[];t.forEach(function(e){e.checked&&n.push(e.parentElement.querySelector("p").textContent.replace(/\(\d+\)/g,"").trim())}),n.length<t.length&&(r.checked=!1);c.forEach(function(e){var t=!1;e.querySelectorAll(".categories li").forEach(function(e){n.includes(e.textContent.trim())&&(t=!0)}),t?e.parentElement.removeAttribute("hidden"):e.parentElement.setAttribute("hidden","")}),o()}()})}),o()});