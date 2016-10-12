adjList = [
    [1, 3],
    [0, 3],
    [3],
    [0, 1, 2, 4],
    [3, 5],
    [4],
    [7, 8],
    [6, 8],
    [6, 7]
]

function Stack() {
  this.arr = []
  this.push = function(val) {
    this.arr.push(val)
  }
  this.pop = function() {
    return this.arr.pop()
  }
  this.top = function() {
    return this.arr[this.arr.length-1]
  }
  this.size = function() {
    return this.arr.length
  }
}

function DFS(adjList, start) {
  var stack = new Stack()
  // Initialize a visited array which will keep track of the booleans for whether a particular vertex corresponding to the index has been visited or not
  var visited = []
  for(var i = 0; i < adjList.length; i++) {
    visited[i] = false
  }
  // Add the first vertex to the stack
  visited[start] = true
  var current = start
  stack.push(start)
  // Keep looking until the stack is empty
  while(stack.size() != 0) {
    console.log("Our stack is")
    console.log(stack.arr)
    current = stack.top()
    var unvisited = true
    for(var i = 0; i < adjList[current].length; i++) {
      // Only look at the neighbor if it hasn't been visited
      if(visited[adjList[current][i]]) {
        continue
      } else {
        visited[adjList[current][i]] = true
        stack.push(adjList[current][i])
        unvisited = false
        break;
      }
    }
    if(unvisited) {
      stack.pop()
    }
  }
  console.log(visited)
  // return visited
  return visited
}
DFS(adjList, 0)

