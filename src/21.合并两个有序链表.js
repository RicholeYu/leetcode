/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Medium (56.86%)
 * Likes:    616
 * Dislikes: 0
 * Total Accepted:    108.5K
 * Total Submissions: 189.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null
    } else if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }
    let isMin = l1.val < l2.val
    let min = isMin ? l1 : l2
    let max = isMin ? l2 : l1
    let p1 = min
    let p2 = max
    let lastp1
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            lastp1 = p1
            p1 = p1.next
        } else {
            if (lastp1) {
                lastp1.next = p2
                p2 = p2.next
                lastp1.next.next = p1
                p1 = lastp1.next
            } else {
                lastp1 = p2
                p2 = p2.next
                lastp1.next = p1
            }
        }
    }
    if (!p1) {
        lastp1.next = p2
    }
    return min
}

