const results=[
['1998-99',19,19,'100','-','-','-'],['1999-2K',14,14,'100','-','-','-'],['2000-01',17,17,'100',9,8,'88.88'],['2001-02',31,31,'100',13,12,'94.44'],['2002-03',55,52,'94.55',33,24,'72.72'],['2003-04',64,62,'96.88',58,52,'89.65'],['2004-05',77,77,'100',51,44,'86.27'],['2005-06',68,68,'100',73,71,'97.26'],['2006-07',127,127,'100',73,71,'97.26'],['2007-08',101,101,'100',79,79,'100'],['2008-09',110,110,'100',136,132,'97.06'],['2009-10',128,128,'100',110,109,'99.1'],['2010-11',163,163,'100',127,124,'97.64'],['2011-12',163,163,'100',117,117,'100'],['2012-13',174,174,'100',143,143,'100'],['2013-14',167,167,'100',180,180,'100'],['2014-15',191,191,'100',188,188,'100'],['2015-16',166,165,'99.4',217,217,'100'],['2016-17',219,219,'100',219,219,'100'],['2017-18',258,258,'100',189,189,'100'],['2018-19',235,235,'100',206,206,'100'],['2019-20',281,281,'100',234,234,'100'],['2020-21',309,309,'100',262,262,'100'],['2021-22',289,289,'100',291,290,'99.65'],['2022-23',279,279,'100',273,272,'99.63'],['2023-24',244,244,'100',267,267,'100'],['2024-25',279,279,'100',218,218,'100'],['2025-26',268,268,'100',219,218,'99.54']
];
// Shared: mobile navigation and current year
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Results page: create table rows from the data array and filter them.
const resultRows = document.getElementById('resultRows');
if (resultRows) {
  const search = document.getElementById('resultSearch');
  const count = document.getElementById('resultCount');
  function renderResults(query = '') {
    const filtered = results.filter(row => row[0].toLowerCase().includes(query.toLowerCase()));
    resultRows.innerHTML = filtered.map((row, index) => `<tr><td>${index + 1}</td>${row.map(value => `<td>${value}</td>`).join('')}</tr>`).join('');
    count.textContent = `Showing ${filtered.length} of ${results.length} sessions.`;
  }
  renderResults();
  search?.addEventListener('input', () => renderResults(search.value.trim()));
  document.getElementById('clearSearch')?.addEventListener('click', () => { search.value = ''; renderResults(); });
}

// Gallery: category filters and image lightbox.
const filterButtons = document.querySelectorAll('[data-filter]');
const galleryItems = document.querySelectorAll('.gallery-item');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  galleryItems.forEach(item => { item.hidden = filter !== 'all' && item.dataset.category !== filter; });
}));
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
galleryItems.forEach(item => item.addEventListener('click', () => {
  const image = item.querySelector('img');
  if (!image || !lightbox || !lightboxImage) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add('open');
}));
function closeLightbox() { lightbox?.classList.remove('open'); if (lightboxImage) lightboxImage.src = ''; }
document.getElementById('closeLightbox')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

// FAQ accordion: open or close each answer.
document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.faq-item');
  item.classList.toggle('open');
  const symbol = button.querySelector('span');
  if (symbol) symbol.textContent = item.classList.contains('open') ? '−' : '＋';
}));

// Contact form: client-side validation/demo only; no data is transmitted.
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = document.getElementById('formMsg');
  message.textContent = 'Your details passed the frontend checks. This demo does not send the enquiry to the school.';
  contactForm.reset();
});
