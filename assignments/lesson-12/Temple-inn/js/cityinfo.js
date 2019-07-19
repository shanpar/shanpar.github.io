var header = document.querySelector("header");
var section = document.querySelector("section");
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var data = request.response;
  showData(data);
};
function showData(jsonObj) {
  var towndata = jsonObj["towns"];

  for (var i = 0; i < towndata.length; i++) {
    if (
      towndata[i].name == "Preston" ||
      towndata[i].name == "Fish Haven" ||
      towndata[i].name == "Soda Springs"
    ) {
      var string = "";
      for (var j = 0; j < towndata[i].name.length; j++) {
        if (towndata[i].name.charAt(j) != " ") {
          string += towndata[i].name.charAt(j);
        }
      }
      console.log(string);
      var townname = document.getElementById(string);
      var myH3 = document.createElement("h3");
      myH3.textContent = towndata[i].motto;
      townname.appendChild(myH3);
      var myArticle = document.createElement("article");
      var myH3 = document.createElement("h3");
      var myPara1 = document.createElement("p");
      var myPara2 = document.createElement("p");
      var myPara3 = document.createElement("p");

      myPara1.textContent = "Year Founded: " + towndata[i].yearFounded;
      myPara2.textContent = "Population: " + towndata[i].currentPopulation;
      myPara3.textContent =
        "Average Rainfall: " + towndata[i].averageRainfall + '"';
      myArticle.appendChild(myH3);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      townname.appendChild(myArticle);
    }
  }
}
