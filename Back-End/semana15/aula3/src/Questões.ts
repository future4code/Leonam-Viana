//Exercício 1:
    //a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
        //Resposta => Nome, Id e consumo de energia. Ao imprimir a function, só aparece no terminal que é uma function e o nome desta function.


//Exercício 2:
    //a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
        //Resposta => Cannot create an instance of an abstract class.ts(2511)

    //b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
        //Resposta =>
            // class firstCep extends Place {

            //     constructor() {
            //     super('suponha que aqui exista um cep em número rsrsrs')
            //     }
            // }
            
            // const onePlace: firstCep = new firstCep()
            
            // console.log(onePlace)



//Exercício 5:
    //a. Possui algumas propriedades semelhantes como name, cep, registrationNumber e consumedEnergy.
    //b. Possui CNPJ no lugar do Cep e o getter também muda o nome, embora tenha a mesma funcionalidade. Também tem a floorsQuantity no lugar de residentsQuantity.



//Exercício 6:
    //a. Da classe Industry, pois todos os atributos para clientes industriais se encontram nela.
    //b. Client, pois todo cliente, seja eleresidencial, comercial ou industrial possui os atributos da interface Client.




//Exercicio 7:
    //a. 