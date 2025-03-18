console.log("script loaded");

function validateForm() {
  let ra = document.getElementById("ra").value;
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  let ra_ano = ra.slice(0, 4);

  console.log(ra, nome, email, senha);
  console.log(ra_ano);

  console.log(`${ra.length}`);
  console.log(`${senha.length}`);

  if ( ra === "" || nome === "" || email === "" || senha === "" ) {
    alert("Preencha todos os campos!");
    return false;
  }

  if (senha.length < 10) {
    alert("A senha deve ter pelo menos 10 caracteres!");
    return false;
  }

  if (ra.length != 9) {
    alert("O RA deve ter 9 caracteres!");
    return false;
  }

  if (ra_ano < 1999 || ra_ano > 2025) {
    alert("Ano do RA invalido!")
    return false
  }

  if (!/^\d+$/.test(ra)) {
    alert("O RA deve conter apenas números!")
    return false;
  }

  if (!/@/.test(email)) {
    alert("E-mail inválido!")
    return false;
  }

  if (!/ /.test(nome)) {
    alert("Digite o nome e sobrenome!")
    return false;
  }

  return true;
}
