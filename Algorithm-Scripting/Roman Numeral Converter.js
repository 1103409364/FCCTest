// 将给定的数字转换成罗马数字。
// 所有返回的 罗马数字 都应该是大写形式。
function convert(num) {
    var str = "";
    var numStr = num.toString();
    if (numStr[3]) {
        //qian'wei
        var k = parseInt(numStr.slice(0, -3));
        for (var i = 0; i < k; i++) {
            str += "M";
        }
    }
    //百位的index
    var h = numStr.length - 3;
    str += hundreds(parseInt(numStr[h]));
    var t = numStr.length - 2;
    str += tens(parseInt(numStr[t]));
    var u = numStr.length - 1;
    str += units(parseInt(numStr[u]));
    return str;
}

convert(3600);

//转换百位
function hundreds(n) {
    var i;
    switch (n) {
        case 1:
            i = "C";
            break;
        case 2:
            i = "CC";
            break;
        case 3:
            i = "CCC";
            break;
        case 4:
            i = "CD";
            break;
        case 5:
            i = "D";
            break;
        case 6:
            i = "DC";
            break;
        case 7:
            i = "DCC";
            break;
        case 8:
            i = "DCCC";
            break;
        case 9:
            i = "CM";
            break;
        default:
            i = "";
            break;
    }
    return i;
}
//转换十位
function tens(n) {
    var i;
    switch (n) {
        case 1:
            i = "X";
            break;
        case 2:
            i = "XX";
            break;
        case 3:
            i = "XXX";
            break;
        case 4:
            i = "XL";
            break;
        case 5:
            i = "L";
            break;
        case 6:
            i = "LX";
            break;
        case 7:
            i = "LXX";
            break;
        case 8:
            i = "LXXX";
            break;
        case 9:
            i = "XC";
            break;
        default:
            i = "";
            break;
    }
    return i;
}
//转换个位
function units(n) {
    var i;
    switch (n) {
        case 1:
            i = "I";
            break;
        case 2:
            i = "II";
            break;
        case 3:
            i = "III";
            break;
        case 4:
            i = "IV";
            break;
        case 5:
            i = "V";
            break;
        case 6:
            i = "VI";
            break;
        case 7:
            i = "VII";
            break;
        case 8:
            i = "VIII";
            break;
        case 9:
            i = "IX";
            break;
        default:
            i = "";
            break;
    }
    return i;
}