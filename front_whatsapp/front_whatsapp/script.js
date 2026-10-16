async function fazerLogin(event) {

  event.preventDefault();


  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;


  if (senha === '123') {
    alert('Login efetuado com sucesso!');
    console.log('Utilizador autenticado!');
  } else {
    alert('Senha incorreta! Digite a senha 123');
  }
}