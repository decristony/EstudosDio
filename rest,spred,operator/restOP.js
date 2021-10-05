//rest operator ... retorna os argumentos em forma de array
//funçao retorna a soma independente da quantidade de valores. 
//args traz o array dos valores e o reduce realiza a soma dos valores do array
//passando por argumento a quantidade de valores encontrados
// function sum(...args) {
//   //ultimo numero declara o valor inicial da contagem
//   return args.reduce((_, __) => _ + __, 0);


// }console.log(sum(1, 5, 5, 3, 2, 2))


//rest traz o restante dos numeros nao especificados em forma de array 
// function sum(a, b, ...rest) {
//   console.log(1, 2, rest)
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7))


function soma(...numero) {

  let res = 0

  for (n of numero) {
    res += n
  }
  return res

}
console.log(soma(10, 6))