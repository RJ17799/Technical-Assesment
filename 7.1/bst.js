// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    addData(data){
        var newNode = new Node(data);
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node , newNode){
        // console.log('node',node)
        if(node.data < newNode.data){
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }

        }
        else{
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }
    }
    deleteData(data){
        this.root = this.deleteNode(this.root,data)
    }
    deleteNode(node,data){
             
   
    if(node === null)
    return null;


    else if(data < node.data)
    {
        node.left = this.deleteNode(node.left, data);
        return node;
    }

    else if(data > node.data)
    {
        node.right = this.deleteNode(node.right, data);
        return node;
    }

    else
    {
     // deleting node with no children
    if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }

    // deleting node with one children
    if(node.left === null)
        {
            node = node.right;
            return node;
        }
     
    else if(node.right === null)
        {
            node = node.left;
            return node;
        }

    // Deleting node with two children
    // minimum node of the right subtree
    // is stored in aux
    var aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.deleteNode(node.right, aux.data);
    return node;
}

}

findMinNode(node)
{
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}

// search for a node with given data
search(node, data)
{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.search(node.left, data);
 
    // if data is more than node's data
    // move right
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}
getRootNode()
{
    return this.root;
}
}
// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.addData(15);
BST.addData(25);
BST.addData(10);
BST.addData(7);
BST.addData(22);
BST.addData(17);
BST.addData(13);
BST.addData(5);
BST.addData(9);
BST.addData(27);
var root = BST.getRootNode();
console.log('root',root)
BST.deleteData(5);
BST.deleteData(15);
var root = BST.getRootNode();