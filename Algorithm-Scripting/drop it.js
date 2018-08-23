// 丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
function drop(arr, func) {
    // Drop them elements.
    while (!func(arr[0])) {
        arr.shift();
    }

    console.log(arr)
    return arr;
}

drop([1, 2, 3, 4], function (n) { return n >= 2; });