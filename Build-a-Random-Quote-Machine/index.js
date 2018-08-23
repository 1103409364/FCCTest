var randomQuote = document.querySelector("#quote");
var randomName = document.querySelector("#name");
var body = document.querySelector("body");
var btn = document.querySelector("#btn");
var weibo = document.querySelector(".weibo");
var twitter = document.querySelector(".twitter");
//opacity设为全局变量,否则会发生冲突,存在多个opacity?
var opacity = 0;

var quotes = [
    "You want to be extra rigorous about making the best possible thing you can. Find everything that’s wrong with it and fix it. Seek negative feedback, particularly from friends.– Elon Musk, Entrepreneur",
    "Don’t find fault. Find a remedy.– Henry Ford, Industrialist",
    "It is the people who can do nothing who find nothing to do, and the secret to happiness in this world is not only to be useful, but to be forever elevating one’s uses.– Sarah Orne Jewett, Writer",
    "Being too consumed in fear all the time will result in poor quality of life.– Marie de France, Poet"
]
window.onload = getNewQuote;
function getNewQuote() {
    opacity = 0
    var index = Math.floor(Math.random() * quotes.length);

    var newQuote = quotes[index].split("–");

    randomQuote.textContent = " " + newQuote[0];
    randomName.textContent = "–" + newQuote[1];
    setStyle();
    fadein();
}
function getRandomColor() {
    var r = Math.floor(Math.random() * 240);
    var g = Math.floor(Math.random() * 240);
    var b = Math.floor(Math.random() * 240);
    return "rgb(" + r + "," + g + "," + b + ")";
}
//淡入效果
function fadein() {
    randomQuote.setAttribute("style", "opacity:0;");
    setInterval(function () {
        if (opacity <= 1) {
            opacity += 0.01;
        }
        randomQuote.setAttribute("style", "opacity:" + opacity + ";");
        randomName.setAttribute("style", "opacity:" + opacity + ";");
    }, 100)
}

function setStyle() {
    var color = getRandomColor();
    body.setAttribute("style", "color:" + color + ";" + "background-color:" + color);
    btn.setAttribute("style", "background-color:" + color);
    twitter.setAttribute("style", "background-color:" + color);
    weibo.setAttribute("style", "background-color:" + color);
}

btn.addEventListener("click", getNewQuote)
//----------------------------------------------------------
var ShareTip = function () {

}
//分享到腾讯微博
ShareTip.prototype.sharetoqq = function (content, url, picurl) {
    var shareqqstring = 'http://v.t.qq.com/share/share.php?title=' + content + '&url=' + url + '&pic=' + picurl;
    window.open(shareqqstring, 'newwindow', 'height=100,width=100,top=100,left=100');
}
//分享到新浪微博
ShareTip.prototype.sharetosina = function (title, url, picurl) {
    var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
    window.open(sharesinastring);
}
//分享到twitter
ShareTip.prototype.sharetwitter = function (title, url, picurl) {
    var sharetwitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + title;
    window.open(sharetwitter);
}

var share = new ShareTip();

weibo.addEventListener("click", function () {
    var title = randomQuote.textContent + " " + randomName.textContent;
    share.sharetosina(title);
})
twitter.addEventListener("click", function () {
    var title = randomQuote.textContent + " " + randomName.textContent;
    share.sharetwitter(title);
})