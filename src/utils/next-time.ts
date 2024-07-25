export function nextTime(
  time: number,
  period?: number,
  now = Date.now() + 1000,
) {
  if (!period || !time) {
    return time;
  }

  now += 1000 - (now % 1000);
  time -= time % 1000;

  const offset = time % period;
  const remainder = now % period || 0;
  if (remainder < offset) {
    return now - remainder + offset;
  }
  return now - remainder + offset + period;
}
