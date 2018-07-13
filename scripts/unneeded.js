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

var elapsed;
var counter;
var timeMathFloor;
var startMathFloor;
var time;
var start;
var stop;
var interval;

function currentlyCounting () {
    counting === localStorage.getItem("counting");
    if (counting === true) {
        
    }
}



function buttonPress() {
    if (counting === false) {
        var startTime = Math.floor(Date.now());
        // var startSeconds = (startTime / 1000); //Get the starting time (right now) in seconds
        // var startMinutes = (startTime / 60000);
        // var startHours = (startTime / 3600000) //Get the starting time (right now) in seconds
        localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page
        localStorage.setItem("counting", true);
        function startTimer() {
            var now = Math.floor(Date.now())
            var elapsed = now - startTime;
            var elapsedSeconds = elapsed / 1000;
            var elapsedMinutes = elapsed / 60000;
            var elapsedHours = elapsed / 3600000;
             // diff in seconds between now and start
            // var nowSeconds = (now / 1000); // get the time now
            // var nowMinutes = (now / 60000);
            // var nowHours = (now / 3600000);
            // var minutes = Math.floor(diff / 60); // get minutes value (quotient of diff)
            var seconds = Math.floor(elapsedSeconds % 60); // get seconds value (remainder of diff)
            var minutes = Math.floor(elapsedMinutes); // get seconds value (remainder of diff)
            var hours = Math.floor(elapsedHours); // get seconds value (remainder of diff)
            console.log(seconds);
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
        // start = new Date().getTime();
        // startMathFloor = Math.floor(time/1000);
        // console.log("started");
        // elapsed = 0.0
        // console.log(start);
        // interval = setInterval(count, 100);


        // function count() {


        //     // time = new Date().getTime() - start;
        //     // console.log(mathFloor);

        //     time = new Date().getTime();
        //     timeMathFloor = Math.floor(time / 1000) + 1;
        //     console.log(timeMathFloor);
        //     if (timeMathFloor = startMathFloor + 1) {
        //         console.log("tick");
        //         timeMathFloor =+ 1;
        //         seconds += 1;
        //         // console.log(seconds);
        //     }


        //     // console.log("mathFLoor = " + mathFloor);
        //     // SECONDS and actual counting
            // seconds = s;
            
            // if (seconds >= 60) {
            //     console.log("call");
            //     minutes += 1;
            //     seconds = 0;
            //     timer.innerHTML = hours + ":0" + minutes + ":0" + seconds;
            // }
            // if (seconds <= 9) {
            //     timer.innerHTML = hours + ":0" + minutes +":0" + seconds;
            // } else if (seconds >= 10) { 
            //     timer.innerHTML = hours + ":0" + minutes +":" + seconds;
            // } 

            // if (minutes >= 10) {
            //     if (seconds <= 9) {
            //         timer.innerHTML = hours + ":" + minutes +":0" + seconds;
            //     } else if (seconds >= 10) { 
            //         timer.innerHTML = hours + ":" + minutes +":" + seconds;
            //     } 

            // }
            // if (minutes >= 60) {
            //     minutes = 0;
            //     hours += 1;
            //     timer.innerHTML = hours + ":0" + minutes + ":0" + seconds;

            // }
        }

        // function checkTime(i) {
        //     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        //     return i;
        // }
        startTimer();

        // }
                
        startWord.innerHTML = "Stop";
        counting = true;
    } else if (counting === true){
        stop = new Date().getTime();
        console.log("stopped");
        clearInterval(interval);
        clearTimeout(interval);
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
        // class Awaitable { then(resolve) { this.wait(resolve, 16); } }
        // Object.defineProperty(Awaitable.prototype, "wait", {
        //   value: typeof requestAnimationFrame !== "undefined" ?
        //     requestAnimationFrame :
        //     setTimeout,
        //   writeable: true,
        //   configurable: true
        // });

        // let enabled = true;

        // async function count() {
        //   const awaitable = new Awaitable;
        //   const date = new Date;
        //   let prevSec, prevMin, prevH;
        //   while (enabled) {
        //     await awaitable;
        //     date.setTime(Date.now());
        //     const s = String(date.getSeconds()).padStart(2, 0);
        //     const m = String(date.getMinutes()).padStart(2, 0);
        //     const h = String(date.getHours()).padStart(2, 0);
        //     // test whether enough time passed since last update
        //     // useful to avoid needlessly updating DOM elements
        //     if (prevSec === s && prevMin === m && prevH === h) continue;
        //     else prevSec = s, prevMin = m, prevH = h;
        //     // do something like print hh:mm:ss
        //   }
        // }
        // interval = setInterval(count, 100);