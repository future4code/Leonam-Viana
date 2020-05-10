//Sessão de Cadastro de Despesas
let listaDeDespesas = []

function cadastraDespesa() {
    event.preventDefault()
    let valorDespesa = document.getElementById("valor-da-despesa").value
    let tipoDespesa = document.getElementById("tipo-da-despesa").value
    let descricaoDespesa = document.getElementById("descricao-da-despesa").value

    let despesa = {valor: Number(valorDespesa), tipo: tipoDespesa, descricao: descricaoDespesa}

    listaDeDespesas.push(despesa)
}


//Sessão de Despesas Detalhadas
function imprimeDespesas() {
    event.preventDefault()
    let tipoDetalhada = document.getElementById("tipo-da-despesa-detalhada").value
    let valMinimo = document.getElementById("valor-minimo").value
    let valMaximo = document.getElementById("valor-maximo").value
    let sessaoDetalhadas = document.getElementById("sessao-detalhadas")

    sessaoDetalhadas.innerHTML += "<p>Olá, uma nova Despesa foi cadastrada!</p>"
}