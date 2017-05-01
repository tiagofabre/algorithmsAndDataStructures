module.exports = function binarySearch (arr, value) {
    let length = arr.length;
    let middle = Math.floor(length / 2);

    if (arr.length === 1 && arr[middle] != value) {
        return -1;
    } else if (arr[middle] == value){
        return arr[middle];
    } else if (value > arr[middle]) {
        return binarySearch(arr.slice(middle, length), value)
    } else {
        return binarySearch(arr.slice(0, middle), value)
    }
}
