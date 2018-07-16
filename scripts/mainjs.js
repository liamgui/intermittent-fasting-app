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
var hour1 = document.getElementById("hour1");
var hour2 = document.getElementById("hour2");
var hour3 = document.getElementById("hour3");
var hour4 = document.getElementById("hour4");
var hour5 = document.getElementById("hour5");
var hour6 = document.getElementById("hour6");
var hour7 = document.getElementById("hour7");
var date1 = document.getElementById("date1");
var date2 = document.getElementById("date2");
var date3 = document.getElementById("date3");
var date4 = document.getElementById("date4");
var date5 = document.getElementById("date5");
var date6 = document.getElementById("date6");
var date7 = document.getElementById("date7");
var button = document.getElementById("button");
var startWord = document.getElementById("startWord");
var seconds;
var minutes;
var hours;
var counting;
var elapsed;
var interval;
var startTime;
var stopTime;
var blockTime;
var times;
var goal = localStorage.getItem("goal");







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
        blockTime = stopTime - startTime;
        storage();
        graphs();
    }
}

function storage() {
    // console.log(startTime);
    // console.log(stopTime);
    // console.log("storage fired");
    // console.log(blockTime);
    function retrieveTimeArrays() {
        if(localStorage.getItem("times") !== null) {
            times = JSON.parse(localStorage.getItem("times"));
            times.push({"id":(times.length), "startTime":startTime, "stopTime":stopTime, "blockTime":blockTime});
            // console.log(times);
            return
        } else {
            times = new Array;
            times = [{"id":0, "startTime":startTime, "stopTime":stopTime, "blockTime":blockTime}];
            // console.log(times);
            return
        }
    }
    retrieveTimeArrays()
    localStorage.setItem("times", JSON.stringify(times));
}


function graphs() {
    var times = JSON.parse(localStorage.getItem("times"));
    var lastTimes = times;
    for(var i in lastTimes) {
        if(lastTimes.length>7) {
            lastTimes.shift();
        }
    }
    if(lastTimes == null) {
        return
    }
    var graphOne = lastTimes[0];
    var graphTwo = lastTimes[1];
    var graphThree = lastTimes[2];
    var graphFour =  lastTimes[3];
    var graphFive = lastTimes[4];
    var graphSix = lastTimes[5];
    var graphSeven = lastTimes[6];
    // console.log(lastTimes);


    // FUNCTION THAT CREATES EACH SEPARE GRAPH!! DON'T TOUCH!
    function createGraphs(graph, hour, date, graphDiv) {
        if (graph == null || graph == undefined) {
            return
        }

        function graphTimes() {
            var hours = (graph.blockTime/3600000);
            if (hours <1) {
            hour.innerHTML = "0hr";
            } else {
                hour.innerHTML = Math.round((graph.blockTime/3600000)*10)/10 + "hr";
            }
        }

        function graphDates() {
            var fastingDate = new Date(graph.stopTime);
            fastingDate = fastingDate.toString();
            // console.log(fastingDate);
            let month = fastingDate.slice(4, 7);

            if (month === "Jan") {
                month = 1;
            } else if (month === "Feb") {
                month = 2;
            } else if (month === "Mar") {
                month = 3;
            } else if (month === "Apr") {
                month = 4;
            } else if (month === "May") {
                month = 5;
            } else if (month === "Jun") {
                month = 6;
            } else if (month === "Jul") {
                month = 7;
            } else if (month === "Aug") {
                month = 8;
            } else if (month === "Sep") {
                month = 9;
            } else if (month === "Oct") {
                month = 10;
            } else if (month === "Nov") {
                month = 11;
            } else if (month === "Dec") {
                month = 12;
            }

            let day = fastingDate.slice(8, 10);

            fastingDate = month + "/" + day;
            // console.log(fastingDate);
            if (month >= 10) {
                date.style.fontSize = "12px";
            }
            date.innerHTML = fastingDate;
        }
        graphTimes();
        graphDates();
    }
    //CALLING THE GRAPHS
    createGraphs(graphOne, hour1, date1, graph1);
    createGraphs(graphTwo, hour2, date2, graph2);
    createGraphs(graphThree, hour3, date3, graph3);
    createGraphs(graphFour, hour4, date4, graph4);
    createGraphs(graphFive, hour5, date5, graph5);
    createGraphs(graphSix, hour6, date6, graph6);
    createGraphs(graphSeven, hour7, date7, graph7);

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
        graphs();
        // if (counting === null) {
        //     // console.log("counting = null");
        //     counting = false;
        //     // console.log("counting = false now");
        // }
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