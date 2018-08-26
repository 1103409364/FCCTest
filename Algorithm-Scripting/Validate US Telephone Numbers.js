// 如果传入字符串是一个有效的美国电话号码，则返回 true.
function telephoneCheck(str) {
    //先匹配有成对括号的电话号码，断言x(?=y)仅匹配被y跟随的x，“\((?=[0-9]{3}[)]{1})”仅匹配被三个数值和）跟随的（
    if (str.match(/^1?\s?\((?=[0-9]{3}[)]{1})[0-9]{3}\)[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/) || str.match(/^1?\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/)) {
        return true;
    } else {
        return false;
    }
}

telephoneCheck("27576227382");
telephoneCheck("555-555-5555");