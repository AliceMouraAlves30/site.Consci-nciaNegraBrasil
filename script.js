// Theme toggle (persistente por localStorage)
(function(){
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[id^="theme-toggle"]');
  function applyTheme(theme){
    if(theme === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    buttons.forEach(b => b.setAttribute('aria-pressed', theme === 'dark'));
  }
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved === 'dark' ? 'dark' : 'light');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const active = root.getAttribute('data-theme') === 'dark';
      const next = active ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  });
})();

// Filtro de personalidades (em personalidades.html)
(function(){
  const filter = document.getElementById('filter-area');
  const cards = document.querySelectorAll('.card');
  if(!filter) return;
  filter.addEventListener('change', (e)=>{
    const val = e.target.value;
    cards.forEach(card=>{
      const area = card.getAttribute('data-area');
      if(val === 'todas' || area === val){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
})();
