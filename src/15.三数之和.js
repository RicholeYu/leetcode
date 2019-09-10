/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.79%)
 * Likes:    1297
 * Dislikes: 0
 * Total Accepted:    88.9K
 * Total Submissions: 373K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }
    nums.sort((a, b) => a > b ? 1 : -1)
    let arr = []
    let hash = {}
    for (let n = 0; n < nums.length; n ++) {
        let num = nums[n]
        if (num > 0) {
            break
        }
        if (hash[num.toString()]) {
            continue
        }
        let l = n + 1
        let r = nums.length - 1
        while (l < r) {
            if (nums[r] + num + nums[l] > 0) {
                while (l < r && num[r - 1] === nums[r]) {
                    r--
                }
                r--
            } else if (nums[r] + num + nums[l] < 0) {
                while (l < r && num[l + 1] === nums[l]) {
                    l++
                }
                l++
            } else {
                arr.push([num, nums[l], nums[r]])
                while (l < r && nums[r - 1] === nums[r]) {
                    r--
                }
                while (l < r && nums[l + 1] === nums[l]) {
                    l++
                }
                r--
                l++
            }
        }
        hash[num.toString()] = true
    }
    return arr
}

