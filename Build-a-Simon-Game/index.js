var wrap = document.querySelector(".wrap");
var keyboard = document.querySelectorAll(".color");
var audio1 = document.querySelector("#audio1");
var count = document.querySelector(".countScreen");
var strict = document.querySelector(".strict");
var stricttip = document.querySelector(".stricttip");
// 严格模式，默认关闭
var strictOn = false;
// 游戏默认状态为关闭
var gameOn = false;
var on_off = document.querySelector(".on-off");
var startBtn = document.querySelector(".start");



on_off.addEventListener("click", gameOnOff);

function play(e) {
    var target = e.target;
    if (target.className == "color") {
        if (target.id == "red") {
            // 按下变色，一段时间后恢复
            target.setAttribute("style", "background-color:#ff0000");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#f05221");

            }, 300);
            audio1.play();
        }
        if (target.id == "green") {
            target.setAttribute("style", "background-color:#a4f502");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#7cbb00;");

            }, 300);
            audio2.play();
        }
        if (target.id == "yellow") {
            target.setAttribute("style", "background-color:yellow");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#ffb902;");

            }, 300);
            audio3.play();
        }
        if (target.id == "blue") {
            target.setAttribute("style", "background-color:#0000ff;");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#00a5f0;");

            }, 300);
            audio4.play();
        }
    }
}
// 错误提示音
function errorAudio() {
    audio3.play();
    audio2.play();
}
// 打开扇形按键功能,开始游戏
function gameStart() {
    reset();
    wrap.addEventListener("click", play);
    for (var i = 0; i < keyboard.length; i++) {
        keyboard[i].setAttribute("style", "cursor: pointer")
    }
    //--闪烁效果
    count.setAttribute("style", "color: #ff0000;");
    setTimeout(() => {
        count.setAttribute("style", "color: #990000;");
    }, 200);
    setTimeout(() => {
        count.setAttribute("style", "color: #ff0000;");
    }, 600);
    setTimeout(() => {
        count.setAttribute("style", "color: #990000;");
    }, 800);
    setTimeout(() => {
        count.setAttribute("style", "color: #ff0000;");
    }, 1000);
}

// 重置
function reset() {
    count.textContent = "- -";
    // 计数器变暗
    count.setAttribute("style", "color: #990000;");
}

//strict严格模式开关
function strictOnOff() {
    if (!strictOn) {
        stricttip.setAttribute("style", "background-color: #ff0000");
        strictOn = true;
    } else {
        strictOn = false;
        stricttip.setAttribute("style", "background-color: #000");
    }
}
// 禁用按键
function disable() {
    wrap.removeEventListener("click", play)
    startBtn.removeEventListener("click", gameStart);
    strict.removeEventListener("click", strictOnOff);
    for (var i = 0; i < keyboard.length; i++) {
        keyboard[i].setAttribute("style", "cursor: normal")
    };
}
// 总开关。重置游戏
function gameOnOff() {
    if (!gameOn) {
        on_off.setAttribute("style", "text-align: right;");
        startBtn.addEventListener("click", gameStart);
        strict.addEventListener("click", strictOnOff);
        gameOn = true;
        // able();
    } else {
        on_off.setAttribute("style", "text-align: left;");
        gameOn = false;
        disable();
        reset();
    }
}