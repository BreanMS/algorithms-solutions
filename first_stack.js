/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    list_string = s.split("");
    stack_open = [];
    for (let char in list_string) {
        console.log(char)
        if (list_string[char] === '[' ||  list_string[char] === '{' || list_string[char] === '(' ){
            console.log(stack_open)
            stack_open.push(list_string[char]);
        }
        // What is left is to match the corresponding closing sign with a similiar statment such as (stack.isEmpty() || stack.pop() != c) in js where we pop the char if it doesnt match the previosu ones
        if (list_string[char] === ']' ||  list_string[char] === '}' || list_string[char] === ')'){
            stack_open.pop();
        }
    }
    console.log(stack_open)

    if (stack_open.length == 0){
        return true
    } else {
        return false
    }

}


 s = "()[]{}"
 console.log(isValid(s))

//  class Solution {
//     public boolean isValid(String s) {
//       Deque<Character> stack = new ArrayDeque<>();
  
//       for (final char c : s.toCharArray())
//         if (c == '(')
//           stack.push(')');
//         else if (c == '{')
//           stack.push('}');
//         else if (c == '[')
//           stack.push(']');
//         else if (stack.isEmpty() || stack.pop() != c)
//           return false;
  
//       return stack.isEmpty();
//     }
//   }