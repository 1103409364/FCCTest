var coordinates = {};
var youLocation = document.querySelector(".location");
var ps = document.querySelectorAll("p");
var h4 = document.querySelectorAll("h4");
var futureWeather = document.querySelector(".futureWeather");
var btn = document.querySelector("button");

function getCoordinates() {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            coordinates.longitude = r.point.lng;
            coordinates.latitude = r.point.lat;
            // console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
            youLocation.innerHTML = "经度:" + coordinates.longitude + "  纬度:" + coordinates.latitude;
            weather(coordinates.longitude, coordinates.latitude);
        }
        else {
            alert('failed' + this.getStatus());
        }
    }, { enableHighAccuracy: true })
}
/*
http://lbsyun.baidu.com/index.php?title=car/api/weather
*/
function weather(longitude, latitude) {
    $.ajax({
        url: "https://api.map.baidu.com/telematics/v3/weather?location=" + longitude + "," + latitude + "&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw",
        dataType: "jsonp",
        jsonpCallback: "admin_cross",
        success: function (data) {
            console.log(data);
            showWeather(data);
        }
    })
}
function showWeather(data) {
    var current = document.querySelector("h1");
    var img = document.querySelectorAll("img");
    current.innerHTML = data.results[0].currentCity + " " + data.results[0].weather_data[0].date;
    futureWeather.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        showFuture(data.results[0].weather_data[i]);
    }
}

function showFuture(data) {

    var container = document.createElement("div");
    var date = document.createElement("h4");
    date.innerHTML = data.date;
    container.appendChild(date);
    var dayPicture = document.createElement("img");
    var nightPicture = document.createElement("img");
    dayPicture.setAttribute("src", data.dayPictureUrl);
    nightPicture.setAttribute("src", data.nightPictureUrl);
    container.appendChild(dayPicture);
    container.appendChild(nightPicture);
    var weather = document.createElement("p");
    var wind = document.createElement("p");
    var temperature = document.createElement("p");
    weather.innerHTML = data.weather;
    wind.innerHTML = data.wind;
    temperature.innerHTML = data.temperature;
    container.appendChild(weather);
    container.appendChild(wind);
    container.appendChild(temperature);
    futureWeather.appendChild(container);
}
getCoordinates();

btn.addEventListener("click", getCoordinates);