class Node{
    constructor(value){
        this.data = value;
        this.next = null;
        // this.tail = null
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    };
    append (data){
        const newNode = new Node(data);
        if(this.head == null ){
            this.head = newNode;
        }else{
           this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
          console.log(current.data);
          current = current.next;
        }
      }
};

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.printList();