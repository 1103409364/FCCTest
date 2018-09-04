// 把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.
// 连续重复只以单个字符为准

// 例如, aab 应该返回 2 因为它总共有6中排列(aab, aab, aba, aba, baa, baa), 
// 但是只有两个(aba and aba)没有连续重复的字符(在本例中是 a).

function permAlone(str) {
    var count = 0;
    var strArr = str.split("");
    var newstrArr = perm(strArr);
    console.log(newstrArr);
    for (var i = 0; i < newstrArr.length; i++) {
        if (!newstrArr[i].match(/(\w)\1/g)) {
            count++;
        }
    }
    console.log(count);
    return count;
}

/*  
全排列（递归交换）算法  
1、将第一个位置分别放置各个不同的元素；  
2、对剩余的位置进行全排列（递归）；  
3、递归出口为只对一个元素进行全排列。  
*/
function swap(arr, i, j) {
    if (i != j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
function perm(arr) {
    var newstrArr = [];//排序之后的字符串放进这个数组
    (function fn(n) { //为第n个位置选择元素
        for (var i = n; i < arr.length; i++) {
            swap(arr, i, n);
            if (n + 1 < arr.length - 1) //判断数组中剩余的待全排列的元素是否大于1个
                fn(n + 1); //从第n+1个下标进行全排列
            else
                // 数组排序后转字符串
                newstrArr.push(arr.join(""));
            swap(arr, i, n);
        }
    })(0);
    return newstrArr;
}

permAlone('aaa');
