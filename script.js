// theme toggle (light default)
(() => {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  const setIcon = () => {
    if (!btn) return;
    const mode = root.getAttribute('data-theme') || 'light';
    btn.innerHTML = mode === 'dark'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  };
  setIcon();

  btn?.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setIcon();
  });
})();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t = document.querySelector(a.getAttribute('href'));
    if(!t) return;
    e.preventDefault();
    t.scrollIntoView({behavior:'smooth'});
  });
});

// intersection reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('on'); io.unobserve(en.target); }
  });
},{threshold:.12});

document.querySelectorAll('.section .wrap, .card, .p-card, .t-card').forEach(el=>{
  el.classList.add('reveal'); io.observe(el);
});

// contact form demo
document.querySelector('.c-form')?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thanks! Message received (demo only).');
  e.currentTarget.reset();
});

// year
document.getElementById('year').textContent = new Date().getFullYear();
