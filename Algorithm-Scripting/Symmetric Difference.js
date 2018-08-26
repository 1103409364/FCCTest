
// 创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
// 给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指
// 由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 (如 D = {2, 3}), 
// 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym(args) {
    var arr = Array.prototype.slice.call(arguments);
    var arrTemp = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i + 1].indexOf(arr[i][j]) < 0) {
                arrTemp.push(arr[i][j]);
            }
        }
        for (var k = 0; k < arr[i + 1].length; k++) {
            if (arr[i].indexOf(arr[i + 1][k]) < 0) {
                arrTemp.push(arr[i + 1][k]);
            }
        }
        arr[i + 1] = arrTemp;
        arrTemp = [];
    }

    var arrTemp = arr[arr.length - 1];
    // 去除重复的元素
    console.log(arrTemp.filter(function (item, index) {
        return arrTemp.indexOf(item) == index;
    }));
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);