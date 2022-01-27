// ********************** LISTA DE  STRINGS E ARRAYS *********************\\

/*
//1.
let array
console.log('a. ', array)       // No caso desse console.log o resultado virá como undefined pois o array não recebeu nenhum atributo

array = null
console.log('b. ', array)       // O console log retornará null por que o array está definido como null   

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length)                //  O console log retornará a quantidade de itens do array no caso 11 itens

let i = 0                                       //  a variável let i = 0 está atribuindoo valor zero ao índice
console.log('d. ', array[i])                   //   será impresso no console d. 3 que no caso é o valor atribuido a posição 0 do array

array[i+1] = 19                         //    no array números o valor da segunda posição no indice será substituido por 19 
console.log('e. ', array)              //     Será impresso no console o valor do array com o segundo elemento substituido por 19

const valor = array[i+6]                    
console.log('f. ', valor)       // Será impresso no console o valor do sexto elemento do array, no caso 9
*/
/*
//2.
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // Se o usuário digitar a frase Subi num ônibus em marrocos , no console aparecerá a SUBI NUM ONIBUS EM MIRROCOS, foram usados os métodos toUpperCase para deixar a letra maiú´scula, o método replaceAll para substituir a letra A pela letra I, e por fim o método .length verificou o número de caracteres na frase 27
*/


//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ EXERCÍCIO DE ESCRITA DE CÓDIGO ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ \\

/*
1.
let nomeDoUsuario = prompt('Qual o seu nome?')
let emailUsuario = prompt('Qual o seu email?')
            console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso.Seja bem vinda(o) ${nomeDoUsuario} !`)
*/
/*
//2.

        let comidasPreferidas = [      
    'lasanha',     
'cachorro quente',
'dobradinha',
'churrasco',
'gel de carboidrato']
            console.log(comidasPreferidas)
            console.log('Essas são minhas comidas preferidas!')
            console.log(comidasPreferidas[0])
            console.log(comidasPreferidas[1])                   // PRA DESCOBRIR COMO DEIXAR EM LINHAS DIFERENTES SÓ OLHANDO O GABARITO, BOM!!!
            console.log(comidasPreferidas[2])
            console.log(comidasPreferidas[3])
            console.log(comidasPreferidas[4])

    let comidaUsuario = prompt('Qual a sua comida preferida?')
        comidasPreferidas[comidasPreferidas.length , 1] = comidaUsuario
            console.log(comidasPreferidas )
*/
/*
//3.
        let listaDeTarefas =[]

        let tarefa1 = prompt('O que você precisa fazer primeiro hoje?')
        let tarefa2 = prompt('O que você precisa fazer depois?')
        let tarefa3 = prompt('O que você precisa fazer finalmente?')
            listaDeTarefas = [tarefa1 , tarefa2, tarefa3]
                    console.log(listaDeTarefas)
        let tarefaRealizada = prompt('Digite 0,1 ou 2 para a tarefa realizada!')
           listaDeTarefas.splice(Number(tarefaRealizada),1)
           console.log(listaDeTarefas)
  */
 //************************* */ DESAFIOS\\

 //1.
 /*
            let umaFrase = 'Nunca pare de lutar'
            let fraseArray = umaFrase.split('')
            console.log(fraseArray)
*/
/*
//2.

        let arrayDeFrutas = ['Banana','Morango','Abacaxi','Laranja','Ameixa'] 
        let indexAbacaxi = arrayDeFrutas.indexOf('Abacaxi')
        let tamanhoDoArray = arrayDeFrutas.length
        console.log(`Index abacaxi ${indexAbacaxi} Tamanho do Array ${tamanhoDoArray}`) 
  */      
    



// ******************* AULA******************************
/*
const nome = 'Emanuel'
const idade = 36
const frase = `Meu nome é ${nome} e tenho ${idade} anos` // template string
console.log(frase)
*/
/*
// Propriedade length --->>> nos diz qual o numero de caracteres de uma string, incluindo espaços

const nome = 'Emanuel de Araújo Bitencourt'
    console.log(nome.length)


 // MÉTODOS   
// toLowerCase() todas as letras minuscula

console.log(nome.toLocaleLowerCase())

// toUpperCase() todas as letras maiusculas

console.log(nome.toUpperCase())

// trim() retira os espaços que existem antes e depois da string , serve para fazer uma "filtragem" nos dados recebidos evita caracteres excedentes

let email = ' emanuel@hotmail.com.br '
console.log(email.trim())

// includes(caracteres) determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false método booleano

let frase = 'Hoje comi cenoura'

console.log(frase.includes('cenoura'))
console.log(frase.includes('batata'))

const frase1 = 'Eu amo cerveja!'
const temCerveja = frase1.includes('cerveja') 
console.log(temCerveja)

// replaceAll(chars1, chars2) troca todas as ocorrências de um conjunto de caracteres(chars1) por alguma outra coisa(chars2)

const fraseDaCenoura = 'Hoje comi cenoura, adoro cenoura'
const novaFrase= fraseDaCenoura.replaceAll('o','a')
console.log(novaFrase)
*/

// ARRAYS LISTA DE ELEMENTOS []
/*
{
const listaDeCompras = ['Batata','Alface','hamburguer','Ovo']
console.log(listaDeCompras[3])

const ritmos = ['Reggae','Rock','Jazz','Samba','Calango','Frevo']
const posicao = prompt('Digite um número de 1 a 6')
    console.log(ritmos[posicao -1])
}
*/


// i índice é posição!!!

//PROTOTIPOS DE ARRAYS

// length quantidade de elementos dentro de um array
/*
{
const jogos = ['warcraft','tetris','Mario World','xadrez','dama']
    console.log(jogos.length)

// Método includes

console.log(jogos.includes('tetris'))


// Método push(+ ultimo elemento)

    jogos.push('Dirt')
        console.log(jogos)

// Método pop(- Ultimo elemento) 

jogos.pop('Mario World')
    console.log(jogos)

// Método splice(i,n) remove n ->elementos apartir da posição ->i do array

jogos.splice(0,1)
console.log(jogos)
}
*/
/*
let numeros = [1,2,3,4,5,6]
console.log(numeros.length)

numeros.push(7)
console.log(numeros)

numeros.splice(3,2)
console.log(numeros)

console.log(numeros.length)
*/

