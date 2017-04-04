""" insert an item into a sorted linked list """

from sll import SLL
from node import Node

def insert_into_sorted(sll, node):
    curr = sll.head
    if not curr:
        sll.head = node
        return sll

    while curr.next:
        if curr.value < node.value and node.value < curr.next.value:
            next = curr.next
            curr.next = node
            node.next = next
            curr = next
            return sll
        else:
            curr = curr.next

    curr.next = node
    return sll

if __name__ == "__main__":
    """ insert a node in the middle """
    s = SLL()
    s.add(1).add(2).add(4).add(5)
    print("\nbefore")
    s.print_list()

    node = Node(3)

    try:
        s = insert_into_sorted(s, node)
    except:
        print("exception raised")
    finally:
        print()
        s.print_list()

    """ insert a node at the end """
    t = SLL()
    t.add(6).add(7).add(8).add(9)
    print("\nbefore")
    t.print_list()

    node = Node(10)
  
    try:
        t = insert_into_sorted(t, node)
    except:
        print("exception raised")
    finally:
        print()
        t.print_list()

