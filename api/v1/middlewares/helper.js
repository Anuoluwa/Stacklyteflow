const collection = {
  getOne: (arr, id) => {
    const item = arr.filter(data => data.id == id); /* eslint-disable-line */
    return item;
  },
};
export default collection;
