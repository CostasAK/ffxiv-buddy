import dayjs from "dayjs";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export function formatTime(time) {
  const hourParts = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
  }).formatToParts(new Date(time));
  if (hourParts.dayPeriod !== undefined) {
    return dayjs(time).format("h:mm A");
  }
  return dayjs(time).format("H:mm");
}

export function formatDate(time) {
  return (
    dayjs(time).format("ddd, D MMM YYYY") +
    (time % day !== 0 ? " " + formatTime(time) : "")
  );
}
