/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
// 暴力破解法 1844ms 5.02% 49.81%
var longestPalindrome1 = function(s) {

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

// 动态规划法 692ms 21.8% 5.65%
function longestPalindrome (string) {
    if (!string || string.length === 1) {
        return string
    }
    let dp = []
    let len = 1
    let str = string[0]
    let index = 0
    while (index < string.length) {
        dp[index++] = []
    }
    for (let r = 0; r <= string.length; r++) {
        for (let l = 0; l < r; l++) {
            if (string[l] === string[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true
                if (r - l + 1 > len) {
                    str = string.substr(l, r - l + 1)
                    len = r - l
                }
            }
        }
    }
    return str
}

