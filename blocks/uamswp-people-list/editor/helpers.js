export function isValidUrl(base, path = "") {
  try {
    const url = new URL(path, base);
    return (
      Boolean(url) &&
      (url.hostname.includes("uams.edu") || url.hostname.includes(".local"))
    );
  } catch (e) {
    return false;
  }
}
