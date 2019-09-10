/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Easy (50.80%)
 * Likes:    435
 * Dislikes: 0
 * Total Accepted:    42.3K
 * Total Submissions: 83.1K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return []
    }
    let arr = []
    let digitArr = []
    let index
    let len
    let hash = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    len = hash[digits[0]].length
    digitArr.push(hash[digits[0]])
    for (index = 1; index < digits.length; index++) {
        len = len * hash[digits[index]].length
        digitArr.push(hash[digits[index]])
    }
    index = 0
    while (index < len) {
        arr[index++] = ""
    }
    let _len = len
    for (let i = 0; i < digitArr.length; i++) {
        let _digits = digitArr[i]
        let times = _len
        _len = _len / _digits.length
        for (let j = 0; j < _digits.length; j++) {
            let start = j * _len
            let end = start + _len
            let digit = _digits[j]
            for (let time = 0; time < len; ) {
                for (let k = start; k < end; k++) {
                    let _index = time + k
                    arr[_index] = arr[_index] ? arr[_index] + digit : digit
                }
                time += times
            }
        }
    }
    return arr
}
