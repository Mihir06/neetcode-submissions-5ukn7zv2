/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let A = list1
        let B = list2
        let dummyNode = new ListNode(0, null) ;
        let node = dummyNode
        while(A && B){
            // A is smaller, will push that to the next
            if(A.val < B.val){
                node.next = A;
                A = A.next; 
            } else {
                node.next = B;
                B = B.next;
            }
            node = node.next;
        }
        if(A){
            node.next = A
        }
        if(B){
            node.next = B
        }
        console.log('dummyNode', dummyNode);
        return dummyNode.next
    }
}
