import dayjs from "dayjs";
import dayjsUtc from "dayjs/plugin/utc";

export function formatTime(time = Date.now(), utc = false) {
  if (utc) {
    dayjs.extend(dayjsUtc);
    return dayjs(Math.floor(time)).utc().format("H:mm");
  }
  return dayjs(Math.floor(time)).format("H:mm");
}
