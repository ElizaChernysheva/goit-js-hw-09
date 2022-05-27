import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('input[type="text"]');
const btnEl = document.querySelector('button[data-start]');

btnEl.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(this.defaultDate);

    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      btnEl.removeAttribute('disabled', 'disabled');
    }
  },
};

flatpickr(inputEl, options);
