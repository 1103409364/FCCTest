// 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
// 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
// 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
function unite() {
    var arr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (arr.indexOf(arguments[i][j]) < 0) {
                arr.push(arguments[i][j]);
            }
        }
    }
    return arr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
