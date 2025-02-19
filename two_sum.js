/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const valToIndex = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in valToIndex) {
            return [valToIndex[target - nums[i]], i];
        }
        valToIndex[nums[i]] = i;
    }
    return [-1, -1];
};