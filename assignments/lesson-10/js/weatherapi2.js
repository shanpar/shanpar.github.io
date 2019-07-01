let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=25f95d7b36b3ee23a983accb3604e8ae";
weatherRequest.open("GET", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  document.getElementById("current-temp").innerHTML = weatherData.main.temp;
  var icon =
    "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  var desc = weatherData.weather[0].description;

  document.getElementById("currentImg").setAttribute("src", icon);
  document.getElementById("currentImg").setAttribute("description", desc);
};
