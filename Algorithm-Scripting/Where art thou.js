// 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
// 如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
function where(collection, source) {
    var arr = [];
    var key = Object.keys(source);
    arr = collection.filter(function (item) {
        for (var i = 0; i < key.length; i++) {
            if (item[key[i]] != source[key[i]]) {
                return false;
            }
        }
        return true;
    });
    return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
