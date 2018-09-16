var chessboard = document.querySelector(".chessboard");
var choose = document.querySelector(".choose");
var tip = document.querySelectorAll(".tip")[0];
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var gameOver = document.querySelector(".gameOver");
var result = document.querySelector(".result");
var again = document.querySelector(".again");
var close = document.querySelector(".close");

var welcome = document.querySelector(".welcome");
var chessList = document.querySelectorAll("li");
//boolean 选择o。p1是否先开始。红O先手
var chooseO = true;
// 保存p1的选择，选O为true。x为false
var pOneChooseO;
var pOnePlay;
var step = 0;

window.onload = function () {
    chessboard.setAttribute("style", "filter:blur(8px);")
};

//监听棋盘，开始下棋
chessboard.addEventListener("click", play);
//监听欢迎窗口，选择xo
choose.addEventListener("click", choosexo);
again.addEventListener("click", reset);
close.addEventListener("click", function () {
    window.open("about:blank", "_self").close();
})

// 隐藏welcome窗口,取消模糊效果
function showChessboard() {
    chessboard.setAttribute("style", "filter:blur(0px);");
    welcome.setAttribute("style", "top: -500px;");
}
// 显示结果窗口
function showGameOver(winner) {
    chessboard.setAttribute("style", "filter:blur(5px);");
    gameOver.setAttribute("style", "left: 50%;")
    result.textContent = winner;
    step = 0;
    // 移除棋盘监听事件,防止结束后触发play事件
    chessboard.removeEventListener("click", play);
}

// 重置
function reset() {
    chessboard.setAttribute("style", "filter:blur(0px);");
    gameOver.setAttribute("style", "left: -500px;")
    // 清空棋盘
    for (var i = 0; i < chessList.length; i++) {
        chessList[i].textContent = "";
    };

    changePlayer(pOnePlay);
    chessboard.addEventListener("click", play);
}
//切换玩家
function changePlayer(pOnePlay) {
    if (pOnePlay) {
        tip.textContent = "Turn to player 1";
    } else {
        tip.textContent = "Turn to player 2";
    }
}
// 选择x或者o
function choosexo(e) {
    var target = e.target;
    if (target.textContent == "X" || target.textContent == "O") {
        if (target.textContent == "O") {
            pOnePlay = true;
            pOneChooseO = true;
            tip.textContent = "Turn to player 1";
            p1.textContent = "Player 1: O";
            p2.textContent = "Player 2: X";
            p1.setAttribute("style", "color: #ff0000");
            p2.setAttribute("style", "color: #008000");
        } else if (target.textContent == "X") {
            pOnePlay = false;
            pOneChooseO = false;
            tip.textContent = "Turn to player 2";
            p1.textContent = "Player 1: X";
            p2.textContent = "Player 2: O";
            p2.setAttribute("style", "color: #ff0000");
            p1.setAttribute("style", "color: #008000");
        }
        showChessboard();
    }
}
// 落子
// 先手后手规则：第一局o为先手，后面赢得先手。平局轮流先手
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
        step++;
    }
    // player1下完时，轮到p2，pOnePlay是false
    if (checkBoard("X") || checkBoard("O")) {
        if (!pOnePlay) {
            showGameOver("Player 1 is the winner!");
            // p1胜出时判断：开始游戏时p1选的是o还是x，若是o第一子从o开始，若p1选的是x，第一子应为x
            if (!pOneChooseO) {
                chooseO = false;
            } else {
                chooseO = true;
            }
            //赢了下一局先手
            pOnePlay = true;
        } else {
            showGameOver("Player 2 is the winner!");
            // p2与p1相反
            if (pOneChooseO) {
                chooseO = false;
            } else {
                chooseO = true;
            }
            pOnePlay = false;
        }
        return true;
    }
    if (step == 9) {
        showGameOver("Draw!");
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
// 检查棋盘判断胜负
function checkBoard(xo) {
    if (chessList[0].textContent == xo && chessList[1].textContent == xo && chessList[2].textContent == xo) {
        return true;
    }
    if (chessList[3].textContent == xo && chessList[4].textContent == xo && chessList[5].textContent == xo) {
        return true;
    }
    if (chessList[6].textContent == xo && chessList[7].textContent == xo && chessList[8].textContent == xo) {
        return true;
    }
    if (chessList[0].textContent == xo && chessList[3].textContent == xo && chessList[6].textContent == xo) {
        return true;
    }
    if (chessList[1].textContent == xo && chessList[4].textContent == xo && chessList[7].textContent == xo) {
        return true;
    }
    if (chessList[2].textContent == xo && chessList[5].textContent == xo && chessList[8].textContent == xo) {
        return true;
    }
    if (chessList[0].textContent == xo && chessList[4].textContent == xo && chessList[8].textContent == xo) {
        return true;
    }
    if (chessList[2].textContent == xo && chessList[4].textContent == xo && chessList[6].textContent == xo) {
        return true;
    }
}