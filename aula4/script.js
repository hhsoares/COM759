console.log("script loaded");

function validateForm() {
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let rg = document.getElementById("rg").value;
  let entrada = document.getElementById("entrada").value;
  let saida = document.getElementById("saida").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if ( nome === "" || cpf === "" || rg === "" || entrada === "" || email === "" || senha === "" ) {
    alert("Preencha todos os campos!");
    return false;
  }
}
