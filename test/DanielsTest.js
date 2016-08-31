const chai = require("chai");
const expect = chai.expect;
const Daniels = require("../js/Daniels");


describe("Daniels Calculator", () => {

	describe("VDOT", () => {
		it("should return undefined if time is not in correct format", () => {
			const calculator = new Daniels();
			const VDOT = calculator.getVDOT("5k", "20:0:t");
			expect(VDOT).to.equal(undefined);
		});

		it("should return the correct VDOT for a race time", () => {
			const calculator = new Daniels();
			const VDOT = calculator.getVDOT("1/2 Marathon", "01:30:00");
			expect(VDOT).to.equal("51");
		});
	});

	describe("TrainingZones", () => {

		it("should return correct training zones for VDOT", () => {
			const calculator = new Daniels();
			const paces = calculator.returnTrainingPaces(55);
			expect(paces.VDOT).to.equal("55");
		});

		it("should return an error if VDOT is out of range", () => {
			const calculator = new Daniels();

			expect(calculator.returnTrainingPaces(123)).to.throw(Error);

		});

	});

	describe("Race Times", () => {

		it("should return correct race times for VDOT", () => {
			const calculator = new Daniels();
			const paces = calculator.getRaceTimes(55);
			expect(paces.VDOT).to.equal("55");
		});

		it("should return an error if VDOT is out of range", () => {
			const calculator = new Daniels();
			expect(calculator.getRaceTimes(123)).to.throw(new RangeError('VDOT should be between 30 and 85'));
		});

	});

	

	
});