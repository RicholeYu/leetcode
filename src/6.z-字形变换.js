/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (44.46%)
 * Likes:    371
 * Dislikes: 0
 * Total Accepted:    52.5K
 * Total Submissions: 118.1K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 332ms 8.27% 63.64$
var convert1 = function(s, numRows) {
    let n = 2 * (numRows - 2) + 2
    let str = ""
    if (numRows === 1) {
        return s
    }
    for (let row = 0; row < numRows; row++) {
        for (let i = 0; i < s.length; i++) {
            if (row === 0) {
                if (i % n === 0) {
                    str += s[i]
                }
            } else if (row === numRows - 1) {
                if (i % n === numRows - 1) {
                    str += s[i]
                }
            } else {
                if (i % n === row || (i + row) % n === 0) {
                    str += s[i]
                }
            }
        }
    }
    return str
}

// 128ms 78.27% 26.67%
var convert = function(s, numRows) {
    let isDown = false
    let rows = []
    let index = 0
    let row = 0
    if (numRows === 1) {
        return s
    }
    while (index < numRows) {
        rows[index++] = []
    }
    for (index = 0; index < s.length; index ++) {
        if (row === 0 || row === numRows - 1) {
            isDown = !isDown
        }
        rows[row].push(s[index])
        row += (isDown ? 1 : -1)
    }
    return rows.map(row => row.join("")).join("")
}
// console.log(convert1("LEETCODEISHIRING", 4))
