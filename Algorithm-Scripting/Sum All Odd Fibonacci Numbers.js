/*
    给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
    斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
    例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
    提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
*/

function fibn(num) {
    var cache = [1, 1];
    for (var i = 2; i < num; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[i - 1];
}

function isOdd(num) {
    return !!(num % 2);
}
function sum(arr) {
    return eval(arr.join("+"));
}
function sumFibs(num) {
    var arr = [];
    for (var i = 1; fibn(i) <= num; i++) {
        if (isOdd(fibn(i))) {
            arr.push(fibn(i));
        }
    }
    return sum(arr);
}
console.log(sumFibs(18));
