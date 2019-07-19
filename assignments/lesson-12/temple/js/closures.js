var div = document.getElementById("closures");

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
  var eventData = jsonObj["temples"];

  for (var i = 0; i < eventData.length; i++) {
    if (eventData[i].id == 519188) {
      var myul = document.createElement("ul");

      var dates = eventData[i].closures;
      for (var k = 0; k < dates.length; k++) {
        var myli = document.createElement("li");
        myli.textContent = dates[k];
        myul.appendChild(myli);
      }

      div.appendChild(myul);
    }
  }
}
