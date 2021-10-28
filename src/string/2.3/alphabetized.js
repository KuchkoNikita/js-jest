export const alphabetized = (text) => {
  return text
    .replace(/[\s,.!?]/g, '')
    .split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('');
};
