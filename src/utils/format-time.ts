import dayjs, { extend } from "dayjs";
import dayjsUtc from "dayjs/plugin/utc";

export function formatTime(time = Date.now(), utc = false) {
  if (utc) {
    extend(dayjsUtc);
    return dayjs(Math.floor(time)).utc().format("H:mm");
  }
  return dayjs(Math.floor(time)).format("H:mm");
}

export function formatDate(time = Date.now()) {
  return dayjs(time).format("ddd, D MMM, H:mm");
}
