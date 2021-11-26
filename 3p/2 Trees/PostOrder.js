// Reyes Ruiz Maximiliano

let a = new Node('+')
let object1 = new Node(3)
let object2 = new Node(-1)

function Node(object)
{
    this.data=object
    this.left=null
    this.right=null
}

function postorder(n)
{
    if (n!==null){
      postorder(n.left)
      postorder(n.right)
      console.log(n.data)
    }
}
  
  a.left = object1
  a.right = object2
  postorder(a)