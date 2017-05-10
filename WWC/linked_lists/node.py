""" linked list Node class """

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def print_node(self):
        print("value: {}\nnext: {}".format(self.value, self.next))

if __name__ == '__main__':
    node = Node(3)
    node.print_node()
