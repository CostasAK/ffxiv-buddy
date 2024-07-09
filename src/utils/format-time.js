import dayjs from "dayjs";
import dayjsUtc from "dayjs/plugin/utc";

export function formatTime(time = Date.now(), utc = false) {
  const hourParts = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
  }).formatToParts(new Date(time));

  if (utc) {
    dayjs.extend(dayjsUtc);
  }

  const timeObject = utc ? dayjs(time).utc() : dayjs(time);

  if (hourParts.dayPeriod !== undefined) {
    return timeObject.format("h:mm A");
  }
  return timeObject.format("H:mm");
}
