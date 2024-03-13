// Build a Node class/factory.

class Node {

    constructor(data) {
        this.data =  data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        // Sort and remove duplicates
        const SortedArray = Array.from(new Set(array.sort((a, b) => a - b)));

        const helper = (start, end) => {

            if (start > end) return null;

            const mid = Math.floor((start + end) / 2);
            const newNode = new Node(SortedArray[mid]);
            newNode.left = helper(start, mid - 1);
            newNode.right =  helper(mid + 1, end);
            return newNode;
        };

        return helper(0, SortedArray.length - 1);
    }

    isBalanced(node = this.root) {
        return this.checkHeight(node) !== -1;
    }

    checkHeight(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = this.checkHeight(node.left);
        if (leftHeight === -1) {
            return -1; // Left subtree is unbalanced
        }

        const rightHeight = this.checkHeight(node.right);
        if (rightHeight === -1) {
            return -1; // right subtree is unbalanced
        }

        const heightDifference = Math.abs(leftHeight - rightHeight);
        if (heightDifference > 1) {
            return -1; // subtree is unbalanced
        }

        return Math.max(leftHeight, rightHeight) + 1; // Return height of subtree
    }

    levelOrder(callback) {
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const node = queue.shift();
            callback(node.data);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    // Other methods: insert, deleteItem, find, levelOrder, inOrder, preOrder, postOrder,
    // height, depth, isBalanced, rebalance
}

// Driver script
const getRandomNumbers = (count) => {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100)); 
    }

    return numbers;

};

const randomNumbers = getRandomNumbers(10); //Generatig an array of random numbers
const bst = new Tree(randomNumbers); // Creating a balanced binary search tree
console.log("Is the tree balanced?", bst.isBalanced()); // Checking if the tree is balanced
console.log("Level order traversal:");
bst.levelOrder(console.log); // Printing level order traversal
console.log("Preorder traversal:");
bst.preOrder(console.log); // Printing preorder traversal
console.log("Inorder traversal:");
bst.inOrder(console.log); // Printing inorder traversal
console.log("Postorder traversal:");
bst.postOrder(console.log); // Printing postorder traversal

// Unbalancing the tree by adding numbers > 100 (for example)
const unbalancedNumbers = [...randomNumbers, 150, 120, 130];
const unbalancedBst = new Tree(unbalancedNumbers);
console.log("Is the unbalanced tree balanced?", unbalancedBst.isBalanced());

// Balancing the unbalanced tree
unbalancedBst.rebalance();
console.log("Is the rebalanced tree balanced?", unbalancedBst.isBalanced());
console.log("Level order traversal of the rebalanced tree:");
unbalancedBst.levelOrder(console.log); // Printing level order traversal
console.log("Preorder traversal of the rebalanced tree:");
unbalancedBst.preOrder(console.log); // Printing preorder traversal
console.log("Inorder traversal of the rebalanced tree:");
unbalancedBst.inOrder(console.log); // Printing inorder traversal
console.log("Postorder traversal of the rebalanced tree:");
unbalancedBst.postOrder(console.log); // Printing postorder traversal
