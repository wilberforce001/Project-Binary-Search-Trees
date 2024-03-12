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
}

