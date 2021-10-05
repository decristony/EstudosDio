//funçao geradora
//controle da funçao no meio da execuçao devolvendo o controle 
//para quem faz a chamada e depois retorna a executar

//sintaxe
function* cont(n) {
  let c = 0
  while (c < n) {
    yield console.log(c)
    c++
  }

}

//aviso - só executa com o next -
const c1 = cont(10)
console.log(c1.next())
console.log(c1.next())
console.log(c1.next())


//laço for para executar a funçao completa sem precisar do next

// function* cores() {
//   yield 'vermelho';
//   yield 'verde';
//   yield 'amarelo';
//   yield 'roxo';
//   yield 'preto';
//   yield 'branco';
// }
// for (let c of cores()) {
//   console.log(c)

// }