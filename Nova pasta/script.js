 // Controle para abrir/fechar blocos
 document.querySelectorAll('.block-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.arrow');
      const isOpen = content.classList.contains('open');

      if (isOpen) {
        content.classList.remove('open');
        arrow.classList.remove('open');
      } else {
        content.classList.add('open');
        arrow.classList.add('open');
      }
    });
  });

  // Sidebar links scroll + active highlight
  const sidebarLinks = document.querySelectorAll('.sidebar nav a');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });