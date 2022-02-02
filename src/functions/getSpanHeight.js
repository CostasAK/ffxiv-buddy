export function getSpanHeight(ref, height = null) {
  if (!ref || !ref.current) {
    return null;
  }
  if (height === null) {
    height = ref.current.scrollHeight;
  }
  let rowHeight = parseInt(
    window
      .getComputedStyle(ref.current.parentNode)
      .getPropertyValue("grid-auto-rows")
  );
  let rowGap = parseInt(
    window
      .getComputedStyle(ref.current.parentNode)
      .getPropertyValue("grid-row-gap")
  );
  return Math.ceil((height + rowGap) / (rowHeight + rowGap));
}
