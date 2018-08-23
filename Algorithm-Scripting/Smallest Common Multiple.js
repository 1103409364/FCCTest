// // 找出能被两个给定参数及其之间的连续数字整除的最小公倍数。
// function smallestCommons(arr) {
//     var max = Math.max.apply(null, arr);
//     var min = Math.min.apply(null, arr);
//     var smallest;
//     //noprotect
//     for (var j = max; ; j++) {
//         var flag = 0;
//         for (var i = min; i <= max; i++) {
//             if (j % i == 0) {
//                 flag++;
//             } else {
//                 break;
//             }
//         }
//         if (flag == max - min + 1) {
//             smallest = j;
//             break;
//         }
//     }
//     console.log(smallest);
//     return smallest;
// }


smallestCommons([1, 113]);
function smallestCommons(arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    var num = arr[0];
    for (var i = arr[0] + 1; i <= arr[1]; i++) {
        num *= i / gcd(num, i);
    }
    return num;
}

function gcd(m, n) {
    if (m % n === 0) {
        return n;
    }
    return gcd(n, m % n);
}
