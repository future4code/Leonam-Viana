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