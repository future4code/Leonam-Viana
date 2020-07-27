//  QUESTÃO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)  

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

console.log("e. ", typeof resultado)
// RESPOSTAS
a.  false
b.  false
c.  true
d.  false
e.  boolean





//  QUESTÃO 2
let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
/* RESPOSTAS
    a. Array é uma váriável que guarda mais de um valor

    b. o primeiro elemento do array é 0, o segundo é 1... e assim sucessivamente.

    c. se for para ver o tamanho de um array existente usa-se array.lenght.
         mas se for para definir o tamanho na hora da criação do array, seu tamanho
         será de acordo com a quantidade de elementos dentro deste array!
    
    d. I.  undefined
        II.  null
        III.  11
        IV.  3  e  4
        V.  19  e  9
        VI.  3
        VII.  1
*/




// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1-a)
let kelvinFromFahren = (77 - 32) * 5/9 + 273.15
console.log(kelvinFromFahren)



//1-b)
let fahrenFromCelsius = 80 * 9/5 + 32
console.log(fahrenFromCelsius)



//1-c)
let celsius = 30
let fahren = 30 * 9/5 + 32
console.log("30 graus celsius para fahrenheit fica: ", fahren)

let kelvin = (fahren - 32) * 5/9 + 273.15
console.log("30 graus celsius para kelvin fica: ", kelvin)



//1-d)
let celsius = prompt("Digite os graus em celsius para conversão: ")
let fahren = celsius * 9/5 + 32
console.log(celsius," graus celsius para fahrenheit fica: ", fahren)

let kelvin = (fahren - 32) * 5/9 + 273.15
console.log(celsius," graus celsius para kelvin fica: ", kelvin)




//    QUESTÃO 2
let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")
let estado = prompt("Qual o seu estado? ")
let cidade = prompt("Qual a sua cidade ?")
let cor = prompt("Qual sua cor favorita? ")

console.log("1. Qual o seu nome?")
console.log("Resposta: ", nome)
console.log("2. Qual a sua idade?")
console.log("Resposta: ", idade)
console.log("3. Qual o seu estado?")
console.log("Resposta: ", estado)
console.log("4. Qual a sua cidade?")
console.log("Resposta: ", cidade)
console.log("5. Qual a sua cor favorita?")
console.log("Resposta: ", cor)

//  QUESTÃO 3
let quilowatttHora = prompt("Digite a quantidade de Quilowatt-Hora: ")
let desconto = prompt("Digite a porcentagem de desconto (SOMENTE NÚMEROS!): ")
let valorTotal = quilowatttHora * 0.05
let valorDesconto = valorTotal * (15/100)
let valorComDesconto = valorTotal - valorDesconto
console.log("O integral (sem desconto) é: R$ ",valorTotal)
console.log("O valor com desconto incluído é: R$ ", valorComDesconto)