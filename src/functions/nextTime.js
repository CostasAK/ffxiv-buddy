export function nextTime(now, period, time) {
  let offset = time % period;
  let remainder = now % period || 0;
  if (remainder < offset) {
    return now - remainder + offset;
  }
  return now - remainder + offset + period;
}
