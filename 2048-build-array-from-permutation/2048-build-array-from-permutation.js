/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var buildArray = function(nums) {
     let value = []
    for(let i = 0; i < nums.length; i++){
     value.push(nums[nums[i]])
    }
    return value
}
