//细节还需完善，比如：计算机自动播放时禁止操作

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
// 表示第几个序列
var step = 0;
var rhythmArr;
var timeout = 2000;
// 点击次数
var time = 0;



on_off.addEventListener("click", gameOnOff);
//玩家按下按键
function play(e) {
    var target = e.target;
    // 条件按下的是扇形色块
    if (target.className == "color") {
        time++;
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
        // console.log(playerArr);
        // console.log(rhythmArr[step]);
        // 按对触发下一次
        if (checkResult(rhythmArr[step], playerArr)) {
            step++;
            // 每个序列通过之后重置点击次数
            time = 0;
            count.textContent = step;
            playerArr = [];
            if (step < 20) {
                var timeoutId = timeoutPlay(step, rhythmArr[step]);

            }
        }
        // console.log(rhythmArr[step]);
        // time = 0时已经切换到下一序列
        if (time > 0) {
            if (!isRight(step, time)) {
                time = 0;
                console.log("err");
            }

        }
        // step从0开始
        if (step >= 19) {
            setTimeout(() => {
                count.textContent = "winner!!";
                disable();
            }, 1000);
        }
    }

}
//每次按下扇形按键检测是否按错
function isRight(step, time) {
    // 每点一次判断正误
    console.log(time);
    console.log(step);
    console.log(playerArr[time - 1], rhythmArr[step][time - 1]);

    if (playerArr[time - 1] != rhythmArr[step][time - 1]) {
        // 重置玩家数组
        playerArr = [];
        time = 0;
        // 严格模式,从头开始
        console.log(strictOn);
        if (strictOn) {
            gameStart();
        }
        // 出错时播放音频，重播序列
        errorAudio();
        setTimeout(() => {
            timeoutPlay(step, rhythmArr[step]);
        }, 500);

        return false;
    } else {
        return true;
    }
}
// 错误提示音
function errorAudio() {
    audio2.play();
    audio1.play();
}
// 打开扇形按键功能,开始游戏
function gameStart() {
    reset();
    rhythmArr = creatRandomArr();
    // 游戏开始，创建一组序列
    timeoutPlay(step, rhythmArr[step]);

    able();

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

//一段时间后播放
function timeoutPlay(step, rhythm) {
    // disable();
    var timeout = step * 800 + 1000;
    setTimeout(() => {
        autoPlay(rhythm);
    }, timeout);

}
// 重置
function reset() {
    step = 0;
    playerArr = [];
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
//启用扇形按键
function able() {
    wrap.addEventListener("click", play);
}

// 禁用扇形按键
function disable() {
    wrap.removeEventListener("click", play);
}
// 总开关。重置游戏.启用和禁用start，strict
function gameOnOff() {
    if (!gameOn) {
        on_off.setAttribute("style", "text-align: right;");
        startBtn.addEventListener("click", gameStart);
        strict.addEventListener("click", strictOnOff);

        gameOn = true;
    } else {
        startBtn.removeEventListener("click", gameStart);
        strict.removeEventListener("click", strictOnOff);
        on_off.setAttribute("style", "text-align: left;");
        stricttip.setAttribute("style", "background-color: #000");
        gameOn = false;
        strictOn = false;
        // 禁用扇形按键
        disable();
        reset();
    }
}
// 创建20个长度从1到20的随机数组组成的二维数组
function creatRandomArr() {
    var arr = [];
    var rhythmArr = [];
    for (var i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 4));
    }
    for (var j = 0; j < 20; j++) {
        rhythmArr[j] = arr.slice(0, j + 1);
    }
    return rhythmArr;
}


function aiPlay(num) {
    if (num === 0) {
        // 按下变色，一段时间后恢复
        red.setAttribute("style", "background-color:#ff0000");
        setTimeout(() => {
            red.setAttribute("style", "background-color:#f05221");
        }, 300);
        //播放声音
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
    }, 500)
}
//比较数组是否相同
function checkResult(arr1, arr2) {
    return arr1.toString() == arr2.toString();
}
