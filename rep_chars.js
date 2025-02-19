var lengthOfLongestSubstring = function(s) {

    let letterTracker = {};
    let arrayStr = s.split("");
    let length = 0;
    let trackerLength = [];
    let trackerOfLetters = {};
    console.log(arrayStr);
    
    for (let letter in arrayStr){
        if (letterTracker.hasOwnProperty(arrayStr[letter]) ) {
            trackerOfLetters[letter] = letterTracker;
            letterTracker = {};
            letterTracker[arrayStr[letter]] = letter;
            trackerLength.push(length);
            length = 1;
        } else {
            letterTracker[arrayStr[letter]] = letter;
            length++;
        }
    }
    trackerLength.push(length);
    console.log(trackerOfLetters);
    console.log(letterTracker);
    console.log(length);
    console.log(trackerLength);
    if ( trackerLength.length == 0) {
        return length;
    }else {
        return Math.max(...trackerLength);
    }

};

let string = "dvdf";
console.log(lengthOfLongestSubstring(string));