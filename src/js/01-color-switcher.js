const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColor = event => {
  event.currentTarget.setAttribute('disabled', 'disabled');
  stoptBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
};

startBtn.addEventListener('click', changeBackgroundColor);

const stopChangeBackgroundColor = event => {
  event.currentTarget.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
};

stoptBtn.addEventListener('click', stopChangeBackgroundColor);
