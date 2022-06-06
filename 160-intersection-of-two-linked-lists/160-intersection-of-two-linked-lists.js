/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) {
        return null;
    }
    
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA.next
        currB = currB.next
        if(currA === currB) {
            return currA;
        }
        if(currA === null) {
            currA = headB            
        }
        if(currB === null) {
            currB = headA
        }
    }
    return currA
};