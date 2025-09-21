  // Cerrar menú en móvil si está abierto
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    } else {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  }



