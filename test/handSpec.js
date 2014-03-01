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
	});
});