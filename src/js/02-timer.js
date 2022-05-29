import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('input[type="text"]');
const btnEl = document.querySelector('button[data-start]');
let timeLeftToDate = 0;

btnEl.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      btnEl.removeAttribute('disabled', 'disabled');
    }

    timeLeftToDate = selectedDates[0] - new Date();
    timeCounter(timeLeftToDate);
  },
};

flatpickr(inputEl, options);

function timeCounter(time) {
  timeLeftToDate = time - 1000;
  console.log(timeLeftToDate);

  convertMs(timeLeftToDate);
}

btnEl.addEventListener('click', event => {
  let timerId = setInterval(() => {
    timeCounter(timeLeftToDate);
    const Obj = convertMs(timeLeftToDate);
    const dataObj = addLeadingZero(Obj);
    for (let key in dataObj) {
      const spanEl = (document.querySelector(
        `span[data-${key}]`
      ).textContent = `${dataObj[key]}`);
    }
  }, 1000);

  if (timeLeftToDate === 0) {
    clearInterval(timerId);
  }
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(obj) {
  for (let key in obj) {
    obj[key] = String(obj[key]).padStart(2, 0);
  }

  return obj;
}
