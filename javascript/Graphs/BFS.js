adjList = [
    [1, 3],
    [0, 3],
    [3, 5],
    [0, 1, 2, 4],
    [3, 5],
    [2, 4]
]

function Queue() {
  this.arr = []
  this.enqueue = function(val) {
    this.arr.push(val)
  }
  this.dequeue = function() {
    return this.arr.shift()
  }
  this.length = function() {
    return this.arr.length
  }
}

function BFS(adjList, start, end) {
  var queue = new Queue()
  // Initialize a Tracker -- 2D Array where tracker[i] refers to an array that contains the minsteps at index 0 and the neighbor at index 1
  var tracker = []
  for(var i = 0; i < adjList.length; i++) {
    tracker[i] = [undefined, undefined]
  }
  // Set the Tracker minsteps for the start index to be 0 (the neighbor remains undefined)
  tracker[start][0] = 0
  // Enqueue the start
  queue.enqueue(start)
  // Keep looking until the queue is empty
  while(queue.length() != 0) {
    current = queue.dequeue()
    // add all of the current's neighbors to queue
    for(var i = 0; i < adjList[current].length; i++) {
      // Only look at the neighbor if it hasn't been visited
      if(tracker[adjList[current][i]][1] == undefined) {
        // If the neighbor is the start index then ignore it
        if(adjList[current][i] == start) {
          continue
        }
        // Set the minSteps & neighbor based on the "current"'s values
        tracker[adjList[current][i]][0] = tracker[current][0] + 1
        tracker[adjList[current][i]][1] = current
        // enqueue the neigbor so we can eventually look at its neighbors
        queue.enqueue(adjList[current][i])
      }
    }
  }
  // return the tracker
  return tracker
}

BFS(adjList, 0, 2)

