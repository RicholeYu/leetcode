/** 2. 两数相加 */
/** 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。如果，我们将这两个数加起来，则会返回一个新的链表来表示它们的和。您可以假设除了数字 0 之外，这两个数都不会以 0 开头。 */

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
var addTwoNumbers = function(l1, l2) {
    let p3 = new ListNode(0)
    let start = p3
    let last
    while(l1 || l2) {
        last = p3
        if (l1 && l2) {
            p3.next = new ListNode((l1.val + l2.val + p3.val) >= 10 ? 1 : 0)
            p3.val = (l1.val + l2.val + p3.val) % 10
            l1 = l1.next
            l2 = l2.next
            p3 = p3.next
        } else if (l1 && !l2) {
            p3.next = new ListNode((l1.val + p3.val) >= 10 ? 1 : 0)
            p3.val = (l1.val + p3.val) % 10
            l1 = l1.next
            p3 = p3.next
        } else if (!l1 && l2) {
            p3.next = new ListNode((l2.val + p3.val) >= 10 ? 1 : 0)
            p3.val = (l2.val + p3.val) % 10
            l2 = l2.next
            p3 = p3.next
        }
    }
    if (p3.val === 0) {
        last.next = null
    }
    return start
};