""" insert an item to the head of a linked list """

from sll import SLL
from node import Node

def insert_into_head(sll, node):
    if not sll.head:
        sll.head = node
        return sll

    node.next = sll.head
    sll.head = node
    return sll

if __name__ == "__main__":
    sll = SLL()
    sll.add(2).add(3).add(4)
    print("before insert")
    sll.print_list()

    node = Node(1)

    try: 
        sll = insert_into_head(sll, node)
    except:
        print("exception raised")
    finally:
        print("\nafter insert")
        sll.print_list()
