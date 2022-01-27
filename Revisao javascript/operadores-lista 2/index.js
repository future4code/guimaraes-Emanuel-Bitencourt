// *************************** OPERADORES E LÓGICA DE PROGRAMAÇÃO ****************\\

// Exercicio de interpretação

/*
1.
const bool1 = true                  Está sendo declarada uma constante boleana nomeada  de bool1 e seu valor atribuido é true
const bool2 = false                 Está sendo declarada uma constante boleana nomedada de bool2 e seu valor atribuido é false
const bool3 = !bool2                Está sendo declarada uma constante boleana nomedada de bool3 e seu valor atribuido é diferente de bool2 

let resultado = bool1 && bool2      A variável denominada resultado recebe os valores de bool1 e verifica  com bool2 para saber se as duas são iguais
console.log("a. ", resultado)       No console aparecera a alternativa a. false,    bool1 é diferente de bool2

resultado = bool1 && bool2 && bool3                     A variável denominada resultado recebe os valores de bool1, bool2 e bool3 para saber se as três são iguais
console.log("b. ", resultado)                           No console será impresso b. false .

resultado = !resultado && (bool1 || bool2)                A variável resultado recebe o resultado contrário e quer verificar se bool1 ou bool2 são iguais a ela.
console.log("c. ", resultado)                             No console será impresso c. true No caso 

console.log("d. ", typeof resultado)                      Será impresso no console o tipo da variável, boolean      
*/




//2.
/*
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero                 // Aparecerá no console a concatenação dos dois números digitados pelo colega, a sugestão é que o amigo coloque um Number antes dos prompts para indicar que se trata de um arquivo número

console.log(soma)
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
/*
//1.
{
    let idadeDoUsuario = Number(prompt('Qual a sua idade?'))
    let idadeDoAmigo = Number(prompt('Qual a idade do seu melhor amigo? '))

    let diferencaIdade = idadeDoUsuario >= idadeDoAmigo

    console.log(`Sua idade é maior que a do seu amigo? ${diferencaIdade}` )
}
*/   

/*
//2.
    let numeroPar = Number(prompt('Digite um número par!'))
        console.log( numeroPar % 2)                             // O padrão existente é o resultado independente de qual for o número par é 0 (zero) e caso seja colocado um numero impar o console retorna o valor 1
*/

/*
//3.
    let idadeDoUsuario = Number(prompt('Qual a sua idade?'))
        console.log( (idadeDoUsuario) * 12);
        console.log((idadeDoUsuario) * 365 );
        console.log((idadeDoUsuario) * (365 * 24))
  */
/*
//4.
    let umNumero = Number(prompt('Digite um número!'))
    let outroNumero = Number(prompt('Digite outro número!'))

        console.log('O primeiro número é maior que o segundo? ', umNumero > outroNumero) 
        console.log('O primeiro número é igual ao segundo? ', umNumero === outroNumero)
        console.log('O primeiro número é divisível pelo segundo? ', umNumero % outroNumero === 0)
        console.log('O segundo número é divisível pelo primeiro? ', outroNumero % umNumero === 0)
*/

//************************** */ DESAFIOS \* ******************\\

    let kelvin = (fahrenheit - 32) * (5/9) + 273.15
    let fahrenheit = (celsius) * (9/5) + 32
    let celsius = (fahrenheit -32) / (5/9) 

    let tempKelvin =(77 - 32) * (5/9) + 273.15 ;
        console.log(tempKelvin)

//Pretendo voltar *************************************************************



    












//******************************************************* aqui pra cima********************************* *\\
/*
const primeiroValor = 10
const segundovalor = 20

const resultado = segundovalor % primeiroValor

console.log(resultado)
*/
/*
let a = 10
let b = 20
let c = -10
let d = 15

let soma = a + b
let subtracao = a - b
let multiplicacao = a * b
let divisao = a / b
let resto = a % b

console.log('O resultado é ', soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)
//a = a + 5 abaixo a forma mais comumente usada
 a += 5
 a *= 5
 a -= 5
 console.log('novo a' , a)
 */


/*
let resultado = 100
resultado += 20
resultado -= 10
resultado *= 5
resultado /= 10


console.log(resultado += 20)
*/
// exercício 1
/*
const resultado1 = 3 + 4
const resultado2 = (3 * 5) / 2
const resultado3 = 5 - 4
const resultado3a = resultado3 * 1
const resultado4 = 234 % 5

console.log(resultado1 , resultado2 , resultado3 , resultado4 , resultado3a)
*/



// COMPARADORES

/* 
IGUAL === 
DIFERENTE !==
MAIOR E MAIOR IGUAL > E >=
MENOR E MENOR IGUAL < E <=

QUANDO SE FAZ UMA COMPARAÇÃO OS VALORES SÃO GERALMENTE TRUE OR FALSE
*/
/*
console.log( 1 !== 1)
console.log('1' === 1)
console.log(10 < 5)
console.log( 10 >= 10)
*/
/*
const a = 10
const b = 25

const verificacao = a === b
console.log(verificacao)

const verificacao1 = a !== b
console.log(verificacao1)

const verificacao3 = a > b
console.log(verificacao3)

const verificacao4 = a < b
console.log(verificacao4)
*/

/* Operadores lógicos

São operadores especiais usados entre booleanos
Retornam um valor booleano
Operador E &&
Operador Ou || ou um ou outro true é true
Operador Não/Negação ! retorna sempre o contrário a !a 
*/
/*
{
const a = true
const b = false
const c = true

 console.log(b || b)
 console.log(b || c)
 console.log(a && c)
 console.log(a && b || c)
 console.log( !a )
}
*/
/*
// exercício 5

let umNome = prompt('Digite seu nome!')
let nascimento = Number(prompt('Qual seu ano de nascimento?') )
let anoAtual = Number(prompt('Qual o ano atual?') )
let idade = anoAtual - nascimento

console.log(`Olá ${umNome}`)
console.log(`Idade ${idade}`)
console.log('É maior de idade?', idade >= 18)
console.log( 'idade em 2050' , 2050 - nascimento )
*/
// resultado = !resultado && (bool1 || bool2) 