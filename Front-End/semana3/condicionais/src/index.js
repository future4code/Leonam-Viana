//  EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO =D
/*___________________________________________________________________________________________________
EXERCÍCIO 1
    Resposta: 
        O código pede que o usuário digite um número no prompt
        Depois ele transforma o valor digitado para um número com Number()
        O programa testa se o número digitado e par ou impar
        Ele imprime "Passou no teste." para números pares e "Não passou no teste." para números ímpares

___________________________________________________________________________________________________*/


/*___________________________________________________________________________________________________
EXERCÍCIO 2
    Resposta: 
        a. O programa serve para identificar qual a fruta digitada e exibir uma mensagem com o preço.
        b. O preço da fruta Maçã é R$ 2.25
        c. R$ 24.55
        d. O preço da fruta  Pêra  é  R$  5
___________________________________________________________________________________________________*/


/*___________________________________________________________________________________________________
EXERCÍCIO 3
    Resposta:
        Erro:  mensagem is not defined.
        Isto ocorre por que a variável mensagem foi definida como let e só é válida dentro do escopo do if

___________________________________________________________________________________________________*/



//EXERCICIO 4 - a. 

const primeiroNumero = Number(prompt("Digite o primeiro número"))
const segundoNumero = Number(prompt("Digite o segundo número"))

if (primeiroNumero > segundoNumero) {
    console.log(`os números foram digitados! em ordem decrescente ficam: ${primeiroNumero}, ${segundoNumero}`)
} else if (segundoNumero > primeiroNumero) {
    console.log(`OS números foram digitados! em ordem decrescente ficam: ${segundoNumero}, ${primeiroNumero}`)
}

