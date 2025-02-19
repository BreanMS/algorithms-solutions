/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Solution 1

var strStr = function(haystack, needle) {
    let haystackCpy = haystack.split('')
    let needleCpy = needle.split('')

    for (let i=0; i<haystackCpy.length; i++){
        // if(haystackCpy[i] === needleCpy[0] ){
        //     let j = 0
        //     while(j < needleCpy.length && haystackCpy[i+j] === needleCpy[j]){
        //         j++
        //     }
        //     if(j === needleCpy.length) return i
        // }
        if(haystackCpy[i] === needleCpy[0] ){
            if (JSON.stringify(haystackCpy.slice(i, i + needleCpy.length)) === JSON.stringify(needleCpy) ){
                return i
            }
    }
    }
    return -1
};
haystack = "leetcode", needle = "leeto"
// haystack = "sadbutsad", needle = "sad"
// haystack = "hello", needle = "ll"
// console.log(strStr("hello", "he")) // 2
console.log(strStr(haystack, needle)) // 0

// Optimal Solution in python

// class Solution:
//     def strStr(self, haystack: str, needle: str) -> int:
//         if needle == "":
//             return 0
//         for i in range(len(haystack)):
//             if haystack[i] == needle[0]:
//                 if haystack[i:i+len(needle)] == needle:
//                     return i
//     return -1