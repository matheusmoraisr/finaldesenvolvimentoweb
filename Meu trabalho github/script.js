// MENU
const btnMenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav-links");

if (btnMenu) {
  btnMenu.onclick = () => {
    nav.classList.toggle("aberto");
  };

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.onclick = () => {
      nav.classList.remove("aberto");
    };
  });
}

// LINK ATIVO
const pagina = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === pagina) {
    link.classList.add("ativo");
  }
});

// HEADER SCROLL
const header = document.querySelector("header");

if (header) {
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.style.background = "#000";
    } else {
      header.style.background = "#111";
    }
  };
}

// ANIMAÇÃO SIMPLES
const itens = document.querySelectorAll(".animar");

const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visivel");
    }
  });
});

itens.forEach((el) => obs.observe(el));

// CONTADOR
document.querySelectorAll("[data-contador]").forEach((el) => {
  let valor = +el.dataset.contador;
  let atual = 0;

  let intervalo = setInterval(() => {
    atual += Math.ceil(valor / 50);
    el.textContent = atual;

    if (atual >= valor) {
      el.textContent = valor;
      clearInterval(intervalo);
    }
  }, 40);
});

// FILTROS
document.querySelectorAll(".filtro-btn").forEach((btn) => {
  btn.onclick = () => {
    document
      .querySelectorAll(".filtro-btn")
      .forEach((b) => b.classList.remove("ativo"));
    btn.classList.add("ativo");

    let filtro = btn.dataset.filtro;

    document.querySelectorAll(".servico-card").forEach((card) => {
      if (filtro === "todos" || card.dataset.categoria === filtro) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  };
});

// IMC
const formIMC = document.getElementById("form-imc");

if (formIMC) {
  formIMC.onsubmit = (e) => {
    e.preventDefault();

    let peso = document.getElementById("imc-peso").value;
    let altura = document.getElementById("imc-altura").value / 100;

    let imc = (peso / (altura * altura)).toFixed(1);

    document.getElementById("imc-resultado").innerText = "IMC: " + imc;
  };
}
