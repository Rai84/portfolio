
const btn = document.getElementById("themeToggle");
const html = document.documentElement;

function atualizarBotao() {
  if (html.classList.contains("dark")) {
    btn.textContent = "🌞 Tema Claro";
  } else {
    btn.textContent = "🌙 Tema Escuro";
  }
}

atualizarBotao();

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
  const novoTema = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("tema", novoTema);
  atualizarBotao();
});
