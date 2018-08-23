// 对嵌套的数组进行扁平化处理
function steamroller(arr) {
    var newArr = [];
    isarr(arr);
    function isarr(arr) {
        arr.forEach(function (element) {
            if (Array.isArray(element)) {
                isarr(element);
            } else {
                newArr.push(element);
            }
        });
    }
    return newArr;
}

steamroller([1, [2], [3, [[4]]]]);