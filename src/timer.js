const refs = {
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minsRef: document.querySelector('span[data-value="mins"]'),
  secsRef: document.querySelector('span[data-value="secs"]'),
};
function timer() {
  const targetDate = Date.parse(new Date('Jan 1, 2022'));

  setInterval(function () {
    const date = Date.now();
    const delay = targetDate - date;
    timing(delay);
  }, 1000);
}

function timing(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  refs.daysRef.textContent = `${days}`;

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  refs.hoursRef.textContent = `${hours}`;

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  refs.minsRef.textContent = `${mins}`;

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.secsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
timer();
