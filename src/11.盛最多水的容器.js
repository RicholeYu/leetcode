/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Easy (57.31%)
 * Likes:    759
 * Dislikes: 0
 * Total Accepted:    73.1K
 * Total Submissions: 127.5K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 */
/**
 * @param {number[]} heights
 * @return {number}
 */

let dp = []
let index = 0
// 动态规划法 超时
var maxArea = function(heights) {
    while (index < heights.length) {
        dp[index++] = []
    }
    for (let r = 1; r < heights.length; r++) {
        for (let l = r - 1; l >= 0; l--) {
            let isMin = heights[l] < heights[r]
            let offset = r - l
            if (offset === 1) {
                dp[l][r] = isMin ? heights[l] : heights[r]
            } else {
                let _area1 = dp[l + 1][r]
                let _area2 = dp[l][r - 1]
                let area = (isMin ? heights[l] : heights[r]) * offset
                dp[l][r] = Math.max(_area1, _area2, area)
            }
        }
    }
    return dp[0][heights.length - 1]
}

// 80ms 90.79% 19.89%
var maxArea1 = function(height) {
    let l = 0
    let r = height.length - 1
    let area = 0
    
    while (l < r) {
        area = Math.max(area, Math.min(height[l], height[r]) * (r - l))

        if (height[l] < height[r]) {
            l++            
        } else {
            r--
        }
    }
    
    return area
}
