/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const filterArr = nums.filter(x => x != val);
    const filterArrLength = filterArr.length;

    for (let i in filterArr) {
        nums[i] = filterArr[i]
    }

    return filterArrLength;
};