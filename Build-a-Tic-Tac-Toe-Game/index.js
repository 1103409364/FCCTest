var chessboard = document.querySelector(".chessboard");
var choose = document.querySelector(".choose");
var tip = document.querySelector(".tip");
var welcome = document.querySelector(".welcome");
//boolean 选择o。p1是否先开始。红O先手
var chooseO = true;
var pOnePlay;

window.onload = function () {
    chessboard.setAttribute("style", "filter:blur(8px);")
};
//监听棋盘，开始下棋
chessboard.addEventListener("click", play);
choose.addEventListener("click", choosexo);
// 隐藏welcome窗口,取消模糊效果
function showChessboard() {
    chessboard.setAttribute("style", "filter:blur(0px);")
    welcome.setAttribute("style", "top: -500px;")
}
//切换玩家
function changePlayer(pOnePlay) {
    if (pOnePlay) {
        tip.textContent = "player 1";
    } else {
        tip.textContent = "player 2";
    }
}
// 选择x或者o
function choosexo(e) {
    var target = e.target;
    if (target.textContent == "X" || target.textContent == "O") {
        if (target.textContent == "O") {
            pOnePlay = true;
            tip.textContent = "player 1";
        } else if (target.textContent == "X") {
            pOnePlay = false;
            tip.textContent = "player 2";
        }
    }
    showChessboard();
}
// 下棋
function play(e) {
    var tarket = e.target;
    // 有空位再落子
    if (!tarket.textContent) {
        if (chooseO) {
            tarket.appendChild(getChessp("O"));
            chooseO = false;
        } else {
            tarket.appendChild(getChessp("X"));
            chooseO = true;
        }
        pOnePlay = !pOnePlay;
        changePlayer(pOnePlay);
    }
}
// 取得棋子
function getChessp(xo) {
    var chessp = document.createElement("span");;
    if (xo == "X") {
        chessp.appendChild(document.createTextNode("X"));
        chessp.setAttribute("style", "color: #008000");
    }
    if (xo == "O") {
        chessp.appendChild(document.createTextNode("O"));
        chessp.setAttribute("style", "color: #ff0000");
    }
    return chessp;
}