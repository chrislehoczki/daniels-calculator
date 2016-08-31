# Daniels Running Calculator

## This module allows users to get VDOT's, training paces, and equivalent race times using Jack Daniel's training methodology.

## Overview

Jack Daniels is a famous running coach and used a scientific method to help runners improve their times.
By giving a recent race time, you calculate a VDOT, this VDOT then allows you to get estimated race times and work out your training paces.
Feedback is very much welcome alongside requests for further features.

## Usage
```javascript
const Daniels = require("daniels-calculator");

const daniels = new Daniels();

//STEP 1 - Get vdot
const VDOT = daniels.getVDOT("5k", "16:00");
console.log(VDOT);

//NB - distance must be one of the following
        "VDOT",
        "1500",
        "Mile",
        "3k",
        "2-mile",
        "5k",
        "8k",
        "5-mile",
        "10k",
        "15k",
        "10-mile",
        "20k",
        "1/2 Marathon",
        "25k",
        "30k",
        "Marathon"

//NB - Times should be in the following formats: 00 / 00:00 / 00:00:00
	

//STEP 2 - Get equivalent race times
const raceTimes = daniels.getRaceTimes(VDOT);
console.log(raceTimes);

//NB - will return object with keys of races and values as times

//STEP 3 - Get training paces
const trainingZones = daniels.returnTrainingPaces(VDOT);
console.log(trainingZones);

//NB - will return object with keys of pace type and values as pace value
```



## Further Info

http://runsmartproject.com/coaching/dr-jack-daniels/
