!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(t){t.currentTarget.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),timerId=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)}));e.addEventListener("click",(function(e){e.currentTarget.setAttribute("disabled","disabled"),t.removeAttribute("disabled"),clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.061f1dc5.js.map
