/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    var nodeLocation = isEvenOrOdd(getSize(head))
    
    while (nodeLocation !== 0){
        head = head.next
        nodeLocation--
    }
    
    return head
};


function getSize(head){
    var count = 1
    
    while (head.next !== null) {
        count++
        head = head.next    
    }
    
    return count
};

function isEvenOrOdd(count){
     
     var nodeLocation = -1;
    
     if (count % 2 == 0){
         nodeLocation = count/2
     } 
     if (count % 2 == 1){
         nodeLocation = (count - 1)/2
     }
    
     return nodeLocation
    
};