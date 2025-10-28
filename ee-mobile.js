
// === Euroeasy Mobile Burger – custom slide-in menu ===
(function(){
  var burger   = document.getElementById('ee-burger');
  var panel    = document.getElementById('ee-menu-panel');
  var backdrop = document.getElementById('ee-backdrop');
  if(!burger || !panel) return;

  function openMenu(){
    document.body.classList.add('menu-open');
    panel.removeAttribute('aria-hidden');
    if(backdrop) backdrop.hidden = false;
  }
  function closeMenu(){
    document.body.classList.remove('menu-open');
    panel.setAttribute('aria-hidden','true');
    if(backdrop) backdrop.hidden = true;
  }
  function toggle(e){
    e && e.preventDefault && e.preventDefault();
    e && e.stopPropagation && e.stopPropagation();
    if(document.body.classList.contains('menu-open')) closeMenu(); else openMenu();
  }

  burger.addEventListener('click', toggle, {passive:false});
  burger.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ toggle(e); }});

  if(backdrop){
    backdrop.addEventListener('click', function(e){ if(e.target===backdrop){ closeMenu(); } });
  }
  panel.addEventListener('click', function(e){
    var a = e.target.closest('a'); if(a){ closeMenu(); }
  });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeMenu(); }});
})();

// 🧭 Zjednotenie zobrazenia burgera a menu pri 1024 px
window.addEventListener('resize', toggleBurgerMenuDisplay);
window.addEventListener('DOMContentLoaded', toggleBurgerMenuDisplay);

function toggleBurgerMenuDisplay() {
  const width = window.innerWidth;
  const burger = document.getElementById('ee-burger');
  const menu = document.querySelector('.oxy-nav-menu.oxy-nav-menu-dropdowns');

  if (!burger || !menu) return;

  if (width <= 1058) {
    // mobilný režim: zobraz burger, skry desktop menu
    burger.style.display = 'block';
    menu.style.display = 'none';
  } else {
    // desktop režim: zobraz desktop menu, skry burger
    burger.style.display = 'none';
    menu.style.display = 'flex';
  }
}
