/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1 [Mine]
var productAllElements = function (nums, index){
    let productNum = 1
    let copyNums = [...nums]
    copyNums.splice(index, 1)
    // console.log("@@@ copyNums", copyNums)

     for (num in copyNums){
    //  console.log("@@@ num", copyNums[num])
        productNum *= copyNums[num]
     }
    
    return productNum
 }
var productExceptSelf = function(nums) {
    let listProducts = []
    let productNum = 0

    for (num in nums){
        productNum = productAllElements(nums, num)
        listProducts.push(productNum)
    }

    return listProducts
    // console.log(listProducts)
};


productExceptSelf([1,2,3,4]) // [24,12,8,6]
productExceptSelf([-1,1,0,-3,3]) // [0,0,9,0,0]


// Solution 2 [Optimized]
function productExceptSelf(nums) {

    const length = nums.length; // Total number of elements in input array

    const result = []; // Initialize an array to store the result


    // Forward pass: Calculate the product of all elements to the left of each index

    for (let i = 0, productToLeft = 1; i < length; i++) {

        result[i] = productToLeft; // Set the product (initially 1)

        productToLeft *= nums[i]; // Update the productToLeft for the next index

    }


    // Backward pass: Calculate the product of all elements to the right of each index

    for (let i = length - 1, productToRight = 1; i >= 0; i--) {

        result[i] *= productToRight; // Multiply with the already stored product to the left

        productToRight *= nums[i]; // Update the productToRight for the previous index

    }


    return result; // Return the final result array

}