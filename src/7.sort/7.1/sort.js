export const sortList = (list, sortBy) => {
  return list.sort((elem1, elem2) => elem2[sortBy] - elem1[sortBy]);
};
