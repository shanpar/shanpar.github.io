let kansasRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=4273837&units=imperial&APPID=25f95d7b36b3ee23a983accb3604e8ae";
kansasRequest.open("GET", apiURLstring, true);
kansasRequest.send();

kansasRequest.onload = function() {
  var weatherData = JSON.parse(kansasRequest.responseText);
  console.log(weatherData);

  document.getElementById("kansascurrently").innerHTML =
    weatherData.weather[0].main;
  document.getElementById("kansastemp").innerHTML = weatherData.main.temp;
  document.getElementById("kansaswindSpeed").innerHTML = weatherData.wind.speed;

  var tempF = parseInt(document.getElementById("kansastemp").innerHTML);
  var speed = parseInt(document.getElementById("kansaswindSpeed").innerHTML);
  var chill = windChill(weatherData.main.temp, weatherData.wind.speed);

  var digits = 2;
  var multiplier = Math.pow(10, digits);
  chill = Math.round(chill * multiplier) / multiplier;
  document.getElementById("kansaswindchill").innerHTML = chill;

  function windChill(tempF, speed) {
    result =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16);
    return result;
  }
  document.getElementById("kansaswindchill").innerHTML = chill;
  document.getElementById("kansashumidity").innerHTML =
    weatherData.main.humidity;
};

//Fort Collins
let collinsRequest = new XMLHttpRequest();
let apiURLstring2 =
  "https://api.openweathermap.org/data/2.5/weather?id=5577147&units=imperial&APPID=25f95d7b36b3ee23a983accb3604e8ae";
collinsRequest.open("GET", apiURLstring2, true);
collinsRequest.send();

collinsRequest.onload = function() {
  var weatherData = JSON.parse(collinsRequest.responseText);
  console.log(weatherData);

  document.getElementById("collinscurrently").innerHTML =
    weatherData.weather[0].main;
  document.getElementById("collinstemp").innerHTML = weatherData.main.temp;
  document.getElementById("collinswindSpeed").innerHTML =
    weatherData.wind.speed;

  var tempF = parseInt(document.getElementById("collinstemp").innerHTML);
  var speed = parseInt(document.getElementById("collinswindSpeed").innerHTML);
  var chill = windChill(weatherData.main.temp, weatherData.wind.speed);

  var digits = 2;
  var multiplier = Math.pow(10, digits);
  chill = Math.round(chill * multiplier) / multiplier;
  document.getElementById("collinswindchill").innerHTML = chill;

  function windChill(tempF, speed) {
    result =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16);
    return result;
  }
  document.getElementById("collinswindchill").innerHTML = chill;
  document.getElementById("collinshumidity").innerHTML =
    weatherData.main.humidity;
};

//Kona

let konaRequest = new XMLHttpRequest();
let apiURLstring3 =
  "https://api.openweathermap.org/data/2.5/weather?id=5847504&units=imperial&APPID=25f95d7b36b3ee23a983accb3604e8ae";
konaRequest.open("GET", apiURLstring3, true);
konaRequest.send();

konaRequest.onload = function() {
  var weatherData = JSON.parse(konaRequest.responseText);
  console.log(weatherData);

  document.getElementById("konacurrently").innerHTML =
    weatherData.weather[0].main;
  document.getElementById("konatemp").innerHTML = weatherData.main.temp;
  document.getElementById("konawindSpeed").innerHTML = weatherData.wind.speed;

  var tempF = parseInt(document.getElementById("konatemp").innerHTML);
  var speed = parseInt(document.getElementById("konawindSpeed").innerHTML);
  var chill = windChill(weatherData.main.temp, weatherData.wind.speed);

  var digits = 2;
  var multiplier = Math.pow(10, digits);
  chill = Math.round(chill * multiplier) / multiplier;
  document.getElementById("konawindchill").innerHTML = chill;

  function windChill(tempF, speed) {
    result =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16);
    return result;
  }
  document.getElementById("konawindchill").innerHTML = chill;
  document.getElementById("konahumidity").innerHTML = weatherData.main.humidity;
};

//Boston

let bostonRequest = new XMLHttpRequest();
let apiURLstring4 =
  "https://api.openweathermap.org/data/2.5/weather?id=4317656&units=imperial&APPID=25f95d7b36b3ee23a983accb3604e8ae";
bostonRequest.open("GET", apiURLstring4, true);
bostonRequest.send();

bostonRequest.onload = function() {
  var weatherData = JSON.parse(bostonRequest.responseText);
  console.log(weatherData);

  document.getElementById("bostoncurrently").innerHTML =
    weatherData.weather[0].main;
  document.getElementById("bostontemp").innerHTML = weatherData.main.temp;
  document.getElementById("bostonwindSpeed").innerHTML = weatherData.wind.speed;

  var tempF = parseInt(document.getElementById("bostontemp").innerHTML);
  var speed = parseInt(document.getElementById("bostonwindSpeed").innerHTML);
  var chill = windChill(weatherData.main.temp, weatherData.wind.speed);

  var digits = 2;
  var multiplier = Math.pow(10, digits);
  chill = Math.round(chill * multiplier) / multiplier;
  document.getElementById("bostonwindchill").innerHTML = chill;

  function windChill(tempF, speed) {
    result =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16);
    return result;
  }
  document.getElementById("bostonwindchill").innerHTML = chill;
  document.getElementById("bostonhumidity").innerHTML =
    weatherData.main.humidity;
};
