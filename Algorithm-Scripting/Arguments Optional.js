// 创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
// 例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。
// 调用这个有一个参数的返回的 function，返回求和的结果：
// var sumTwoAnd = add(2);
// sumTwoAnd(3) 返回 5。
function add() {
    var sum = 0;
    var args = [].slice.call(arguments);
    if (
        // arguments转成数组
        !args.every(function (item) {
            return typeof item == "number";
        })
    ) {
        return undefined;
    } else if (arguments.length === 1) {
        var a = arguments[0];
        //使用闭包来定义函数，令其可以访问私有变量
        return function () {
            if (typeof arguments[0] != "number") {
                return undefined;
            }
            console.log(a + arguments[0]);
            return sum = a + arguments[0];
        };
    } else {
        return eval(args.join("+"));
    }
}

add(2)(3);