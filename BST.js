// JavaScript program to print BST in given range 
// A binary tree node 

class node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

var root = null;


function sortedArrayToBST(arr, start, end)
{
    /* Base CAse */
    if (start > end)
    {
        return null;
    }

    /* Get the middle element and make it root */
    var mid = parseInt((start + end) / 2);
    var newNode = new node(arr[mid]);
    /* Recursively construct the right subtree and make it right child of root */

    newNode.left = sortedArrayToBST(arr, start, mid -1);
    /* Recursively construct the right subtree and make it right child of root */
    newNode.right = sortedArrayToBST(arr, mid + 1, end);
    return newNode;

}
/* A utility function to print preoder traversal of BST */
function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    document.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var n = arr.length;
root = sortedArrayToBST(arr, 0, n-1);
document.write("Preorder traversal of constructed BST")
preOrder(root);


/*
The result of the code above is 
 "Preorder traversal of constructed BST: 4 2 1 3 6 5 7" which
indicates the pre-order traversal of the constructed Binary Search
Tree (BST).

In a pre-order traversal, you visit the root node first, 
then recursively traverse the left subtree, and finally recursively 
traverse the right subtree. So, when you see the sequence "4 2 1 3 6 5 7", it means:

Start at the root node, which contains the value 4.
Traverse to the left subtree of 4, which contains the nodes with 
values 2, 1, and 3.
After finishing the left subtree, move to the right subtree of 4,
which contains the nodes with values 6, 5, and 7.
So, the pre-order traversal of the constructed BST yields the 
sequence: 4 (root), 2 (left child of 4), 1 (left child of 2), 
3 (right child of 2), 6 (right child of 4), 5 (left child of 6), 
and 7 (right child of 6). 
*/
