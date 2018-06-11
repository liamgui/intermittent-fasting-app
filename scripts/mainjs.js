//main js

var chart = document.getElementById("chart");
var timer = document.getElementById("timer");
var graph1 = document.getElementById("graph1");
var graph2 = document.getElementById("graph2");
var graph3 = document.getElementById("graph3");
var graph4 = document.getElementById("graph4");
var graph5 = document.getElementById("graph5");
var graph6 = document.getElementById("graph6");
var graph7 = document.getElementById("graph7");











function init() {

}



//crossbrowser

if (window.addEventListener) {
    window.addEventListener("load", init, "false");
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}