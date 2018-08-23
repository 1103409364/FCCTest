//disabled="disabled"时,输入框无法触发点击事件
var form = document.querySelector("form");
var searchBox = document.querySelector("#searchBox");
var labelBar = document.querySelector("#searchLabel");
var esc = document.querySelector("#esc");
var wiki = document.querySelector(".wiki");
var tip = document.querySelector("#tip");
var searchResult = document.querySelector("#searchResult");

function showSearch() {
    var klass = searchBox.getAttribute("class").split(" ");
    if (klass.length = 2) {
        labelBar.setAttribute("class", "onSearch");
        searchBox.setAttribute("class", klass[0]);
        searchBox.removeAttribute("disabled");
        searchBox.focus();
        esc.setAttribute("class", "esc");
    }
}

function close() {
    //alert(2);
    var klass = searchBox.getAttribute("class").split(" ");
    esc.setAttribute("class", "escHide");
    labelBar.setAttribute("class", "beforeSearch");
    searchBox.setAttribute("class", klass[0] + " inputHide");
    searchBox.value = "";
    wiki.setAttribute("class", "wiki");
    tip.setAttribute("class", "tip");
    searchResult.setAttribute("class", "resultHide");
    //放在input disabled之前的语句才能运行
    searchBox.setAttribute("disabled", "disabled");
}
function search() {
    var keyWords = searchBox.value;
    //输入不为空时
    if (keyWords.match(/[^\s]+/)) {
        wiki.setAttribute("class", "wikiMove");
        tip.setAttribute("class", "tipHide");
        searchResult.setAttribute("class", "result");
        showResult(keyWords);
    }
}
//事件委托
form.addEventListener("click", showSearch);
esc.addEventListener("click", close);
form.addEventListener("submit", search);

function showResult(keyWords) {
    var url = "https://zh.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=" + keyWords;
    //jsonp获取wiki搜索结果数据
    $.ajax({
        url: url,
        dataType: "jsonp",
        type: "GET",
        jsonpCallback: "getData",
        success: function (data) {
            // console.log(data.query.pages);
            searchResult.innerHTML = "";
            for (var x in data.query.pages) {
                console.log(x);
                creatEntry(data.query.pages[x]);
            }
        }
    });
}
//创建结果条目
function creatEntry(data) {
    var span = document.createElement("span");
    var p = document.createElement("p");
    var a = document.createElement("a");
    a.setAttribute("href", "https://zh.wikipedia.org/wiki/" + data.title);
    a.setAttribute("target", "_blank");
    a.textContent = data.extract;
    span.textContent = data.title + " ";
    p.appendChild(span);
    p.appendChild(a);
    searchResult.appendChild(p);
}