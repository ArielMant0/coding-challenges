function selectionSort(array) {
    for (let start = 0; start < array.length; ++start) {
        let min = array[start];
        let idx = start;
        for (let i = start+1; i < array.length; ++i) {
            if (array[i] < min) {
                min = array[i];
                idx = i;
            }
        }
        [array[start], array[idx]] = [array[idx], array[start]];
    }

    return array;
}
