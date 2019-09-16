function quickSort(array) {
    // change code below this line
    if (array.length == 1 || array.length == 0) {
      return array;
    } else if (array.length == 2) {
      return array[0] < array[1] ? array : [array[1], array[0]];
    }

    let less = [], more = [];
    let pivot = Math.floor(array.length / 2);
    array.forEach((elem,i) => {
      if (i == pivot) return;
      if (elem <= array[pivot]) {
        less.push(elem);
      } else {
        more.push(elem)
      }
    });

    less = quickSort(less);
    more = quickSort(more);

    less.push(array[pivot]);
    // change code above this line
    return less.concat(more);
  }

// test array:
// quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
