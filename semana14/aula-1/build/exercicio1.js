let minhaString = 'Labenu';
console.log(minhaString);
let meuNumero = '10';
console.log(meuNumero);
var CORES;
(function (CORES) {
    CORES["VERMELHO"] = "vermelho";
    CORES["LARANJA"] = "laranja";
    CORES["AMARELO"] = "amarelo";
    CORES["VERDE"] = "verde";
    CORES["AZUL"] = "azul";
    CORES["ANIL"] = "anil";
    CORES["VIOLETA"] = "violeta";
})(CORES || (CORES = {}));
const pessoa1 = {
    nome: 'Leonam',
    idade: 21,
    corFavorita: CORES.VERDE
};
const pessoa2 = {
    nome: 'Jennifer',
    idade: 17,
    corFavorita: CORES.VERMELHO
};
const pessoa3 = {
    nome: 'João Miguel',
    idade: 1,
    corFavorita: CORES.AZUL
};
console.log(pessoa1, pessoa2, pessoa3);
//# sourceMappingURL=exercicio1.js.map