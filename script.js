document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const erroMsg = document.getElementById('erro-msg');

  if (usuario === '' || senha === '') {
    erroMsg.textContent = "Preencha todos os campos!";
    return;
  }

  // Simulação de validação (exemplo)
  if (usuario === 'admin' && senha === '1234') {
    erroMsg.style.color = 'limegreen';
    erroMsg.textContent = "Login bem-sucedido!";
  } else {
    erroMsg.style.color = 'red';
    erroMsg.textContent = "Usuário ou senha incorretos.";
  }
});