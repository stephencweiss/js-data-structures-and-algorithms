const { vertices, negativeCycleGraph, negativeGraph, positiveGraph } = require('./example')
const { MemoTable } = require('./utils')


function findShortestPathDjikstra(vertices, graph) {
  const memo = new MemoTable(vertices);

  // while nextVertex returns
  while(memo.getCandidateVertices().length > 0) {
    const vertex = memo.nextVertex()
    // find all of the edges for the vertex
    const edges = graph.filter(edge => edge.from === vertex.name)

    // for each edge
    edges.forEach(edge => {
      // find the current cost for the destination in the memo table
      const currentCost = memo.getCost(edge.to);
      // find the potential cost to get to the desintation (i.e. the current vertex in the memo table + cost)
      const potentialCost = memo.getCost(edge.from) + edge.cost;
      // if the potentail cost < current cost
      if (potentialCost < currentCost) {
        // set the cost for the destination vertex in the memo table
        memo.setCurrentCost(edge.to, potentialCost);
      }
    })
    // mark the vertex as visited
    memo.setAsVisited(vertex.name) // this is equivalent to `edge.from`
  }
  return memo.toString();
}

// Normal case
findShortestPathDjikstra(vertices, positiveGraph);

// Correct answer, but *no* check for negative cycle
// Therefore it is not *reliably* accurate / cannot be verified
//  Use Bellman-Ford if negative numbers are a possibility
findShortestPathDjikstra(vertices, negativeGraph);


// WARNING: DO NOT DUE THIS!
// Djikstra does not have negative cycle detection
// This answer cannot be trusted
findShortestPathDjikstra(vertices, negativeCycleGraph);