var hand = require("./lib/hand.js");
//run via command line: node index.js "Ah Kh Qh Jh 10h"
//Input string must be space deliniated, 5 cards, suits lower case
//Input string must be ordered by rank, with face cards upper case

hand = hand.getRank(process.argv[2]);

console.log(process.argv[2] + ": " + hand);