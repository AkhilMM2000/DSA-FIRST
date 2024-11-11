//using Adjacent  matrix you can repreent graphs
const Matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
console.log(Matrix[0][1]);

//using Adjacency  List you can represent grah

const Adjacencylist={
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}

console.log(Adjacencylist.A);
