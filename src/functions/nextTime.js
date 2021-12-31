export function nextTime(period, time) {
  if (!period || !time) {
    return time;
  }
  let now = Date.now() + 1;
  let offset = time % period;
  let remainder = now % period || 0;
  if (remainder < offset) {
    return now - remainder + offset;
  }
  return now - remainder + offset + period;
}
