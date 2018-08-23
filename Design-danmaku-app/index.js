
var sent = document.getElementById("sent")
var clear = document.getElementById("clear")
var inputBox = document.getElementById("inputBox")
var board = document.getElementById("danmaku")
function draw(text) {
    var danmaku = document.createElement("p")
    var textNode = document.createTextNode(text)
    var boardHeight = board.offsetHeight
    var boardWidth = board.offsetWidth
    var left = boardWidth - 10
    // 弹幕位置随机，-20防止出界
    var top = Math.random() * (boardHeight - 20)
    var speed = 0
    danmaku.appendChild(textNode)
    console.log(danmaku.offsetWidth)

    // 弹幕颜色，随机数 rgb值只能用整数
    var textColor = "color:rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ");font-weight:bold;"
    danmaku.setAttribute("style", textColor + "position:absolute; left:" + left + "px;" + "top:" + top + "px")
    board.appendChild(danmaku)

    // 让弹幕动起来
    if (left >= -100) {
        moveId = setInterval(function () {
            // 监听窗口大小改变事件
            window.onresize = function () {
                boardWidth = board.offsetWidth
                left = boardWidth - 10
            }

            // 弹幕到达左边界的时候，回到右边重新开始跑
            if (left <= -90) {
                left = boardWidth - 10
                speed = 0
                top = Math.random() * (boardHeight - 20)
            }
            if (speed < 10) {
                speed += 0.05
            }
            left -= speed
            var style = textColor + "position:absolute; left:" + left + "px;" + "top:" + top + "px";
            danmaku.setAttribute("style", style)
        }, 20)
    }
}

function getText() {
    if (inputBox.value) {
        var text = inputBox.value
        inputBox.value = ""
        return text
    }

}

function clearBoard() {
    board.innerHTML = ""
    clearInterval(moveId)
}

clear.onclick = function () {
    clearBoard()
}

sent.onclick = function () {
    var text = getText()
    // 判断输入不为空时发送弹幕
    if (text) {
        draw(text)
    }
}
//监听回车键
document.onkeydown = function (event) {
    // console.log(event.keyCode)
    if (event.keyCode == 13) {
        var text = getText()
        // 判断输入不为空时发送弹幕
        if (text) {
            draw(text)
        }
    }
}
