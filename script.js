/* ===== Mobile nav toggle ===== */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== Active nav highlight on scroll ===== */
const sections = document.querySelectorAll('section[id], header[id]');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((s) => observer.observe(s));

/* ===== Navbar hide/show on scroll ===== */
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 80 && currentScroll > lastScroll) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  navbar.style.transition = 'transform 0.3s ease';
  lastScroll = currentScroll;
});

/* ===== Project cards — add your projects here ===== */
const projects = [
  // Uncomment and edit to add your work:
  // {
  //   title: 'Project Name',
  //   description: 'Short description of what it does and the tech used.',
  //   url: 'https://github.com/Abhinav199207/project-name',
  // },
];

const grid = document.getElementById('projects-grid');

if (grid && projects.length > 0) {
  grid.innerHTML = '';
  projects.forEach(({ title, description, url }) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3><a href="${url}" target="_blank" rel="noopener">${title}</a></h3>
      <p>${description}</p>
    `;
    grid.appendChild(card);
  });
}
