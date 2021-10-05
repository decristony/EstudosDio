


//uma variavel recebe uma function anonima e passa por parametro duas strings
//a primeira string recebe um conjuto de parametros
// e a segunda strign recebe a açao da funçao
//                     funçao ,,, construtor
//                       ||           ||
let soma = new Function("n1,n2 ", "return n1+n2")

console.log(soma(8, 2))