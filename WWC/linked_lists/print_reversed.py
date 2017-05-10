""" print a linked list in reversed order """

from sll import SLL

def print_reverse(node):
    if not node:
        return node

    curr = node
    if curr.next:
        print_reverse(curr.next)

    print(curr.value)
    return

if __name__ == "__main__":
    """ multiple elements in list """
    sll = SLL()
    sll.add(1).add(2).add(3).add(4).add(5)
    print("\nbefore")
    sll.print_list()

    try:
        print_reverse(sll.head)
    except:
        print("exception raised")

    """ empty list """
    sll = SLL()
    print("\nbefore")
    sll.print_list()

    try:
        print_reverse(sll.head)
    except:
        print("exception raised")
