/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Hard (34.61%)
 * Likes:    680
 * Dislikes: 0
 * Total Accepted:    116.2K
 * Total Submissions: 335.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    }
    let r = 0
    let first = strs[0]
    while (r <= first.length) {
        let pre = first.substr(0, r + 1)
        for (let index = 1; index < strs.length; index++) {
            if (strs[index].indexOf(pre) !== 0) {
                return first.substr(0, r)
            }
        }
        r++
    }
    return first.substr(0, r)
}

