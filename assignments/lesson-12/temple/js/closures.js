var div = document.getElementById("closures");

var requestURL =
  "https://github.com/shanpar/shanpar.github.io/blob/master/assignments/lesson-12/temple/js/temple.list2.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var data = request.response;
  showData(data);
};
function showData(jsonObj) {
  var eventData = jsonObj["templeClosures"];

  for (var i = 0; i < eventData.length; i++) {
    if (eventData[i].id == 707860) {
      var myul = document.createElement("ul");

      var events = eventData[i].dates;
      for (var k = 0; k < dates.length; k++) {
        var myli = document.createElement("li");
        myli.textContent = events[k];
        myul.appendChild(myli);
      }

      div.appendChild(myul);
    }
  }
}
