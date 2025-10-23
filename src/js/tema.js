document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM carregado");
    const toggle = document.getElementById("themeToggle");
    const slider = document.getElementById("slider");
    const icon = slider.querySelector("i");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    let isDark = prefersDark.matches;
    // Função para aplicar o tema visual e a animação do botão
    function aplicarTema(dark) {
      document.documentElement.style.setProperty(
        "color-scheme",
        dark ? "dark" : "light"
      );
      // Atualiza fundo e texto
      document.body.classList.toggle("bg-neutral-900", dark); // fundo escuro
      document.body.classList.toggle("text-gray-100", dark); // texto claro
      document.body.classList.toggle("bg-neutral-300", !dark); // fundo claro
      document.body.classList.toggle("text-gray-900", !dark); // texto escuro
      if (nav) {
        nav.classList.toggle("bg-neutral-900", dark);
        nav.classList.toggle("bg-neutral-300", !dark);
      }
      // Atualiza o botão
      toggle.classList.toggle("bg-gray-700", dark);
      toggle.classList.toggle("bg-gray-400", !dark);
      if (dark) {
        slider.style.transform = "translateX(32px)";
        icon.className = "bi bi-moon text-blue-400 text-[12px]";
      } else {
        slider.style.transform = "translateX(0)";
        icon.className = "bi bi-sun text-yellow-400 text-[12px]";
      }
    }
    // Tema inicial
    aplicarTema(isDark);
    // Responde à mudança automática do sistema
    prefersDark.addEventListener("change", (e) => {
        isDark = e.matches;
        aplicarTema(isDark);
    });
    // Alterna ao clicar
    toggle.addEventListener("click", () => {
        isDark = !isDark;
        aplicarTema(isDark);
    });
});
