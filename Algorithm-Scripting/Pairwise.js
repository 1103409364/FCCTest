// 有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。
// 而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。
// 所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。

function pairwise(arr, arg) {
    var pairIndex = [];
    // 空数组直接返回0
    if (arr.length === 0) {
        return 0;
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                // 排除已经用过的数字的index
                if (pairIndex.indexOf(i) < 0 && pairIndex.indexOf(j) < 0) {
                    pairIndex.push(i, j);

                }
            }
        }
    }
    console.log(pairIndex);
    console.log(pairIndex.reduce(getSum));

    return pairIndex.reduce(getSum);
}

function getSum(total, num) {
    return total + num;
}
pairwise([], 100);