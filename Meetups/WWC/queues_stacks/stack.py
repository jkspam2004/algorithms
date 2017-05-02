class Stack:
    def __init__(self):
        self.top = -1
        self.stack = []

    def push(self, data):
        self.top += 1
        self.stack.append(data)
        return self

    def pop(self):
        if not self.isEmpty():
            self.top -= 1
            return self.stack.pop()
        return None

    def peek(self):
        if not self.isEmpty():
            top_value = self.stack[self.top]
            return top_value
        return None

    def isEmpty(self):
        if self.top < 0:
            return True
        return False

    def print_stack(self):
        print("size: {}, top: {}".format(len(self.stack), self.top))
        for ele in range(len(self.stack)-1, -1, -1): # from last index down to 0
            print(self.stack[ele], end=", ")
        print()

if __name__ == "__main__":
    st = Stack()
    st.push(3).push(2).push(1)
    st.print_stack()
    print("peeked: ", st.peek())
    print("popped: ", st.pop())
    st.print_stack()
    print("popped: ", st.pop())
    print("popped: ", st.pop())
    st.print_stack()
    
    

