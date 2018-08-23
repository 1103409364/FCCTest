var allico = document.querySelector("#allico");
var onlineico = document.querySelector("#onlineico");
var offlineico = document.querySelector("#offlineico");
var status1 = document.querySelector(".status"); //status保留字?
var StatusDiv = document.querySelector("showStatus");

function statusSelect(e) {
    var target = e.target;
    //先隐藏所有状态提示,再设置target的class为其id值
    allico.setAttribute("class", "allicoHide");
    onlineico.setAttribute("class", "onlineicoHide");
    offlineico.setAttribute("class", "offlineicoHide");
    if (target.getAttribute("class").match(/hide/i)) {
        target.setAttribute("class", target.getAttribute("id"));
    }
};

status1.addEventListener("click", statusSelect);

var urlId = ["45877376", "79776140", "30816637"];//分别是三个频道的频道号
const slientId = 'p9fd57fsgdtsn02n8yun1hvzfi8yxk';
function makeUrl(type, id) {
    return 'https://api.twitch.tv/kraken/' + type + '/' + id;
};

function getChannels() {
    for (let i in urlId) {
        $.ajax({
            type: "get",
            url: makeUrl('streams', urlId[i]),
            datatype: 'JSONP',
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': slientId
            },
            success: function (data) {
                console.log(data);
                if (data.stream == null) {
                    var status = false;
                } else {
                    var status = true;
                };
                $.ajax({
                    type: "get",
                    url: makeUrl('channels', urlId[i]),
                    headers: {
                        'Accept': 'application/vnd.twitchtv.v5+json',
                        'Client-ID': slientId
                    },
                    datatype: 'JSONP',
                    success: function (data) {
                        var statusStr = (status) ? 'online' : 'offline';
                        var html = '<div class="all ' + statusStr + '"><div class="imgBox"><img src="' + data.logo + '" /></div><div class="link"><a target="_blank" href="' + data.url + '">' + data.name + '</a></div><div><p class="des">' + data.description + '</p></div></div>';
                        statusStr == 'online' ? $("#display").prepend(html) : $("#display").append(html);
                    }
                });
            }
        })
    }

}

getChannels();

function createP(data) {
    var p = createElement("p");
    p.innerHTML = data.xxx;
    StatusDiv.appendChile("p");
}

$(function () {
    $('#allico').click(function () {
        $('#display > div.all').show();
    });
    $('#onlineico').click(function () {
        $('#display > div.all').hide();
        $('#display > div.online').show();
    });
    $('#offlineico').click(function () {
        $('#display > div.all').hide();
        $('#display > div.offline').show();
    });
});