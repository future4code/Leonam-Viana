let minhaString: string = 'Labenu'
// minhaString = 15
console.log(minhaString)

// let meuNumero: number = 1
let meuNumero: number | string = '10'
console.log(meuNumero)



enum CORES {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const pessoa1: pessoa = {
    nome: 'Leonam',
    idade: 21,
    corFavorita: CORES.VERDE
}

const pessoa2: pessoa = {
    nome: 'Jennifer',
    idade: 17,
    corFavorita: CORES.VERMELHO
}

const pessoa3: pessoa = {
    nome: 'João Miguel',
    idade: 1,
    corFavorita: CORES.AZUL
}

console.log(pessoa1, pessoa2, pessoa3)