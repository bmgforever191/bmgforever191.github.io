(() => {
  'use strict';
  const cfg = window.EYD_CONFIG || {};

  const isSafeWebUrl = (value) => {
    if (typeof value !== 'string' || value.trim() === '') return false;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && url.hostname.includes('.');
    } catch (_) {
      return false;
    }
  };

  // URLs stehen zentral in config.js. Ohne Wert bleibt der Link verborgen.
  document.querySelectorAll('[data-config-url]').forEach((link) => {
    const key = link.dataset.configUrl;
    if (!isSafeWebUrl(cfg[key])) return;
    link.href = cfg[key].trim();
    link.classList.remove('is-hidden');
    document.querySelectorAll(`[data-config-placeholder="${key}"]`).forEach((el) => {
      el.classList.add('is-hidden');
    });
  });

  // E-Mail bleibt bis zur Eintragung verborgen.
  if (typeof cfg.contactEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.contactEmail.trim())) {
    document.querySelectorAll('[data-config-email="contactEmail"]').forEach((link) => {
      link.href = 'mailto:' + cfg.contactEmail.trim();
      link.classList.remove('is-hidden');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Kleiner, zugänglicher Screenshot-Viewer ohne externe Bibliothek.
  const dialog = document.getElementById('image-dialog');
  const dialogImg = dialog?.querySelector('.dialog-image');
  const close = dialog?.querySelector('.dialog-close');
  let lastTrigger = null;
  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!dialog || !dialogImg || typeof dialog.showModal !== 'function') return;
      lastTrigger = button;
      dialogImg.src = button.dataset.lightbox;
      dialogImg.alt = button.dataset.alt || 'App-Screenshot';
      dialog.showModal();
      close?.focus();
    });
  });
  close?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => lastTrigger?.focus());
})();
