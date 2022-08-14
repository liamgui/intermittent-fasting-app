var times = JSON.parse(localStorage.getItem("time"));

for (var i in times) {
}


var reset = document.getElementById("reset");

reset.addEventListener("click", resetTimes, false);


function resetTimes() {
    localStorage.removeItem("times");
}

var goalHours = []
for(let i=0; i<=30; i++) {
    goalHours.push(i);
}
console.log(goalHours);

// goalNumber.innerHTML = goal;


$("#input-5").AnyPicker(
{
  mode: "select",
  onSetOutput: function (sOutput, oSelectedValues) {
    let goal = oSelectedValues.values[0].val;
    console.log(goal);
    localStorage.setItem("goal", goal);
  },
  components: [
  {
    component: 0,
    name: "goal",
    label: "Goal"
  }],

  dataSource: [
  {
    component: 0,
    data: [
    {
      val: "1",
      label: "1"
    },
    {
      val: "2",
      label: "2"
    },
    {
      val: "3",
      label: "3"
    },
    {
      val: "4",
      label: "4"
    },
    {
      val: "5",
      label: "5"
    },
    {
      val: "6",
      label: "6"
    },
    {
      val: "7",
      label: "7"
    },
    {
      val: "8",
      label: "8"
    },
    {
      val: "9",
      label: "9"
    },
    {
      val: "10",
      label: "10"
    },
    {
      val: "11",
      label: "11"
    },
    {
      val: "12",
      label: "12"
    },
    {
      val: "13",
      label: "13"
    },
    {
      val: "14",
      label: "14"
    },
    {
      val: "15",
      label: "15"
    },
    {
      val: "16",
      label: "16"
    },
    {
      val: "17",
      label: "17"
    },
    {
      val: "18",
      label: "18"
    },
    {
      val: "19",
      label: "19"
    },
    {
      val: "20",
      label: "20"
    },
    {
      val: "21",
      label: "21"
    },
    {
      val: "22",
      label: "22"
    },
    {
      val: "23",
      label: "23"
    },
    {
      val: "24",
      label: "24"
    },
    {
      val: "25",
      label: "25"
    },
    {
      val: "26",
      label: "26"
    },
    {
      val: "27",
      label: "27"
    },
    {
      val: "28",
      label: "28"
    },
    {
      val: "29",
      label: "29"
    },
    {
      val: "30",
      label: "30"
    }]
  }],
  select: 18
     

});



//SERVICE WORKER! ACTIVATE!!

if ('serviceWorker' in navigator) {
             navigator.serviceWorker.register('./sw.js').then(function(){console.log('Service Worker Registered');});}

