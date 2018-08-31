// 依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 
// 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
function updateInventory(arr1, arr2) {
    // 二维数组扁平化为一维数组
    var larr1 = arr1.join().split(",");
    for (var i = 0; i < arr2.length; i++) {
        if (larr1.indexOf(arr2[i][1]) > 0) {
            // 根据index规律计算在原数组arr1中的index
            var index = (larr1.indexOf(arr2[i][1]) - 1) / 2;
            console.log(larr1.indexOf(arr2[i][1]));
            arr1[index][0] += arr2[i][0];
        } else {
            arr1.push(arr2[i]);
        }
    }
    // 排序
    arr1.sort(function (a, b) {
        return a[1] > b[1];
    })
    console.log(arr1);
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);