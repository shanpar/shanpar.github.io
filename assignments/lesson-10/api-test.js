var weatherObj = new XMLHttpRequest();
weatherObj.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?cityid=,us&apid=25f95d7b36b3ee23a983accb3604e8ae,true"
);
weatherObj.send();
weatherObj.onload = function() {
  var jsonRespObj = JSON.parse(weatherObj.responseText);
  console.log(jsonRespObj);
};
