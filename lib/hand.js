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
	//Chop suit from card string
	for(var i in hand){
		hand[i]=hand[i].substring(0, hand[i].length -1);

	}

	//Ace low setup. If the first card is an Ace and the Last is a 2, 
	//we can assume that if it's a straight, it is Ace Low, so re-order hand
	if((hand[0]==="A")&&(hand[4]==="2")){
		hand.shift();
		hand.push("1");
	}

	//Change letter/face cards to numerical representation for math ease
	for(var i in hand){
		if(hand[i]==="A"){
			hand[i]="14";
		}else if(hand[i]==="K"){
			hand[i]="13";
		}else if(hand[i]==="Q"){
			hand[i]="12";
		}else if(hand[i]==="J"){
			hand[i]="11";
		}
	}

	//Parse strings into integers.
	for(var i in hand){
		hand[i]=parseInt(hand[i]);
	}

	//See if each card is one less than the card before it. (Wording....)
	for(var i = 0; i<4; i++){
		if(hand[i]!=(hand[i+1]+1)){
			return false;
		}else return true;
	}
}


exports.collapseMatches = function(hand){
	//We're only looking at rank, so strip suit off end
	for(var i in hand){
		hand[i]=hand[i].substring(0, hand[i].length-1);
	}

	//Change letter/face cards to numerical representation for math ease
	for(var i in hand){
		if(hand[i]==="A"){
			hand[i]="14";
		}else if(hand[i]==="K"){
			hand[i]="13";
		}else if(hand[i]==="Q"){
			hand[i]="12";
		}else if(hand[i]==="J"){
			hand[i]="11";
		}
	}

	var cardCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0];

	//increment the count at the rank's slot for each card in hand.
	for(var i in hand){
		cardCounts[parseInt(hand[i])-2]++;
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

exports.highCard = function(hand){
	return hand[0].substring(0, hand[0].length-1);
}