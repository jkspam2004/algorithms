""" singly linked list class """

from node import Node

class SLL:
    def __init__(self):
        self.head = None
        self.count = 0

    def add(self, value):
        if not self.head:
            self.head = Node(value)
            self.count += 1
            return self
        
        curr = self.head
        while curr.next:
            curr = curr.next

        curr.next = Node(value)
        return self

    def print_list(self):
        curr = self.head
        while curr:
            print("value: {}\nnext: {}".format(curr.value, curr.next))
            curr = curr.next


if __name__ == '__main__':
    x = SLL()
    x.add(3).add(4).print_list()
  
"""
curr = self.head

# curr will end up being the last node
while curr.next:
    curr = curr.next

# curr will end up being None, what last node was pointing to
while curr:
    curr = curr.next
""" 
