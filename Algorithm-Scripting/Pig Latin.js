// 把指定的字符串翻译成 pig latin。
// Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
// 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
function translate(str) {
    if (str[0].match(/[aeiou]/)) {
        str += "way";
    }
    else {
        for (var i = 0; i < str.length; i++) {
            //正则匹配元音
            if (str[i].match(/[aeiou]/)) {
                break;
            }
        }
        str = str.slice(i) + str.substr(0, i) + "ay";
    }
    return str;
}

translate("glove");
