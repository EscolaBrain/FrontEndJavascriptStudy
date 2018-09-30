function imprimirNomeGritado(obj){
    //throw new error('....'); 
    throw 10

    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroElancar(e)
    }


const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)
}