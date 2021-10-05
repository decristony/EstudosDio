//function anonima - uma variavel recebe uma funçao

var soma = function (...num) {
  //function soma valores escritos no console independende de quantos sao
  let res = 0
  //enlace - loop com for of- retorna os valores do log e soma 
  for (n of num) {
    res += n
  }

  return res
}
var s = soma

console.log(s(1, 2, 3, 4))
console.log(s(1, 4))
console.log(s(1, 3, 4))
console.log(s(1))
console.log(s)