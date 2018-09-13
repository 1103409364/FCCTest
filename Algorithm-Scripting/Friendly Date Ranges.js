// 让日期区间更友好！把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
// 易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).
// 记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了；
// 在这种情况下，如果月份开始和结束日期如果在同一个月，则结束日期月份也不用写了。
// 另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
// 例如:包含当前年份和相同月份的时候，makeFriendlyDates(["2017-01-02", "2017-01-05"]) 应该返回 ["January 2nd","5th"]
function makeFriendlyDates(arr) {
    var dateArr = [];
    var date1 = arr[0].split("-");
    var date2 = arr[1].split("-");
    var days = count(arr);
    var str1;
    var str2;
    if (days < 0) {
        return undefined;
    }
    if (days >= 365) {
        str1 = transMonth(parseInt(date1[1])) + transDate(parseInt(date1[2])) + ", " + date1[0];
        str2 = transMonth(parseInt(date2[1])) + transDate(parseInt(date2[2])) + ", " + date2[0];
        dateArr.push(str1);
        dateArr.push(str2);
        console.log(dateArr);
        return dateArr;
    }
    if (days === 0) {
        str1 = transMonth(parseInt(date1[1])) + transDate(parseInt(date1[2])) + ", " + date1[0];
        dateArr.push(str1);
        console.log(dateArr);
        return dateArr;
    }
    if (days < 31 && date1[1] == date2[1]) {
        str1 = transMonth(parseInt(date1[1])) + transDate(parseInt(date1[2]));
        str2 = transDate(parseInt(date2[2]));
        dateArr.push(str1);
        dateArr.push(str2);
        console.log(dateArr);
        return dateArr;
    }
    if (date1[0] == date2[0]) {
        str1 = transMonth(parseInt(date1[1])) + transDate(parseInt(date1[2]));
        str2 = transMonth(parseInt(date2[1])) + transDate(parseInt(date2[2]));
        dateArr.push(str1);
        dateArr.push(str2);
        console.log(dateArr);
        return dateArr;
    }
    if (days < 365 && date1[2] < date2[2]) {
        str1 = transMonth(parseInt(date1[1])) + transDate(parseInt(date1[2]));
        str2 = transMonth(parseInt(date2[1])) + transDate(parseInt(date2[2]));
        dateArr.push(str1);
        dateArr.push(str2);
        console.log(dateArr);
        return dateArr;
    }
    if (days < 365) {
        str1 = transMonth(parseInt(date1[1])) + transDate(parseInt(date1[2])) + ", " + date1[0];
        str2 = transMonth(parseInt(date2[1])) + transDate(parseInt(date2[2]));
        dateArr.push(str1);
        dateArr.push(str2);
        console.log(dateArr);
        return dateArr;
    }
}
// 转换月份
function transMonth(m) {
    var monthStr = "";
    switch (m) {
        case 1: monthStr = "January "; break;
        case 2: monthStr = "February "; break;
        case 3: monthStr = "March "; break;
        case 4: monthStr = "April "; break;
        case 5: monthStr = "May "; break;
        case 6: monthStr = "June "; break;
        case 7: monthStr = "July "; break;
        case 8: monthStr = "August "; break;
        case 9: monthStr = "September "; break;
        case 10: monthStr = "October "; break;
        case 11: monthStr = "November "; break;
        case 12: monthStr = "December "; break;
    }
    return monthStr;
}
// 转换几号
function transDate(d) {
    var dateStr = "";
    switch (d) {
        case 1:
        case 21:
        case 31: dateStr = d + "st"; break;
        case 2:
        case 22: dateStr = d + "nd"; break;
        case 3:
        case 23: dateStr = d + "rd"; break;
        default: dateStr = d + "th"; break;  //4-20 24-30
    }
    return dateStr;
}
// 计算相差多少天
function count(arr) {
    var date1 = new Date(arr[0]);
    var date2 = new Date(arr[1]);
    var d = (date2.getTime() - date1.getTime()) / 86400000;
    console.log(date1, date2, d);
    return d;
}

makeFriendlyDates(["2017-07-12", "2018-06-13"]);
makeFriendlyDates(["2016-05-11", "2017-04-04"]);