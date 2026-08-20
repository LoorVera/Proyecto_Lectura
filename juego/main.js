/* ============================================================
   NAVEGACIÓN ENTRE SECCIONES
   ============================================================ */
const botonesNav = document.querySelectorAll(".boton-nav");
const secciones  = document.querySelectorAll(".seccion");

function irA(nombre){
  secciones.forEach(s => s.classList.toggle("activa", s.id === nombre));
  botonesNav.forEach(b => b.classList.toggle("activo", b.dataset.seccion === nombre));
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
});

document.getElementById("btn-verificar").addEventListener("click", () => {
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
});

/* mezclar el orden inicial de las fichas en cada banco */
document.querySelectorAll(".banco-fichas").forEach(banco => {
  barajar([...banco.children]).forEach(f => banco.appendChild(f));
});

/* ============================================================
   MENTEFACTO CONCEPTUAL: nodos en cajas (clic para ver contenido)
   ============================================================ */
document.querySelectorAll(".nodo[data-nodo]").forEach(nodo => {
  nodo.addEventListener("click", () => {
    document.querySelectorAll(".nodo").forEach(n => n.classList.remove("activo"));
    nodo.classList.add("activo");
    mostrarDetalleNodo(nodo.dataset.nodo);
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
   JUEGO DE PREGUNTAS
   ============================================================ */
const preguntasBase = [
  { texto:"¿Quién escribió Huasipungo?",
    opciones:["Ciro Alegría","Jorge Icaza","José María Arguedas","Juan León Mera"],
    correcta:"Jorge Icaza" },
  { texto:"¿En qué año se publicó la novela?",
    opciones:["1924","1934","1944","1954"],
    correcta:"1934" },
  { texto:"¿A qué corriente literaria pertenece la obra?",
    opciones:["Modernismo","Romanticismo","Novela indigenista","Realismo mágico"],
    correcta:"Novela indigenista" },
  { texto:"¿Quién es el protagonista indígena de la novela?",
    opciones:["Alfonso Pereira","Jacinto Quintana","Mr. Chapy","Andrés Chiliquinga"],
    correcta:"Andrés Chiliquinga" },
  { texto:"¿Qué representa Andrés Chiliquinga?",
    opciones:["El poder del hacendado","El sufrimiento y la resistencia indígena","La riqueza urbana","La fe religiosa"],
    correcta:"El sufrimiento y la resistencia indígena" },
  { texto:"¿Qué es el «huasipungo»?",
    opciones:["Una fiesta andina","Un arma de la época","La parcela asignada al indígena a cambio de trabajo","Un instrumento musical"],
    correcta:"La parcela asignada al indígena a cambio de trabajo" },
  { texto:"¿Quién es Alfonso Pereira en la historia?",
    opciones:["El hacendado explotador","Un sacerdote","Un indígena rebelde","Un comerciante extranjero"],
    correcta:"El hacendado explotador" },
  { texto:"¿Cuál de los siguientes NO es un tema principal de la obra?",
    opciones:["Explotación","Racismo","Aventuras espaciales","Pobreza"],
    correcta:"Aventuras espaciales" },
  { texto:"¿Qué personaje extranjero llega a la hacienda?",
    opciones:["Mr. Chapy","Monsieur Dubois","Sir John","Don Quijote"],
    correcta:"Mr. Chapy" },
  { texto:"¿Cuál de estas obras NO pertenece a la novela indigenista?",
    opciones:["El mundo es ancho y ajeno","Los ríos profundos","Las cruces sobre el agua","Cien años de soledad"],
    correcta:"Cien años de soledad" },
  { texto:"¿Quién es la esposa de Andrés Chiliquinga?",
    opciones:["Cunshi","La indígena","Doña Blanca","Lolita"],
    correcta:"Cunshi" },
  { texto:"¿Qué es el «concertaje»?",
    opciones:["Un baile tradicional andino","Un sistema de deudas que ataba al indígena a la hacienda","Un tipo de cultivo de la sierra","Una fiesta religiosa"],
    correcta:"Un sistema de deudas que ataba al indígena a la hacienda" },
  { texto:"¿Qué significa el término «longo» en la novela?",
    opciones:["Un saludo de cortesía","Un término despectivo para referirse al indígena","Un tipo de vivienda","Un cargo dentro de la hacienda"],
    correcta:"Un término despectivo para referirse al indígena" },
  { texto:"¿Quién es Jacinto Quintana en la historia?",
    opciones:["El protagonista","El capataz que vigila y castiga","El cura de la hacienda","Un inversionista extranjero"],
    correcta:"El capataz que vigila y castiga" },
  { texto:"¿Qué rol cumple el Padre Juvencio Rojano?",
    opciones:["Defiende a los indígenas ante el hacendado","Justifica el orden establecido","Es el dueño de la hacienda","Es un trabajador indígena"],
    correcta:"Justifica el orden establecido" },
  { texto:"¿Qué representa \"La indígena\" como personaje simbólico?",
    opciones:["Al pueblo indígena explotado en su conjunto","A la esposa de Alfonso Pereira","A una turista extranjera","A la Iglesia católica"],
    correcta:"Al pueblo indígena explotado en su conjunto" },
  { texto:"¿En qué región se desarrolla la historia de Huasipungo?",
    opciones:["La Amazonía ecuatoriana","La Costa ecuatoriana","La Sierra ecuatoriana","Las Islas Galápagos"],
    correcta:"La Sierra ecuatoriana" },
  { texto:"¿Qué obra construyen los indígenas mediante trabajo forzado en la novela?",
    opciones:["Una iglesia","Una carretera","Un puente colgante","Un canal de riego"],
    correcta:"Una carretera" },
  { texto:"¿Qué alianza se denuncia en el conflicto central de la novela?",
    opciones:["Entre indígenas y hacendados","Entre hacendado, capataz e Iglesia","Entre el gobierno y los indígenas","Entre comerciantes extranjeros"],
    correcta:"Entre hacendado, capataz e Iglesia" },
  { texto:"¿Cuál de los siguientes NO es un tema principal de Huasipungo?",
    opciones:["Racismo","Desigualdad social","Resistencia indígena","Amor romántico idealizado"],
    correcta:"Amor romántico idealizado" },
  { texto:"¿Qué mensaje final invita a reflexionar la novela?",
    opciones:["La importancia de la venganza","La justicia social y la dignidad humana","El valor del dinero","La superioridad de una raza"],
    correcta:"La justicia social y la dignidad humana" },
  { texto:"¿Dónde y cuándo nació Jorge Icaza?",
    opciones:["Quito, 1906","Guayaquil, 1910","Lima, 1906","Cuenca, 1920"],
    correcta:"Quito, 1906" },
  { texto:"¿En qué corriente literaria latinoamericana se inscribe Huasipungo?",
    opciones:["El indigenismo","El modernismo","El realismo mágico","El costumbrismo"],
    correcta:"El indigenismo" },
  { texto:"¿Quién escribió \"El mundo es ancho y ajeno\", novela con temática similar a Huasipungo?",
    opciones:["Ciro Alegría","José María Arguedas","Gabriel García Márquez","Joaquín Gallegos Lara"],
    correcta:"Ciro Alegría" },
  { texto:"¿Quién escribió \"Los ríos profundos\"?",
    opciones:["José María Arguedas","Jorge Icaza","Ciro Alegría","Juan León Mera"],
    correcta:"José María Arguedas" },
  { texto:"¿Qué novela ecuatoriana, además de Huasipungo, pertenece a la corriente indigenista?",
    opciones:["Las cruces sobre el agua","Cien años de soledad","Don Quijote de la Mancha","La vorágine"],
    correcta:"Las cruces sobre el agua" },
  { texto:"¿Qué significan \"Mayordomo\" o \"Capataz\" en el contexto de la novela?",
    opciones:["El dueño de toda la tierra","El encargado de vigilar el trabajo y hacer cumplir las órdenes del hacendado","Un sacerdote itinerante","Un comerciante de la ciudad"],
    correcta:"El encargado de vigilar el trabajo y hacer cumplir las órdenes del hacendado" },
  { texto:"¿A qué se refiere el término \"Patrón\" o \"Hacendado\" en la novela?",
    opciones:["Al indígena que trabaja la tierra","Al dueño de la hacienda con control económico y social","Al sacerdote de la parroquia","Al capataz de menor rango"],
    correcta:"Al dueño de la hacienda con control económico y social" },
  { texto:"¿Qué género literario tiene Huasipungo?",
    opciones:["Novela de denuncia social (indigenista)","Novela policial","Novela de aventuras","Poesía épica"],
    correcta:"Novela de denuncia social (indigenista)" },
  { texto:"¿Qué recibía el indígena a cambio de su trabajo gratuito en la hacienda?",
    opciones:["Un salario mensual","Una pequeña parcela llamada huasipungo","Educación gratuita","Un lote en la ciudad"],
    correcta:"Una pequeña parcela llamada huasipungo" }
];

const PREGUNTAS_POR_PARTIDA = 5;

let partida = [];
let indice  = 0;
let puntos  = 0;
let nombreJugador = "";

const zonaIntro     = document.getElementById("zona-intro");
const zonaPregunta  = document.getElementById("zona-pregunta");
const zonaFinal     = document.getElementById("zona-final");
const puntosEl      = document.getElementById("puntos");
const progresoEl    = document.getElementById("progreso");
const preguntaEl    = document.getElementById("pregunta-texto");
const opcionesEl    = document.getElementById("opciones");
const feedbackEl    = document.getElementById("retroalimentacion");
const btnSiguiente  = document.getElementById("btn-siguiente");
const resultadoEl   = document.getElementById("resultado-final");
const inputNombre   = document.getElementById("input-nombre");
const errorNombreEl = document.getElementById("error-nombre");
const cuerpoRanking = document.getElementById("cuerpo-ranking");
const sinRegistrosEl= document.getElementById("sin-registros");
const tablaRankingEl= document.getElementById("tabla-ranking");

/* ============================================================
   TABLA DE POSICIONES (localStorage)
   ============================================================ */
const CLAVE_RANKING  = "huasipungo-ranking";
const CLAVE_JUGADOR  = "huasipungo-jugador";

function obtenerRanking(){
  try { return JSON.parse(localStorage.getItem(CLAVE_RANKING)) || []; }
  catch { return []; }
}

function registrarResultado(nombre, puntosObtenidos){
  const ranking = obtenerRanking();
  ranking.push({ nombre, puntos: puntosObtenidos, fecha: new Date().toLocaleDateString() });
  ranking.sort((a, b) => b.puntos - a.puntos);
  localStorage.setItem(CLAVE_RANKING, JSON.stringify(ranking.slice(0, 10)));
  renderizarRanking();
}

function escaparTexto(texto){
  const span = document.createElement("span");
  span.textContent = texto;
  return span.innerHTML;
}

function renderizarRanking(){
  const ranking = obtenerRanking();
  const medallas = ["🥇", "🥈", "🥉"];
  cuerpoRanking.innerHTML = ranking.map((r, i) =>
    `<tr>
      <td>${medallas[i] || (i + 1)}</td>
      <td>${escaparTexto(r.nombre)}</td>
      <td>${r.puntos}</td>
      <td>${r.fecha}</td>
    </tr>`
  ).join("");
  tablaRankingEl.classList.toggle("oculto", ranking.length === 0);
  sinRegistrosEl.classList.toggle("oculto", ranking.length > 0);
}

inputNombre.value = localStorage.getItem(CLAVE_JUGADOR) || "";
renderizarRanking();

document.getElementById("btn-reiniciar-ranking").addEventListener("click", () => {
  if (confirm("¿Borrar toda la tabla de posiciones? Esta acción no se puede deshacer.")){
    localStorage.removeItem(CLAVE_RANKING);
    renderizarRanking();
  }
});

function barajar(lista){
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepararPartida(){
  partida = barajar(preguntasBase)
    .slice(0, PREGUNTAS_POR_PARTIDA)
    .map(p => ({ ...p, opciones: barajar(p.opciones) }));
  indice = 0;
  puntos = 0;
  puntosEl.textContent = "0";
}

function mostrarPregunta(){
  const p = partida[indice];
  const progresoTexto = document.getElementById("progreso");
  const caminoRelleno = document.getElementById("camino-relleno");
  const condorIcon = document.getElementById("condor-icon");

  // Calculamos el porcentaje de avance
  const porcentaje = (indice / partida.length) * 100;
  
  // Movemos el cóndor y rellenamos el camino
  if(caminoRelleno) caminoRelleno.style.width = porcentaje + "%";
  if(condorIcon) condorIcon.style.left = porcentaje + "%";
  
  // Mantenemos el texto por si acaso, pero estará oculto
  if(progresoTexto) progresoTexto.textContent = `Pregunta ${indice + 1} de ${partida.length}`;

  preguntaEl.textContent = p.texto;
  feedbackEl.textContent = "";
  feedbackEl.className   = "retroalimentacion";
  btnSiguiente.classList.add("oculto");
  opcionesEl.innerHTML   = "";

  p.opciones.forEach(op => {
      const btn = document.createElement("button");
      btn.className   = "opcion";
      btn.textContent = op;
      // ¡OJO! Aquí pasamos el evento 'e' para el confeti del paso 2
      btn.addEventListener("click", (e) => responder(btn, op, p.correcta, e)); 
      opcionesEl.appendChild(btn);
  });
}
function responder(boton, elegida, correcta, evento){
  opcionesEl.querySelectorAll(".opcion").forEach(b => {
      b.disabled = true;
      if (b.textContent === correcta) b.classList.add("correcta");
  });

  if (elegida === correcta){
      puntos += 10;
      puntosEl.textContent = puntos;
      feedbackEl.textContent = "✅ ¡Correcto! +10 puntos";
      feedbackEl.classList.add("bien");
      
      // 🎉 ¡AQUÍ LANZAMOS EL POLVO DORADO!
      if (evento) {
          crearPolvoAndino(evento.clientX, evento.clientY);
      }
  } else {
      boton.classList.add("incorrecta");
      feedbackEl.textContent = `❌ Incorrecto. La respuesta era: ${correcta}`;
      feedbackEl.classList.add("mal");
  }
  btnSiguiente.classList.remove("oculto");
}

btnSiguiente.addEventListener("click", () => {
  indice++;
  if (indice < partida.length) mostrarPregunta();
  else finalizar();
});

const insigniaResultado = document.getElementById("insignia-resultado");
const insigniaIcono     = document.getElementById("insignia-icono");
const insigniaTexto     = document.getElementById("insignia-texto");

function finalizar(){
  zonaPregunta.classList.add("oculto");
  zonaFinal.classList.remove("oculto");
  const max = partida.length * 10;
  let mensaje, clase, icono, etiqueta;
  if (puntos >= max * 0.9){
    mensaje = `🌟 ¡Excelente! Obtuviste ${puntos} de ${max}. Dominas Huasipungo.`;
    clase = "oro"; icono = "🥇"; etiqueta = "Maestro de Huasipungo";
  } else if (puntos >= max * 0.6){
    mensaje = `👏 ¡Muy bien! Obtuviste ${puntos} de ${max}. Repasa el mentefacto para perfeccionar.`;
    clase = "plata"; icono = "🥈"; etiqueta = "Buen conocedor";
  } else if (puntos >= max * 0.4){
    mensaje = `📖 Obtuviste ${puntos} de ${max}. Vuelve a leer la información y prueba otra vez.`;
    clase = "bronce"; icono = "🥉"; etiqueta = "Vas por buen camino";
  } else {
    mensaje = `🌱 Obtuviste ${puntos} de ${max}. Explora el mentefacto y la sección de información para intentarlo de nuevo.`;
    clase = "semilla"; icono = "🌱"; etiqueta = "Sigue explorando";
  }
  resultadoEl.textContent = mensaje;

  insigniaResultado.className = `insignia ${clase}`;
  insigniaIcono.textContent = icono;
  insigniaTexto.textContent = etiqueta;

  registrarResultado(nombreJugador, puntos);
}

document.getElementById("btn-comenzar").addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  if (!nombre){
    errorNombreEl.classList.remove("oculto");
    inputNombre.focus();
    return;
  }
  errorNombreEl.classList.add("oculto");
  nombreJugador = nombre;
  localStorage.setItem(CLAVE_JUGADOR, nombre);

  prepararPartida();
  zonaIntro.classList.add("oculto");
  zonaFinal.classList.add("oculto");
  zonaPregunta.classList.remove("oculto");
  mostrarPregunta();
});

document.getElementById("btn-reiniciar").addEventListener("click", () => {
  prepararPartida();
  zonaFinal.classList.add("oculto");
  zonaPregunta.classList.remove("oculto");
  mostrarPregunta();
});

document.getElementById("btn-cambiar-jugador").addEventListener("click", () => {
  zonaFinal.classList.add("oculto");
  zonaIntro.classList.remove("oculto");
  inputNombre.value = "";
  inputNombre.focus();
});

document.getElementById("btn-reiniciar-partida").addEventListener("click", () => {
  prepararPartida();
  mostrarPregunta();
});

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

// Cargar preferencia guardada
if (localStorage.getItem(CLAVE_MODO_NOCHE) === "true") {
    document.body.classList.add("modo-noche");
    toggleNoche.textContent = "☀️";
    toggleNoche.title = "Activar modo día";
}

toggleNoche.addEventListener("click", () => {
    document.body.classList.toggle("modo-noche");
    const esNoche = document.body.classList.contains("modo-noche");
    
    // Cambiar ícono del botón
    toggleNoche.textContent = esNoche ? "☀️" : "🌙";
    toggleNoche.title = esNoche ? "Activar modo día" : "Activar modo noche";
    
    // Guardar preferencia
    localStorage.setItem(CLAVE_MODO_NOCHE, esNoche);
});