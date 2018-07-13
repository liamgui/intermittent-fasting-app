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
var seconds;
var minutes;
var hours;
var counting;
var elapsed;
var interval;
var startTime;
var times;



function startTimer() {
    var now = Math.floor(Date.now())
    var elapsed = now - startTime;
    var elapsedSeconds = elapsed / 1000;
    var elapsedMinutes = elapsed / 60000;
    var elapsedHours = elapsed / 3600000;

    var seconds = Math.floor(elapsedSeconds % 60); // get seconds value (remainder of diff)
    var minutes = Math.floor(elapsedMinutes); // get seconds value (remainder of diff)
    var hours = Math.floor(elapsedHours); // get seconds value (remainder of diff)
    // console.log(seconds);
    interval = setTimeout(startTimer, 100); // set a timeout to update the timer
    hours = checkTime(hours); // add a leading zero if it's single digit
    minutes = checkTime(minutes); // add a leading zero if it's single digit
    seconds = checkTime(seconds); // add a leading zero if it's single digit
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
    // document.getElementById("timer").innerHTML = (m + ":" + s ); // update the element where the timer will appear
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
}

function endTimer() {
    clearTimeout(interval);
    clearInterval(interval);
}

function buttonPress() {
        // console.log("buttonPress");

    if (counting === false) {
        startTime = Math.floor(Date.now());

        // var startSeconds = (startTime / 1000); //Get the starting time (right now) in seconds
        // var startMinutes = (startTime / 60000);
        // var startHours = (startTime / 3600000) //Get the starting time (right now) in seconds
        counting = true;
        localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page
        localStorage.setItem("counting", true);
        // console.log(startTime);
        startTimer();

        // }
                
        startWord.innerHTML = "Stop";
    } else if (counting === true){
        stopTime = new Date().getTime();
        startWord.innerHTML = "Start";
        // console.log("stopped");
        endTimer();
        counting = false;
        // console.log("counting = " + counting);
        localStorage.setItem("stopTime", stopTime); // Store it if I want to restart the timer on the next page
        localStorage.setItem("counting", false);
        storage(startTime, stopTime);

    }
        

}

function storage(startTime, stopTime) {
    console.log(startTime);
    console.log(stopTime);
    var blockTime = startTime - stopTime;
    console.log("storage fired");
    console.log(blockTime);
    function retrieveTimeArrays() {
        if(localStorage.getItem("times") !== null) {
            times = JSON.parse(localStorage.getItem("times"));
            console.log(times);
            return
        } else {
            times = new Array;
            times = [];
            console.log(times);
            return
        }
    }
    function createTimeArrays() {
        retrieveTimeArrays()
//-------------------------FIX THIS!!!!!!!!!!!!!!!!!!!!!!!!
            if (times.length = 0) {
                times.push({"id":0, "startTime":startTime, "stopTime":stopTime, "blockTime":blockTime});
            }
            times.push({"id":(times.length + 1), "startTime":startTime, "stopTime":stopTime, "blockTime":blockTime});
            console.log("now times = " + times);
    }
    createTimeArrays();
    localStorage.setItem("times", JSON.stringify(times));


}

function currentlyCounting () {
    // console.log("is it counting?");
    
    counting = localStorage.getItem("counting");
    // console.log(counting);
    if (counting === "true") {
        counting = true;
    } else {counting = false}

     if (counting === true) {
        // console.log("counting = true");
        startWord.innerHTML = "Stop";
        startTime = localStorage.getItem("startTime");
        startTimer();
        // console.log(interval);
        return;
    } 
    else if (counting === false) {
        // console.log("counting = false");
        // endTimer();
        return;
    }
}



// currentlyCounting();

//INIT FUNCTION

function init() {
        currentlyCounting();
        if (counting === null) {
            // console.log("counting = null");
            counting = false;
            // console.log("counting = false now");
        }
        if (button.addEventListener) {
            button.addEventListener("click", buttonPress, false);
        } else if (button.attachEvent) {
            button.attachEvent("onclick", buttonPress);
        }

}



//crossbrowser

if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}