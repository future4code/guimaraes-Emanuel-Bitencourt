

// EXERCÍCIOS STRINGS E ARRAYS 

/* Questão 1

    let array 
        console.log('a. ', array)  //Eu não consegui entender essa lógica, rodei e o console retornou a. undefined

    array = null
        console.log('b. ', array) // No console aparece b.null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // no console aparecerá o tamanho do array no caso 11 elementos
        console.log('c. ', array.length)

    let i = 0
        console.log('d. ', array[i]) // No console retorna a mensagem d. 3

    array[i+1] = 19
        console.log('e. ', array) // O console retorna essa mensagem no caso eu troquei o elemento na posição do indice que é zero e somei mais um no caso o índice passou a valer 1, este passou a ter como valor 19    e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const valor = array[i+6]
        console.log('f. ', valor)  // O console retornou o valor 9 */  


 Questão 2
const frase = prompt("Digite uma frase")
console.log(frase.toLocaleUpperCase().replaceAll("A", "I"),frase.length) // nessa questão o console com a frase "Subi num onibus em Marrocos " retornará "Subi num onibus em Mirrocos"*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

let nome = prompt("Qual o seu nome?")
let email = prompt("Qual seu email?")
const frase = console.log(`O e-mail ${email} foi cadastrado com sucesso, Seja bem-vindo, ${nome}!`)

// SEGUNDA QUESTÃO

let comidasPreferidas = ["Dobradinha","Lasanha","Biscoito Recheado","Feijão tropeiro","Açaí"]
       console.log(comidasPreferidas)
        
//b
        console.log("Essas são as minhas comidas preferidas:")
        console.log(comidasPreferidas[0])
        console.log(comidasPreferidas[1])
        console.log(comidasPreferidas[2])
        console.log(comidasPreferidas[3])
        console.log(comidasPreferidas[4]) 

//c
        comidasPreferidas[1] = prompt("Qual a sua comida preferida?")
        console.log(comidasPreferidas)


// TERCEIRA QUESTÃO

let listaDeTarefas = []

let tarefasDoDia1 = prompt("Digite uma tarefa matutina do dia!")
let tarefasDoDia2 = prompt("Digite uma tarefa vespertina do dia!")
let tarefasDoDia3 = prompt("Digite uma tarefa noturna do dia!")

let lis