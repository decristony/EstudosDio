// function sum(number1, number2) {
//   return number1 + number2
// }
//constante é criada e recebe o valor de uma arrow function
// const sum = (numero1, numero2) => numero1 + numero2;
// console.log(sum(21, 11))

// const community =() =>'ColabCode'
// console.log(community())

// const dobrar = _ => _ * 2;

// console.log(dobrar(2020))

// const sum = (n1, n2, n3) => {return n1+n2+n3};

// console.log(sum(20 , 10, 10))

//mais de um parametro


//para nao precisar botar return é usado um par de parenteses por fora da function
// const getPerson = () => ({
//   nome: 'jamaica',
//   idade: 015,
//   classe: 'alta'
// })
// console.log(getPerson())
//iiFE

(() => {
  const getPerson = () => ({
    nome: 'clyner',
    idade: 22,
    sexo: 'masc'
  })

  console.log(getPerson());
})()
