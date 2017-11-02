export function formatNumber (str, max) {
  str = str.toString();
  return str.length < max ? formatNumber("0" + str, max) : str;
}