// 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
// 最小的数字并非总在最前面。
function sumAll(arr) {
    var max = Math.max.apply(this, arr);
    var min = Math.min.apply(this, arr);
    for (var i = min + 1; i < max; i++) {
        arr.push(i);
    }
    function getSum(total, num) {
        return total + num;
    }
    return arr.reduce(getSum);
}

sumAll([1, 4]);