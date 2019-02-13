module.exports = {
  vertices: ['s','a','b','c','d','e'],
  negativeGraph: [
    {from: 's', to:'a', cost: 4},
    {from: 's', to:'e', cost: -5},
    {from: 'a', to:'c', cost: 6},
    {from: 'b', to:'a', cost: 3},
    {from: 'c', to:'b', cost: -2},
    {from: 'd', to:'a', cost: 10},
    {from: 'd', to:'c', cost: 3},
    {from: 'e', to:'d', cost: 8},
  ],
  negativeCycleGraph: [
    {from: 's', to:'a', cost: 4},
    {from: 's', to:'e', cost: 5},
    {from: 'a', to:'c', cost: -6},
    {from: 'b', to:'a', cost: -3},
    {from: 'c', to:'b', cost: -2},
    {from: 'd', to:'a', cost: 10},
    {from: 'd', to:'c', cost: 3},
    {from: 'e', to:'d', cost: 8},
  ],
  positiveGraph: [
    {from: 's', to:'a', cost: 4},
    {from: 's', to:'e', cost: 5},
    {from: 'a', to:'c', cost: 6},
    {from: 'b', to:'a', cost: 3},
    {from: 'c', to:'b', cost: 2},
    {from: 'd', to:'a', cost: 10},
    {from: 'd', to:'c', cost: 3},
    {from: 'e', to:'d', cost: 8},
  ]
}