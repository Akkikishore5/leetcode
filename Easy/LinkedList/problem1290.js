/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {   
    var decimalValue = 0;
    count = getSize(head);
    while (head !== null) {
        decimalValue += (2**count)*head.val;
        count--;
        head = head.next;
    }
    return decimalValue
};

function getSize(head) {
    var temp = head;
    var count = -1;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}
