function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form"),l=(document.querySelector('button[type="submit"]'),document.querySelector('input[name="delay"]')),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');let s=0,c=0,f=0,m=0,p=0;u.addEventListener("submit",(t=>{t.preventDefault(),s=l.value,c=d.value,f=a.value;for(let t=0;t<f;t+=1)p+=Number(c),console.log(p),setTimeout((()=>{var t,o;m+=1,(t=m,o=s,new Promise(((e,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?e({position:t,delay:o}):n({position:t,delay:o})}),o)}))).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}),p)}));
//# sourceMappingURL=03-promises.7079e50f.js.map
