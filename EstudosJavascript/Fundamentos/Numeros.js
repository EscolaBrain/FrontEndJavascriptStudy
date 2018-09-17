const a = 5;
const b = Number ('1.0');

console.log(a,b);
console.log(Number.isInteger(a))
console.log(Number.isInteger(b))

const avaliacao = 9.781;
const avaliacao2 = 8.987;
const avalicaoTotal = (avaliacao*a)+(avaliacao2*b)
const media = avalicaoTotal/(a+b)

console.log(media.toFixed(2))
//aqui ele usa o as casas decimais apos a virgula onde tem (*)
console.log(media.toString(2))
// em binario
console.log(typeof media) 
// aqui ele fala qual é o tipo do dado
