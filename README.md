#handrank

Handrank is a simple node.js app with unit tests in mocha/chai. 

To set up: After installing node, you will need to install Mocha globally via the following command:
`npm install -g mocha`
You will also need to do a `npm install` inside the directory to bring down the chai assertion library

You can run it by executing the command:
`node index.js "Ah As 10c 7d 6s"`

Handrank expects a string of 5 groups of space-delineated characters representing a hand of playing cards - RANKsuit. It examines the "hand" of cards and returns a poker hand-rank. For example:

* Hand: Ah As 10c 7d 6s (Pair of Aces) 
* Hand: Kh Kc 3s 3h 2d (2 Pair) 
* Hand: Kh Qh 6h 2h 9h (Flush) 

Each card in the input string must have lower case suit indicators, with face card ranks upper case.


It specifically does not:

* Rank hands against each other
* Verify that multiple hands can exist in a game (yea, verily, it only accepts a single hand)