!function(){var t,e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");e.addEventListener("click",(function(e){e.currentTarget.setAttribute("disabled","disabled"),r.removeAttribute("disabled"),t=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)}));r.addEventListener("click",(function(r){r.currentTarget.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.e7e0347c.js.map