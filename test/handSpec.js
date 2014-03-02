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
		//		No card duplicates


		//todo: have it organize hand by rank order

		//refactor: convert face cards to numerical for sake of code reuse elsewhere

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

	describe("#collapseMatches()", function(){
		// ["Ah", "As", "Ac", "Ad", "2c"] ==> ["4-A", "1-2"]
		it("should accept a hand of cards, counts repeats, and returns a string indicating how many matches followed by rank", function(){
			var fourOfAKind = ["Ah", "As", "Ac", "Ad", "2c"];
			expect(hand.collapseMatches(fourOfAKind)).to.deep.equal(["4-14", "1-2"]);

		});
	});

	describe("#highCard()", function(){
		//Used when hand doesn't fall into other categories
		it("should return the highest card rank in the hand", function(){
			var nothingGood = ["Ah", "Qs", "9c", "7d", "3c"];
			expect(hand.highCard(nothingGood)).to.equal("A");

			var nothingGood10 = ["10h", "9s", "7s", "5c", "2s"];
			expect(hand.highCard(nothingGood10)).to.equal("10");
		});
	});

	describe("#getRank()", function(){
		it("should return 'Royal Flush' when presented with a royal flush hand", function(){
			var royalFlush = "Ah Kh Qh Jh 10h";

			expect(hand.getRank(royalFlush)).to.equal("Royal Flush");
		});

		it("Should return 'Straight Flush' when presented with straight flush hand", function(){
			var straightFlush = "9h 8h 7h 6h 5h";

			expect(hand.getRank(straightFlush)).to.equal("Straight Flush");
		});

		it("Should return 'Flush' when presented with a simple flush", function(){
			var flush = "Ah 10h 8h 5h 2h";

			expect(hand.getRank(flush)).to.equal("Flush");
		});

	});


});