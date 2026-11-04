(() => {
  const url = new URL(location.href);
  const match = url.pathname.match(/^(.*\/hermes-excel\/)(en\/)?(index\.html|support\.html|privacy\.html)?$/);
  if (!match) return;
  const current = match[2] ? 'en' : 'ru';
  const explicit = url.searchParams.get('lang');
  let saved;
  try { saved = localStorage.getItem('hermes-excel-site-language'); } catch {}
  const browser = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase();
  const desired = ['ru', 'en'].includes(explicit) ? explicit : ['ru', 'en'].includes(saved) ? saved : browser.startsWith('ru') ? 'ru' : 'en';
  if (['ru', 'en'].includes(explicit)) {
    try { localStorage.setItem('hermes-excel-site-language', explicit); } catch {}
  }
  if (desired !== current) {
    url.pathname = match[1] + (desired === 'en' ? 'en/' : '') + (match[3] || 'index.html');
    location.replace(url.href);
  }
})();
