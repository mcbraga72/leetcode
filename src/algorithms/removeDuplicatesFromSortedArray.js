/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let output = [];
    let uniqueElements = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (!output.includes(nums[i])) {
            output.push(nums[i]);
            uniqueElements++;
        } else {
            nums.splice(i, 1);
        }
    }

    return uniqueElements;
};


console.log(removeDuplicates([1, 1, 2, 2, 3]));