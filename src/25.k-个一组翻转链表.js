/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Easy (54.07%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    20.6K
 * Total Submissions: 37.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 示例 :
 * 
 * 给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 说明 :
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1 || k === 0) {
        return head || null
    }
    let index = 0
    let first
    let firstHead
    let p = head
    let last
    let lastFirst
    while (p) {
        if (index === 0) {
            first = p
        }
        if (index === k - 1) {
            if (!firstHead) {
                firstHead = p
            }
            index = 0
            p = p.next
            let tmp = p
            let _first = first
            while (first !== p) {
                let next = first.next
                first.next = tmp
                tmp = first
                if (next === p) {
                    if (lastFirst) {
                        lastFirst.next = first
                    }
                    lastFirst = _first
                }
                first = next
            }
            continue
        }
        index++
        last = p
        p = p.next
    }
    return firstHead ? firstHead : head
}

