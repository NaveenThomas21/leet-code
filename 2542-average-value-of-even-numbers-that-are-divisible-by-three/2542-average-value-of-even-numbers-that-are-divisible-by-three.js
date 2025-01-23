/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    
  const data = nums.filter((items)=>{
     return items%3 === 0 && items%2===0
  })
  if(data.length === 0){
    return 0
  }else{

 const final = data.reduce((acc,cur)=>acc+cur)

    return Math.floor(final/data.length)
  }
};
console.log(averageValue([1,3,6,2,7,12]));