var hand = require("./lib/hand.js");

hand = hand.getRank(process.argv[2]);

console.log(process.argv[2] + ": " + hand);