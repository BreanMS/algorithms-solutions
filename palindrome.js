/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    console.log(str)
    if (str == str.split("").reverse().join("")) {
        return true;
    }
    return false;
};

let string = " "
let result = isPalindrome(string)
console.log(result); // Output: HelloWorld!