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
		//      Each card has rank and suit
		// 	 	suit is only s,h,d,c (lower)


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
});