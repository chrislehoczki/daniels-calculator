


import Daniels from "./Daniels";

const daniels = new Daniels();

let element = document.getElementById("holder");
console.log(element);
//STEP 1 - Get vdot
const VDOT = daniels.getVDOT("5k", "16:00");
element.innerHTML = VDOT;

//STEP 2 - Get equivalent race times
const raceTimes = daniels.getRaceTimes(VDOT);
console.log(raceTimes);

//STEP 3 - Get training paces
const trainingZones = daniels.returnTrainingPaces(VDOT);
console.log(trainingZones);

