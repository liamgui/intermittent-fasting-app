//main js
    var chart = document.getElementById("chart");
    var timer = document.getElementById("timer");
    // var hoursRemaining = document.getElementById("hoursRemaining");
    // var anInput = document.getElementById("input-4");
    var graph1 = document.getElementById("graph1");
    var graph2 = document.getElementById("graph2");
    var graph3 = document.getElementById("graph3");
    var graph4 = document.getElementById("graph4");
    var graph5 = document.getElementById("graph5");
    var graph6 = document.getElementById("graph6");
    var graph7 = document.getElementById("graph7");
    var graphOne;
    var graphTwo;
    var graphThree;
    var graphFour;
    var graphFive;
    var graphSix;
    var graphSeven;
    var time1 = document.getElementById("time1");
    var time2 = document.getElementById("time2");
    var time3 = document.getElementById("time3");
    var time4 = document.getElementById("time4");
    var time5 = document.getElementById("time5");
    var time6 = document.getElementById("time6");
    var time7 = document.getElementById("time7");
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
    var averageHours = document.getElementById("averageHours");
    var seconds;
    var minutes;
    var hours;
    var counting;
    var elapsed;
    var interval;
    var startTime;
    // var stopTime;
    var blockTime;
    // var times;
    var goal = localStorage.getItem("goal");
    if (goal == null || goal == undefined) {
        goal = 18;
        localStorage.setItem("goal", 18);
    }
    var goalLine = document.getElementById("goalLine");
    var goalNumber = document.getElementById("goalNumber");
    goalNumber.innerHTML = goal + " hours";
    var lastSevenFasts;
    var editEvents;
    var editEvents2;
    var graphArray = [graph1, graph2, graph3, graph4, graph5, graph6, graph7];
    var editH1 = document.querySelectorAll("#overlayDiv h1")[0];






    function startTimer() {
        var now = Math.floor(Date.now())
        // let startTime = JSON.parse(localStorage.getItem("startTime"));
        var elapsed = now - startTime;
        var elapsedSeconds = elapsed / 1000;
        var elapsedMinutes = elapsed / 60000;
        var elapsedHours = elapsed / 3600000;

        var seconds = Math.floor(elapsedSeconds % 60); // get seconds value (remainder of diff)
        var minutes = Math.floor(elapsedMinutes % 60); // get seconds value (remainder of diff)
        var hours = Math.floor(elapsedHours); // get seconds value (remainder of diff)
        // console.log(seconds);
        interval = setTimeout(startTimer, 100); // set a timeout to update the timer
        hours = checkTime(hours); // add a leading zero if it's single digit
        minutes = checkTime(minutes); // add a leading zero if it's single digit
        seconds = checkTime(seconds); // add a leading zero if it's single digit
        // hours = 01;
        timer.innerHTML = hours + ":" + minutes + ":" + seconds;
        // document.getElementById("timer").innerHTML = (m + ":" + s ); // update the element where the timer will appear
        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        }
        //----------------Progress Bar -------------------------
        let progressBar = document.getElementById("progressBar");
        let pBDiv = document.getElementById("progressBarDiv");

        //this is 100%
        let goalMS = goal * 3600000;
        let xFactor = (elapsed*100)/goalMS;
        progressBar.style.width = xFactor + "%";
        if(xFactor<1) {
            progressBar.style.width = "1%";
        }
        //---------------Projected Goal time ---------------------
        let goalTime = document.getElementById("goalTime");
        let projectedGoalTime = new Date(goalMS + startTime);
        // projectedGoalTime = projectedGoalTime.getTime();
        // console.log(projectedGoalTime);
        function convertTime(date) {
            let hours = date.getHours();
            // console.log(hours);
            let meridiem = "AM";
            if (hours>=13) {
                hours = hours - 12;
                meridiem = "PM";
            }
            if (hours===12) {
                meridiem = "PM";
            }


            let minutes = date.getMinutes();
            function checkTime(i) {
                if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
            }
            minutes = checkTime(minutes);
            // let dateString = hours + ":" + minutes + meridiem;
            return hours + ":" + minutes +" " + meridiem;
        }
        goalTime.innerHTML = convertTime(projectedGoalTime);
        // console.log(progressBar.style.width);
        //-----------------Started Time-------------------------
        let startTimeParagraph = document.getElementById("startTime");
        let startClock = new Date(startTime);
        startTimeParagraph.innerHTML = convertTime(startClock);
        // if ((goal-hours)<0) {
        //     hoursRemaining.innerHTML = 0;
        // } else {
        //     hoursRemaining.innerHTML = goal - hours;
        // }
        //-------------function for converting time to 12 hour periods------------------
        //This should be in a module.. haha


    }

    function endTimer() {
        clearTimeout(interval);
        clearInterval(interval);
    }

    function timerOverlay () {

            let startClock = document.getElementById("startTime");
            startClock.addEventListener("click", function() {
                // console.log(anInput);

                // anInput.style.zIndex = "1000";
                let minStartTime = new Date(startTime);
                let timerOverlay = document.createElement("div");
                document.querySelectorAll("body")[0].appendChild(timerOverlay);
                timerOverlay.style.background = "rgba(255,255,255,0.85)";
                timerOverlay.style.height = "100%";
                timerOverlay.style.width = "100%";
                timerOverlay.style.zIndex = "100";
                timerOverlay.style.position = "absolute";
                timerOverlay.style.top = "0";
                timerOverlay.style.left = "0";
                timerOverlay.style.margin = "0 auto";
                let startTimeH2 = document.createElement("h2");
                startTimeH2.innerHTML = "Start Time";
                timerOverlay.appendChild(startTimeH2);
                startTimeH2.setAttribute("id", "startTimeH2");
                let anInputDiv = document.createElement("div");
                let anInput = document.createElement("input");
                timerOverlay.appendChild(anInputDiv);
                anInputDiv.appendChild(anInput);
                anInputDiv.setAttribute("id", "anInputDiv");
                anInput.setAttribute("type", "text");
                anInput.setAttribute("id", "input-4");
                anInput.readonly = true;
                // anInput.style.display = "inline";
                // anInput.style.zIndex = "1000";

                let checkTime = function() {
                    setTimeout(checkTime, 100);
                    minStartTime = new Date();
                }
                checkTime();
                $("#input-4").AnyPicker(
                {
                  mode: "datetime",
                  // maxValue: new Date(000000),
                  // minValue: minStartTime,
                  selectedDate: new Date(startTime),
                  inputDateTimeFormat: "DDD M/dd h:mm AA",
                  dateTimeFormat:"MMM dd h:mm AA",
                  onSetOutput: function (sOutput, oSelectedValues) {
                        if (oSelectedValues.date.getTime() > minStartTime) {
                            console.log("ok");
                            anInput.style.color = "red";
                            return;   
                        }
                        startTime = oSelectedValues.date;
                        startTime = startTime.getTime();

                        localStorage.setItem("startTime", startTime);
                        document.querySelectorAll("body")[0].removeChild(timerOverlay);
                        // console.log(startDate);

                        // currentlyCounting();
                        // updateOverlayFastingTime(startDate, endDate);
                  }

                });

                timerOverlay.addEventListener("click", function(){document.querySelectorAll("body")[0].removeChild(timerOverlay); })

                // console.log(startTime);

                
            })
    }
    function buttonPress() {
        if (counting === false) {
            startTime = Math.floor(Date.now());

            // var startSeconds = (startTime / 1000); //Get the starting time (right now) in seconds
            // var startMinutes = (startTime / 60000);
            // var startHours = (startTime / 3600000) //Get the starting time (right now) in seconds
            counting = true;
            localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page
            localStorage.setItem("counting", true);
            // console.log(startTime);
            document.getElementById("progressBarDiv").style.visibility = "visible";
            startTimer();
            timerOverlay();
            // }
                    
            startWord.innerHTML = "Stop";
        } else if (counting === true){
            let stopTime = new Date().getTime();
            document.getElementById("progressBarDiv").style.visibility = "hidden";
            startWord.innerHTML = "Start";
            // console.log("stopped");
            endTimer();
            counting = false;
            // console.log("counting = " + counting);
            localStorage.setItem("stopTime", stopTime); // Store it if I want to restart the timer on the next page
            localStorage.setItem("counting", false);
            blockTime = stopTime - startTime;
            // console.log(lastSevenFasts[lastSevenFasts.length]);
            storage(startTime, stopTime);
            let fastingTimes = JSON.parse(localStorage.getItem("times"));
            // debugger;
            if (lastSevenFasts !== null && lastSevenFasts !== undefined) {
                // if (lastSevenFasts[lastSevenFasts.length]) {
                // console.log("hello");
                // let editor = new editDelete();
                let editor = new edit(graphArray[lastSevenFasts.length], fastingTimes.slice(-1)[0]);
                editor.back.style.display = "none";
                // editH1.innerHTML = "Finish";
                // editor;
                // }
            } else if (lastSevenFasts == undefined) {
                let editor = new edit(graphArray[0], fastingTimes[0]);
                editor.back.style.display = "none";
                // editH1.innerHTML = "Finish";
            }
            graphs();
            editDelete();
        }
    }

    function storage(startTime, stopTime) {
        // console.log(startTime);
        // console.log(stopTime);
        // console.log("storage fired");
        // console.log(blockTime);
        let times;
        function retrieveTimeArrays() {
            if(localStorage.getItem("times") !== null) {
                times = JSON.parse(localStorage.getItem("times"));
                var id = parseInt(localStorage.getItem("id"));
                id += 1;
                // console.log(id);
                times.push({"id":(id), "startTime":startTime, "stopTime":stopTime, "blockTime":blockTime});
                localStorage.setItem("id", id);
                // console.log(times);
                return
            } else {
                times = new Array;
                times = [{"id":1, "startTime":startTime, "stopTime":stopTime, "blockTime":blockTime}];
                localStorage.setItem("id", 1);
                // console.log(times);
                return
            }
        }
        retrieveTimeArrays()
        localStorage.setItem("times", JSON.stringify(times));
    }


    function graphs() {
        var times = JSON.parse(localStorage.getItem("times"));
        // console.log(times);
        var lastTimes = times;
        function shiftLastTimes() {
            for(var i in times) {
                if(lastTimes.length>7) {
                    // console.log("shift");
                    lastTimes.shift();
                    shiftLastTimes();
                } else {
                    return
                }
            }
        }
        shiftLastTimes();
        // console.log(lastTimes);
        if(lastTimes == null|| lastTimes == undefined) {
            hour1.innerHTML = "";
            date1.innerHTML = "";
            graph1.style.height = "0px";
            averageHours.innerHTML = "0";
            averageMinutes.innerHTML = "0";
            return
        }
        // for (let i in lastTimes) {
        //     if(lastTimes[i] == undefined || lastTimes[i] == null) {
        //         lastTimes.splice(array.indexOf(lastTimes[i]), 1);
        //         console.log("hello");
        //     }
        // }
        graphOne = lastTimes[0];
        graphTwo = lastTimes[1];
        graphThree = lastTimes[2];
        graphFour =  lastTimes[3];
        graphFive = lastTimes[4];
        graphSix = lastTimes[5];
        graphSeven = lastTimes[6];
        lastSevenFasts = lastTimes;
        // console.log(lastTimes);
        //TEST!!!! UNDO!!!!!!!!
        // graphOne.blockTime = "90920000";
        // graphTwo.blockTime = "40920000";
        // graphThree.blockTime = "50920000";
        // graphFour.blockTime = "70920000";
        // graphFive.blockTime = "65920000";
        // graphSix.blockTime = "65920000";

        var graphHeight = document.getElementsByClassName("graphs")[0].offsetHeight;
        // console.log(graphHeight);
        var xFactor = ((80/100) * graphHeight) / goal;
        // console.log(xFactor);
        var goalHeight = goal * xFactor;
        goalLine.style.bottom = goalHeight + "px";
        // console.log(goalHeight);
        var sevenFastsTotal;
        if (sevenFastsTotal == undefined) {
            sevenFastsTotal = 0;
        }
        // console.log(times);

        // FUNCTION THAT CREATES EACH SEPARE GRAPH!! DON'T TOUCH!
        function createGraphs(graph, hour, date, graphDiv) {
            
            if (graph == null || graph == undefined) {
                // console.log("yes this is undefined");
                //reset the graphDiv
                graphDiv.style.height = "0";
                date.innerHTML = "";
                hour.innerHTML = "";
                averageHours.innerHTML = "0";
                averageMinutes.innerHTML = "0";
                return
            }
            // console.log(graphHeight);
            var hours = Math.round((graph.blockTime/3600000)*10)/10;

            // console.log(hours);
            var hoursHeight = hours * xFactor;
            // console.log(hoursHeight);
            graphDiv.style.height = hoursHeight + "px";
            graphDiv.style.transition = "height 1s ease-in";

            function graphTimes() {
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
                    date.style.fontSize = "13px";
                    // date.style.lineSpacing = "0";
                    // date.style.marginBottom = "0.1em";
                }
                date.innerHTML = fastingDate;
            }
            graphTimes();
            graphDates();
        }
        //CALLING THE GRAPHS
    //creates average
        function getAverage() {
            sevenFastsTotal = 0;
            for (var i in lastTimes) {
                let blockTime = parseInt(lastTimes[i].blockTime);
                sevenFastsTotal += blockTime; 
                // console.log(sevenFastsTotal);
            }
            averageFast = sevenFastsTotal/lastTimes.length;
            // console.log(averageFast + " This is the average fast");
            let minutes = Math.round(averageFast/60000);
            let hours = Math.floor(minutes/60);
            // console.log(minutes);
            // console.log(hours);

            minutes = minutes - (hours*60);
            // console.log(minutes);

            averageHours.innerHTML = hours;
            averageMinutes.innerHTML = minutes;


        }
        
        createGraphs(graphOne, hour1, date1, graph1);
        createGraphs(graphTwo, hour2, date2, graph2);
        createGraphs(graphThree, hour3, date3, graph3);
        createGraphs(graphFour, hour4, date4, graph4);
        createGraphs(graphFive, hour5, date5, graph5);
        createGraphs(graphSix, hour6, date6, graph6);
        createGraphs(graphSeven, hour7, date7, graph7);
        getAverage();
        return

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
            document.getElementById("progressBarDiv").style.visibility = "visible";
            startTime = JSON.parse(localStorage.getItem("startTime"));
            startTimer();
            timerOverlay();
            // console.log(interval);
            return;
        } 
        else if (counting === false) {
            document.getElementById("progressBarDiv").style.visibility = "hidden";
            // console.log("counting = false");
            // endTimer();
            return;
        }
    }

        var graphArray = [graph1, graph2, graph3, graph4, graph5, graph6, graph7]
        var hourArray = [hour1, hour2, hour3, hour4, hour5, hour6, hour7];
        var dateArray = [date1, date2, date3, date4, date5, date6, date7];
        let graphChart = document.getElementsByClassName("graphChart")[0];
        // console.log(graphChart);
        var graphDivs = document.getElementsByClassName("graphDiv");
        var edito;
    function editDelete () {

        edito = function editor(event) {
            // console.log(event.target);
            // console.log(event.target.childNodes[1].innerHTML);
            var target = event.target;
            for (let i in graphDivs) {
                // console.log(graphDivs[i]);
                if (target === graphDivs[i] && target.style.height !== "0px") {
                    edit(target.id, lastSevenFasts[i]);
                    // console.log("bingo");
                    return;
                } else if ((target === hourArray[i] || target === dateArray[i]) && target.innerHTML !== ""){
                    edit(target.id, lastSevenFasts[i]);
                    // console.log("bingo");
                    return;
                } else if (target === document.getElementsByClassName("times")[i] && target.childNodes[1].innerHTML !== "") {
                    edit(target.id, lastSevenFasts[i]);
                    // console.log("bingo");
                    return;

                }
            }
            // console.log("editor");
            
        }
        
        // console.log(lastSevenFasts);
        graphChart.addEventListener("click", edito, false);




    }
        function edit(graph, fast) {
            graphChart.removeEventListener("click", edito, false);
            // console.log("here");
            var overlayDiv = document.getElementById("overlayDiv");
            overlayDiv.style.display = "block";
            var back = document.getElementById("back");
            this.back = back;
            back.addEventListener("click", function(){
                overlayDiv.style.display = "none"; 
                graphChart.addEventListener("click", edito, false);
                return
            }, false);
            // var editGraph = function(){edit(graph, time, fast)};
            back.style.display = "block";
            let startDate = fast.startTime;
            let endDate = fast.stopTime;
            var blockFast = fast.blockTime;
            let hours;
            $("#input-1").AnyPicker(
                {
                  mode: "datetime",
                  selectedDate: new Date(fast.startTime),
                  inputDateTimeFormat: "DDD M/dd h:mm AA",
                  dateTimeFormat:"MMM dd h:mm AA",
                  onSetOutput: function (sOutput, oSelectedValues) {
                        startDate = oSelectedValues.date;
                        startDate = startDate.getTime();
                        console.log(startDate); 
                        updateOverlayFastingTime(startDate, endDate);
                  }

                });
            $("#input-2").AnyPicker(
                {
                  mode: "datetime",
                  selectedDate: new Date(fast.stopTime),
                  inputDateTimeFormat: "DDD M/dd h:mm AA",
                  dateTimeFormat:"MMM dd h:mm AA",
                  onSetOutput: function (sOutput, oSelectedValues) 
                      {
                        endDate = oSelectedValues.date; 
                        endDate = endDate.getTime(); 
                        updateOverlayFastingTime(startDate, endDate);

                      }


                });


            updateOverlayFastingTime(startDate, endDate);
            // startDate.addEventListener("change", function() {console.log("call"); updateFastingTime()}, false);
            function updateOverlayFastingTime(startDate, endDate) {
                let fastingTime = document.getElementById("fastingTime");
                function blockFast(startDate, endDate) {
                    blockFast = endDate - startDate;
                    if (blockFast < 0) {
                        hours = 0;
                        
                    } else {
                    hours = Math.round((blockFast/3600000)*10)/10;
                    }    
                }
                blockFast(startDate, endDate);
                fastingTime.innerHTML = hours;
                if (hours != 1) {
                    fastingTime.innerHTML = hours + " hours";
                } else {
                    fastingTime.innerHTML = hours + " hour";
                } 
                    
            }

            let overlayGoal = document.getElementById("overlayGoal");
            overlayGoal.innerHTML = JSON.parse(localStorage.getItem("goal")) + " hours";
            
            var deleteButton = document.getElementById("delete");
            deleteButton.addEventListener("click", function () {deleteFunction(graph, fast)}, false);
                editH1.innerHTML = "Edit";
            var saveButton = document.getElementById("save");
            saveButton.addEventListener("click", function () {
                let times = JSON.parse(localStorage.getItem("times"));
                let thisFast;
                for (let i in times)
                if(times[i].id == fast.id) {
                    thisFast = times[i];
                }
                thisFast.startTime = startDate;
                thisFast.stopTime = endDate;
                thisFast.blockTime = endDate - startDate;
                if (thisFast.blockTime < 0) {
                    thisFast.blockTime = 0
                }
                // console.log(thisFast.startTime + " + " + thisFast.stopTime + " + " + thisFast.blockTime);
                localStorage.setItem("times", JSON.stringify(times));
                overlayDiv.style.display = "none";
                let overlayContainer = document.getElementById("overlayContainer");
                overlayDivNew = overlayDiv.cloneNode(true);
                overlayContainer.removeChild(overlayDiv);
                overlayContainer.appendChild(overlayDivNew);
                overlayDiv = overlayDivNew;
                overlayDiv.style.display = "none";
                editH1.innerHTML = "Edit";
                timer.innerHTML = "--:--:--";
                graphs();
                editDelete();
            }, false);
        }

        function deleteFunction(graph, fast) {
            // console.log(graph);
            var times = JSON.parse(localStorage.getItem("times"));
            for (let i in times) {
                if (times[i].id == fast.id)
                    times.splice(i, 1);
                    // graphs();
                    // console.log("hello");
            } 
            localStorage.setItem("times", JSON.stringify(times));
            overlayDiv.style.display = "none";
            // console.log(times);
            // console.log(localStorage.getItem("times"));
            //REMOVE EVENTLISTENERS???? HOW!?!?!?!?!?
            if (JSON.parse(localStorage.getItem("times")) == undefined || JSON.parse(localStorage.getItem("times")).length == 0) {
                // console.log("oh boy");
                localStorage.removeItem("times");
                // graph1.style.height = "0px";
                // time1.innerHTML = "";
                //what this is doing is removing all existence of the first graph..

                // return;
            } 

            graphs();
            editDelete();
        }

// function needsToSeePrompt() {
//     if (navigator.standalone) {
//             return false;
//     }
//     return ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
// }

function prompt() {
    if(!navigator.standalone) {
        // console.log("hello");
        let unfocused = document.getElementById("unfocused");
        unfocused.style.display = "block";
        // console.log(unfocused);
        let promptBox = document.getElementById("promptBox");
        unfocused.addEventListener("click", function(event){
            if (event.target !== unfocused) {return}
            else {unfocused.style.display = "none";}
        }, false);
        

        // logo.style.margin = "0 2em"
        promptBox.appendChild(logo);
        promptBox.appendChild(instructionsPic);
        promptBox.appendChild(instructions);







    }    
}

    //INIT FUNCTION

    function init() {

            // if ('serviceWorker' in navigator) {navigator.serviceWorker.register('./sw.js').then(function(){console.log('Service Worker Registered');});}

            // if("serviceWorker" in navigator) {
            //   navigator.serviceWorker
            //   .register(`worker.js`)
            //   .then(registration => {
            //     console.log("SW scope:", registration.scope);
            //   });
            // }

//---------------------------Service worker-------------------------------
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/intermittent_fasting/sw.js').then(function(registration) {
                  // Registration was successful
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                // registration.update();
                }, function(err) {
                  // registration failed :(
                  console.log('ServiceWorker registration failed: ', err);}
                );
            }
//-----------------------------------------------------------------------------

        // let instructionsPic =document.getElementById("instructionsPic");
        // if (['iPhone', 'iPad', 'iPod'].includes(navigator.platform)) {}
        // else {instructionsPic.src = "/img/addToHomeScreenAndroid.png"}

            prompt();
            currentlyCounting();
            graphs();
            editDelete();
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





// redo serviceworker and prompt();