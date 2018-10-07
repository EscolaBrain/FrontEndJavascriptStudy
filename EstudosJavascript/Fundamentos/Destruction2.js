//mesmo rpocesso do 1 mas dentro de arrays
const [a] = [10] ;
console.log(a)

const [n1, ,n3, ,n5, n6=0]=[10, 7, 9, 8]
console.log(n1, n3, n5, n6)
//no exemplo abaixo ele tem um array composto por um otru array interno
//onde apenas se´ra usado o segundo elemento
//
const[, [, nota,], ] = [[1, 0, 0], [2, 6, 8]]
console.log(nota)