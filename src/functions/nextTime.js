export function nextTime(time, period, offset) {
  let remainder = time % period || 0;
  if (remainder < offset) {
    return time - remainder + offset;
  }
  return time - remainder + offset + period;
}
