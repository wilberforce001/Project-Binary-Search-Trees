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
