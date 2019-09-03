/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (32.96%)
 * Likes:    1278
 * Dislikes: 0
 * Total Accepted:    175.3K
 * Total Submissions: 531.7K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
// 92 97.13% 88.41%
var reverse = function(x) {
    let isF = x < 0
    x = Math.abs(x)
    let num = 0
    while (x !== 0) {
        let pop = x % 10
        x = Math.floor(x / 10)
        if (num || pop !== 0) {
            num = num * 10 + pop
        }
    }
    x = num * (isF ? -1 : 1)
    if (
        (!isF && x >= Math.pow(2, 31)) || 
        (isF && x < -1 * Math.pow(2, 31))
    ) {
        return 0
    }
    return x
}

// console.log(reverse(-100401))

