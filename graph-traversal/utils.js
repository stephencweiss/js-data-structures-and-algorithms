function createMemo (vertices) {
  let memo = {}
  vertices.map(el => {
    if ( el === 's') {return memo[el] = 0}
    else { return memo[el] = Number.POSITIVE_INFINITY }
  })
  return memo;
};

module.exports.createMemo = createMemo;