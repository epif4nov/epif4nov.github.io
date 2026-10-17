'use strict';
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  projects.forEach(project => {
    const visible = category === 'all' || project.dataset.category === category;
    project.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#filter-status').textContent = 'Показано проектов: ' + count;
}));
