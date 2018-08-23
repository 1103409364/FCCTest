// 从传递进来的字母序列中找到缺失的字母并返回它。
// 如果所有字母都在序列中，返回 undefined。
function fearNotLetter(str) {
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) != str.charCodeAt(i) + 1) {
            break;
        }
    }
    if (i == str.length - 1) {
        return undefined;
    }
    return String.fromCharCode(str.charCodeAt(i) + 1);
}

fearNotLetter("abce");
