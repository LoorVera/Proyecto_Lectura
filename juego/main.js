/* ============================================================
   NAVEGACIÓN ENTRE SECCIONES
   ============================================================ */
const botonesNav = document.querySelectorAll(".boton-nav");
const secciones  = document.querySelectorAll(".seccion");

function irA(nombre){
  secciones.forEach(s => s.classList.toggle("activa", s.id === nombre));
  botonesNav.forEach(b => {
    const activo = b.dataset.seccion === nombre;
    b.classList.toggle("activo", activo);
    if (activo) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-seccion]").forEach(el => {
  el.addEventListener("click", () => irA(el.dataset.seccion));
});

/* ============================================================
   CONTENIDO DEL MENTEFACTO
   ============================================================ */
const nodos = {
  "clasal-x1": {
    titulo: "Clasal · X1 — Huasipungo",
    contenido: `
      <p><strong>Huasipungo</strong> (Jorge Icaza, Ecuador, 1934) pertenece a la clase
      «novela indigenista»: narrativa que denuncia la explotación y marginación
      de los pueblos indígenas andinos.</p>`
  },
  "clasal-x2": {
    titulo: "Clasal · X2 — El mundo es ancho y ajeno",
    contenido: `
      <p><strong>El mundo es ancho y ajeno</strong> — Ciro Alegría (Perú, 1941).
      Comparte con Huasipungo la denuncia del despojo de tierras y la opresión
      del campesino indígena.</p>`
  },
  "clasal-x3": {
    titulo: "Clasal · X3 — Otras novelas de la misma clase",
    contenido: `
      <ul>
        <li><strong>Los ríos profundos</strong> — José María Arguedas (Perú, 1958).</li>
        <li><strong>Las cruces sobre el agua</strong> — Joaquín Gallegos Lara (Ecuador, 1946).</li>
      </ul>`
  },
  "clasal-fuera": {
    titulo: "Clasal · Exclusión — Lo que NO es Huasipungo",
    contenido: `
      <p><strong>Cien años de soledad</strong> (García Márquez) no pertenece a esta clase:</p>
      <ul>
        <li>Es realismo mágico, no denuncia social realista.</li>
        <li>No narra el sistema de haciendas ni el concertaje andino.</li>
        <li>Su desenlace es fantástico, no de derrota y represión histórica.</li>
      </ul>`
  },
  "tema-central": {
    titulo: "Tema central",
    contenido: `
      <p>La explotación, el abuso y la injusticia que sufren los indígenas
      campesinos en la Sierra ecuatoriana durante el régimen hacendatario.</p>
      <ul>
        <li>Explotación del indígena.</li>
        <li>Pobreza y hambre.</li>
        <li>Racismo y discriminación.</li>
        <li>Desigualdad social.</li>
        <li>Resistencia indígena.</li>
        <li>Alianza entre terratenientes, Iglesia y poder político.</li>
      </ul>`
  },
  "personajes-principales": {
    titulo: "Personajes principales",
    contenido: `
      <ul>
        <li><strong>Andrés Chiliquinga</strong>: indígena trabajador y protagonista; representa el sufrimiento y la resistencia.</li>
        <li><strong>Cunshi</strong>: esposa de Andrés, luchadora y sufrida.</li>
        <li><strong>Don Alfonso Pereira</strong>: hacendado cruel y abusivo.</li>
        <li><strong>La indígena</strong>: símbolo del pueblo indígena explotado.</li>
        <li><strong>Mr. Chapy</strong>: inversionista estadounidense interesado en la hacienda.</li>
        <li><strong>Jacinto Quintana</strong>: capataz que vigila y castiga.</li>
        <li><strong>Padre Juvencio Rojano</strong>: sacerdote que justifica el orden establecido.</li>
      </ul>`
  },
  "idea-principal": {
    titulo: "Idea principal",
    contenido: `
      <p>Huasipungo denuncia la dura realidad del indígena ecuatoriano,
      mostrando cómo el sistema hacendatario lo somete a la pobreza,
      al abuso y a la falta de derechos.</p>
      <p>La novela expone el concertaje —el sistema de deudas que ataba al
      indígena a la tierra— como mecanismo central de esa opresión.</p>`
  },
  ambiente: {
    titulo: "Ambiente",
    contenido: `
      <p>La historia se desarrolla en las haciendas de la Sierra ecuatoriana,
      espacios de desigualdad, donde los indígenas viven en condiciones
      de pobreza y humillación.</p>
      <ul>
        <li>Publicada en <strong>Ecuador, 1934</strong>.</li>
        <li>Se desarrolla en el sistema de haciendas de la Sierra.</li>
        <li>Se inscribe en la corriente indigenista latinoamericana de entreguerras.</li>
      </ul>`
  },
  "conflicto-central": {
    titulo: "Conflicto central",
    contenido: `
      <p>El indígena lucha por sobrevivir frente a la explotación de los
      hacendados, quienes abusan de su poder económico y social,
      negándoles justicia y dignidad.</p>
      <ul>
        <li>El trabajo forzado y sin paga en la construcción de la carretera.</li>
        <li>El despojo del huasipungo, la parcela que sostiene a cada familia.</li>
        <li>La alianza entre hacendado, capataz e Iglesia contra el indígena.</li>
      </ul>`
  },
  mensaje: {
    titulo: "Mensaje",
    contenido: `
      <p>La novela invita a reflexionar sobre la justicia social, el respeto
      a la dignidad humana y la necesidad de construir una sociedad más
      equitativa y solidaria.</p>`
  }
};

const detalle             = document.getElementById("detalle-nodo");
const detalleTitulo       = document.getElementById("detalle-titulo");
const detalleContenido    = document.getElementById("detalle-contenido");
const indicacion          = document.getElementById("indicacion-nodo");
const feedbackVerificacion= document.getElementById("feedback-verificacion");

function mostrarDetalleNodo(id){
  const info = nodos[id];
  if (!info) return;
  detalleTitulo.textContent  = info.titulo;
  detalleContenido.innerHTML = info.contenido;
  detalle.classList.remove("oculto");
  indicacion.classList.add("oculto");
  detalle.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function fichaEnSlot(slot){
  return document.querySelector(`.ficha[data-slot-actual="${slot.dataset.slot}"]`);
}

function colocarEnSlot(ficha, slot){
  ficha.style.position  = "absolute";
  ficha.style.width     = "";
  ficha.style.left      = slot.style.left;
  ficha.style.top       = slot.style.top;
  ficha.style.transform = "translate(-50%,-50%)";
  slot.parentElement.appendChild(ficha);
  ficha.dataset.slotActual = slot.dataset.slot;
  ficha.classList.add("en-slot");
  ficha.classList.remove("correcto", "incorrecto");
}

function devolverAlBanco(ficha){
  const banco = document.getElementById(ficha.dataset.banco);
  ficha.style.position  = "";
  ficha.style.width     = "";
  ficha.style.left      = "";
  ficha.style.top       = "";
  ficha.style.transform = "";
  banco.appendChild(ficha);
  ficha.dataset.slotActual = "";
  ficha.classList.remove("en-slot", "correcto", "incorrecto");
}

/* ============================================================
   ARRASTRAR FICHAS HASTA LOS SLOTS (Pointer Events: mouse y táctil)
   ============================================================ */
document.querySelectorAll(".ficha").forEach(ficha => {
  ficha.dataset.banco      = ficha.parentElement.id;
  ficha.dataset.slotActual = "";

  ficha.tabIndex = 0;
  ficha.setAttribute("role", "button");
  ficha.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " "){
      e.preventDefault();
      mostrarDetalleNodo(ficha.dataset.nodo);
    }
  });

  let inicioX = 0, inicioY = 0, origenLeft = 0, origenTop = 0;
  let arrastrando = false, movido = false;

  ficha.addEventListener("pointerdown", e => {
    ficha.setPointerCapture(e.pointerId);
    const rect = ficha.getBoundingClientRect();
    origenLeft  = rect.left;
    origenTop   = rect.top;
    inicioX     = e.clientX;
    inicioY     = e.clientY;
    movido      = false;
    arrastrando = true;
    ficha.classList.add("arrastrando");
    ficha.style.position  = "fixed";
    ficha.style.left      = origenLeft + "px";
    ficha.style.top       = origenTop + "px";
    ficha.style.width     = rect.width + "px";
    ficha.style.transform = "none";
    ficha.style.zIndex    = "1000";
  });

  ficha.addEventListener("pointermove", e => {
    if (!arrastrando) return;
    const dx = e.clientX - inicioX;
    const dy = e.clientY - inicioY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) movido = true;
    ficha.style.left = (origenLeft + dx) + "px";
    ficha.style.top  = (origenTop  + dy) + "px";
  });

  ficha.addEventListener("pointerup", e => {
    if (!arrastrando) return;
    arrastrando = false;
    ficha.classList.remove("arrastrando");
    ficha.style.zIndex = "";

    if (!movido){
      if (ficha.dataset.slotActual){
        colocarEnSlot(ficha, document.querySelector(`.slot[data-slot="${ficha.dataset.slotActual}"]`));
      } else {
        devolverAlBanco(ficha);
      }
      mostrarDetalleNodo(ficha.dataset.nodo);
      return;
    }

    ficha.style.pointerEvents = "none";
    const elemento = document.elementFromPoint(e.clientX, e.clientY);
    ficha.style.pointerEvents = "";
    const slotDestino = elemento ? elemento.closest(".slot") : null;

    if (slotDestino){
      const ocupante = fichaEnSlot(slotDestino);
      if (ocupante && ocupante !== ficha) devolverAlBanco(ocupante);
      colocarEnSlot(ficha, slotDestino);
    } else {
      devolverAlBanco(ficha);
    }
  });

  ficha.addEventListener("pointercancel", () => {
    if (!arrastrando) return;
    arrastrando = false;
    ficha.classList.remove("arrastrando");
    ficha.style.zIndex = "";
    if (ficha.dataset.slotActual){
      colocarEnSlot(ficha, document.querySelector(`.slot[data-slot="${ficha.dataset.slotActual}"]`));
    } else {
      devolverAlBanco(ficha);
    }
  });
});

document.getElementById("btn-verificar").addEventListener("click", e => {
  const slots = document.querySelectorAll(".slot");
  let correctas = 0;

  slots.forEach(slot => {
    const ficha  = fichaEnSlot(slot);
    const acierto = !!ficha && ficha.dataset.nodo === slot.dataset.slot;
    slot.classList.remove("correcto", "incorrecto");
    slot.classList.add(acierto ? "correcto" : "incorrecto");
    if (ficha){
      ficha.classList.remove("correcto", "incorrecto");
      ficha.classList.add(acierto ? "correcto" : "incorrecto");
    }
    if (acierto) correctas++;
  });

  const total = slots.length;
  feedbackVerificacion.textContent = correctas === total
    ? `🎉 ¡Perfecto! ${correctas} de ${total} correctas.`
    : `Tienes ${correctas} de ${total} correctas. Sigue intentando.`;

  if (correctas === total){
    const rect = e.currentTarget.getBoundingClientRect();
    crearPolvoAndino(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }
});

/* mezclar el orden inicial de las fichas en cada banco */
document.querySelectorAll(".banco-fichas").forEach(banco => {
  barajar([...banco.children]).forEach(f => banco.appendChild(f));
});

/* ============================================================
   MENTEFACTO CONCEPTUAL: nodos en cajas (clic para ver contenido)
   ============================================================ */
document.querySelectorAll(".nodo[data-nodo]").forEach(nodo => {
  const activar = () => {
    document.querySelectorAll(".nodo").forEach(n => n.classList.remove("activo"));
    nodo.classList.add("activo");
    mostrarDetalleNodo(nodo.dataset.nodo);
  };
  nodo.tabIndex = 0;
  nodo.setAttribute("role", "button");
  nodo.addEventListener("click", activar);
  nodo.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " "){
      e.preventDefault();
      activar();
    }
  });
});

/* ============================================================
   GALERÍA DE PERSONAJES: tarjetas que se voltean al tocarlas
   ============================================================ */
document.querySelectorAll(".tarjeta-flip").forEach(tarjeta => {
  tarjeta.addEventListener("click", () => tarjeta.classList.toggle("volteada"));
  tarjeta.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " "){
      e.preventDefault();
      tarjeta.classList.toggle("volteada");
    }
  });
});

/* ============================================================
   UTILIDADES
   ============================================================ */
function barajar(lista){
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
EFECTO VISUAL: POLVO DORADO AL ACERTAR
============================================================ */
function crearPolvoAndino(x, y) {
  // Usamos los colores de tu paleta (Dorado, Barro, Verde, Tierra)
  const colores = ['#d9a441', '#c96f3a', '#4e6b3a', '#8a5a2b'];
  for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particula';
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
      
      // Calculamos una dirección y distancia aleatoria para la explosión
      const angle = Math.random() * Math.PI * 2;
      const velocity = 40 + Math.random() * 60;
      p.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
      p.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
      
      document.body.appendChild(p);
      // Eliminamos la partícula del DOM después de la animación para no saturar la memoria
      setTimeout(() => p.remove(), 800);
  }
}

/* ============================================================
MODO NOCHE (HACIENDA DE NOCHE)
============================================================ */
const toggleNoche = document.getElementById("toggle-noche");
const CLAVE_MODO_NOCHE = "huasipungo-modo-noche";

function aplicarModoNoche(esNoche){
    document.body.classList.toggle("modo-noche", esNoche);
    const etiqueta = esNoche ? "Activar modo día" : "Activar modo noche";
    toggleNoche.textContent = esNoche ? "☀️" : "🌙";
    toggleNoche.title = etiqueta;
    toggleNoche.setAttribute("aria-label", etiqueta);
    toggleNoche.setAttribute("aria-pressed", esNoche);
}

// Cargar preferencia guardada; si no hay, usar la del sistema
const preferenciaGuardada = localStorage.getItem(CLAVE_MODO_NOCHE);
aplicarModoNoche(preferenciaGuardada === null
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : preferenciaGuardada === "true");

toggleNoche.addEventListener("click", () => {
    const esNoche = !document.body.classList.contains("modo-noche");
    aplicarModoNoche(esNoche);
    localStorage.setItem(CLAVE_MODO_NOCHE, esNoche);
});