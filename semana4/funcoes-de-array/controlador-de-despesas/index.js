const sessaoDeCadastro = document.getElementById("sessao-cadastro")

function cadastraNovaDespesa() {
    const novaDespesa = {valor: document.getElementById("valor-da-despesa").value, tipo: document.getElementById("tipo-da-despesa").value}
    console.log(novaDespesa)
}