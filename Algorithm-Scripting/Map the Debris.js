// 返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.
// 原数组中会包含格式化的对象内容，像这样 {name: 'name', avgAlt: avgAlt}.
// T=2π√(a^3/GM),a为椭圆长半轴。
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a;
    for (var i = 0; i < arr.length; i++) {
        a = earthRadius + arr[i].avgAlt;
        delete arr[i].avgAlt;
        var orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
        orbitalPeriod = Math.round(orbitalPeriod);
        arr[i].orbitalPeriod = orbitalPeriod;
    }
    console.log(arr);
    return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
