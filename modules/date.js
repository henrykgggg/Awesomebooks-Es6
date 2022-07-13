import { DateTime } from './luxon.js';// eslint-disable-line

export default class getDate {
  static displayLuxon() {
    setInterval(() => {
      const now = DateTime.now();
      const months = [
        'January',
        'Feb',
        'Mac',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ];
      const formatTime = (time) => (time < 10 ? `0${time}` : time);
      const dateText = `${months[now.month - 1]} ${now.day}th ${
        now.year
      }, ${formatTime(now.hour)}:${formatTime(now.minute)}:${formatTime(
        now.second,
      )}`;
      const spanForDate = document.querySelector('#current_date');
      spanForDate.textContent = dateText;
    }, 1000);
  }
}