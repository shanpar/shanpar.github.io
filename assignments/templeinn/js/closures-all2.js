var article = document.querySelector("article");
var requestURL =
  "https://raw.githubusercontent.com/shanpar/shanpar.github.io/master/assignments/lesson-12/temple/js/temple.list2.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var data = request.response;
  showData(data);
};
function showData(jsonObj) {
  var towndata = jsonObj["temples"];
  for (var i = 0; i < towndata.length; i++) {
    if (
      towndata[i].name == "Kansas City" ||
      towndata[i].name == "Fort Collins" ||
      towndata[i].name == "Kona" ||
      towndata[i].name == "Boston"
    ) {
      var string = "";
      for (var j = 0; j < towndata[i].name.length; j++) {
        if (towndata[i].name.charAt(j) != " ") {
          string += towndata[i].name.charAt(j);
        }
      }
      console.log(string);

      var townname = document.getElementById(string);
      var myul = document.createElement("ul");
      townname.appendChild(myul);
      var mydiv = document.createElement("div");
      var myul = document.createElement("ul");
      var myli = document.createElement("li");

      var dates = towndata[i].closures;
      for (var k = 0; k < dates.length; k++) {
        var myli = document.createElement("li");
        myli.textContent = dates[k];
        myul.appendChild(myli);
      }
      mydiv.appendChild(myul);

      townname.appendChild(mydiv);
    }
  }
}
