var twoSum = function(nums, target) {
    let data = []
 for(let i = 0;i < nums.length;i++)
 {
     for(let j =i+1; j < nums.length;j++)
     {
         
      if(nums[i]+nums[j] == target){
      return [i,j]

         }
         } 
     } 
     return []
 }

console.log(twoSum( [3,2,2,5,4],6))