/**
** @function canICreateTheMessage
** @param {string} message
** @param {array} letters
** @return {boolean}
** BIG-O notation: O(2) + O(s+3m-2) = O(n)
** calculation can be found in the right of the functions
**/


var canICreateTheMessage = function(message, letters) {
  var original      = message; //                                               O(1) +
  var neededLetters = message //                                                O(1) +
    // remove all spaces and special characters
    .replace(/([^\w\s]|\s)/gi, '') //                                           O(m) +
    // lower case the message to avoid errors during comparison
    .toLowerCase() //                                                           O(m) +

  return searchBowl(neededLetters, letters) //                                  O(s+m-2)
};                                    //                                        = O(2) + O(s+3m-2)

// using recursion to search in the bowl
// Big-O: O(s+m-2) = O(n)
var searchBowl = function(needed, bowl) {
  if (needed.length === 0) return true;        //                               O(1) +

  var index = bowl.indexOf(needed[0]);         //                               O(1) +

  if (index !== -1) {                          //                               O(1) +
    bowl.splice(index, 1);                     //                               O(s) +
    var remaining = needed.substr(1)           //                               O(1) + O(m) +
    // recalling the function by removing the already checked letters
    return searchBowl(remaining, bowl);        //                               O(s+m-2)
  }

  return false;
};                                             //                               = O(4) + O(s+m-2)

var message   = "ciao bella";
// var alphaBowl = [ 'a', 'w', 'n', 'k', 'l', 'o', 'r', 'u', 'n', 't', 'l', 's', 'c', 'h', 'a',]; // false
// var alphaBowl = ['w','h','a','t','a','r','e','y','o','u','d','o','i','n','g','t','o','m','o','r','r','o','w','m','o','r','n','i','n','g'];
var alphaBowl = ['a'];

console.log(canICreateTheMessage(message, alphaBowl));
