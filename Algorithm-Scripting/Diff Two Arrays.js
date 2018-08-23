// 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中
// 所有独有的数组元素。换言之，返回两个数组的差异。
function diff(arr1, arr2) {
    var newArr = [];
    var temp = arr1.slice(0);
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }

    for (var j = 0; j < temp.length; j++) {
        if (arr2.indexOf(temp[j]) >= 0) {
            arr2.splice(arr2.indexOf(temp[j]), 1);
        }
    }

    return arr1.concat(arr2);
}

diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
