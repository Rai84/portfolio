document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const slider = document.getElementById("slider");
  const icon = slider.querySelector("i");
  const nav = document.querySelector("nav");
  const destaques = document.querySelectorAll(".destaque-texto"); // textos em destaque
  const tema = document.querySelectorAll(".txt-tema"); // textos em tema

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  let isDark = prefersDark.matches;

  function aplicarTema(dark) {
    document.documentElement.style.setProperty(
      "color-scheme",
      dark ? "dark" : "light"
    );

    // 🌙 DARK MODE
    document.body.classList.toggle("bg-neutral-900", dark);
    document.body.classList.toggle("text-white", dark);

    // 🌞 LIGHT MODE
    document.body.classList.toggle("bg-neutral-300", !dark);
    document.body.classList.toggle("text-black", !dark);

    // ✅ Navbar
    if (nav) {
      nav.classList.toggle("bg-neutral-900", dark);
      nav.classList.toggle("bg-neutral-300", !dark);
      nav.classList.toggle("text-white", dark);
      nav.classList.toggle("text-black", !dark);
    }

    // ✅ Destaques
    destaques.forEach((el) => {
      el.classList.toggle("text-black", !dark); // tema claro → preto
      el.classList.toggle("text-orange-600", dark); // tema escuro → laranja
    });

    // tema
    tema.forEach((el) => {
      el.classList.toggle("text-black", !dark);
      el.classList.toggle("text-white", dark);
    });

    // Botão toggle visual
    toggle.classList.toggle("bg-gray-700", dark);
    toggle.classList.toggle("bg-gray-400", !dark);

    // Movimento do slider + ícone
    if (dark) {
      slider.style.transform = "translateX(32px)";
      icon.className = "bi bi-moon text-yellow-300 text-[12px]";
    } else {
      slider.style.transform = "translateX(0)";
      icon.className = "bi bi-sun text-black text-[12px]";
    }
  }

  aplicarTema(isDark);

  prefersDark.addEventListener("change", (e) => {
    isDark = e.matches;
    aplicarTema(isDark);
  });

  toggle.addEventListener("click", () => {
    isDark = !isDark;
    aplicarTema(isDark);
  });
});
