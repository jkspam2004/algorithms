"""
    Queue class implemented with array that wraps around
"""

class Queue:
    def __init__(self, limit=2):
        self.head = 0
        self.tail = 0
        self.size = 0
        self.data = [None] * limit

    def enqueue(self, value):
        if not self.isFull():
            self.data[self.tail] = value
            self.tail = (self.tail + 1) % len(self.data) 
            self.size += 1
        else:
            return "Queue is full"

    def dequeue(self):
        if not self.isEmpty():
            head = self.data[self.head]
            self.data[self.head] = None
            self.head = (self.head + 1) % len(self.data)
            self.size -= 1
            return head
        else:
            return "Empty queue"

    def peek(self):
        if not self.isEmpty():
            return self.data[self.head]
        else:
            return "Empty queue"

    def isEmpty(self):
        return self.size == 0

    def isFull(self):
        return self.size >= len(self.data)

    def print_queue(self):
        print(self.data)

if __name__ == "__main__":
    q = Queue()
    q.enqueue(1)
    q.print_queue()
    q.enqueue(2)
    q.print_queue()
    q.dequeue()
    q.print_queue()
    q.enqueue(3)
    q.print_queue()
    q.dequeue()
    q.print_queue()
    q.dequeue()
    q.print_queue()
    print(q.isFull())
