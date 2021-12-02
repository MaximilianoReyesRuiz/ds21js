// Reyes Ruiz Maximiliano 

function Node(data) 

 { 
    this.data = data
    this.next = null
 }

 let n1 = new Node(1);
 let n2 = new Node(2);
 let n3 = new Node(3);
 let n4 = new Node(4);
 let n5 = new Node(5);
 let n6 = new Node(6);
 let n7 = new Node(7);
 let n8 = new Node(8);
 
 n1.next=n2;
 n2.next=n3;
 n3.next=n4;
 n4.next=n5;
 n5.next=n6;
 n6.next=n7;
 n7.next=n8;
 
 console.log('n1.next: ',n1.next);
 
 const traverse=(n)=>
 
 {
     let c=n 
     while(c){ 
         console.log(c.data)
     c=c.next
     }
 }

 traverse(n1);