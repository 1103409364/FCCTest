// 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
function convert(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[&<>"']/)) {
            switch (str[i]) {
                case "&": newStr += "&amp;"; break;
                case "<": newStr += "&lt;"; break;
                case ">": newStr += "&gt;"; break;
                case "\"": newStr += "&quot;"; break;
                case "\'": newStr += "&apos;"; break;
            }
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr);
    return newStr;
}

convert("Dolce & Gabbana");
