import { SECOND } from "@/constants/time";
import dayjs, { extend } from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

export function humanizeDuration(delta: number) {
  if (delta >= -45 * SECOND && delta <= 0) return "now";

  extend(duration);
  extend(relativeTime);

  return dayjs.duration(delta).humanize(true);
}
