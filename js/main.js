/**
 * Kosi Udeh — Minimal Editorial Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCommandPalette();
  initDemoTabs();
  initCopyActions();
  initCvModal();
});

/* 1. Theme Switcher */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('kosi_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeBtn(saved);

  toggleBtn?.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('kosi_theme', next);
    updateThemeBtn(next);
  });
}

function updateThemeBtn(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️ light' : '🌙 dark';
}

/* 2. Command Palette (Cmd+K) */
function initCommandPalette() {
  const backdrop = document.getElementById('cmd-backdrop');
  const triggerBtn = document.getElementById('cmd-trigger');
  const input = document.getElementById('cmd-input');
  const items = document.querySelectorAll('.cmd-item');

  function openCmd() {
    backdrop?.classList.add('open');
    input?.focus();
  }

  function closeCmd() {
    backdrop?.classList.remove('open');
    if (input) input.value = '';
    filterItems('');
  }

  triggerBtn?.addEventListener('click', openCmd);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeCmd();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (backdrop?.classList.contains('open')) closeCmd();
      else openCmd();
    }
    if (e.key === 'Escape' && backdrop?.classList.contains('open')) {
      closeCmd();
    }
  });

  input?.addEventListener('input', (e) => {
    filterItems(e.target.value.toLowerCase());
  });

  function filterItems(query) {
    items.forEach(item => {
      const text = item.textContent?.toLowerCase() || '';
      item.style.display = text.includes(query) ? 'flex' : 'none';
    });
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      if (action === 'theme') {
        document.getElementById('theme-toggle')?.click();
      } else if (action === 'copy-email') {
        copyText('kosiudeh627@gmail.com', 'Copied kosiudeh627@gmail.com');
      } else if (action === 'whatsapp') {
        window.open('https://wa.me/2349117950895', '_blank');
      } else if (action === 'github') {
        window.open('https://github.com/Kosis0', '_blank');
      } else if (action === 'resume') {
        document.getElementById('cv-modal-overlay')?.classList.add('open');
      }
      closeCmd();
    });
  });
}

/* 3. Demo Tabs */
function initDemoTabs() {
  const btns = document.querySelectorAll('.demo-tab-btn');
  const panes = document.querySelectorAll('.demo-pane');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

/* 4. Copy Actions & Toast */
function initCopyActions() {
  document.querySelectorAll('.copy-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const val = el.dataset.copy;
      if (val) copyText(val, `Copied ${val}`);
    });
  });
}

function copyText(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  });
}

function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

/* 5. CV Modal */
function initCvModal() {
  const overlay = document.getElementById('cv-modal-overlay');
  const openBtns = document.querySelectorAll('.open-cv-btn');
  const closeBtn = document.getElementById('cv-modal-close');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay?.classList.add('open');
    });
  });

  closeBtn?.addEventListener('click', () => overlay?.classList.remove('open'));
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
}
