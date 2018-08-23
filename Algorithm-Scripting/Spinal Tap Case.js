// 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
function spinalCase(str) {
    // 先替换大小写连着的情况
    var re = /([a-z])([A-Z])/g;
    // 再替大小写之间有符号的情况
    var re2 = /[_\s]/g;
    var newStr = str.replace(re, "$1" + "-" + "$2").toLowerCase();
    newStr = newStr.replace(re2, "-");

    return newStr;
}

spinalCase('This Is Spinal Tap');
