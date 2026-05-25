/* ===== Smooth active nav highlight on scroll ===== */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

/* ===== Project cards (add your projects here) ===== */
const projects = [
  // Example — uncomment and edit to add cards:
  // {
  //   title: 'Project Name',
  //   description: 'A short description of what it does.',
  //   url: 'https://github.com/Abhinav199207/project-name',
  // },
];

const grid = document.getElementById('projects-grid');

if (projects.length > 0) {
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
