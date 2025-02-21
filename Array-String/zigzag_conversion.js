/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// TODO: Optimize this solution to upload to leetcode
var convert = function(s, numRows) {
    const mapString = new Map();
    let arrLetters = []
    let string  = s.split("") 
    let k = 1
    let startZigZag = false;

    if (numRows === 1) return s

    for (i=0; i < numRows; i++ ) {
        mapString.set(i+1, [])
    }
    console.log(mapString)


    for (let char in string){
        console.log("@@@")
        console.log(k, "%", numRows, "is", k%numRows)
        console.log(k%numRows, "is char: ",string[char])
        if (k % numRows === 0  || startZigZag){  
            console.log("k is: ", k)
            mapString.get(k).push(string[char])
            console.log(mapString)
            k--
            if (k % numRows === 1 || k == 0){
                startZigZag = false
            } else {
                startZigZag = true
            }
            continue
        }
        mapString.get(k).push(string[char])
        k++
    }

    let buildString = ""
    for (i=0; i < numRows; i++ ) {
        buildString += mapString.get(i+1).join("")
        console.log(mapString.get(i+1).join(""))
        console.log(buildString)
        mapString.get(i+1)
    }

    console.log(buildString)
    return buildString

};

// s = "PAYPALISHIRING", numRows = 4
s = "PAYPALISHIRING", numRows = 3
// s = "AB", numRows = 1
// convert(s, numRows) // "PAHNAPLSIIGYIR"
console.log(convert(s,numRows))
// s = "PAYPALISHIRING", numRows = 4

// Optimized solution in JS

var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let arrLetters = Array.from({ length: numRows }, () => []);
    let string = s.split("");
    let k = 0;
    let startZigZag = false;

    for (let i = 0; i < string.length; i++) {
        arrLetters[k].push(string[i]);
        if (k === 0 || k === numRows - 1) {
            startZigZag = !startZigZag;
        }

        k = startZigZag ? k + 1 : k - 1;
    }

    return arrLetters.flat().join("");
};
