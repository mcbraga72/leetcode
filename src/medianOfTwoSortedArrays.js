var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 == 0) {
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } 
    
    return mergedArray[(length - 1) / 2];
}; 

const nums1 = [1,2,3,4,5];
const nums2 = [6,7,8,9,10,11,12,13,14,15,16,17];

findMedianSortedArrays(nums1, nums2);
