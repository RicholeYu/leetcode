/** 1. 两数之和 */
/** 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var tmp = {}
    var secondItemIndex = undefined
    var index = 0
    for (index = 0; index < nums.length; index++) {
        tmp[nums[index]] = index
    }
    for (index = 0; index < nums.length; index ++) {
        secondItemIndex = tmp[target - nums[index]]
        if (secondItemIndex !== undefined && index !== secondItemIndex) {
            return [index, secondItemIndex]
        }
    }
    return []
};