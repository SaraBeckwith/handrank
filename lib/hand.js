exports = module.exports = {};

exports.parse = function(hand){
	var parsedhand = hand.split(" ");

	return parsedhand;
}

//Takes array of strings representing a hand
//checks for all ending characters to match, indicating flush
exports.isFlush = function(hand){
	for(var i = 1; i < 4; i++){
		if(hand[i].slice(-1) != hand[i+1].slice(-1)){
			return false;
		} else return true;
	}
}


//Takes array of card strings representing a hand
//Checks to see if each card descends in order
exports.isStraight = function(hand){
	var isStraightHand = [];
	//Chop suit from card string
	for(var i in hand){
		isStraightHand[i]=hand[i].substring(0, hand[i].length -1);

	}

	//Ace low setup. If the first card is an Ace and the Last is a 2, 
	//we can assume that if it's a straight, it is Ace Low, so re-order hand
	if((isStraightHand[0]==="A")&&(isStraightHand[4]==="2")){
		isStraightHand.shift();
		isStraightHand.push("1");
	}

	//Change letter/face cards to numerical representation for math ease
	for(var i in isStraightHand){
		if(isStraightHand[i]==="A"){
			isStraightHand[i]="14";
		}else if(isStraightHand[i]==="K"){
			isStraightHand[i]="13";
		}else if(isStraightHand[i]==="Q"){
			isStraightHand[i]="12";
		}else if(isStraightHand[i]==="J"){
			isStraightHand[i]="11";
		}
	}

	//Parse strings into integers.
	for(var i in isStraightHand){
		isStraightHand[i]=parseInt(isStraightHand[i]);
	}

	//See if each card is one less than the card before it. (Wording....)
	for(var i = 0; i<4; i++){
		if(isStraightHand[i]!=(isStraightHand[i+1]+1)){
			return false;
		}
		return true;
	}
}


exports.collapseMatches = function(hand){
	//We're only looking at rank, so strip suit off end
	var matchingHand = [];
	for(var i in hand){
		matchingHand[i]=hand[i].substring(0, hand[i].length-1);
	}

	//Change letter/face cards to numerical representation for math ease
	for(var i in matchingHand){
		if(matchingHand[i]==="A"){
			matchingHand[i]="14";
		}else if(matchingHand[i]==="K"){
			matchingHand[i]="13";
		}else if(matchingHand[i]==="Q"){
			matchingHand[i]="12";
		}else if(matchingHand[i]==="J"){
			matchingHand[i]="11";
		}
	}

	var cardCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0];

	//increment the count at the rank's slot for each card in hand.
	for(var i in matchingHand){
		cardCounts[parseInt(matchingHand[i])-2]++;
	}

	var collapsedHand = [];

	var cardRank = 0;

	for(var i in cardCounts){
		if(cardCounts[i]>0){
			cardRank = parseInt(i)+2;
			collapsedHand.push(cardCounts[i] + "-" + cardRank);
		}
	}

	collapsedHand.sort();
	collapsedHand.reverse();

	return collapsedHand;
}

//hand argument must be pre-parsed return value, ie, ["Ah", "Ac", "Qh", "7d", "2d"]
exports.highCard = function(hand){
	//Ace Low Straight Flush setup.
	if(this.isStraight(hand)){
		if((hand[0].substring(0, hand[0].length-1)==="A")&&(hand[4].substring(0, hand[4].length-1)==="2")){
			var aceCard = hand[0];
			hand.shift();
			hand.pop(aceCard);
		}
	}

	return hand[0].substring(0, hand[0].length-1);
}

exports.getRank = function(hand){
	var myHand = this.parse(hand);
	var result = "";

	if(this.isFlush(myHand)){
		if(this.isStraight(myHand)){
			if(this.highCard(myHand)==="A"){
				result = "Royal Flush";
			}else result = "Straight Flush";
		}else result = "Flush";
	}else if(this.isStraight(myHand)){
		result = "Straight";
	}else if(this.collapseMatches(myHand)[0].substring(0,1)!=="1"){
		//Check collapsed hand for Full House, pairs, three of a kind, four of a kind
		var matchedUp = this.collapseMatches(myHand);

		if(matchedUp[0].substring(0,1)==="3"){
			if(matchedUp[1].substring(0,1)==="2"){
				result =  "Full House";
			}else result = "Three of a Kind";
		}else if(matchedUp[0].substring(0,1)==="2"){
			if(matchedUp[1].substring(0,1)==="2"){
				result = "Two Pair";
			}
			else {
				var pairCard = matchedUp[0].split("-");
				switch (pairCard[1]) {
					case "14":
						result = "Pair of Aces";
						break;
					case "13":
						result = "Pair of Kings";
						break;
					case "12":
						result = "Pair of Queens";
						break;
					case "11":
						result = "Pair of Jacks";
						break;
					case "10":
						result = "Pair of Tens";
						break;
					case "9":
						result = "Pair of Nines";
						break;
					case "8":
						result = "Pair of Eights";
						break;
					case "7":
						result = "Pair of Sevens";
						break;
					case "6":
						result = "Pair of Sixes";
						break;
					case "5":
						result = "Pair of Fives";
						break;
					case "4":
						result = "Pair of Fours";
						break;
					case "3":
						result = "Pair of Threes";
						break;
					case "2":
						result = "Pair of Twos";
						break;
					default:
						result = pairCard[1]
						break;
				}
			}

		}
	}else{
		switch (this.highCard(myHand)){
			case "A":
				result = "Ace High";
				break;
			case "K":
				result = "King High";
				break;
			case "Q":
				result = "Queen High";
				break;
			case "J":
				result = "Jack High";
				break;
			default:
				result = justAHigh + " High";
				break;
		}
	}

	return result;
}