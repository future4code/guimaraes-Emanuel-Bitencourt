/* Operadores e Lógida de Programação

exercício 1 

const bool1 = true      A linha 5 indica que uma variável const boleana de valor true foi atribuída.
const bool2 = false     A linha 6 indica que uma variável const boleana de valor false foi atribuída.
const bool3 = !bool2    A linha 7 indica que uma variável const boleana diferente da const bool2 foi atribuída

let resultado = bool1 && bool2          A linha 8 é a variável resultado entre a comparação das variáveis bool1 e bool2.
console.log("a. ", resultado)           Na linha 10 está o comando que enviará para o console o resultado da linha 9. (Para que o resultado seja true, é necessário as duas condições para acontecer)

resultado = bool1 && bool2 && bool3     A linha 12 é a variável resultado entre a comparação das variáveis bool1 e bool2 e bool3.
console.log("b. ", resultado)           Na linha 13 está o comando que enviará para o console o resultado da linha 12

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

exercício 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma).

exercício 3



*/

// exercício de escrita de código 1


 const suaIdade = Number(prompt("Qual a sua idadade?"))
 const idadeDoAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

 console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeDoAmigo)
 console.log("A diferença de idade é:", suaIdade - idadeDoAmigo)

// segunda questão

 let numeroPar = Number(prompt("Digite um Número par!"))
 console.log("O resto desse número é:",numeroPar % 2) // o resto da operação sempre será 0 quando for digitado um número par!

// Quando o usuário imprime um número ímpar o resultado da operação é o resto.


// terceira questão!

let dataNascimento = Number(prompt("Em que ano voçê nasceu?" ))
let anoAtual = 2021
let idadeTotal = anoAtual - dataNascimento
let mes = 12 
let dia = 30
let horas = 24
console.log("Sua idade em meses é: ", idadeTotal * mes)
console.log("Sua idade em dias é: ", idadeTotal * mes * dia)  
console.log("sua idade em Horas é: ", idadeTotal * mes * dia * horas ) 
 

//exercicio 4

let primeiroNumero = Number(prompt("Digite um número" ))
let segundoNumero = Number(prompt("Digite outro número" ))

 console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
 console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo número é divisível pelo primeiro?",segundoNumero % primeiroNumero === 0)


