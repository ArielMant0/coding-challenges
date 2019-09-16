function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let swap = false;
        for (let index = 0; index < array.length - 1; index++) {
            if (array[index] > array[index+1]) {
                [array[index], array[index+1]] = [array[index+1], array[index]];
                swap = true;
            }
        }
        if (!swap) return array;
    }

    return array;
}
