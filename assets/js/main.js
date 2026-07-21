/* =========================================================
   C.T.Ibéricos — comportamento (sem conteúdo; SSG puro)
   ========================================================= */
(function () {
  "use strict";

  /* ---- Header: fundo ao rolar ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("menuToggle");
  var navMobile = document.getElementById("navMobile");
  if (toggle && navMobile) {
    toggle.addEventListener("click", function () {
      var open = navMobile.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMobile.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Reveal ao scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---- Serviços (desktop): trocar slide ativo ---- */
  var serviceItems = document.querySelectorAll(".service-item[data-service]");
  var serviceSlides = document.querySelectorAll(".service-slide[data-slide]");
  serviceItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var id = item.getAttribute("data-service");
      serviceItems.forEach(function (i) { i.classList.toggle("active", i === item); });
      serviceSlides.forEach(function (s) {
        s.classList.toggle("active", s.getAttribute("data-slide") === id);
      });
    });
  });

  /* ---- Acordeões (serviços mobile) — abre um de cada vez ---- */
  var accItems = document.querySelectorAll(".services-mobile .accordion-item");
  accItems.forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      accItems.forEach(function (i) { i.classList.remove("open"); });
      if (!isOpen) item.classList.add("open");
    });
  });

  /* ---- Colapsável "outras formas de contacto" ---- */
  document.querySelectorAll("[data-collapse]").forEach(function (col) {
    var trigger = col.querySelector("[data-collapse-trigger]");
    if (!trigger) return;
    trigger.addEventListener("click", function () {
      col.classList.toggle("open");
    });
  });

  /* ---- Carrossel de testemunhos ---- */
  document.querySelectorAll("[data-carousel]").forEach(function (car) {
    var track = car.querySelector(".carousel-track");
    var prev = car.querySelector("[data-carousel-prev]");
    var next = car.querySelector("[data-carousel-next]");
    if (!track) return;

    var step = function () {
      var card = track.querySelector(".testi-card");
      if (!card) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
      return card.getBoundingClientRect().width + gap;
    };
    if (prev) prev.addEventListener("click", function () {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      // volta ao início quando chega ao fim (efeito loop)
      var maxScroll = track.scrollWidth - track.clientWidth - 4;
      if (track.scrollLeft >= maxScroll) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: step(), behavior: "smooth" });
    });
  });

  /* ---- Botão flutuante / links que fazem scroll suave ---- */
  document.querySelectorAll("[data-scroll-to]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.getAttribute("data-scroll-to"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---- Ano no footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Formulário de contacto → função serverless Netlify ---- */
  document.querySelectorAll("[data-contact-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var original = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Enviando..."; }

      var fd = new FormData(form);
      var data = {
        nome: fd.get("nome"),
        email: fd.get("email"),
        telefone: fd.get("telefone"),
        assunto: fd.get("assunto"),
        mensagem: fd.get("mensagem"),
      };

      fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          return res.json().then(function (result) {
            if (res.ok) {
              window.location.href = "/";
            } else {
              alert(result.message || result.error || "Ocorreu um erro ao enviar. Tente novamente mais tarde.");
            }
          });
        })
        .catch(function (err) {
          console.error("Erro ao enviar:", err);
          alert("Erro de rede. Verifique a sua conexão.");
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = original; }
        });
    });
  });
})();
