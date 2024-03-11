class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// function to convert the array to BST
// and return the root of the created tree
function sortedArrayToBST(nums) {
    
// if the array is empty return NULL
if (nums.length === 0) {
    return null;
}   

const mid = Math.floor(nums.length / 2);
const root = new Node(nums[mid]);

// initializing queue
const q = [[root, [0, mid - 1]], [root, [mid + 1, nums.length - 1]]];

while (q.length > 0) {
    const [parent, [left, right]] = q.shift();

    // If there are elements to process and parent node is not NULL
    if (left <= right && parent != null) {
        const mid = Math.floor((left + right) / 2);
        const child = new Node(nums[mid]);

        // Set the child node as left or right child of parent node
        if (nums[mid] < parent.val) {
            parent.left = child;
        }   else {
            parent.right = child;
        }

        // Push the left and right child and their indices to the queue
         q.push([child, [left, mid - 1]]);
         q.push([child, [mid + 1, right]]);
    }
}

return root;
}

// function to print the preorder traversal
// of the constructed BST
function printBST(root) {
    if (root === null) {
        return;
    }

    console.log(root.val + " ");
    printBST(root.left);
    printBST(root.right);
}

// Driver Program to test the above function 
const nums = [1, 2, 3, 4, 5, 6, 7];
const root =  sortedArrayToBST(nums);
printBST(root); // Output: 