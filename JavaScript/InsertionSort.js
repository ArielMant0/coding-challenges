function insertionSort(array) {
    for (let i = 0; i < array.length-1; ++i) {
        if (array[i+1] < array[i]) {
            for (let j = i; j >= 0 && array[j] > array[j+1]; --j) {
                [array[j+1], array[j]] = [array[j], array[j+1]];
            }
        }
    }
    return array;
}
