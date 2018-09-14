var key = document.querySelector(".key");
var screen = document.querySelector(".screen");
var ans;
var flag = false;

key.addEventListener("click", calculate);

function calculate(e) {
    var screentext = "";
    var target = e.target;
    if (target.id == "keyList") {
        // 点到空白阻止事件
        e.preventDefault();
        return false;
    }
    switch (target.textContent) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            if (flag) {
                // 按下=时，在下次输入前清空屏幕
                screen.innerHTML = "";
                flag = false;
            }
            screen.innerHTML += target.textContent;
            break;
        case "AC":
            screen.innerHTML = "";
            break;
        case "CE":
            screentext = screen.innerHTML;
            screen.innerHTML = screentext.slice(0, -1);
            break;
        case "=":
            flag = true;
            console.log(flag);
            if (screen.innerHTML) {
                ans = eval(screen.innerHTML);
                screen.innerHTML = ans;
            }
            break;
        case "Ans":
            if (flag) {
                // 按下=时，在下次输入前清空屏幕
                screen.innerHTML = "";
                flag = false;
            }
            if (ans) {
                screen.innerHTML += "ans";
            }
            break;

        case "%":
            if (screen.innerHTML) {
                var text = screen.innerHTML;
                for (var i = text.length; i >= 0; i--) {
                    if (text[i] == "+" || text[i] == "-" || text[i] == "*" || text[i] == "/") {
                        break;
                    }
                }

                var num = text.slice(i + 1) / 100;
                console.log(num);
                screen.innerHTML = text.slice(0, i + 1) + num;
            }
            break;
    }
}