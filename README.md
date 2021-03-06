# Javascript Data Structures

This repository is meant as an exploration of common data structures.

It uses Javascript to implement the common methods associated with the data structures.

In certain situations, it uses built-in methods for simplicity.

| Data Structure | ES6 Class | Prototypal | Psuedoclassical |
|---|---|---|---|
| [Arrays](./arrays/README.md) | [Array Class](./arrays/arrayClass.js) | [Array Prototypal](./arrays/arrayPrototypal.js) | [Array Psuedoclassical](./arrays/arrayPseudoclassical.js)|
| Binary Search Tree (BST) | | |
| Graph | | |
| Hash Table | | |
| Linked List (Doubly) | | |
| Linked List (Singly) | [Singly Linked List Class](./linked-list-singly/llsinglyClass.js) | |
| Queue | | |
| Set | | |
| [Stack](./stack/README) | [Stack Class](./stack/stackClass.js) | |
| Tree | | |
| Trie | | |

BigO References

Average Time Complexity

| Data Structure | Access | Search | Insertion | Deletion |
| --- | --- | --- | --- | --- |
| Arrays | O(1) | O(n) | O(n) | O(n) |
| Binary Search Tree (BST) | | | | |
| Graph | | | | |
| Hash Table | | | | |
| Linked List (Doubly) | | | | |
| Linked List (Singly) | O(n) | O(n) | O(1) | O(1) |
| Queue | | | | |
| Set | | | | |
| Stack | | | | |
| Tree | | | | |
| Trie | | | | |

# Classic Algorithms
I've also implemented a few algorithms associated with these data structures.

* [Bellman-Ford Shortest Path Graph Traversal](./graph-traversal/bellmanFord.js)
* [Djikstra Shortest Path Graph Traversal](./graph-traversal/djikstra.js)