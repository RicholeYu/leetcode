/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = 1
    let str = ""
    for (let i = 0; i < s.length; i++) {
        for (let j = len; j <= s.length; j++) {
            let _str = s.substr(i, j)
            if (isPalindrome(_str) && _str.length >= len) {
                len = _str.length
                str = _str
            }
        }
    }
    return str
}
// console.log(longestPalindrome("abcdbbfcba"))
function isPalindrome (str) {
    let start
    let end
    for (start = 0, end = str.length - 1; end > start; start++,end--) {
        if (str[start] !== str[end]) {
            return false
        }
    }
    return true
}

