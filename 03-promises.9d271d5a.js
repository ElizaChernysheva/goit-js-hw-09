!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector(".form"),a=(document.querySelector('button[type="submit"]'),document.querySelector('input[name="delay"]')),c=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]'),d=0,f=0,s=0,p=0,m=0;u.addEventListener("submit",(function(n){n.preventDefault(),d=a.value,f=c.value,s=l.value;for(var t=0;t<s;t+=1)m+=Number(f),console.log(m),setTimeout((function(){var n,t;(n=p+=1,t=d,new Promise((function(e,o){var i=Math.random()>.3;setTimeout((function(){i?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),m)}))}();
//# sourceMappingURL=03-promises.9d271d5a.js.map