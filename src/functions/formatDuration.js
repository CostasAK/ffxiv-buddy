import dayjs from "dayjs";

var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export function formatDuration(duration) {
  return dayjs.duration(duration).humanize(true); //.format("Dd Hh m′s″");
}
