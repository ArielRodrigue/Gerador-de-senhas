function gerarSenha() {
    var comprimento = parseInt(document.getElementById("lengthInput").value);
    var incluirMaiusculas = document.getElementById("uppercaseCheck").checked;
    var incluirMinusculas = document.getElementById("lowercaseCheck").checked;
    var incluirNumeros = document.getElementById("numbersCheck").checked;
    var incluirSimbolos = document.getElementById("symbolsCheck").checked;

    var caracteres = "";

    if (incluirMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirMinusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirSimbolos) caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (caracteres === "") {
        alert("Por favor, selecione pelo menos um tipo de caractere para incluir na senha.");
        return;
    }

    var senha = "";
    for (var i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    exibirSenha(senha);
}

function exibirSenha(senha) {
    document.getElementById("senhaGerada").textContent = "Senha Gerada: " + senha;
}
