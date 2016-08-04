# Daniels Running Calculator

## This module allows users to get VDOT's, training paces, and equivalent race times using Jack Daniel's training methodology.

## Overview

Jack Daniels is a famous running coach and used a scientific method to help runners improve their times.
By giving a recent race time, you calculate a VDOT, this VDOT then allows you to get estimated race times and work out your training paces.

## Usage
```javascript
const Daniels = require("daniels-calculator");

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
```



## Further Info

http://runsmartproject.com/coaching/dr-jack-daniels/
