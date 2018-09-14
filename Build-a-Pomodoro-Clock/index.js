var circle = document.querySelector(".circle");
var leftMinus = document.querySelector(".leftMinus");
var leftAdd = document.querySelector(".leftAdd");
var rightMinus = document.querySelector(".rightMinus");
var rightAdd = document.querySelector(".rightAdd");
var countdown = document.querySelector(".countdown");

var breakLength = document.querySelector(".breakLength");
var sessionLength = document.querySelector(".sessionLength");

var state = document.querySelector(".state");

var back = document.querySelector(".back");
var startdown = false;
var intervalintervalId;
var i = 348;
// 倒计时分钟数
var smin = sessionLength.textContent;
var bmin = breakLength.textContent;

var time = "";
var m, s, t;
// 完成过度动画的时长
var timeLength;
// 背景颜色初始化
var color = "background-color:#399951;";

var session = true;


circle.addEventListener("click", start);
// 控制左边breaklength
leftMinus.addEventListener("click", setMinusBreak);
leftAdd.addEventListener("click", setAddBreak);
// 控制右边的sessionLength
rightMinus.addEventListener("click", setMinusSession);
rightAdd.addEventListener("click", setAddSession);

function start() {
    if (!startdown) {
        smin = sessionLength.textContent;
        bmin = breakLength.textContent;
        // 处于初始状态，上边距为348时，才需要设置开始倒计时的时间
        if (session && i == 348) {
            min = smin;
            timeLength = smin;
        } else if (!session && i == 348) {
            min = bmin;
            timeLength = bmin;
        }
        t = min * 60;
        intervalId = setInterval(function () {
            // 保当前的时间t到min中，暂停重启时从这个时间点开始倒计时
            min = t / 60;
            if (t > 0) {
                t--;
                m = Math.floor(t / 60);
                s = t % 60;
                if (s < 10) {
                    s = "0" + s;
                }
                countdown.innerHTML = m + ":" + s;
                console.log(timeLength);
                i -= 348 / (timeLength * 60);
                // console.log(i);
                back.setAttribute("style", "margin-top:" + i + "px;" + color);
            } else {
                // 倒计时完成时
                // 重置背景改变背景颜色,
                // 切换状态重设时间；
                i = 348;
                // back.setAttribute("style", "margin-top:" + 348 + "px;");
                //改变session的状态
                session = !session;
                if (session) {
                    min = smin;
                    timeLength = smin;
                    color = "background-color:#399951;";
                    state.innerHTML = "Session";
                } else {
                    min = bmin;
                    timeLength = bmin;
                    // 无效，back.setAttribute("style"...会覆盖之前设置的style的所有属性，改用color变量
                    // back.setAttribute("style", "background-color:green;");
                    color = "background-color:#ff6a6a;";
                    state.innerHTML = "Break";
                }
                t = min * 60;
            }
        }, 1000);
        startdown = true;
    } else if (startdown) {
        clearInterval(intervalId);
        startdown = false;
    }
}

function setMinusBreak() {
    // 当分钟数大于1且倒计时停止且处于break状态时执行
    if (bmin > 1 && !startdown && !session) {
        bmin--;
        breakLength.innerHTML = bmin;
        reset(bmin);
    }
}
function setAddBreak() {
    if (!startdown && !session) {
        bmin++;
        breakLength.innerHTML = bmin;
        reset(bmin);
    }
}


function setMinusSession() {
    // 当分钟数大于1且倒计时停止且处于session状态时执行
    if (smin > 1 && !startdown && session) {
        smin--;
        sessionLength.innerHTML = smin;
        reset(smin);
    }
}
function setAddSession() {
    if (!startdown && session) {
        smin++;
        sessionLength.innerHTML = smin;
        reset(smin);
    }
}
// 当倒计时时长改变时，重置状态
function reset(t) {
    i = 348;
    countdown.innerHTML = t;
    back.setAttribute("style", "margin-top:" + 348 + "px;" + color);
}