var weatherRequest = new XMLHttpRequest();
weatherRequest.open(
    "GET","https://api.openweathermap.org/data/2.5/weather?id=5061036&units=imperial&APPID=
3d02e1bbd6894ba8f4cb0e9ed53631c4",true);
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  document.getElementById("curr-city").innerHTML = weatherData.name;
    document.getElementById("curr-temp").innerHTML = weatherData.main.temp;
   
}
// temperatureConverter(weatherData.main.temp);
// function temperatureConverter(tempK) {
//     tempK = parseFloat(tempK);
//     document.getElementById("curr-temp").innerHTML = ((tempK - 32) / 1.8) + 273.15;
//     return;
// };
