/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let letterTracker = {};
    let arrayStr = s.split("");
    let length = 0;
    let trackerLength = [];
    let trackerOfLetters = {};
    // console.log(arrayStr)
    for (let letter in arrayStr){
        // console.log(letter)
        if (letterTracker.hasOwnProperty(arrayStr[letter]) ) {
            trackerOfLetters[letter] = letterTracker;
            letterTracker = {};
            letterTracker[arrayStr[letter]] = letter;
            // console.log("length inside the if:", length)
            // length++;
            trackerLength.push(length);
            length = 1;
            // console.log(letterTracker);
            // console.log("Tracker Letters", trackerOfLetters)
            // return length;
        } else {
            letterTracker[arrayStr[letter]] = letter;
            // console.log(letterTracker);
            length++;
            // console.log("length new letter", length);
        }
        // letterTracker[i] = arrayStr[i];
    }
    console.log("---------------")
    console.log("TrackerLength", trackerLength) ;
    console.log("Repeat Number is", Math.max(...trackerLength));
    return Math.max(...trackerLength);
    // console.log("TrackerOfLetters", trackerOfLetters);
    // console.log("length of each", Object.values(trackerOfLetters)[0]);
    // console.log("Tracker Letters outside", trackerOfLetters);

    // arrayKeys = Object.values(trackerOfLetters);
    // for (let keys in arrayKeys){
    //     console.log(arrayKeys[keys]);
    //     console.log(letterTracker.hasOwnProperty(arrayKeys[keys].string));
    //     console.log("Length is", Object.values(arrayKeys[keys]).length)
    //     // console.log(letterTracker[arrayKeys[keys]].length);
    // }
//     for (let i = 0; i < arrayStr.length; i++) {
//         if (letterTracker.hasOwnProperty(arrayStr[i])) {
//           return length;
//         }
//     length++;
//   }
//   return length;
};

// let string = "abcabcbb";
let string = "abcabcbb";
console.log(lengthOfLongestSubstring(string));