// EXERCÍCIOS DE LAÇOS 

/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
  valor = i + i
}
console.log(valor)   // O resultado impresso no console é 10 e o programa está varrendo o array atá a quinta posição.
*/

/*2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} //

// a) No console serão impressos os números maiores que 18

   b) 
*/

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
  //  Se o usuário digitasse 4 no console apareceriam 4 linhas em que os asteriscos cresceriam até 4
*/

//   EXERCÍCIOS DE ESCRITA DE CÓDIGO


let animaisDeEstimacao = Number(prompt(' Digite quantos bichos de estimação você tem!'))

    let meuArray = []

  if(animaisDeEstimacao === 0){
    console.log('Que pena você pode adotar um pet!')
  }
  else if(animaisDeEstimacao > 0){
      for(let i=0; i < animaisDeEstimacao; i++){
        meuArray.push(prompt('Qual o nome do seu pet?'))
      }
      console.log('Os nomes são:', meuArray)
  }
  
 

