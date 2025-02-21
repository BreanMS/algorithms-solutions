/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    let ranges = [];
    let startRange = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        // Check if we've reached the end of the array or if the next number is not consecutive
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            // If the range only contains one number
            if (startRange === nums[i - 1]) {
                ranges.push(`${startRange}`);
            } else {
                ranges.push(`${startRange}->${nums[i - 1]}`);
            }
            // Update startRange to the next number in the sequence (if there is any)
            if (i < nums.length) {
                startRange = nums[i];
            }
        }
    }

    return ranges;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2", "4->5", "7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0", "2->4", "6", "8->9"]
