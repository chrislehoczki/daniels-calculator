
//get vdots and intensities
const intensities = require("./intensities.js");
const vdots = require("./vdots.js");

class Daniels {
	//initialises class with vdot and intensity arrays
	constructor() {
		this.VDOTS = vdots;
		this.intensities = intensities;
	};

	//finds lookup value for particular distance in array
	findDistanceLoc(distance) {
		
		const lookup = this.VDOTS[0];

		for (let i = 0; i < lookup.length; i++) {
			if (distance === lookup[i]) {
				return i;
			}
		};

		//if does not exist - return undefined
		return undefined;
	};

	//converts time string (00:22:22) into seconds
	convertTime(string) {

		let timeArr = string.split(":");

		const length = timeArr.length;
 
 		//check that time is in number format
		for (let i = 0; i < length; i++) {
			if (+timeArr[i] === NaN) {
				return undefined;
			}
		}

		//return time in seconds based on length
		if (length === 1) {
			return +timeArr[0];
		}
		else if (length === 2) {
			return (+timeArr[0] * 60) + +timeArr[1];
		}
		else if (length === 3) {
			return (+timeArr[0] * 60 * 60) + (+timeArr[1] * 60) + +timeArr[2];
		}

		//return undefined if correct format is not given 
		return undefined;

	};

	//calculates VDOT from recent race distance and time
	getVDOT(distance, timeString) {
		
		//get number of seconds and lookup
		const seconds = this.convertTime(timeString);
		const lookup = this.findDistanceLoc(distance);

		//find lower bound VDOT value
		for (let i = 1; i < this.VDOTS.length; i++) {
			const secondsToMatch = this.convertTime(this.VDOTS[i][lookup]);

			if (seconds < secondsToMatch) {
				return this.VDOTS[i][0];
			}
		};


		//if cant find - return undefined
		return undefined;

	};


	getRaceTimes(VDOT) {

		//get keys 
		let keys = this.VDOTS[0];

		//find race times
		const values = this.VDOTS.filter(function(arr) {
			return +arr[0] === +VDOT;
		})[0];

		if (!values) {
			throw new RangeError('VDOT should be between 30 and 85');
		}

		//create object to return
		let timesObj = {};
		
		for (let i = 0; i < values.length; i++) {
			timesObj[keys[i]] = values[i];
		}

		//return it
		return timesObj;

		

	};


	//returns training paces
	returnTrainingPaces(VDOT) {
		//get keys 
		let keys = this.intensities[0];

		//find paces
		const values = this.intensities.filter(function(arr) {
			return +arr[0] === +VDOT;
		})[0];

		if (!values) {
			throw new RangeError('VDOT should be between 30 and 85');
		}

		//create object
		let paceObj = {};
		
		for (let i = 0; i < values.length; i++) {
			paceObj[keys[i]] = values[i];
		}

		//return it
		return paceObj;

	};


}

module.exports = Daniels;