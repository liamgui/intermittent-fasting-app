if ('serviceWorker' in navigator) {navigator.serviceWorker.register('./sw.js').then(function(){console.log('Service Worker Registered');});}
let mmClicked = false;
let stClicked = false;
let orClicked = false;


// -----------------Document Declarations and Storage----------------

let resourcesDiv = document.getElementById("resourcesDiv");

let mmImgDiv = document.getElementById("motivatingMomentImgs");
let stImgDiv = document.getElementById("selfTalkImgs");
let otherResourcesLinks = document.getElementById("otherResourcesLinks");
let mmP = document.getElementById("motivatingMomentsP");
let stP = document.getElementById("selfTalksP");
let orP = document.getElementById("otherResourcesP");
let mmUpArrow = document.getElementById("mmUpArrow");
let stUpArrow = document.getElementById("stUpArrow");
let orUpArrow = document.getElementById("orUpArrow");
mmUpArrow.style.display = "inline-block";
stUpArrow.style.display = "inline-block";
orUpArrow.style.display = "inline-block";

let mmImgArray = document.querySelectorAll("#motivatingMomentImgs img");
let stImgArray = document.querySelectorAll("#selfTalkImgs img");

let arrayOfArrays = [mmImgArray, stImgArray];

//------------------Styles to be hidden--------------------
mmImgDiv.style.overflow = "hidden";
stImgDiv.style.overflow = "hidden";
otherResourcesLinks.style.overflow = "hidden";
mmImgDiv.style.height = "0";
stImgDiv.style.height = "0";
otherResourcesLinks.style.height = "0";
mmP.style.marginBottom = "0";
stP.style.marginTop = "0";
stP.style.marginBottom = "0";
orP.style.marginTop = "0";






resourcesDiv.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.id === "motivatingMomentsP" || e.target.id === "mmUpArrow") {

        if (mmClicked === false) {
            mmClicked = true;
            mmImgDiv.style.overflow = "visible";
            mmImgDiv.style.height = "inherit";
            mmP.style.marginBottom = null;
            stP.style.marginTop = null;
            mmUpArrow.style.transform = "rotate(90deg)";
            mmUpArrow.style.webkitTransform = "rotate(90deg)";

        } else if(mmClicked === true) {
            mmClicked = false;
            mmImgDiv.style.overflow = "hidden";
            mmImgDiv.style.height = "0";
            mmP.style.marginBottom = "0";
            stP.style.marginTop = "0";
            mmUpArrow.style.transform = null;
            mmUpArrow.style.webkitTransform = null;
        }
    }
    if(e.target.id === "selfTalksP" || e.target.id === "stUpArrow") {
        if (stClicked === false) {
            stClicked = true;
            stImgDiv.style.overflow = "visible";
            stImgDiv.style.height = "inherit";
            stUpArrow.style.transform = "rotate(90deg)";
            stUpArrow.style.webkitTransform = "rotate(90deg)";

        } else if (stClicked === true){
            stClicked = false;
            stImgDiv.style.overflow = "hidden";
            stImgDiv.style.height = "0";
            stUpArrow.style.transform = null;
            stUpArrow.style.webkitTransform = null;
        }
    }

    if(e.target.id === "otherResourcesP" || e.target.id === "orUpArrow") {
        if(orClicked === false) {
            orClicked = true;
            otherResourcesLinks.style.overflow = "visible";
            otherResourcesLinks.style.height = "inherit";
            orUpArrow.style.transform = "rotate(90deg)";
            orUpArrow.style.webkitTransform = "rotate(90deg)";

        } else if (orClicked === true){
            orClicked = false;
            otherResourcesLinks.style.overflow = "hidden";
            otherResourcesLinks.style.height = "0";
            orUpArrow.style.transform = null;
            orUpArrow.style.webkitTransform = null;
        }
    }
    for(let i=0; i<arrayOfArrays.length; i++) {
        for (let j=0; j<arrayOfArrays[i].length; j++) {
            if(e.target === arrayOfArrays[i][j]) {
                let thisImg = e.target;
                const overlay = document.createElement("div");
                const body = document.getElementById("extraPage");
                overlay.style.background = "black";
                overlay.style.height = "100%";
                overlay.style.width = "100%";
                overlay.style.position = "absolute";
                overlay.style.top = "0";
                overlay.style.left = "0";
                thisImg = thisImg.cloneNode();
                overlay.appendChild(thisImg);
                thisImg.style.position = "absolute";
                thisImg.style.display = "block";
                thisImg.style.width = "100%";
                thisImg.style.marginTop = "auto";
                thisImg.style.marginTop = "50%";
                body.style.overflow = "hidden";


                body.appendChild(overlay);

                overlay.addEventListener("click", function() {body.removeChild(overlay); body.style.overflow = null;
}, false);
            }

        }
    }

    // for
}, true);









    // if (mmClicked === false) {
    //     mmClicked = true;
    //     mmImgDiv.style.overflow = "hidden";
    //     stImgDiv.style.overflow = "hidden";
    //     mmImgDiv.style.height = "0";
    //     stImgDiv.style.height = "0";

    // } else {
    //     mmClicked = false;
    //     mmImgDiv.style.overflow = "visible";
    //     stImgDiv.style.overflow = "visible";
    //     mmImgDiv.style.height = "inherit";
    //     stImgDiv.style.height = "inherit";
    // }