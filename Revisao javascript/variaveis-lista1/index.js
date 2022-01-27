//     ************************************** LISTA DE JAVASCRIPT AULA DE VARIÁVEIS ***************************     \\

/* Exercícios de interpretação de código

1.  let a = 10      Para a variável a foi atribuído o valor 10
let b = 10          Para a variável b foi atribuído o valor 10
          

console.log(b)      O comando console.log imprimirá no console o valor 10 que é o seu valor aribuído.

b = 5               A variável b foi atribuído um novo valor que passa a ser 5
console.log(a, b)   No console, serão impressos os valores 10,5 que respectivamente são os valores de a e b

2. let a = 10       A variável a recebeu como atributo o valor 10
let b = 20          A variável b recebeu como atributo o valor 20
c = a               Uma nova variável recebe o valor de a que é 10
b = c               A variável b recebe o valor de c que é 10
a = b               A variável a recebe o valor de b que é 10

console.log(a, b, c)        No console serão impressos os valores 10 10 10 

3. let p = prompt("Quantas horas você trabalha por dia?")       A variável p recebe como parâmetro o pedido de informação através do comando prompt a informação de que precisa ser impresso no navegador, no caso, a pergunta: Quantas horras você trabalha por dia? e a minha sugestão de nome para essa variável é: horasTrabalhadasDia
let t = prompt("Quanto você recebe por dia?")                   A variável t recebe como parâmetro o pedido de informação através do comando prompt a informação de que precisa ser impresso no navegador, no caso, a pergunta: Quanto você recebe por dia? e a minha sugestão de nome para essa variável é: salarioDia
alert(`Voce recebe ${t/p} por hora`)                            Será impresso no navegador a informação de quanto o usuário receberá por hora trabalhada; Já que dividirá o valor da variável salarioDia pela variável HorastrabalhadasDia
*/

// Exercícios de escrita de código

/*
// 1.
let umNome = prompt('Digite um nome!')                       // Ao acrescentar a palavra null nas variáveis, o navegador responde com a palavra "object"

let umaIdade = prompt('Digite sua idade!')

alert('Olá ' + umNome + ', você tem ' + umaIdade + ' anos'); // Não apareceu nada na tela do navegador e no console apareceu que "SyntaxError não capturado: identificador inesperado"
*/

/*
// 2.
let pergunta1 = prompt('Está chovendo hoje?')

let pergunta2 = prompt('Você estudou hoje?')

let pergunta3 = prompt('Você está procastinando?')

let estaChovendo = alert('Está chovendo hoje? ' + pergunta1) 

let estudouHoje = alert('Voce estudou hoje? ' + pergunta2)

let atoa = alert('Voce está procastinando ' + pergunta3)
*/

/*
//3.
let a = 10

let b = 25

let c = null

c = a
a = b 
b = c
console.log('O novo valor de a é', a)
console.log('O novo valor de b é', b)
*/

/*
// DESAFIOS

 let primeiroNumero = prompt('Digite um número')

 let segundoNumero = prompt('Digite outro número') 

console.log( Number(primeiroNumero) + Number(segundoNumero))

console.log(Number(primeiroNumero) * Number(segundoNumero)) // Aqui tive dificuldade em chamar o Number, pois achei que deveria ter colocado eles nos prompts
*/
