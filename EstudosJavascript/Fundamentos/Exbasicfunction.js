//função é um verbo uma ação
//delimitada por chaves 
//sequencia de codigo sendo reutilizado
  

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(5,30);
// neste caso imprimirSoma(5,30,12,12,34);
// o script não vai usar os dados depois do 30 pois é fracamentetipada.

console.log(typeof a);

//Funcao com retorno

function soma(a, b=0){
    return a+b;
}
console.log(soma(2,3));
