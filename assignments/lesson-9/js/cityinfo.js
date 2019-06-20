var header = document.querySelector("header");
var section = document.querySelector("section");
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var data = request.response;
  populateHeader(data);
  showHeroes(data);
};
function populateHeader(jsonObj) {
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["motto"];
  header.appendChild(myH1);
}
function showHeroes(jsonObj) {
  var towndata = jsonObj["towns"];
  for (var i = 0; i < towndata.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");
    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Year Founded: " + towndata[i].yearFounded;
    myPara2.textContent = "Population: " + towndata[i].currentPopulation;
    myPara3.textContent = "Average Rainfall: " + towndata[i].averageRainfall;
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    section.appendChild(myArticle);
  }
}
