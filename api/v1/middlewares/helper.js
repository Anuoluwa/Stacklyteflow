/* This a helper class to get one of the question from the collection with id,
 to post answer to any specified questionID */
const collection = {
  getOne: (arr, id) => {
    const item = arr.filter(data => data.id == id);
    return item;
  },
};
export default collection;
