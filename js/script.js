// Contenidos de cada sección
const secciones = {
  inicio: `
<div id="inicio" class="hero d-flex align-items-center justify-content-center">
  <div class="hero-content text-center">
    <div class="hero-img" data-aos="flip-down">
      <img src="img/icono.png" class="img-fluid" alt="Imagen hero">
    </div>
    <h1 class="text-white fw-bold animate-fade">Bienvenido a WorkBalance</h1>
    <p class="text-white animate-fade-delay">Tu bienestar laboral comienza acá</p>
    <a href="#descripcion" class="btn btn-primary btn-lg mt-3 animate-fade-delay2">
    Conocé más
    </a>
  </div>
</div>

<section id="descripcion">   
    <div class= "container mt-5">
      <div class="row">
        <div class="col">
          <p>
            <strong>WorkBalance</strong> acompaña a las empresas en la implementación de programas de bienestar laboral,
            promoviendo hábitos saludables mediante la realización de <strong>pausas activas</strong>. 
            Estas prácticas contribuyen a fortalecer la motivación, mejorar la productividad y prevenir el agotamiento
            en los equipos de trabajo.
          </p>

          <p>
            El programa se sustenta en la <em>"Resolución 886/15"</em> de la Superintendencia de Riesgos del Trabajo,
            que establece el <strong>Protocolo de Ergonomía</strong> como herramienta obligatoria para prevenir
            trastornos músculo-esqueléticos, hernias y otras dolencias asociadas a la actividad laboral.
            Esta normativa define lineamientos para identificar riesgos y aplicar medidas preventivas y correctivas,
            siendo de cumplimiento para todos los empleadores del país.
          </p>
        </div>
          <div class="text-center mt-4">
            <img src="img/flechas.gif" class="img-fluid" style="max-width: 100px; height: auto;" >
          </div>
      </div>
    </div>
</section>

<section>
  <h2>¿Qué son las pausas activas?</h2>

  <div class="h-100 p-3">
    <div class="row align-items-center">
      <!-- Texto -->
      <div class="col-md-6">
        <p>
          Las pausas activas son breves interrupciones de la jornada laboral que se utilizan para 
          realizar ejercicios físicos suaves o estiramientos, con el objetivo de mejorar la salud,
          prevenir lesiones y aumentar el bienestar general de los empleados.<br>
          Suelen durar entre 3 y 10 minutos cada periodos de 2 a 3 horas, lo que genera un cambio 
          positivo tanto física como mentalmente y, en consecuencia, un aumento de la productividad y reducción
          de bajas laborales para la empresa.<br>
          Además, los ejercicios no requieren equipo especial y se adaptan a espacios de oficina o áreas de trabajo.
        </p>
      </div>

      <!-- Imagen -->
      <div class="col-md-6">
        <img src="img/pausas-activas.jpg" class="img-fluid rounded shadow" alt="Pausas activas">
      </div>
    </div>
  </div>
</section>

<section class="py-5">
  <h2>Tipos de ejercicios</h2>
  <div class="row g-4 justify-content-center">

    <!-- Card Movilidad articular (doble ancho) -->
    <div class="col-md-12 col-lg-10 mb-4">
      <div class="section-card h-100 p-3" data-aos="fade-left">
        <div class="row align-items-center">
          <!-- Texto -->
          <div class="col-md-6">
            <h5 class="mb-2">Movilidad articular</h5>
            <p>Rotaciones y flexiones de articulaciones para mantener su rango de movimiento y prevenir rigidez.</p>
          </div>
          <!-- Imagen -->
          <div class="col-md-6">
            <img src="img/movilidad.jpg" class="img-fluid rounded" alt="Movilidad articular">
          </div>
        </div>
      </div>
    </div>

    <!-- Card Estiramientos -->
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="section-card h-100 p-3" data-aos="zoom-in">
        <h5 class="mb-2">Estiramientos</h5>
        <p>Movimientos suaves que alargan músculos y articulaciones para reducir tensión y mejorar la flexibilidad.</p>
      </div>
    </div>

        <!-- Card Fortalecimiento ligero -->
  <div class="col-md-12 col-lg-10 mb-4">
      <div class="section-card h-100 p-3" data-aos="fade-right">
        <div class="row align-items-center">
         <!-- Imagen -->
          <div class="col-md-6">
            <img src="img/fortalecimiento.webp" class="img-fluid rounded" alt="Fortalecimiento ligero">
          </div>
          <!-- Texto -->
          <div class="col-md-6">
            <h5 class="mb-2">Fortalecimiento ligero</h5>
            <p>Ejercicios suaves que activan músculos clave, especialmente espalda, piernas y abdomen, sin fatigar.</p>
          </div>         
        </div>
      </div>
    </div>

    <!-- Card Relajación y respiración -->
    <div class="col-md-6 col-lg-4 mb-4 mx-auto">
      <div class="section-card h-100 p-3" data-aos="zoom-in">
        <h5 class="mb-2">Relajación y respiración</h5>
        <p>Técnicas para oxigenar el cuerpo, reducir estrés y relajar músculos.</p>
      </div>
    </div>

 <div class="col-md-12 col-lg-10 mb-4">
      <div class="section-card h-100 p-3" data-aos="fade-left">
        <div class="row align-items-center">

          <!-- Texto -->
          <div class="col-md-6">
            <h5 class="mb-2">Postura y activación</h5>
            <p>Movimientos que corrigen la postura y activan el cuerpo después de estar mucho tiempo sentado o estático.</p>
          </div>  
          <!-- Imagen -->
          <div class="col-md-6">
            <img src="img/postura.jpg" class="img-fluid rounded" alt="Postura y activación">
          </div>   
        </div>
      </div>
    </div>
  </div>
</section>
 </div>
`
  ,
  nosotros: `
  <section class="section section--alt">
  <div class="container">
    
    <h2>Sobre Nosotros</h2>

    <div class="row g-4">
      <div class="col-lg-12">
        <div class="section-card h-100">
          <p>
            <strong>Work Balance</strong> es un programa creado y dirigido por la 
            <strong>Profesora en Educación Física Marina Mojica</strong>, egresada con 
            Diploma de Honor de la <strong>Universidad Nacional de Luján</strong>. 
            Con amplia experiencia en el ámbito educativo, deportivo y de la salud, 
            Marina ha trabajado en instituciones escolares, clubes y polideportivos, entrenando
            a equipos de fuerzas organizadas, personas con necesidades especiales,
             personas de diferentes rango de edad, equipos deportivos, entre otros.         
          </p>

          <p>
            El programa surge con la misión de <em>mejorar la calidad de vida en el ámbito laboral</em>, 
            promoviendo la actividad física como herramienta para prevenir lesiones, reducir el estrés 
            y aumentar el bienestar general. A través de pausas activas, propuestas de movimiento 
            y asesoramiento personalizado, <strong>Work Balance</strong> busca integrar hábitos saludables 
            en la rutina diaria de empresas y organizaciones, logrando un equilibrio entre productividad 
            y salud.
          </p>

          <p>
            Nuestro compromiso es acompañar a cada equipo de trabajo en la construcción de un entorno 
            más saludable, dinámico y motivador.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      `,
  servicios: `
<section class="section section--alt">
  
  <h2>Nuestra propuesta de bienestar laboral</h2>

  <div class="section-servicios">
    <p>
      En <strong>WorkBalance</strong> creemos que el bienestar laboral se construye a través de pequeños hábitos 
      que generan grandes cambios. Nuestro propósito es enseñar a los trabajadores ejercicios 
      simples y efectivos adaptados a las demandas de su actividad diaria para que puedan realizarlos
       durante pausas activas.
    </p>
  </div> 

    <div class="parallax parallax--autogestion">
      <div class="parallax-content text-center text-white py-5">
        <h3 class="mb-0 fw-semibold display-6">• Autogestión • Hábitos • Beneficios</h3>
      </div>
    </div>

      <div class="section-servicios">
      <p>
      Estos ejercicios están diseñados para que los trabajadores puedan realizar movimientos
      de manera segura y ergonómica, corrigiendo y previniendo malas posturas, aliviando la 
      tensión muscular y fortaleciendo los músculos antagonistas, de manera que estos hábitos 
      sean directamente transferibles a las tareas y movimientos que requieren en su trabajo, 
      como levantar peso, manipular herramientas o mantenerse activos frente a un escritorio.
      </p>
      </div>

    <div class="parallax parallax--movilidad">
      <div class="parallax-content text-center text-white py-5">
        <h3 class="mb-0 fw-semibold display-6">• Fuerza • Flexibilidad • Ergonomía</h3>
      </div>
    </div>

      <div class="section-servicios">
      <p>
      Además, incorporamos actividades recreativas grupales que fortalecen la integración, 
      el trabajo en equipo y fomentan un clima laboral positivo y motivador, promoviendo
      la conexión entre los colaboradores y la organización. 
      Con esta combinación de ejercicios ergonómicos y actividades recreativas, 
      en <strong>WorkBalance</strong> acompañamos a las empresas en la creación de entornos de 
      trabajo más saludables, productivos y sostenibles en el tiempo.
      </p>
      </div>

    <div class="parallax parallax--recreacion">
      <div class="parallax-content text-center text-white py-5">
        <h3 class="mb-0 fw-semibold display-6">• Trabajo en equipo • Clima positivo</h3>
      </div>
    </div>
 </div>
</section>

      `,
  beneficios: `
  <section class="section section--alt">
    <h2 class="class="mb-4 text-center">Beneficios</h2>

    <div class="row">
      <!-- Empleador -->
      <div class="col-md-6 mb-4" data-aos="flip-right">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h4 class="card-title titulo-empleador">Para el Empleador</h4>
            <ul>
              <li>Mayor productividad y rendimiento laboral.</li>
              <li>Reducción del ausentismo por problemas de salud.</li>
              <li>Mejora del clima laboral y la comunicación.</li>
              <li>Imagen positiva empresarial y compromiso social.</li>
              <li>Ahorro en costos médicos y rotación de personal.</li>
            </ul>
            <img src="img/beneficios-empleador.png" alt="Beneficios Empleador" class="img-fluid mt-3 rounded">

          </div>
        </div>
      </div>
      <!-- Empleados -->
      <div class="col-md-6 mb-4" data-aos="flip-left">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h4 class="card-title titulo-empleados"> Para los Empleados</h4>
            <ul>
              <li>Mejora de la postura y reducción de molestias físicas.</li>
              <li>Prevención de lesiones y enfermedades profesionales.</li>
              <li>Disminución del estrés y la fatiga mental.</li>
              <li>Mayor energía y concentración en el trabajo.</li>
              <li>Integración con el equipo y sensación de valoración.</li>
            </ul>
            <img src="img/beneficios-empleados.png" alt="Beneficios Empleados" class="img-fluid mt-3 rounded">

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      `,
  contacto: `
<section class="section" style="background-color: var(--color-gris-claro);">
  <div class="container">
    <!-- Título -->
    <div class="text-center mb-5">
    <h2 class="class="mb-4 text-center">Contacto</h2>      
      <p class="text-muted">Contanos sobre tu empresa y armamos un plan a medida.</p>
    </div>

    <!-- Fila con formulario y WhatsApp -->
    <div class="row justify-content-center g-4">
      <!-- Formulario -->
      <div class="col-lg-6">
        <form class="p-4 shadow-sm rounded bg-white" action="https://formspree.io/f/xldwbajy" method="POST">
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" name="nombre" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Empresa</label>
            <input type="text" class="form-control" name="empresa" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" name="email" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Mensaje</label>
            <textarea class="form-control" rows="4" name="mensaje" required></textarea>
          </div>
          <button class="btn btn-coral w-100" type="submit">
           Enviar
          </button>
        </form>
         <p id="confirmacion" style="display:none; color: var(--color-turquesa-oscuro); margin-top:15px;">
    ¡Mensaje enviado! En breve nos contactaremos con usted.
          </p>
      </div>

      <!-- Card WhatsApp -->
      <div class="col-lg-4">
        <div class="p-4 shadow-sm rounded bg-white h-100 d-flex flex-column justify-content-center align-items-center text-center">
    <!-- Imagen de WhatsApp -->
    <img src="img/whatsapp.png" alt="WhatsApp" style="width:60px; height:60px; margin-bottom:15px;">
          <p class="mb-4">Escribinos por WhatsApp para más información o para coordinar una reunión:</p>
          <a href="https://wa.me/5491164272269" target="_blank" class="btn btn-coral btn-lg">
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      `
};

// Mostrar secciones dinámicamente
function mostrar(seccion, event) {
  document.getElementById('contenido').innerHTML = secciones[seccion];
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  if (event) event.target.classList.add('active');
}

// Mostrar inicio por defecto
mostrar('inicio');

  const form = document.getElementById('formulario');
  const confirmacion = document.getElementById('confirmacion');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        confirmacion.style.display = 'block';  // Muestra el mensaje
        form.reset(); // Limpia el formulario
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    })
    .catch(error => {
      alert("Hubo un error al enviar el mensaje.");
    });
  });

  // Selecciona todos los links dentro del navbar
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Cierra el collapse solo si está abierto
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      }
    });
  });
