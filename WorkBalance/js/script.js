    // Contenidos de cada sección
    const secciones = {
      nosotros: `
        <section class="text-center">
          <h2>Sobre Nosotros</h2>
          <p><strong>WorkBalance</strong> es una empresa dedicada al bienestar laboral. 
          Implementamos pausas activas, capacitaciones y talleres que ayudan a 
          mejorar la salud física y emocional de los trabajadores.</p>
          <button class="btn btn-primary mt-3">Conocer más</button>
        </section>
      `,
      servicios: `
        <section class="text-center">
          <h2>Nuestros Servicios</h2>
          <div class="row mt-4">
            <div class="col-md-4">
              <span class="icono-destacado">🏋️</span>
              <h5>Pausas Activas</h5>
              <p>Ejercicios cortos en oficina para recargar energía y reducir estrés.</p>
            </div>
            <div class="col-md-4">
              <span class="icono-destacado">🪑</span>
              <h5>Ergonomía</h5>
              <p>Consejos posturales para prevenir dolores musculares y mejorar productividad.</p>
            </div>
            <div class="col-md-4">
              <span class="icono-destacado">💡</span>
              <h5>Talleres</h5>
              <p>Capacitaciones personalizadas en salud laboral y hábitos saludables.</p>
            </div>
          </div>
        </section>
      `,
      beneficios: `
        <section class="text-center">
          <h2>Beneficios</h2>
          <div class="row mt-4">
            <div class="col-md-4">
              <span class="icono-destacado">💪</span>
              <p>Más energía y motivación en la jornada laboral.</p>
            </div>
            <div class="col-md-4">
              <span class="icono-destacado">🧘</span>
              <p>Menos estrés y mayor bienestar emocional.</p>
            </div>
            <div class="col-md-4">
              <span class="icono-destacado">📈</span>
              <p>Incremento de productividad y rendimiento en la empresa.</p>
            </div>
          </div>
        </section>
      `,
      contacto: `
        <section>
          <h2>Contacto</h2>
          <form class="mt-3">
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Nombre">
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="Correo">
            </div>
            <div class="mb-3">
              <textarea class="form-control" rows="4" placeholder="Mensaje"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </section>
      `
    };

    // Mostrar secciones dinámicamente
    function mostrar(seccion) {
      document.getElementById('contenido').innerHTML = secciones[seccion];
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');
    }

    // Mostrar inicio por defecto
    mostrar('nosotros');