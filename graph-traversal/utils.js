function createMemo (vertices) {
  let memo = {}
  vertices.map(el => {
    if ( el === 's') {return memo[el] = 0}
    else { return memo[el] = Number.POSITIVE_INFINITY }
  })
  return memo;
};

class MemoTable {
  constructor(vertices) {
    this.table = []
    vertices.forEach(vertex => {
      const defaultObj = {
        name: vertex,
        cost: Number.POSITIVE_INFINITY,
        visited: false
      }

      if (vertex === 's') {
        defaultObj.cost = 0
      }
      this.table.push(defaultObj)
    })
  }

  /**
   * @returns {Array} - Candidate vertices are vertices that have not yet been marked as visited
   */
  getCandidateVertices() {
    return this.table.filter(vertex => {
      return vertex.visited === false;
    });
  }

  /**
   * @returns {Object} - The next vertex is the vertex with the smallest cost among candidate vertices
   */
  nextVertex() {
    const candidates = this.getCandidateVertices();
    return candidates.reduce((prev, curr) => {
      return prev.cost < curr.cost ? prev : curr;
    });
  }

  /**
   *
   * @arg {string} vertex - The name of the vertex to be updated
   * @arg {number} cost - The value for the new cost
   * Updates the cost for the vertex in the MemoTable.table
   */
  setCurrentCost(vertex, cost) {
    this.getEntry(vertex).cost = cost;
  }

  /**
   *
   * @arg {string} vertex - The name of the vertex to be marked as visited
   */
  setAsVisited(vertex) {
    this.getEntry(vertex).visited = true
  }

  /**
   *
   * @arg {string} vertex - The string of the vertex we're looking for
   * @returns {Object} The first vertex in the table to meet the criteria of having a name match the argument
   */
  getEntry(vertex) {
    return this.table.find(entry => entry.name === vertex)
  }

  /**
   *
   * @arg {string} vertex - The sought after vertex
   * @returns {number} The current cost of the vertex
   */
  getCost(vertex) {
    return this.getEntry(vertex).cost;
  }

  /**
   * A method for printing the complete table.
   */
  toString() {
    console.log(this.table)
  }

}

module.exports = { createMemo, MemoTable };