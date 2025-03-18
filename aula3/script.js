console.log("script loaded");

function validateForm() {
  let ra = document.getElementById("ra").value;
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  console.log(ra, nome, email, senha);

  console.log(`${ra.length}`);
  console.log(`${senha.length}`);

  if ( ra === "" || nome === "" || email === "" || senha === "" ) {
    console.log("Preencha todos os campos!");
    return false;
  }

  if (senha.length < 10) {
    console.log("A senha deve ter pelo menos 10 caracteres!");
    return false;
  }

  if (ra.length != 9) {
    console.log("O RA deve ter 9 caracteres!");
    return false;
  }

  return true;
}
