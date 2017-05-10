from sll import SLL

""" reverse a linked list in place """
def reverse_list(sll):
    print("\nreverse_list")
    prev = None
    curr = sll.head
    next = sll.head

    while curr:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next

    # at the end of the while loop, curr and next will be pointing to None 
    # and prev will be pointing to the last Node, which will be our new head
    sll.head = prev
    return sll


if __name__ == '__main__':
    x = SLL()
    x.add(1).add(2).add(3).print_list()

    x = reverse_list(x)
    x.print_list()

