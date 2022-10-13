/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    
    const headless = new ListNode();

    let head = headless;
    
    while(list1 || list2) {
        const l1value = list1 ? list1.val : Infinity;
        const l2value = list2 ? list2.val : Infinity;

        if (l1value < l2value) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        
        head = head.next
    }
    
    return headless.next;
};