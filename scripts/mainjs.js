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

var button = document.getElementById("button");
var startWord = document.getElementById("startWord");
var currentCount = 0;
var counting = false;
var interval;



function buttonPress() {
    if (counting === false) {
        console.log("started");
        interval = setInterval(count, 1000);
        function count() {
            ++currentCount;
            console.log(currentCount);
            timer.innerHTML = "0:00:0" + currentCount;
            timer.style.textAlign = "center";
            timer.style.fontFamily = "comfortaalight";
            timer.style.color = "#ea7600";
            timer.style.fontSize = "2.8em";
            timer.style.letterSpacing = "0.08em" ;
            timer.style.marginTop = "0.4em";
        }
        startWord.innerHTML = "Stop";
        counting = true;
    } else if (counting === true){
        clearInterval(interval);
        counting = false;
        startWord.innerHTML = "Start";
    }
        

}








//INIT FUNCTION

function init() {
    if (button.addEventListener) {
        button.addEventListener("click", buttonPress, "false");
    } else if (button.attachEvent) {
        button.attachEvent("onclick", buttonPress);
    }
}



//crossbrowser

if (window.addEventListener) {
    window.addEventListener("load", init, "false");
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}