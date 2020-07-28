/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada ?")) {
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta3 = comprarCarta()
   let carta4 = comprarCarta()

   usuario = carta1.valor + carta2.valor
   computador = carta3.valor + carta4.valor

   console.log(`Usuário - Cartas: ${carta1.texto} ${carta2.texto} - pontuação ${usuario}`)
   console.log(`Computador - Cartas: ${carta3.texto} ${carta4.texto} - pontuação ${computador}`)

   if (usuario == computador) {
      console.log("Empate!")
   } else if (usuario > computador) {
      console.log("O Usuário ganhou!")
   } else {
      console.log("O Computador ganhou!")
   }

} else {
   console.log("O jogo acabou!")
}