handrank

Handrank is a simple node.js app with unit tests in mocha/chai. You will need to global install mocha to run the tests.

Handrank expects a string of 5 groups of space-delineated characters representing playing cards. It examines the "hand" of cards and returns a poker hand-rank. For example:

* Hand: Ah As 10c 7d 6s (Pair of Aces) 
* Hand: Kh Kc 3s 3h 2d (2 Pair) 
* Hand: Kh Qh 6h 2h 9h (Flush) 
