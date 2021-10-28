export const toMachineName = (name, separator) =>
  name
    .replace(/[/^\d,.]/g, '')
    .trim()
    .replace(/\s/g, separator)
    .toLowerCase();
