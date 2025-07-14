// ==== TOGGLE MENÚ MÓVIL ====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.querySelector('.menu-overlay');

function toggleMenu() {
  navLinks.classList.toggle('open');
  menuOverlay.classList.toggle('active');
}

if (menuToggle && navLinks && menuOverlay) {
  // Abrir/cerrar menú al hacer click en hamburguesa
  menuToggle.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer click fuera (overlay)
  menuOverlay.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer click en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuOverlay.classList.remove('active');
    });
  });
}

// ==== TOGGLE PANEL ACCESIBILIDAD ====
const btnAccesibilidad = document.getElementById('btn-accesibilidad');
const panelAccesibilidad = document.getElementById('panel-accesibilidad');

if (btnAccesibilidad && panelAccesibilidad) {
  btnAccesibilidad.addEventListener('click', () => {
    const expanded = btnAccesibilidad.getAttribute('aria-expanded') === 'true';
    btnAccesibilidad.setAttribute('aria-expanded', !expanded);
    panelAccesibilidad.classList.toggle('oculto');
  });
}

// ==== CONTROLES DE ACCESIBILIDAD ====
const btnAumentar = document.getElementById('btn-aumentar-texto');
const btnDisminuir = document.getElementById('btn-disminuir-texto');
const btnContraste = document.getElementById('btn-contraste');
const btnRestaurar = document.getElementById('btn-restaurar');
const btnModoNoche = document.getElementById('btn-modo-noche');

if (btnAumentar) {
  btnAumentar.addEventListener('click', () => {
    document.body.style.fontSize = '18px';
  });
}
if (btnDisminuir) {
  btnDisminuir.addEventListener('click', () => {
    document.body.style.fontSize = '14px';
  });
}
if (btnContraste) {
  btnContraste.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
  });
}
if (btnRestaurar) {
  btnRestaurar.addEventListener('click', () => {
    document.body.style.fontSize = '';
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  });
}
if (btnModoNoche) {
  btnModoNoche.addEventListener('click', () => {
    const pressed = btnModoNoche.getAttribute('aria-pressed') === 'true';
    btnModoNoche.setAttribute('aria-pressed', !pressed);
    document.body.classList.toggle('modo-noche');
  });
}

// ==== ENVÍO DE FORMULARIO GETFORM.IO ====
const form = document.getElementById('form-contacto');
const mensajeGracias = document.getElementById('mensaje-gracias');

if (form && mensajeGracias) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' },
    })
    .then(response => {
      if (response.ok) {
        form.style.display = 'none';
        mensajeGracias.style.display = 'block';
      } else {
        alert('Ups, hubo un problema al enviar el mensaje. Por favor, intentá nuevamente.');
      }
    })
    .catch(() => {
      alert('Error de red, por favor intentá más tarde.');
    });
  });
}
