const mergeSort = (array) => {
  let n = array.length;
  let left, right, mid;
  if (n > 1) {
    mid = Math.ceil(n / 2);
    left = array.slice(0, mid);
    right = array.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, array);
  }
};
function merge (left, right, array) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    for (j; j < right.length; j++) {
      array[k] = right[j];
      k++;
    }
  } else {
    for (i; i < left.length; i++) {
      array[k] = left[i];
      k++;
    }
  }
  return array;
}

// eslint-disable-next-line no-undef
module.exports = mergeSort;

