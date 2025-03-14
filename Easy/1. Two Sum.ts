/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// function twoSum(nums: number[], target: number): number[] {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(j, i);
//       }
//     }
//   }
//   console.log(result);

//   return result;
// }

// function twoSum(nums: number[], target: number): number[] {
//   const ifNotFound = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [j, i];
//       }
//     }
//   }

//   return ifNotFound;
// }

function twoSum(nums: number[], target: number): number[] {
  const numIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndexMap.has(complement)) {
      return [numIndexMap.get(complement), i];
    }
    numIndexMap.set(nums[i], i);
  }

  return [];
}

twoSum([2, 7, 11, 15], 9); // [0, 1];
twoSum([3, 2, 4], 6); // [1, 2];
twoSum([3, 3], 6); // [0, 1];
