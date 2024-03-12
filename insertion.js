// javascript program to demonstrate insert operation
// in BST

/* Class containing left and right child or current
node and key value */

class Node {
    constructor(item) {
        this.key = item;
        this.left = this.right = null;
    }
}

// Root of BST
var root = null;

// This method mainly calls insertRec()
function insert(key) {
    root = insertRec(root, key);
}

// A recursive function to insert a new key in BST
function insertRec(root, key) {

    // If the tree is empty, return a new node
    if (root == null) {
        root = new Node(key);
        return root;
    }

    // Otherwise, recur down the tree
    if (key < root.key)
    root.left = insertRec(root.left, key);
else if (key > root.key)
root.right = insertRec(root.right, key);

// Return the (unchanged) node pointer 
return root;
}

// This method mainly calls InorderRec()
function inorderRec() {
    inorderRec(root);
}

// A utility function to do 
// iorder traversal of BST

function inorderRec(root) 
{
    if (root != null) {
        inorderRec(root.left);
        document.write(root.key+"<br/>");
        inorderRec(root.right);
    }
}

insertRec(50)
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

// Print inorder traversal of the BST
inorderRec();