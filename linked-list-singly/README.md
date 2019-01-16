# Singly Linked Lists

> A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. From WikipediaA Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence.
>
> From [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)

# Common Methods (or Properties)

## Properties
### Head
The first item in the list.
### Tail
The last item in the list. This is implementation specific.
### Number of Items In List
A property storing the number of items in the linked list.
## Methods
### Add (To Tail)
Implementation specific. In this case, we defaulted to adding an element to the *end* of the list. Because we have a Tail property, this is a constant time.

If the implementation of a singly linked list does *not* have a Tail property, it is more efficient to add a new node to the front as a Head.
### Search
Searches for a value and returns true or false depending on its presence in the list.
### Remove
Removes a specific item from the list and connects the previous node to the subsequent node.
Linear time because nodes do not know their predecessor.
### Insert After
Adds a new node to the list after a targeted node.
### Traverse
Visits each node and applies a function. If no function is offered, visiting is unnecessary.
### Print
Prints each value of the list as a string.