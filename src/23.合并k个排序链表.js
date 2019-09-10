/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Medium (47.41%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    41.6K
 * Total Submissions: 87.6K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    lists = lists.filter(list => !!list)
    if (lists.length === 0) {
        return null
    } else if (lists.length === 1) {
        return lists[0]
    }
    let head = null
    for (let index = 0; index < lists.length; index++) {
        head = mergeTwoLists(head, lists[index])
    }
    return head
}

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

