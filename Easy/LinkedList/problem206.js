var reverseList = function(head) {
    let prev = null
    let temp = null
    
    while (head){
        temp = head.next 
        head.next = prev 
        prev = head 
        head = temp 
    }   
    
    return prev
};

