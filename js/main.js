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

    
    var data = JSON.stringify({"name":"Vitor Akira","email":"vitorakira42@gmail.com"});

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register");
    xhr.setRequestHeader("X-candidate", "vitorakira42@gmail.com");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

    alert("Enviado")
}
