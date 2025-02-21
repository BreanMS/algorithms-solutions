/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     l1rev = l1.reverse();
//     l2rev = l2.reverse ();
//     sum = Number(l1rev.join("")) + Number(l2rev.join(""));
//     console.log(sum);
//     sum_rev = sum.toString().split("").reverse();
//     console.log(sum_rev);
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var reversePop = function(list) {
    list_rev = [];
    cpy_list = [...list];
    // console.log(list.length)
    for (let i = cpy_list.length; i > 0 ; i--) {
        // console.log(cpy_list.pop());
        list_rev.push(cpy_list.pop());
    }
    return list_rev
}
var addTwoNumbers = function(l1, l2) {
    l1rev = reversePop(l1);
    l2rev = reversePop(l2);
    console.log(l1rev);
    console.log(l2rev);
    sum = Number(l1rev.join("")) + Number(l2rev.join(""));
    result = reversePop((sum).toString(10).split("").map(Number));
    console.log(result);
    // sum_rev = sum.toString().split("").reverse();
};

// l1 = [2,4,3]
// l2 = [5,6,4]
l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]
addTwoNumbers(l1, l2)
