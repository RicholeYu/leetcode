
function ListNode (val) {
    this.val = val
    this.next = null
}

function createList (nums) {
    if (nums.length === 0) {
        return null
    }
    let index = 1
    let head = new ListNode(nums[0])
    let p = head
    while (index < nums.length) {
        p.next = new ListNode(nums[index++])
        p = p.next
    }
    return head
}

function printList (list) {
    let arr = []
    while (list) {
        arr.push(list.val)
        list = list.next
    }
    console.log(arr.join(","))
}
