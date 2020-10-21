function btnEnviar() {
    var inputNome = document.getElementById("nome").value;
    var inputEmail = document.getElementById("email").value;
    
    while (inputEmail == "" && inputNome == "") {
        alert("Preencha o campo de Nome e e-mail!")
        return;
    }
    while (inputNome == "") {
        alert("Preencha o campo de Nome!")
        return;
    }
    while (inputEmail == "") {
        alert("Preencha o campo de e-mail!")
        return;
    }

    $.ajax({ 
    headers: {'x-candidate': 'vitorakira42@gmail.com', 'Allow-Control-Allow-Origin':'*'},
    url: "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register", 
    type: "POST", 
    data: {name: inputNome, email: inputEmail}, 
    dataType: "json", 
    }); 

    alert("Enviado")
}