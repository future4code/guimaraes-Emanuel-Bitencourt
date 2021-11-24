// EXERCICIOS DE 
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/ 

/* No código acima será impresso : No primeiro console.log Matheus Nachtergaele, pois o mesmo ocupa a posição [0] do array
//                                 No segundo  console.log Virgínia Cavendish; já que a propriedade.length -1 chama  o ultimo elemento do array
//                                 O terceiro console.log indicará o canal Globo e o horario de 14 horas. */

//EXERCÍCIO 2

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // No console aparecerá os dados do cachorro juca, o nome a idade e a raça!
console.log(gato)    //  no console aparecerá os dados do cachorro juca porém o nome será trocado pelo do gato Juba 
console.log(tartaruga)// No console aparecerá os dados do cachorro e o no nome as letras serão trocadas*/


// EXERCÍCIO 3

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // No console aparecerá que a informação é falsa
console.log(minhaFuncao(pessoa, "altura"))*/  // No console aparecerá valor indefinido, pois não foi definido o valor da altura!


// EXERCÍCIO DE ESCRITA DE CÓDIGOS

const nomeApelido = {
    nome: 'Emanuel', 
    apelidos: ['Manel', 'Mané', 'Verdadeiro']
 }

 function funcaoApelido() {
     let imprimeNome = console.log(`Olá, o meu nome é ${nomeApelido.nome},mas pode me chamar de ${nomeApelido.apelidos[0]}, ${nomeApelido.apelidos[1]}, ${nomeApelido.apelidos[2]}!`)
     
     return imprimeNome
 }

        console.log(funcaoApelido())


       //B
       const novosApelidos = {
           ...nomeApelido,apelidos: ['Meliante','manin', 'elchapo']
       }

        funcaoApelido(novosApelidos)
        console.log(novosApelidos)

// EXERCÍCIO 2

       const objeto1 = {
           nome: 'Emanuel',
           idade: 36,
           profissao:'Técnico Agrícola'
       }
       const objeto2 = {
        nome: 'Pedro Luís',
        idade: 9,
        profissao:'Policial'
    }

        const frase = (parametro) => {

            let array = [parametro.nome, parametro.nome.length,
            parametro.idade, parametro.profissao, parametro.profissao.length]

            return array

        }

        console.log(frase(objeto2))

// EXERCÍCIO 3

    let carrinho = []

    const uva = {
        nome: 'Uva',
        disponibilidade: true
    }

    const acai = {
        nome: 'Açaí',
        disponibilidade: true
    }

    const goiaba = {
        nome: 'Goiaba',
        disponibilidade: true
    
    }

    const sacolao = (fruta) => {
        carrinho.push(fruta)
        return carrinho
    }

    console.log('carrinho', sacolao(uva))
    console.log('carrinho', sacolao(acai))
    console.log('carrinho', sacolao(goiaba))

    /* ******   ***** PRETENDO REFAZER TODOS OS EXERCÍCIOS INCLUINDO OS DESAFIOS E PARA ISSO É SÓ BUSCAR OS ARQUIVOS NO GITHUB CERTO? ************  