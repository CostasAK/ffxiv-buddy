export default function isExternalLink(href: string) {
  if (/^https?:\/\/ffxiv\.kokke\.eu/i.test(href)) return false;

  if (/^https?:\/\//i.test(href)) return true;

  return false;
}
