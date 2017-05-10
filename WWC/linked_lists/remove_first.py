""" remove the first item from a linked list """

from sll import SLL

def remove_first(sll):
    head = sll.head
    if not head:
        return sll

    if head.next:
        sll.head = head.next
    else:
        sll.head = None 

if __name__ == "__main__":
    """ removing first item in more than one element list """
    sll = SLL()
    sll.add(1).add(2).add(3).add(4)
    print("\nbefore")
    sll.print_list()

    try:
        remove_first(sll)
    except:
        print("exception raised")
    else:
        print("\nafter")
        sll.print_list()

    """ removing item in one element list """
    sll = SLL()
    sll.add(7)
    print("\nbefore")
    sll.print_list()

    try:
        remove_first(sll)
    except:
        print("exception raised")
    else:
        print("\nafter")
        sll.print_list()
