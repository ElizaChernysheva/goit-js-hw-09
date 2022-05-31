import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('button[type="submit"]');
const inputDelayEl = document.querySelector('input[name="delay"]');
const inputStepEl = document.querySelector('input[name="step"]');
const inputAmountEl = document.querySelector('input[name="amount"]');

let delayTime = 0;
let step = 0;
let amount = 0;
let position = 0;
let delayStep = 0;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay,
        });
      } else {
        reject({
          position,
          delay,
        });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  delayTime = inputDelayEl.value;
  step = inputStepEl.value;
  amount = inputAmountEl.value;

  for (let i = 0; i < amount; i += 1) {
    delayStep += Number(step);
    console.log(delayStep);

    setTimeout(() => {
      position += 1;
      createPromise(position, delayTime)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }, delayStep);
  }
});