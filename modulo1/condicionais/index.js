/*  ***** EXERCÍCIOS DE CONDICIONAIS ***** 

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// o código acima faz a veriicação se um número qualquer digitado por um usuário é divisível por dois ou não e caso afirmativo ele imprime no console, "Passou no teste" em caso negativo ele imprime "Não passou no teste"

// Os números que passam no teste são os números pares divisíveis por 2.

// os números que não passam no teste são os ímpares. */



 /*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


 // O código acima serve para mostrar o valor de frutas diversas de acordo com o que o usuário digita.
//  O valor da Maçã é 2.25
//  se fosse retirado o break acima do defaut, o valor da pêra retornaria 5   */

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

// ESCRITA DE CÓDIGO
//1
/*let idadeDoUsuario = Number(prompt("Qual a sua idade?"))
    if(idadeDoUsuario >= 18){
        console.log(`Você tem ${idadeDoUsuario} anos, e pode dirigir por aí!`)
    } else{
        console.log(`Você tem ${idadeDoUsuario} anos, e não pode dirigir jovenzinho`)
    }  */
//2
   /* let turnoEstudo = prompt('Em que turno você estuda ? M, V OU N')
        if(turnoEstudo === 'm'|| turnoEstudo ==='M'){
            console.log('Bom Dia!')
        }
        if(turnoEstudo === 'v' || turnoEstudo === 'V'){
            console.log('Boa tarde!')
        }
        if(turnoEstudo === 'n' || turnoEstudo === 'N'){
            console.log('Boa Noite!')
        }   */

//3


//4
/*Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
 Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
  então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
   "Bom filme!", caso contrário, imprima "Escolha outro filme :("       

   let generoDoFilme = prompt('Qual gênero de filme iremos assistir?')
   let valorDoIngresso = prompt('Qual o valor do ingresso?')
        if(generoDoFilme === 'fantasia' && valorDoIngresso <= 15){
            console.log('Bom filme!')
        } else{console.log('Escolha outro filme!')      
    }       */
    

   