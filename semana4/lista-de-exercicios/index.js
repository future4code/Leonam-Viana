//=============================== INTERPRETAÇÃO DE CÓDIGO ===============================
/*
let primeiraQuestao = () => {
    
        Esta função recebe um valor como parâmetro;
        Este parâmetro é inserido como 100 na const meuDinheiro;
        A function pede que o usuário informe o valor da cotação;
        E multiplica o valorEmDolar(que é 100) pelo valor da cotação inserido pelo usuário;
        Esta função vai imprimir qualquer valor digitado pelo usuario no prompt multiplicado por 100;
    
}

let segundaQuestao = () => {
    
        Esta function recebe dois parâmetros, que são tipoDeInvestimento e valor;
        Cria uma variável let chamada valorAposInvestimento;
        Com o Switch case, a function oferece 5 resultados diferentes que são:
        Poupança, Renda Fixa, CDB, Ações e um default para caso o tipoDeInvestimento não seja nenhuma das 4 primeiras;
        Em todos os cases a let valorAposInvestimento é multiplicada pela taxa de juros de cada tipoDeInvestimento;
        Após o Switch case, a função retorna o valorAposInvestimento que é resultado do switch case;
        novoMontante e segundoMontante são variáveis que receberam os valores da função com os parâmetros já estabelecidos;
        o primeiro console.log mostrará 165, o segundo console.log mostra TIPO DE INVESTIMENTO INFORMADO INCORRETO, que é o default do switch case;
    
}

let terceiraQuestao = () => {
    
        Cria três arrays/listas, sendo a primeira preenchida por números e as outras duas vazias;
        Cria um laço onde todos os numeros pares serão jogados na array1 e os ímpares na array2;
        Fora da function tem três mensagens mostradas no console;
        A primeira é a quantidade total de números da array numeros;
        A segunda é a quantidade total de números da array1
        A terceira é a quantidade total de números da array2
    
}

let quartaQuestao = () => {

        Cria uma array chamada numeros com vários números inteiros, numeros float e numeros negativos;
        Cria duas lets, numero1 com valor Infinity(maior que qualquer numero do codigo) e numero2 que é zero;
        Faz um laço onde se let numero for menor que numero1, o valor de numero1 é alterado para o menor valor da array;
        E se numero for maior que numero2(o que não é verdade pois o menor valor da array é -10) então numero2 recebe o valor de numero;

        os dois console.log imprimem, respectivamente, o menor e o maior numero da array;
    
}

//___________________________________________________________________________________________

//=============================== LÓGICA DE PROGRAMAÇÃO ======================================



const primeiraQuestao = (() => {
    //forEach, map e filter
    const peoples = [
        {nome: 'Aaa', idade: 1, naturalidade: 'Brasileiro'},
        {nome: 'Bbb', idade: 1, naturalidade: 'Australiano'},
        {nome: 'Ccc', idade: 2, naturalidade: 'Chinês'},
        {nome: 'Ddd', idade: 1, naturalidade: 'Brasileiro'},
        {nome: 'Eee', idade: 3, naturalidade: 'Italiano'},
        {nome: 'Fff', idade: 5, naturalidade: 'Brasileiro'}
    ]

    peoples.forEach((pessoa, idx, arr) => {
        pessoa.idade += 1
    })
    console.log(peoples)
    
    const nomeENaturalidade = peoples.map((pessoa, idx, array) => {
        return {
            nome: pessoa.nome,
            pais: pessoa.naturalidade
        }
        
    })
    console.log(nomeENaturalidade)

    const soBrasileiros = peoples.filter((pessoa, idx, arr) => {
        if(pessoa.naturalidade === 'Brasileiro') {
            return true
        }
        return false
    })
    console.log(soBrasileiros)
})

const segundaQuestao = (() => {
    //booleano1 = true / 
    //booleano2 = false
    //booleano3 = !booleano2
    //booleano4 = !booleano3

    //a) `booleano1 && booleano2 && !booleano4` = false

    //b) `(booleano1 && booleano2) || !booleano3` = false

    //c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` = true

    //d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` = true

    //e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` = true
})


const quartaQuestao = (() => {
    let a = Number(prompt("A: "))
    let b = Number(prompt("B: "))
    let c = Number(prompt("C: "))

    if (a == b && b == c) {
        console.log("Equilátero")
    } else if ((a == b) || (a == c) || (b == c)) {
        console.log("Isósceles")
    } else {
        console.log("Escaleno")
    }
})



const quintaQuestao = (() => {
    const num1 = Number(prompt("Digite o primeiro número"))
    const num2 = Number(prompt("Digite o segundo número"))

    const imprimeMaior = (() => {
        if (num1 > num2) {
            const diferenca = num1 - num2
            console.log(`O maior é: ${num1}`)
            console.log(`${num2} não é divisível por ${num1}`)
            console.log(`${num1} é divisível por ${num2}`)
            console.log(`A diferença entre eles é ${diferenca}`)
        } else if (num2 > num1) {
            const diferenca = num2 - num1
            console.log(`O maior é: ${num2}`)
            console.log(`${num1} não é divisível por ${num2}`)
            console.log(`${num2} é divisível por ${num1}`)
            console.log(`A diferença entre eles é ${diferenca}`)
        }
    })
    imprimeMaior()
})

*/

//___________________________________________________________________________________________

//=============================== EXERCÍCIOS DE FUNÇÕES ======================================
/*
const questaoDois = (() => {
    alert("Hello Future4")
})

questaoDois()

*/

//___________________________________________________________________________________________

//=============================== EXERCÍCIOS DE OBJETOS ======================================

//Questão 1. Arrays são listas de elementos que podem ser números, strings... Objetos são como objetos no mundo real
// como se fosse, por exemplo, uma caneta contendo seus atributos cor: , marca: , etc...
//Podemos guardar os objetos dentro das arrays se quisermos fazer uma lista de pessoas, contas, despesas, etc...

function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    console.log(retangulo)
}
criaRetangulo(5, 5)