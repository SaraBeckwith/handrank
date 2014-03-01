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
		}
		return true;
	}


}