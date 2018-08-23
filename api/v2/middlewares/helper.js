const collection = {
  getOne: (arr, id) => {
    const item = arr.filter(data => data.id == id);
    return item;
  },
};
export default collection;
