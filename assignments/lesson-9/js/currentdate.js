var newDate = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

document.getElementById("displayDate").innerHTML =
  days[newDate.getDay()] +
  ", " +
  newDate.getDate() +
  " " +
  months[newDate.getMonth()] +
  " " +
  newDate.getFullYear();
