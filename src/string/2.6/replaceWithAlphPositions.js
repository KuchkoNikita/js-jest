export const replaceWithAlphPositions = (text) => {
  return text
    .replace(/[\s.,\/#!$%\^&\*;:{}=\-_’`~()]/g, '')
    .toLowerCase()
    .split('')
    .map((item) => item.replace(/[a-z]/, item.charCodeAt(0) - 96))
    .join(' ');
};
