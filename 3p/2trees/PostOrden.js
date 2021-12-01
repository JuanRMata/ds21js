//Mata Quintero Juan Rodrigo

let a = new Node('+');

let object1 = new Node(50);

let object2 = new Node(19);

function Node(object)
{
    this.data=object;
    this.left=null;
    this.right=null;
}
function postOrder(node) 
{
    if (node!==null) 
    {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.data);
    }
}
a.left = object1;
a.right = object2;
postOrder(a);