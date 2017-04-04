""" find middle element in list.  if no middle, return node 
to the left of middle """

from sll import SLL

def find_middle(node):
    print("find_middle()")

    if not node:
        return node

    slow = node
    fast = node.next.next if node.next else None

    while slow and fast:
        print("slow {}, fast {}, next {}".format(slow.value, fast.value, fast.next))
        slow = slow.next
        fast = fast.next.next if fast.next else None

    return slow

def find_middle_dict(node):
    print("find_middle_dict()")

    if not node:
        return node

    slow = node
    fast = node['next']['next']if node['next'] else None

    while slow and fast:
        print("slow {}, fast {}, next {}".format(slow['value'], fast['value'], fast['next']))
        slow = slow['next']
        fast = fast['next']['next'] if fast['next'] else None

    return slow

if __name__ == '__main__':
    s = SLL()
    s.add(1).add(2).add(3).add(4).add(5)

    try:
        node = find_middle(s.head)
        print(node.value)
    except AttributeError:
        print("middle not found")


    """ use dictionary objects to create linked list of nodes """
    first = { 'value': 6, 'next': None }
    second = { 'value': 7, 'next': None }
    third = { 'value': 8, 'next': None }
    fourth = { 'value': 9, 'next': None }
    fifth = { 'value': 10, 'next': None }

    first['next'] = second
    second['next'] = third
    third['next'] = fourth
    fourth['next'] = fifth

    node = find_middle_dict(fifth)
    print(node['value'])
    
 
