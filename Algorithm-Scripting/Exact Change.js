// 设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 
// 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
// cid 是一个二维数组，存着当前可用的找零.当收银机中的钱不够找零时返回字符串 
// "Insufficient Funds". 如果正好则返回字符串 "Closed".
// 否则, 返回应找回的零钱列表,且由大到小存在二维数组中.
// Example cash-in-drawer array:
//                              面值
// [["PENNY", 1.01],分          0.01  0
// ["NICKEL", 2.05],五分        0.05  1
// ["DIME", 3.10],一角          0.1   2
// ["QUARTER", 4.25],二角五分   0.25  3
// ["ONE", 90.00],一元          1     4
// ["FIVE", 55.00],五           5     5
// ["TEN", 20.00],十            10    6
// ["TWENTY", 60.00],           20    7
// ["ONE HUNDRED", 100.00]]     100   8

function checkCashRegister(price, cash, cid) {
    //应该找零数
    var change = (cash * 100 - price * 100) / 100;
    var sumChange = 0;
    for (var i = 0; i < cid.length; i++) {
        sumChange += cid[i][1];
    }
    //零钱正好全部找出
    if (change === 0 || sumChange === change) {
        return "Closed";
    }
    // 声明一个数组用来储存结果
    var changeArr = [];
    //整数部分
    var intChange = Math.floor(change);
    // 浮点精度问题*100计算
    var floatChange = change * 100 - intChange * 100;


    //从大额面值的零钱开始找零，已找零的扣除。直到penny，如果还需找零的金额是大于penny，钱不够找，return。

    // 两种情况：大于或者小于该面值零钱数
    if (intChange - cid[7][1] >= 0) {
        intChange -= cid[7][1];
        changeArr.push(cid[7]);
    } else if (Math.floor(intChange / 20) > 0) {
        var twenty = [];
        twenty[0] = "TWENTY";
        twenty[1] = Math.floor(intChange / 20) * 20;
        changeArr.push(twenty);
        intChange -= Math.floor(intChange / 20) * 20;
    }

    if (intChange - cid[6][1] >= 0) {
        intChange -= cid[6][1];
        changeArr.push(cid[6]);
    } else if (Math.floor(intChange / 10) > 0) {
        var ten = [];
        ten[0] = "TEN";
        ten[1] = Math.floor(intChange / 10) * 10;
        changeArr.push(ten);
        intChange -= Math.floor(intChange / 10) * 10;
    }

    if (intChange - cid[5][1] >= 0) {
        intChange -= cid[5][1];
        changeArr.push(cid[5]);
    } else if (Math.floor(intChange / 5) > 0) {
        var five = [];
        five[0] = "FIVE";
        five[1] = Math.floor(intChange / 5) * 5;
        changeArr.push(five);
        intChange -= Math.floor(intChange / 5) * 5;
    }

    if (intChange - cid[4][1] >= 0) {
        intChange -= cid[4][1];
        changeArr.push(cid[4]);
    } else if (intChange > 0) {
        var one = [];
        one[0] = "ONE";
        one[1] = intChange;
        changeArr.push(one);
        intChange = 0;
    }
    // 计算浮点部分
    change = intChange * 100 + floatChange;

    if (change - cid[3][1] * 100 >= 0) {
        change -= cid[3][1] * 100;
        changeArr.push(cid[3]);
    } else if (Math.floor(change / 25) > 0) {
        var quarter = [];
        quarter[0] = "QUARTER";
        quarter[1] = Math.floor(change / 25) * 25 / 100;
        changeArr.push(quarter);
        change -= Math.floor(change / 25) * 25;
    }

    if (change - cid[2][1] * 100 >= 0) {
        change -= cid[2][1] * 100;
        changeArr.push(cid[2]);
    } else if (Math.floor(change / 10) > 0) {
        var dime = [];
        dime[0] = "DIME";
        dime[1] = Math.floor(change / 10) * 10 / 100;
        changeArr.push(dime);
        change -= Math.floor(change / 10) * 10;
    }

    if (change - cid[1][1] * 100 >= 0) {
        change -= cid[1][1] * 100;
        changeArr.push(cid[1]);
    } else if (Math.floor(change / 5) > 0) {
        var nickel = [];
        nickel[0] = "NICKEL";
        nickel[1] = Math.floor(change / 5) * 5 / 100;
        changeArr.push(nickel);
        change -= Math.floor(change / 5) * 5;
    }


    if (change - cid[0][1] * 100 > 0) {
        return "Insufficient Funds";
    } else if (change > 0) {
        var penny = [];
        penny[0] = "PENNY";
        penny[1] = change / 100;
        changeArr.push(penny);
        return changeArr;
    }
    console.log(changeArr);


    if (change === 0) {
        return changeArr;
    }
}
checkCashRegister(20.00, 30.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
