import AirDatepicker from "air-datepicker";

//main js
let chart = document.querySelector("[data-chart]");
let timer = document.querySelector("[data-timer]");

// let hoursRemaining = document.getElementById("hoursRemaining");
// let anInput = document.getElementById("input-4");

const graphElements = document.querySelectorAll("[data-graph]") as NodeListOf<HTMLElement> || [];
const timeElements = document.querySelectorAll("[data-time]");
let hourElements = document.querySelectorAll("[data-hour]");
let dateElements = document.querySelectorAll("[data-date]");
let button = document.querySelector("[data-start]");
let averageHours = document.getElementById("averageHours") as HTMLElement | null;
let averageMinutes = document.getElementById("averageMinutes") as HTMLElement | null;
let counting;
let interval;
let startTime;
// let stopTime;
let blockTime;
// let times;
let goal = parseInt(localStorage.getItem("goal") || "0");
if (!goal) {
	goal = 18;
	localStorage.setItem("goal", goal.toString());
}
let goalLine = document.getElementById("goalLine");
let goalNumber = document.getElementById("goalNumber");
if (goalNumber) {
	goalNumber.innerHTML = goal + " hours";
}
let lastSevenFasts;
let editH1 = document.querySelectorAll("#overlayDiv h1")[0];

function startTimer() {
	let now = Math.floor(Date.now());
	// let startTime = JSON.parse(localStorage.getItem("startTime"));
	let elapsed = now - startTime;
	let elapsedSeconds = elapsed / 1000;
	let elapsedMinutes = elapsed / 60000;
	let elapsedHours = elapsed / 3600000;

	let seconds = Math.floor(elapsedSeconds % 60); // get seconds value (remainder of diff)
	let minutes = Math.floor(elapsedMinutes % 60); // get seconds value (remainder of diff)
	let hours = Math.floor(elapsedHours); // get seconds value (remainder of diff)
	interval = setTimeout(startTimer, 100); // set a timeout to update the timer
	hours = checkTime(hours); // add a leading zero if it's single digit
	minutes = checkTime(minutes); // add a leading zero if it's single digit
	seconds = checkTime(seconds); // add a leading zero if it's single digit
	// hours = 01;
	if (timer) {
		timer.innerHTML = hours + ":" + minutes + ":" + seconds;
	}
	// document.getElementById("timer").innerHTML = (m + ":" + s ); // update the element where the timer will appear
	function checkTime(i) {
		if (i < 10) i = "0" + i; // add zero in front of numbers < 10
		return i;
	}
	//----------------Progress Bar -------------------------
	let progressBar = document.getElementById("progressBar");
	let pBDiv = document.getElementById("progressBarDiv");

	//this is 100%
	let goalMS = goal * 3600000;
	let xFactor = (elapsed * 100) / goalMS;
	if (xFactor < 1) xFactor = 1;
	if (progressBar) progressBar.style.width = xFactor + "%";
	
	//---------------Projected Goal time ---------------------
	let goalTime = document.getElementById("goalTime") as HTMLElement | null;
	let projectedGoalTime = new Date(goalMS + startTime);
	// projectedGoalTime = projectedGoalTime.getTime();
	function convertTime(date) {
		let hours = date.getHours();
		let meridiem = "AM";
		if (hours >= 13) {
			hours = hours - 12;
			meridiem = "PM";
		}
		if (hours === 12) {
			meridiem = "PM";
		}

		let minutes = date.getMinutes();
		function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			} // add zero in front of numbers < 10
			return i;
		}
		minutes = checkTime(minutes);
		// let dateString = hours + ":" + minutes + meridiem;
		return hours + ":" + minutes + " " + meridiem;
	}
	if (goalTime) goalTime.innerHTML = convertTime(projectedGoalTime);
	//-----------------Started Time-------------------------
	let startTimeParagraph = document.getElementById("startTime");
	let startClock = new Date(startTime);
	if (startTimeParagraph) {
		startTimeParagraph.innerHTML = convertTime(startClock);
	}
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

function timerOverlay() {
	let startClock = document.getElementById("startTime") as HTMLElement | null;
	// if (startClock) {
	startClock?.addEventListener("click", function () {

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
		anInput.readOnly = true;
		// anInput.style.display = "inline";
		// anInput.style.zIndex = "1000";

		let checkTime = function () {
			setTimeout(checkTime, 100);
			minStartTime = new Date();
		};
		checkTime();
		const datePicker = new AirDatepicker(anInput);
		// $("#input-4").AnyPicker({
		// 	mode: "datetime",
		// 	// maxValue: new Date(000000),
		// 	// minValue: minStartTime,
		// 	selectedDate: new Date(startTime),
		// 	inputDateTimeFormat: "DDD M/dd h:mm AA",
		// 	dateTimeFormat: "MMM dd h:mm AA",
		// 	onSetOutput: function (sOutput, oSelectedValues) {
		// 		if (oSelectedValues.date.getTime() > minStartTime) {
		// 			anInput.style.color = "red";
		// 			return;
		// 		}
		// 		startTime = oSelectedValues.date;
		// 		startTime = startTime.getTime();

		// 		localStorage.setItem("startTime", startTime);
		// 		document.querySelectorAll("body")[0].removeChild(timerOverlay);

		// 		// currentlyCounting();
		// 		// updateOverlayFastingTime(startDate, endDate);
		// 	},
		// });

		timerOverlay.addEventListener("click", function () {
			document.querySelectorAll("body")[0].removeChild(timerOverlay);
		});

	});
}

//REWRITE this function - clean up
function buttonPress() {
	let progressBar = document.getElementById("progressBar") as HTMLElement | null;
	if (counting === false) {
		startTime = Math.floor(Date.now());

		// let startSeconds = (startTime / 1000); //Get the starting time (right now) in seconds
		// let startMinutes = (startTime / 60000);
		// let startHours = (startTime / 3600000) //Get the starting time (right now) in seconds
		counting = true;
		localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page
		localStorage.setItem("counting", "true");
		if (progressBar) {
			progressBar.style.visibility = "visible";
		}
		startTimer();
		timerOverlay();
		// }
		if (button) button.innerHTML = "Stop Fasting";
	} else if (counting === true) {
		let stopTime = new Date().getTime();
		if (progressBar) progressBar.style.visibility = "hidden";
		if (button) button.innerHTML = "Start Fasting";
		endTimer();
		counting = false;
		localStorage.setItem("stopTime", stopTime.toString()); // Store it if I want to restart the timer on the next page
		localStorage.setItem("counting", "false");
		blockTime = stopTime - startTime;
		storage(startTime, stopTime);
		let fastingTimes = JSON.parse(localStorage.getItem("times") || "[]");
		// debugger;
		if (lastSevenFasts !== null && lastSevenFasts !== undefined) {
			// if (lastSevenFasts[lastSevenFasts.length]) {
			// let editor = new editDelete();
			let editor = new edit(graphElements[lastSevenFasts.length], fastingTimes.slice(-1)[0]);
			editor.back.style.display = "none";
			// editH1.innerHTML = "Finish";
			// editor;
			// }
		} else if (lastSevenFasts == undefined) {
			let editor = new edit(graphElements[0], fastingTimes[0]);
			editor.back.style.display = "none";
			// editH1.innerHTML = "Finish";
		}
		graphs();
		editDelete();
	}
}

function storage(startTime, stopTime) {
	let times;
	function retrieveTimeArrays() {
		if (localStorage.getItem("times") !== null) {
			times = JSON.parse(localStorage.getItem("times") || "[]");
			let id = parseInt(localStorage.getItem("id") || "0");
			id += 1;
			times.push({ "id": id, "startTime": startTime, "stopTime": stopTime, "blockTime": blockTime });
			localStorage.setItem("id", id.toString());
			return;
		} else {
			times = new Array();
			times = [{ "id": 1, "startTime": startTime, "stopTime": stopTime, "blockTime": blockTime }];
			localStorage.setItem("id", "1");
			return;
		}
	}
	retrieveTimeArrays();
	localStorage.setItem("times", JSON.stringify(times));
}

// update visual graphs
function graphs() {
	let times = JSON.parse(localStorage.getItem("times") || "[]");
	let lastTimes = times;
	function shiftLastTimes() {
		for (let i in times) {
			if (lastTimes.length > 7) {
				lastTimes.shift();
				shiftLastTimes();
			} else {
				return;
			}
		}
	}
	shiftLastTimes();
	if (!lastTimes) {
		hourElements[0].innerHTML = "";
		dateElements[0].innerHTML = "";
		graphElements[0].style.height = "0px";
		if (averageHours) averageHours.innerHTML = "0";
		if (averageMinutes) averageMinutes.innerHTML = "0";
		return;
	}
	// for (let i in lastTimes) {
	//     if(lastTimes[i] == undefined || lastTimes[i] == null) {
	//         lastTimes.splice(array.indexOf(lastTimes[i]), 1);
	//     }
	// }

	lastSevenFasts = lastTimes;

	//setting heights
	let graphHeight = document.getElementsByClassName("graphs")[0].offsetHeight;
	let xFactor = ((80 / 100) * graphHeight) / goal;
	let goalHeight = goal * xFactor;
	goalLine.style.bottom = goalHeight + "px";
	let sevenFastsTotal;
	if (sevenFastsTotal == undefined) {
		sevenFastsTotal = 0;
	}

	// FUNCTION THAT CREATES EACH SEPARE GRAPH!! DON'T TOUCH!
	function createGraphs(graph, hour, date, graphDiv) {
		if (graph == null || graph == undefined) {
			//reset the graphDiv
			graphDiv.style.height = "0";
			date.innerHTML = "";
			hour.innerHTML = "";
			averageHours.innerHTML = "0";
			averageMinutes.innerHTML = "0";
			return;
		}
		let hours = Math.round((graph.blockTime / 3600000) * 10) / 10;

		let hoursHeight = hours * xFactor;
		graphDiv.style.height = hoursHeight + "px";
		graphDiv.style.transition = "height 1s ease-in";

		function graphTimes() {
			if (hours < 1) {
				hour.innerHTML = "0hr";
			} else {
				hour.innerHTML = Math.round((graph.blockTime / 3600000) * 10) / 10 + "hr";
			}
		}
		function graphDates() {
			let fastingDate = new Date(graph.stopTime);
			fastingDate = fastingDate.toString();
			
			let month = fastingDate.slice(4, 7);
			let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			month = monthNames.indexOf(month) + 1;
			
			let day = fastingDate.slice(8, 10);

			fastingDate = month + "/" + day;
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
		for (let i in lastTimes) {
			let blockTime = parseInt(lastTimes[i].blockTime);
			sevenFastsTotal += blockTime;
		}
		const averageFast = sevenFastsTotal / lastTimes.length;
		let minutes = Math.round(averageFast / 60000);
		let hours = Math.floor(minutes / 60);

		minutes = minutes - hours * 60;

		averageHours.innerHTML = hours;
		averageMinutes.innerHTML = minutes;
	}
	for (let [index, time] of lastTimes.entries()) {
		createGraphs(time, hourElements[index], dateElements[index], graphElements[index]);
	}

	getAverage();
	return;
}

function currentlyCounting() {

	counting = localStorage.getItem("counting");
	if (counting === "true") {
		counting = true;
	} else {
		counting = false;
	}

	if (counting === true) {
		startWord.innerHTML = "Stop";
		document.getElementById("progressBarDiv").style.visibility = "visible";
		startTime = JSON.parse(localStorage.getItem("startTime"));
		startTimer();
		timerOverlay();
		return;
	} else if (counting === false) {
		document.getElementById("progressBarDiv").style.visibility = "hidden";
		// endTimer();
		return;
	}
}

let graphChart = document.getElementsByClassName("graphChart")[0];
let graphDivs = document.getElementsByClassName("graphDiv");
let edito;
function editDelete() {
	edito = function editor(event) {
		let target = event.target;
		for (let i in graphDivs) {
			if (target === graphDivs[i] && target.style.height !== "0px") {
				edit(target.id, lastSevenFasts[i]);
				return;
			} else if ((target === hourElements[i] || target === dateElements[i]) && target.innerHTML !== "") {
				edit(target.id, lastSevenFasts[i]);
				return;
			} else if (
				target === document.getElementsByClassName("times")[i] &&
				target.childNodes[1].innerHTML !== ""
			) {
				edit(target.id, lastSevenFasts[i]);
				return;
			}
		}
	};

	graphChart.addEventListener("click", edito, false);
}
function edit(graph, fast) {
	graphChart.removeEventListener("click", edito, false);
	let overlayDiv = document.getElementById("overlayDiv");
	overlayDiv.style.display = "block";
	let back = document.getElementById("back");
	this.back = back;
	back.addEventListener(
		"click",
		function () {
			overlayDiv.style.display = "none";
			graphChart.addEventListener("click", edito, false);
			return;
		},
		false
	);
	// let editGraph = function(){edit(graph, time, fast)};
	back.style.display = "block";
	let startDate = fast.startTime;
	let endDate = fast.stopTime;
	let blockFast = fast.blockTime;
	let hours;
	$("#input-1").AnyPicker({
		mode: "datetime",
		selectedDate: new Date(fast.startTime),
		inputDateTimeFormat: "DDD M/dd h:mm AA",
		dateTimeFormat: "MMM dd h:mm AA",
		onSetOutput: function (sOutput, oSelectedValues) {
			startDate = oSelectedValues.date;
			startDate = startDate.getTime();
			updateOverlayFastingTime(startDate, endDate);
		},
	});
	$("#input-2").AnyPicker({
		mode: "datetime",
		selectedDate: new Date(fast.stopTime),
		inputDateTimeFormat: "DDD M/dd h:mm AA",
		dateTimeFormat: "MMM dd h:mm AA",
		onSetOutput: function (sOutput, oSelectedValues) {
			endDate = oSelectedValues.date;
			endDate = endDate.getTime();
			updateOverlayFastingTime(startDate, endDate);
		},
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
				hours = Math.round((blockFast / 3600000) * 10) / 10;
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

	let deleteButton = document.getElementById("delete");
	deleteButton.addEventListener(
		"click",
		function () {
			deleteFunction(graph, fast);
		},
		false
	);
	editH1.innerHTML = "Edit";
	let saveButton = document.getElementById("save");
	saveButton.addEventListener(
		"click",
		function () {
			let times = JSON.parse(localStorage.getItem("times"));
			let thisFast;
			for (let i in times)
				if (times[i].id == fast.id) {
					thisFast = times[i];
				}
			thisFast.startTime = startDate;
			thisFast.stopTime = endDate;
			thisFast.blockTime = endDate - startDate;
			if (thisFast.blockTime < 0) {
				thisFast.blockTime = 0;
			}
			localStorage.setItem("times", JSON.stringify(times));
			overlayDiv.style.display = "none";
			let overlayContainer = document.getElementById("overlayContainer");
			const overlayDivNew = overlayDiv.cloneNode(true);
			overlayContainer.removeChild(overlayDiv);
			overlayContainer.appendChild(overlayDivNew);
			overlayDiv = overlayDivNew;
			overlayDiv.style.display = "none";
			editH1.innerHTML = "Edit";
			timer.innerHTML = "--:--:--";
			graphs();
			editDelete();
		},
		false
	);
}

function deleteFunction(graph, fast) {
	let times = JSON.parse(localStorage.getItem("times"));
	for (let i in times) {
		if (times[i].id == fast.id) times.splice(i, 1);
		// graphs();
	}
	localStorage.setItem("times", JSON.stringify(times));
	overlayDiv.style.display = "none";
	//REMOVE EVENTLISTENERS???? HOW!?!?!?!?!?
	if (
		JSON.parse(localStorage.getItem("times")) == undefined ||
		JSON.parse(localStorage.getItem("times")).length == 0
	) {
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
	if (!window.matchMedia('(display-mode: standalone)').matches) {
		let unfocused = document.querySelector("#unfocused") as HTMLElement;
		if (unfocused) {
			unfocused.style.display = "block";
			let promptBox = document.querySelector("#promptBox");
			unfocused.addEventListener("click", function (event) {
				if (event.target !== unfocused) {
					return;
				} else {
					unfocused.style.display = "none";
				}
			},
			false
			);
			// logo.style.margin = "0 2em"
			promptBox?.appendChild(logo);
			promptBox?.appendChild(instructionsPic);
			promptBox?.appendChild(instructions);
		}
	}
}

//INIT FUNCTION

function init() {

	// ---------------------------Service worker-------------------------------
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./sw.js").then(
			function (registration) {
				// Registration was successful
				console.log("ServiceWorker registration successful with scope: ", registration.scope);
				// registration.update();
			},
			function (err) {
				// registration failed :(
				console.log("ServiceWorker registration failed: ", err);
			}
		);
	}
	// -----------------------------------------------------------------------------

	// let instructionsPic =document.getElementById("instructionsPic");
	// if (['iPhone', 'iPad', 'iPod'].includes(navigator.platform)) {}
	// else {instructionsPic.src = "/img/addToHomeScreenAndroid.png"}
	prompt();
	currentlyCounting();
	graphs();
	editDelete();
	// if (counting === null) {
	//     counting = false;
	// }
	if (button?.addEventListener) {
		button.addEventListener("click", buttonPress, false);
	}
}

//crossbrowser

if (window.addEventListener) {
	window.addEventListener("load", init, false);
}

// redo serviceworker and prompt();
