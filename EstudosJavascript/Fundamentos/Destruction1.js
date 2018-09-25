//recurso novo do ES 2015

const pessoa = {
    nome: 'jorge',
    idade: 5,
    endereco:{
        logradouro:'Rua JoseNHAN',
        numero:1234
    }
}

//console.log(pessoa.nome)

const{nome,idade} = pessoa;
console.log(nome, idade);
//logo abaixo ele pode dar um rename nas variaveiscom +:(var)
const {nome:n,idade:o}=pessoa;
console.log(n,o);

const {sobrenome,bemHumorada = true}=pessoa;
console.log(sobrenome,bemHumorada);

