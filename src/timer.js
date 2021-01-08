const refs = {
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minsRef: document.querySelector('span[data-value="mins"]'),
  secsRef: document.querySelector('span[data-value="secs"]'),
};
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days;
    this.hours;
    this.mins;
    this.secs;
  }
  getIdDate() {
    this.targetDate = Date.parse(new Date(this.targetDate));
    this.getTimer();
  }
  getTimer() {
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      this.timing(deltaTime);
    }, 1000);
  }

  updateTimer() {
    setInterval(() => {
      if (this.days <= 0 && this.hours <= 0 && this.mins < 0) {
        this.targetDate = new Date(
          Date.parse(new Date()) + 365 * 24 * 60 * 60 * 1000,
        );
        const currentDate = Date.now();
        const deltaTime = this.targetDate - currentDate;
        this.timing(deltaTime);
      }
    }, 1000);
  }
  timing(time) {
    this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.daysRef.textContent = `${this.days}`;

    this.hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    refs.hoursRef.textContent = `${this.hours}`;

    this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    refs.minsRef.textContent = `${this.mins}`;
    this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.secsRef.textContent = `${this.secs}`;
    this.updateTimer();
  }

  pad(time) {
    return String(time).padStart(2, '0');
  }
}

const newYearTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022 '),
});
newYearTimer.getIdDate();
