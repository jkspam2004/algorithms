""" merge two sorted linked list """

from sll import SLL

def merge_two_sorted(list1, list2):
    newlist = SLL()
    curr1 = list1.head
    curr2 = list2.head

    if not newlist.head:
        if curr1.value < curr2.value:
            newlist.head = curr1 
            curr1 = curr1.next
        else:
            newlist.head = curr2
            curr2 = curr2.next

        curr_merged = newlist.head


    while curr1 and curr2:
        if curr1.value < curr2.value:
            curr_merged.next = curr1
            curr_merged = curr_merged.next
            curr1 = curr1.next
        else:
            curr_merged.next = curr2
            curr_merged = curr_merged.next
            curr2 = curr2.next

    if curr1:
        curr_merged.next = curr1
    if curr2:
        curr_merged.next = curr2

    return newlist

if __name__ == "__main__":
    """ alternating list """
    list1 = SLL()
    list1.add(1).add(3).add(5).add(7)
    list2 = SLL()
    list2.add(2).add(4).add(6).add(8)

    try:
        list_merged = merge_two_sorted(list1, list2)
    except:
        print("exception raised")
    else:
        list_merged.print_list()

    """ one list finishes before the other, append the unfinished to end """
    list1 = SLL()
    list1.add(21).add(23).add(24).add(26)
    list2 = SLL()
    list2.add(22).add(27).add(28).add(30)

    try:
        list_merged = merge_two_sorted(list1, list2)
    except:
        print("exception raised")
    else:
        print("\n")
        list_merged.print_list()


