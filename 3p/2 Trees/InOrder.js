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

function inorder(n)
{
    if (n!==null){
      inorder(n.left)
      console.log(n.data)
      inorder(n.right)
    }
}
  
  a.left = object1
  a.right = object2
  inorder(a)