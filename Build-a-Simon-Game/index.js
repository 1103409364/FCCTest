var wrap = document.querySelector(".wrap");
var keyboard = document.querySelectorAll(".color");
var count = document.querySelector(".countScreen");
var strict = document.querySelector(".strict");
var stricttip = document.querySelector(".stricttip");
// 严格模式，默认关闭
var strictOn = false;
// 游戏默认状态为关闭
var gameOn = false;
var on_off = document.querySelector(".on-off");
var startBtn = document.querySelector(".start");
// 玩家按下按键时生成数组
var playerArr = [];


on_off.addEventListener("click", gameOnOff);
//玩家按下按键
function play(e) {
    var target = e.target;
    if (target.className == "color") {
        if (target.id == "red") {
            // 按下变色，一段时间后恢复
            target.setAttribute("style", "background-color:#ff0000");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#f05221");

            }, 300);
            audio0.play();
            // 记录按下的键，放进数组
            playerArr.push(0);
        }
        if (target.id == "green") {
            target.setAttribute("style", "background-color:#a4f502");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#7cbb00;");

            }, 300);
            audio1.play();
            playerArr.push(1);
        }
        if (target.id == "yellow") {
            target.setAttribute("style", "background-color:yellow");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#ffb902;");

            }, 300);
            audio2.play();
            playerArr.push(2);
        }
        if (target.id == "blue") {
            target.setAttribute("style", "background-color:#0000ff;");
            setTimeout(() => {
                target.setAttribute("style", "background-color:#00a5f0;");

            }, 300);
            audio3.play();
            playerArr.push(3);
        }
    }
    console.log(playerArr);
}
// 错误提示音
function errorAudio() {
    audio2.play();
    audio1.play();
}
// 打开扇形按键功能,开始游戏
function gameStart() {
    reset();
    var step = 0;
    var rhythmArr = creatRandomArr();
    var intervalId2 = setInterval(function () {
        autoPlay(rhythmArr[step]);
        playerArr = [];
        setTimeout(() => {
            if (checkResult(rhythmArr[step], playerArr)) {
                step++;
            }
        }, 5000);
        //超过5s
        if (step > 20) {
            clearInterval(intervalId2);
            alert("你赢了！！");
            return;
        }
        console.log(rhythmArr[step]);
        console.log(playerArr);

    }, 2000);
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
// 创建20个随机数数组
function creatRandomArr() {
    var rhythmArr = [];
    for (var i = 0; i < 20; i++) {
        var arr = [];
        for (var j = 0; j <= i; j++) {
            arr.push(Math.floor(Math.random() * 4));
        }
        rhythmArr.push(arr);
    }
    return rhythmArr;
}


function aiPlay(num) {
    // disable();??
    if (num === 0) {
        // 按下变色，一段时间后恢复
        red.setAttribute("style", "background-color:#ff0000");
        setTimeout(() => {
            red.setAttribute("style", "background-color:#f05221");

        }, 300);
        audio0.play();
    }
    if (num === 1) {
        green.setAttribute("style", "background-color:#a4f502");
        setTimeout(() => {
            green.setAttribute("style", "background-color:#7cbb00;");

        }, 300);
        audio1.play();
    }
    if (num === 2) {
        yellow.setAttribute("style", "background-color:yellow");
        setTimeout(() => {
            yellow.setAttribute("style", "background-color:#ffb902;");

        }, 300);
        audio2.play();
    }
    if (num === 3) {
        blue.setAttribute("style", "background-color:#0000ff;");
        setTimeout(() => {
            blue.setAttribute("style", "background-color:#00a5f0;");

        }, 300);
        audio3.play();
    }
}

function autoPlay(rhythm) {
    var i = 0;
    var intervalId = setInterval(function () {
        if (i < rhythm.length) {
            aiPlay(rhythm[i]);
        } else {
            clearInterval(intervalId);
            return 0;
        }
        i++
    }, 1000)
}
//比较数组是否相同
function checkResult(arr1, arr2) {
    return arr1.toString() == arr2.toString();
}