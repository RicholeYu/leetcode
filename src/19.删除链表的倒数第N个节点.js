/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let index = 0
    let p = head
    let last
    let len = 0
    while (p) {
        len++
        p = p.next
    }
    if (n <= 0) {
        return head
    } else if (n > len) {
        return head
    } else if (len === n) {
        return head ? head.next : null
    }
    n = len - n
    p = head
    while (index < n) {
        if (p.next) {
            index++
            last = p
            p = p.next
        } else {
            break
        }
        
    }
    if (p && p.next) {
        last.next = p.next
    } else if (n === index) {
        last.next = null
    }
    return head
}

