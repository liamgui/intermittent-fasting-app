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
var seconds = 00;
var minutes = 00;
var hours = 0;
var counting = false;
var interval;
var start = new Date().getTime(),
elapsed = '0.0';



function buttonPress() {
    if (counting === false) {
        console.log("started");
        interval = setInterval(count, 100);
        function count() {
            var time = new Date().getTime() - start;

            elapsed = Math.floor(time / 100) / 10;
            if(Math.round(elapsed) == elapsed) { 
                elapsed += '.0'; 
            }

            seconds = Math.floor(elapsed);

            
            // console.log(elapsed);
            console.log(seconds);
            if (seconds <= 9) {
                timer.innerHTML = hours + ":0" + minutes +":0" + seconds;
            } else if (seconds >= 10) { 
                timer.innerHTML = hours + ":0" + minutes +":" + seconds;
            } 
            if (seconds >= 60) {
                seconds = 0;
                minutes += 1;
                timer.innerHTML = hours + ":0" + minutes + ":0" + seconds;
            }
            if (minutes >= 10) {
                if (seconds <= 9) {
                    timer.innerHTML = hours + ":" + minutes +":0" + seconds;
                } else if (seconds >= 10) { 
                    timer.innerHTML = hours + ":" + minutes +":" + seconds;
                } 

            }
            if (minutes >= 60) {
                minutes = 0;
                hours += 1;
                timer.innerHTML = hours + ":0" + minutes + ":0" + seconds;

            }

        }
                
        startWord.innerHTML = "Stop";
        counting = true;
    } else if (counting === true){
        console.log("stopped");
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