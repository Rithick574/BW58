// const nums=[2,7,11,15];
const nums = [3, 2, 4];
const target = 6;

let twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let balance = target - nums[i];
    if (obj.hasOwnProperty(balance)) {
      return [obj[balance], i];
    }
    obj[nums[i]] = i;
  }
};
let result = twoSum(nums, target);

console.log(result);
