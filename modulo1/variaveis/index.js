/*
1.
let a = 10   na linha 2 a variável a recebeu como atributo o valor 10.
let b = 10   na linha 3 a varável b recebeu como atributo o valor 10.

console.log(b) o comando imprime no console o valor de b no caso 10

b = 5   na linha 7 o valor atribuido a variável b passa a ser 5
console.log(a, b)  na linha 8 serão impressos no console o valor de a = 10 e b = 5


2.
let a = 10          Na linha 12 o valor de a é 10
let b = 20          Na linha 13 o valor de b é 20
c = a               Na linha 14 a variável c recebe o valor de a
b = c               Na linha 15 a variável b recebe o valor de c
a = b               Na linha 16 a varável a recebe o valor de b
console.log(a, b, c)Na linha 17 será impresso no console os valores (10, 10, 10 )


3.
let p = prompt("Quantas horas você trabalha por dia?") A variável let p pode receber o nome de horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") A variável let t pode receber o nome de pagamentoDiario
alert(`Voce recebe ${t/p} por hora`) O comando alert imprime no console o valor a ser pago por hora trabalhada!

*/
1.
let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
console.log (typeof nome, typeof idade) // A variável foi declarada indefinida por não possuirem nenhum dado atribuido a ela
console.log(nome , idade) // Foi possível verificar que as duas variáveis retornaram como strings

console.log("olá", nome, "você tem",idade,"anos!")

2.
let tomouBanho = prompt("Tomou banho hoje?")
let foiVacinado = prompt("Já foi vacinado?")
let gostaDeCaja = prompt("Gosta Cajá? ")

console.log("Tomou banho hoje?", tomouBanho)
console.log("Já foi vacinado?",foiVacinado)
console.log("Gosta Cajá? ",gostaDeCaja)


let a = 10
let b = 25
let c = 0
// Questão da troca de valores, como no exemplo dos copos 
c = b
b = a
a = c
console.log(a,'= A',b,'= B')

let a = 10;
let b = 20
let c = -10;
let d = 15;

// operadores

let soma = a + b;
let subtracao = a - b
let 

