
/* Loader for index.html */
function runLoaderAndRedirect() {
  const percentText = document.getElementById('percent');
  const statusText = document.getElementById('status');
  const progressCircle = document.getElementById('progressCircle');
  let p = 0;

  const interval = setInterval(() => {
    p += Math.ceil(Math.random()*3); // slight randomness
    if (p > 100) p = 100;
    percentText.innerText = p + '%';
    progressCircle.style.background = `conic-gradient(#ff4da6 ${p*3.6}deg, #eee ${p*3.6}deg)`;

    if (p <= 30) statusText.innerText = 'Loading Projects...';
    else if (p <= 60) statusText.innerText = 'Preparing Pages...';
    else if (p <= 90) statusText.innerText = 'Initializing...';
    else statusText.innerText = 'Initialization Complete ✅';

    if (p === 100) {
      clearInterval(interval);
      setTimeout(() => {
        const s = document.getElementById('splash');
        s.classList.add('fade-out');
        setTimeout(()=>{ window.location.href = 'portfolio.html'; }, 900);
      }, 700);
    }
  }, 60);
}

/* Card toggler unified for portfolio page */
function toggleCard(cardId, contentHtml) {
  const card = document.getElementById(cardId);
  const content = card.querySelector('.card-content');
  const expandBtn = card.querySelector('.expand-btn');
  const closeBtn = card.querySelector('.close-btn');
  if (!card.classList.contains('expanded')) {
    content.innerHTML = contentHtml;
    card.classList.add('expanded');
    if (closeBtn) closeBtn.style.display = 'block';
    if (expandBtn) expandBtn.style.display = 'none';
    card.scrollIntoView({behavior:'smooth', block:'center'});
  } else {
    const preview = card.dataset.preview || '';
    content.innerHTML = preview;
    card.classList.remove('expanded');
    if (closeBtn) closeBtn.style.display = 'none';
    if (expandBtn) expandBtn.style.display = 'inline-block';
  }
}

/* Contact modal */
function openContact() {
  document.getElementById('modalBackdrop').style.display = 'flex';
}
function closeContact() {
  document.getElementById('modalBackdrop').style.display = 'none';
}
function submitContact(e) {
  e.preventDefault();
  alert('Message sent (demo). Thank you!');
  closeContact();
}

/* Theme toggle (simple) */
function toggleTheme() {
  document.documentElement.classList.toggle('light-mode');
  const isLight = document.documentElement.classList.contains('light-mode');
  localStorage.setItem('nyams-theme', isLight ? 'light' : 'dark');
}
(function(){ const t = localStorage.getItem('nyams-theme'); if (t === 'light') document.documentElement.classList.add('light-mode'); })();
