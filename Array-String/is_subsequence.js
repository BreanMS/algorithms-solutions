// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */


// var convertToMap = function( word ){
//     const map = new Map();

//     for (let i = 0; i < word.length; i++) {
//       map.set(word[i], i);
//     }
    
//     return map
// }


// var isSubsequence = function(s, t) {
//     let split_str  = t.split("")
//     let tracker = []

//     track_letter = convertToMap(s)

//     for (let letter in split_str){
//         if (track_letter.has(split_str[letter])) {
//             tracker.push(split_str[letter])
//         } 
//     }

//     console.log(tracker.join(""))
//     if (tracker.join("") === s){
//         return true
//     } else {
//         return false
//     }

// };


// // s = "abc"
// // t = "ahbgdc"

// s = "ab"
// t = "baab"
// // console.log(s.split(""))
// console.log(isSubsequence(s, t))

const isSubsequence = (s, t) => {
    // base case
    if(s.length > t.length) return false;
    if(!s) return true;

    let i = 0; 
    for(let j = 0; j < t.length; j++) {
        if(s[i] == t[j]) i++;
    }

    return i === s.length;
}

