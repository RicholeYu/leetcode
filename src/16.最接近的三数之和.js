/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.54%)
 * Likes:    243
 * Dislikes: 0
 * Total Accepted:    40.5K
 * Total Submissions: 97.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a > b ? 1 : -1)
    let hash = {}
    let offset = Math.abs(nums[0] + nums[1] + nums[2] - target)
    let close = nums[0] + nums[1] + nums[2] 
    for (let n = 0; n < nums.length; n ++) {
        let num = nums[n]
        if (hash[num.toString()]) {
            continue
        }
        let l = n + 1
        let r = nums.length - 1
        while (l < r) {
            let sum = num + nums[l] + nums[r]
            let _offset = Math.abs(sum - target)
            if (_offset < offset) {
                offset = _offset
                close = sum
            }
            if (sum - target > 0) {
                while (l < r && num[r - 1] === nums[r]) {
                    r--
                }
                r--
            } else if (sum - target < 0) {
                while (l < r && num[l + 1] === nums[l]) {
                    l++
                }
                l++
            } else {
                return sum
            }
        }
        hash[num.toString()] = true
    }
    return close
}

threeSumClosest([-1, 2, 1, -4], 1)

