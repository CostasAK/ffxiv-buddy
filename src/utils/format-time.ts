import dayjs from "dayjs";
import dayjsUtc from "dayjs/plugin/utc";

export function formatTime(time = Date.now(), utc = false) {
  if (utc) {
    dayjs.extend(dayjsUtc);
  }

  const timeObject = utc ? dayjs(time).utc() : dayjs(time);

  return timeObject.format("H:mm");
}
