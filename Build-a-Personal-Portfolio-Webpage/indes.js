var list = document.querySelectorAll("a")
var ul = document.querySelector("ul")
ul.onclick = function (e) {
    for (var i = 0; i < 3; i++) {
        list[i].setAttribute("class", "")
    }
    e.target.setAttribute("class", "active")
}
window.onscroll = function () {
    var scrollh = document.documentElement.scrollTop | document.body.scrollTop
    for (var i = 0; i < 3; i++) {
        list[i].setAttribute("class", "")
    }
    if (scrollh < 489) {
        list[0].setAttribute("class", "active")
    } else if (scrollh < 1786) {
        list[1].setAttribute("class", "active")
    } else {
        list[2].setAttribute("class", "active")
    }
    console.log(scrollh)
}