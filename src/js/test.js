


import Daniels from "./Daniels";

const daniels = new Daniels();

//STEP 1 - Get vdot
const VDOT = daniels.getVDOT("5k", "16:00");
console.log(VDOT);
//STEP 2 - Get equivalent race times
const raceTimes = daniels.getRaceTimes(VDOT);
console.log(raceTimes);

//STEP 3 - Get training paces
const trainingZones = daniels.returnTrainingPaces(VDOT);
console.log(trainingZones);

