export const stringify = (list) => {
  return list ? `${list.data} -> ${stringify(list.next)}` : 'null';
};
