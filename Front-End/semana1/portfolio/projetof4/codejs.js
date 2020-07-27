function validaEmail(){
    var formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("caixaMail").value.match(formatoEmail)){
        var emailDigitado = document.getElementById("caixaMail").value;
        alert(`O email ${emailDigitado} foi enviado!`);
        return true;
        
    } else {
        alert('Email Inválido');
        return false;
    }
}