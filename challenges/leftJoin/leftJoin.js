/* eslint-disable no-undef */
const leftJoin = (leftTable, rightTable) => {
  const outPut = [];
  leftTable.list.forEach((item) => {
    if (item) {
      let current = item.head;
      while (current) {
        const retrived = rightTable.get(current.val.key);
        if (retrived !== null) {
          outPut.push([current.val.key, current.val.value, retrived.value]);
        } else {
          outPut.push([current.val.key, current.val.value, retrived]);
        }
        current = current.next;
      }
    }

  });
  return outPut;
};
module.exports = leftJoin;
