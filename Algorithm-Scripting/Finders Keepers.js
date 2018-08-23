function find(arr, func) {
    var num;
    num = arr.filter(func);
    console.log(num);
    return num[0];
}

find([1, 2, 3, 4], function (num) { return num % 2 === 0; });