var expect = require("chai").expect;
var hand = require("../lib/hand.js");

describe("Hand", function(){
	describe("#parse()", function(){
		it("should parse a string into a set of 5 cards, each with rank and suit", function(){
			var samplehand = "Ah As 10c 7d 6s";
			var results = hand.parse(samplehand);

			var expected = ["Ah","As","10c","7d","6s"];

			expect(results).to.deep.equal(expected);
		});

		//todo: test that it does some minimal input checking
		//      5 cards
		//      Each card has rank and suit
		// 	 	suit is only s,h,d,c (lower)
		//		face cards only A, K, Q, J (upper)


		//todo: have it organize hand by rank order

	});

	describe("#isFlush()", function(){
		it("should return true when all suits in hand match", function(){
			var sampleNonFlush = ["Ah", "As", "10c", "7d", "6s"];
			var sampleFlush = ["Ah", "Kh", "Qh", "Jh", "10h"];

			expect(hand.isFlush(sampleNonFlush)).to.be.false;
			expect(hand.isFlush(sampleFlush)).to.be.true;
		});
	});

	describe("#isStraight()", function(){
		it("should return true when rank of cards step down by 1 in order", function(){
			var sampleNonStraight = ["Ah", "As", "10c", "7d", "6s"];
			var sampleStraightFaces = ["Ah", "Kh", "Qh", "Jh", "10h"];
			var sampleStraightAceLow = ["Ad", "5h", "4c", "3s", "2h"];
			var sampleStraight = ["9h", "8d", "7c", "6h", "5c"];

			expect(hand.isStraight(sampleNonStraight)).to.be.false;
			expect(hand.isStraight(sampleStraightFaces)).to.be.true;
			expect(hand.isStraight(sampleStraightAceLow)).to.be.true;
			expect(hand.isStraight(sampleStraight)).to.be.true;

		});
	});
});