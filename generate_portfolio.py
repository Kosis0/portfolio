# -*- coding: utf-8 -*-
import os
import shutil

BASE_DIR = r"C:\Users\kosiu\Desktop\Work\portfolio"
TARGET_DIR = r"C:\Users\kosiu\Desktop\portfolio"

os.makedirs(os.path.join(BASE_DIR, "css"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "js"), exist_ok=True)
os.makedirs(os.path.join(TARGET_DIR, "css"), exist_ok=True)
os.makedirs(os.path.join(TARGET_DIR, "js"), exist_ok=True)

# -----------------------------------------------------------------------------
# 1. css/style.css — Human-Crafted Editorial Minimalist Styles
# -----------------------------------------------------------------------------
STYLE_CSS = """/* ==========================================================================
   Kosi Udeh — Personal Portfolio & Engineering Journal
   Design: Clean Editorial Minimalist • Human-Crafted • 0% Fluff
   ========================================================================== */

:root {
  --bg: #ffffff;
  --bg-subtle: #f9fafb;
  --bg-surface: #ffffff;
  --bg-hover: #f3f4f6;
  --text-main: #111827;
  --text-muted: #6b7280;
  --text-dim: #9ca3af;
  --border: #e5e7eb;
  --border-subtle: #f3f4f6;
  --accent: #111827;
  --accent-blue: #2563eb;
  --accent-emerald: #10b981;
  --radius: 8px;
  --radius-lg: 12px;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', ui-monospace, Menlo, Monaco, Consolas, monospace;
  --max-w: 680px;
}

[data-theme="dark"] {
  --bg: #0c0c0e;
  --bg-subtle: #141417;
  --bg-surface: #18181c;
  --bg-hover: #1f1f24;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --text-dim: #6b7280;
  --border: #27272a;
  --border-subtle: #1e1e22;
  --accent: #f3f4f6;
  --accent-blue: #60a5fa;
  --accent-emerald: #34d399;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text-main);
  font-family: var(--font-sans);
  line-height: 1.65;
  transition: background-color 0.2s ease, color 0.2s ease;
  padding-bottom: 5rem;
}

::selection {
  background: var(--text-main);
  color: var(--bg);
}

.wrapper {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* --------------------------------------------------------------------------
   Header
   -------------------------------------------------------------------------- */
.site-header {
  padding: 3rem 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--accent-emerald);
  display: inline-block;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle-btn, .cmd-trigger-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-family: var(--font-mono);
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.15s ease;
}

.theme-toggle-btn:hover, .cmd-trigger-btn:hover {
  color: var(--text-main);
  border-color: var(--text-muted);
  background: var(--bg-subtle);
}

/* --------------------------------------------------------------------------
   Hero / Intro
   -------------------------------------------------------------------------- */
.intro-section {
  margin-bottom: 3.5rem;
}

.intro-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 0.85rem;
}

.intro-p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.intro-p strong {
  color: var(--text-main);
  font-weight: 600;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.link-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-family: var(--font-mono);
  color: var(--text-main);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius);
  text-decoration: none;
  transition: all 0.15s ease;
}

.link-chip:hover {
  background: var(--text-main);
  color: var(--bg);
  border-color: var(--text-main);
}

/* --------------------------------------------------------------------------
   Sections Shared
   -------------------------------------------------------------------------- */
.section {
  margin-bottom: 3.5rem;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  margin-bottom: 1.25rem;
  display: block;
}

/* --------------------------------------------------------------------------
   Project Entries (Clean, substance-first list)
   -------------------------------------------------------------------------- */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--border-subtle);
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-topline {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.project-name {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-main);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.project-name:hover {
  color: var(--accent-blue);
}

.project-meta-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-dim);
  white-space: nowrap;
}

.project-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.35rem;
}

.stack-item {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  background: var(--bg-subtle);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  border: 1px solid var(--border-subtle);
}

.project-links-row {
  display: flex;
  gap: 0.85rem;
  margin-top: 0.35rem;
  font-size: 0.82rem;
}

.text-link {
  color: var(--text-main);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--border);
  transition: color 0.15s ease, text-decoration-color 0.15s ease;
}

.text-link:hover {
  color: var(--accent-blue);
  text-decoration-color: var(--accent-blue);
}

/* --------------------------------------------------------------------------
   Interactive Systems Showcase (Subtle, Real Demo)
   -------------------------------------------------------------------------- */
.demo-box {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.demo-tabs {
  display: flex;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 0.35rem 0.5rem;
  gap: 0.25rem;
  overflow-x: auto;
}

.demo-tab-btn {
  background: none;
  border: none;
  padding: 0.35rem 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-muted);
  border-radius: var(--radius);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.demo-tab-btn.active {
  background: var(--bg-subtle);
  color: var(--text-main);
  font-weight: 600;
}

.demo-pane {
  display: none;
  padding: 1.25rem;
}

.demo-pane.active {
  display: block;
}

/* --------------------------------------------------------------------------
   Skills / Stack Minimal Table
   -------------------------------------------------------------------------- */
.stack-grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.stack-cat-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
  padding-top: 0.1rem;
}

.stack-cat-items {
  color: var(--text-muted);
}

.stack-cat-items strong {
  color: var(--text-main);
  font-weight: 500;
}

/* --------------------------------------------------------------------------
   Education & Background
   -------------------------------------------------------------------------- */
.edu-entry {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.edu-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
}

.edu-school {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.edu-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* --------------------------------------------------------------------------
   Contact Lines
   -------------------------------------------------------------------------- */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.75rem;
}

.contact-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 0.9rem;
}

.contact-type {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
}

.contact-val {
  color: var(--text-main);
  text-decoration: none;
}

.contact-val:hover {
  color: var(--accent-blue);
  text-decoration: underline;
}

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */
.site-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-dim);
}

/* --------------------------------------------------------------------------
   Command Palette (Cmd+K)
   -------------------------------------------------------------------------- */
.cmd-dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 5000;
  display: none;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15vh;
}

.cmd-dialog-backdrop.open {
  display: flex;
}

.cmd-dialog {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 480px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.cmd-input-box {
  display: flex;
  align-items: center;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
  gap: 0.5rem;
}

.cmd-input {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-main);
}

.cmd-list {
  list-style: none;
  padding: 0.5rem;
  max-height: 280px;
  overflow-y: auto;
}

.cmd-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.75rem;
  border-radius: var(--radius);
  font-size: 0.85rem;
  color: var(--text-muted);
  cursor: pointer;
}

.cmd-item:hover, .cmd-item.selected {
  background: var(--bg-subtle);
  color: var(--text-main);
}

.cmd-item-shortcut {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-dim);
}

/* --------------------------------------------------------------------------
   Printable Resume Document
   -------------------------------------------------------------------------- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 4000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-overlay.open {
  display: flex;
}

.modal-box {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 680px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  position: relative;
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: var(--text-muted);
  cursor: pointer;
}

.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.toast {
  background: var(--text-main);
  color: var(--bg);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
"""

# -----------------------------------------------------------------------------
# 2. js/main.js — Clean, Minimal, Fast Scripts (Cmd+K, Theme, Copy)
# -----------------------------------------------------------------------------
MAIN_JS = """/**
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
"""

# -----------------------------------------------------------------------------
# 3. index.html — Clean, Human-Crafted, High-Signal Markup
# -----------------------------------------------------------------------------
INDEX_HTML = """<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kosi Udeh — Developer & Systems Architect</title>
  <meta name="description" content="Personal site and portfolio of Kosi Udeh (Udeh Kosisochukwu Emmanuel). Building multi-tenant web platforms, autonomous multi-agent runtimes, and embedded robotics.">

  <!-- OpenGraph -->
  <meta property="og:title" content="Kosi Udeh — Developer & Systems Architect">
  <meta property="og:description" content="Personal site and portfolio of Kosi Udeh. Full-stack development, multi-agent systems, and embedded robotics.">
  <meta property="og:type" content="website">

  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>">

  <!-- Google Fonts: Inter & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <div class="wrapper">
    <!-- Header -->
    <header class="site-header">
      <a href="/" class="brand-link">
        <span class="status-dot" title="Available for engineering roles"></span>
        <span>Kosi Udeh</span>
      </a>

      <div class="header-right">
        <button id="cmd-trigger" class="cmd-trigger-btn" title="Command Menu">⌘K</button>
        <button id="theme-toggle" class="theme-toggle-btn">🌙 dark</button>
      </div>
    </header>

    <main>
      <!-- Intro / Bio -->
      <section class="intro-section">
        <h1 class="intro-title">Full-stack developer & systems architect.</h1>
        <p class="intro-p">
          I’m <strong>Kosi Udeh</strong> (Udeh Kosisochukwu Emmanuel). Computer Science undergraduate at <strong>Afe Babalola University (ABUAD)</strong> & Software Engineering Intern at <strong>Gokly Oil and Gas Services</strong> (Bayelsa), previously interning at <strong>Rolof Institute of Management & Technology</strong> (Warri).
        </p>
        <p class="intro-p">
          I build multi-tenant web platforms, industrial energy portals, autonomous multi-agent operating systems, and embedded robotics with strict data isolation and zero-dependency frontend performance.
        </p>

        <div class="quick-links">
          <a href="https://github.com/Kosis0" target="_blank" rel="noopener noreferrer" class="link-chip">github.com/Kosis0 ↗</a>
          <a href="https://wa.me/2349117950895" target="_blank" rel="noopener noreferrer" class="link-chip">whatsapp ↗</a>
          <a href="mailto:kosiudeh627@gmail.com" class="link-chip">kosiudeh627@gmail.com</a>
          <a href="tel:+2347071070282" class="link-chip">+234 707 107 0282</a>
          <a href="#" class="link-chip open-cv-btn">resume (pdf)</a>
        </div>
      </section>

      <!-- Experience & Internships -->
      <section class="section">
        <span class="section-label">Experience & Internships</span>

        <div class="project-list">
          <article class="project-item">
            <div class="project-topline">
              <span class="project-name">Gokly Oil and Gas Services Limited</span>
              <span class="project-meta-tag" style="background: #fef3c7; color: #92400e; border: 1px solid #fde68a;">2025 – Present</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; margin-top: -0.2rem;">
              Software Engineering & Web Systems Intern • Bayelsa / Niger Delta, Nigeria
            </p>
            <p class="project-desc">
              Developing full-stack web platforms and operational digital tools for Gokly Oil & Gas (NUPRC-licensed EPCI contractor and NMDPRA-accredited MISTDO training consultant). Engineered client engagement portals, technical service catalog dashboards, and automated compliance record workflows using React, TypeScript, Express.js, and PostgreSQL.
            </p>
          </article>

          <article class="project-item">
            <div class="project-topline">
              <span class="project-name">Agentic OS v2 Architecture</span>
              <span class="project-meta-tag" style="background: #e0e7ff; color: #3730a3; border: 1px solid #c7d2fe;">2024 – Present</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; margin-top: -0.2rem;">
              Lead Architect & Developer • Independent AI Systems
            </p>
            <p class="project-desc">
              Engineered Python FastAPI micro-kernel, wavefront DAG task scheduler, 4-tier memory bus, least-agency security governance, and Model Context Protocol (MCP) integrations.
            </p>
          </article>

          <article class="project-item">
            <div class="project-topline">
              <span class="project-name">Rolof Institute of Management & Technology</span>
              <span class="project-meta-tag" style="background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;">2024</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; margin-top: -0.2rem;">
              Software Development & Systems Intern • Warri, Delta State, Nigeria
            </p>
            <p class="project-desc">
              Engaged in hands-on software development, database design, and IT systems infrastructure support at Warri's pioneer NBTE-accredited technology institute. Built web interfaces and assisted in deploying technical educational software.
            </p>
          </article>
        </div>
      </section>

      <!-- Selected Projects -->
      <section class="section">
        <span class="section-label">Selected Work</span>

        <div class="project-list">
          <!-- 1. Agentic OS -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/agentic-os" target="_blank" rel="noopener noreferrer" class="project-name">
                Agentic OS v2 <span>↗</span>
              </a>
              <span class="project-meta-tag">Flagship AI Systems</span>
            </div>
            <p class="project-desc">
              An event-sourced AI operating system bridging autonomous agent swarms to a hyper-responsive React 19 desktop shell. Features a Python FastAPI micro-kernel, wavefront DAG task scheduler for parallel agent orchestration, 4-tier memory bus (L1 Core to L3 SQLite vector embeddings), and HMAC-signed least-agency HITL governance matrix with Model Context Protocol (MCP) integrations.
            </p>
            <div class="project-stack">
              <span class="stack-item">React 19</span>
              <span class="stack-item">FastAPI</span>
              <span class="stack-item">TypeScript</span>
              <span class="stack-item">Wavefront DAG</span>
              <span class="stack-item">SQLite Vectors</span>
              <span class="stack-item">MCP</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/agentic-os" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/agentic-os ↗</a>
            </div>
          </article>

          <!-- 2. TradePro Trading Platform -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/tradepro-trading-platform" target="_blank" rel="noopener noreferrer" class="project-name">
                TradePro — Multi-Asset Trading Platform <span>↗</span>
              </a>
              <span class="project-meta-tag">Fintech & High-Perf UI</span>
            </div>
            <p class="project-desc">
              High-performance multi-asset trading terminal engineered for Forex, Crypto, Equities, and CFD execution. Features an interactive trading terminal with live order-book market depth, dynamic leverage and margin requirement calculators, multi-market screener, and zero-FOUC design token theme engine with sub-16ms layout rendering.
            </p>
            <div class="project-stack">
              <span class="stack-item">JavaScript (ES6+)</span>
              <span class="stack-item">Order Book Engine</span>
              <span class="stack-item">Margin Calculator</span>
              <span class="stack-item">CSS Design Tokens</span>
              <span class="stack-item">Interactive Charts</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/tradepro-trading-platform" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/tradepro-trading-platform ↗</a>
            </div>
          </article>

          <!-- 3. Valence Energy -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/valence-energy-terminal" target="_blank" rel="noopener noreferrer" class="project-name">
                Valence Energy & Infrastructure Terminal <span>↗</span>
              </a>
              <span class="project-meta-tag">Industrial Telemetry</span>
            </div>
            <p class="project-desc">
              High-density operations terminal engineered for monitoring critical energy grid and infrastructure assets. Features dynamic commodity price feeds, interactive RFP procurement workflows, automated ESG performance scoring, and sub-100ms dashboard re-renders with zero runtime layout shift.
            </p>
            <div class="project-stack">
              <span class="stack-item">React 18</span>
              <span class="stack-item">TypeScript</span>
              <span class="stack-item">Tailwind CSS</span>
              <span class="stack-item">Vite</span>
              <span class="stack-item">Recharts</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/valence-energy-terminal" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/valence-energy-terminal ↗</a>
            </div>
          </article>

          <!-- 4. Nexus ERP -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/Company-Portal" target="_blank" rel="noopener noreferrer" class="project-name">
                Nexus ERP & ESS Command Center <span>↗</span>
              </a>
              <span class="project-meta-tag">Enterprise Architecture</span>
            </div>
            <p class="project-desc">
              Employee Self-Service portal and HR command center engineered with zero UI framework dependencies. Includes real-time shift clock-in timers, entitlement leave quota approvals, executive workforce analytics, client-side PDF payslip generation, and strict role-based access control (RBAC).
            </p>
            <div class="project-stack">
              <span class="stack-item">React 19</span>
              <span class="stack-item">Vite</span>
              <span class="stack-item">Vanilla CSS Tokens</span>
              <span class="stack-item">RBAC Auth</span>
              <span class="stack-item">PDF Engine</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/Company-Portal" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/Company-Portal ↗</a>
            </div>
          </article>

          <!-- 5. Mercato -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/multi-tenant-ecommerce" target="_blank" rel="noopener noreferrer" class="project-name">
                Mercato Multi-Tenant E-Commerce <span>↗</span>
              </a>
              <span class="project-meta-tag">Distributed Cloud Systems</span>
            </div>
            <p class="project-desc">
              Scalable multi-tenant marketplace platform with dynamic tenant subrouting (<span style="font-family: var(--font-mono); font-size: 0.85em;">/[tenant]</span>), isolated merchant database partitions in Supabase PostgreSQL, custom inventory categories, flash sale countdown engines, and dual-currency Stripe checkout supporting Naira (₦) and USD ($).
            </p>
            <div class="project-stack">
              <span class="stack-item">Next.js 16</span>
              <span class="stack-item">Express.js</span>
              <span class="stack-item">Supabase PostgreSQL</span>
              <span class="stack-item">Row-Level Security</span>
              <span class="stack-item">Stripe Webhooks</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/multi-tenant-ecommerce" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/multi-tenant-ecommerce ↗</a>
            </div>
          </article>

          <!-- 6. RecordKeeper API -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/RecordKeeperAPI" target="_blank" rel="noopener noreferrer" class="project-name">
                Secure Cloud RecordKeeper API <span>↗</span>
              </a>
              <span class="project-meta-tag">Backend Reliability</span>
            </div>
            <p class="project-desc">
              Production cloud REST API built with FastAPI, SQLAlchemy ORM, SQLite/PostgreSQL, JWT token auth, and Bcrypt password hashing. Fully tested with comprehensive automated test suites via Pytest and interactive Swagger UI documentation.
            </p>
            <div class="project-stack">
              <span class="stack-item">Python</span>
              <span class="stack-item">FastAPI</span>
              <span class="stack-item">SQLAlchemy</span>
              <span class="stack-item">JWT / Bcrypt</span>
              <span class="stack-item">Pytest CI</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/RecordKeeperAPI" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/RecordKeeperAPI ↗</a>
            </div>
          </article>

          <!-- 7. Gokly Portal -->
          <article class="project-item">
            <div class="project-topline">
              <span class="project-name">
                Gokly Oil & Gas Enterprise Platform
              </span>
              <span class="project-meta-tag" style="background: #fef3c7; color: #92400e;">Commercial Production Deployment</span>
            </div>
            <p class="project-desc">
              Full-stack industrial web infrastructure for Gokly Oil & Gas Services (NUPRC-licensed EPCI contractor & MISTDO safety training consultant). Includes technical services tracking, compliance records management, client feedback systems, and PostgreSQL database backend.
            </p>
            <div class="project-stack">
              <span class="stack-item">React</span>
              <span class="stack-item">TypeScript</span>
              <span class="stack-item">Tailwind CSS</span>
              <span class="stack-item">Node.js</span>
              <span class="stack-item">Express</span>
              <span class="stack-item">PostgreSQL</span>
            </div>
            <div class="project-links-row">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">Commercial Client System • Bayelsa, Nigeria</span>
            </div>
          </article>

          <!-- 8. Apex Local Service -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/local-service-landing-page" target="_blank" rel="noopener noreferrer" class="project-name">
                Apex — Local Service Architecture <span>↗</span>
              </a>
              <span class="project-meta-tag">Frontend Architecture</span>
            </div>
            <p class="project-desc">
              High-converting local service web platform built with React 18, TypeScript, Tailwind CSS, and Lucide icons. Achieves 99+ Lighthouse scores, featuring split before/after image sliders, dynamic operating status engine, and WhatsApp dispatch.
            </p>
            <div class="project-stack">
              <span class="stack-item">React 18</span>
              <span class="stack-item">TypeScript</span>
              <span class="stack-item">Tailwind CSS</span>
              <span class="stack-item">Vite</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/local-service-landing-page" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/local-service-landing-page ↗</a>
            </div>
          </article>

          <!-- 9. QueenGold Showroom -->
          <article class="project-item">
            <div class="project-topline">
              <a href="https://github.com/Kosis0/queengold-luxury-showroom" target="_blank" rel="noopener noreferrer" class="project-name">
                QueenGold Luxury Showroom <span>↗</span>
              </a>
              <span class="project-meta-tag">Interactive UI</span>
            </div>
            <p class="project-desc">
              Ultra-refined luxury brand eCommerce showroom engineered with 60fps micro-interactions, dynamic multi-currency converters (USD/EUR/NGN), instant catalog filtering, and direct VIP concierge integrations.
            </p>
            <div class="project-stack">
              <span class="stack-item">JavaScript (ES6+)</span>
              <span class="stack-item">Tailwind CSS</span>
              <span class="stack-item">Vite</span>
              <span class="stack-item">WhatsApp API</span>
            </div>
            <div class="project-links-row">
              <a href="https://github.com/Kosis0/queengold-luxury-showroom" target="_blank" rel="noopener noreferrer" class="text-link">GitHub: Kosis0/queengold-luxury-showroom ↗</a>
            </div>
          </article>

          <!-- 10. Autonomous Robotics -->
          <article class="project-item">
            <div class="project-topline">
              <span class="project-name">Autonomous Robotics Telemetry Platform</span>
              <span class="project-meta-tag">Embedded Systems</span>
            </div>
            <p class="project-desc">
              Prototyped and programmed autonomous obstacle-avoidance vehicles using Arduino microcontrollers, custom electronic circuits, ultrasonic sensor arrays, and motor PWM drivers. Developed Python UART telemetry scripts for real-time serial logging and performance metrics.
            </p>
            <div class="project-stack">
              <span class="stack-item">C++</span>
              <span class="stack-item">Arduino</span>
              <span class="stack-item">PWM Actuators</span>
              <span class="stack-item">Python Telemetry</span>
              <span class="stack-item">UART Serial</span>
            </div>
            <div class="project-links-row">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">Hardware Systems Lab • Afe Babalola University</span>
            </div>
          </article>
        </div>
      </section>

      <!-- Technical Toolbox -->
      <section class="section">
        <span class="section-label">Toolbox & Stack</span>

        <div class="stack-grid">
          <div class="stack-cat-label">Languages</div>
          <div class="stack-cat-items"><strong>TypeScript</strong>, JavaScript (ES6+), <strong>Python</strong>, C++, SQL (PostgreSQL, SQLite), HTML5, CSS3</div>

          <div class="stack-cat-label">Frontend</div>
          <div class="stack-cat-items"><strong>React 19</strong>, Next.js, Vite, Tailwind CSS, CSS Custom Properties, Responsive Layouts</div>

          <div class="stack-cat-label">Backend</div>
          <div class="stack-cat-items"><strong>FastAPI</strong>, Node.js, Express, <strong>Supabase / PostgreSQL</strong>, REST APIs, JWT, Bcrypt</div>

          <div class="stack-cat-label">Embedded</div>
          <div class="stack-cat-items"><strong>Arduino</strong>, Microcontrollers, Sensor Integration (HC-SR04), Motor PWM Drivers, UART Telemetry</div>

          <div class="stack-cat-label">Tools</div>
          <div class="stack-cat-items">Git, GitHub, VS Code, Vercel, Render, Pytest, Docker/Wasm sandboxes</div>
        </div>
      </section>

      <!-- Education -->
      <section class="section">
        <span class="section-label">Education</span>

        <div class="edu-entry">
          <div class="edu-title">B.Sc. in Computer Science</div>
          <div class="edu-school">Afe Babalola University (ABUAD) • In Progress • Nigeria</div>
          <p class="edu-desc">
            Core focus: Algorithms & Data Structures, Software Engineering, Object-Oriented Programming (OOP), Computer Systems Architecture, Database Management Systems.
          </p>
        </div>
      </section>

      <!-- Contact -->
      <section class="section">
        <span class="section-label">Connect</span>

        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1rem;">
          I’m open to engineering roles, systems architecture contracts, and robotics collaborations. Reach out directly:
        </p>

        <div class="contact-list">
          <div class="contact-row">
            <span class="contact-type">WhatsApp</span>
            <a href="https://wa.me/2349117950895" target="_blank" rel="noopener noreferrer" class="contact-val">+234 911 795 0895 ↗</a>
          </div>

          <div class="contact-row">
            <span class="contact-type">Phone</span>
            <a href="tel:+2347071070282" class="contact-val">+234 707 107 0282 ↗</a>
          </div>

          <div class="contact-row">
            <span class="contact-type">Email</span>
            <a href="mailto:kosiudeh627@gmail.com" class="contact-val">kosiudeh627@gmail.com ↗</a>
          </div>

          <div class="contact-row">
            <span class="contact-type">GitHub</span>
            <a href="https://github.com/Kosis0" target="_blank" rel="noopener noreferrer" class="contact-val">github.com/Kosis0 ↗</a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <span>© 2026 Kosi Udeh</span>
      <a href="#" class="open-cv-btn" style="color: inherit; text-decoration: underline;">Curriculum Vitae</a>
    </footer>
  </div>

  <!-- Command Palette Modal -->
  <div id="cmd-backdrop" class="cmd-dialog-backdrop">
    <div class="cmd-dialog">
      <div class="cmd-input-box">
        <span style="color: var(--text-dim); font-family: var(--font-mono); font-size: 0.85rem;">&gt;</span>
        <input type="text" id="cmd-input" class="cmd-input" placeholder="Type a command or jump to..." autocomplete="off">
      </div>
      <ul class="cmd-list">
        <li class="cmd-item" data-action="theme">
          <span>Toggle Theme</span>
          <span class="cmd-item-shortcut">T</span>
        </li>
        <li class="cmd-item" data-action="copy-email">
          <span>Copy Email Address</span>
          <span class="cmd-item-shortcut">kosiudeh627@gmail.com</span>
        </li>
        <li class="cmd-item" data-action="whatsapp">
          <span>Open WhatsApp Chat</span>
          <span class="cmd-item-shortcut">+2349117950895</span>
        </li>
        <li class="cmd-item" data-action="github">
          <span>Visit GitHub Profile</span>
          <span class="cmd-item-shortcut">@Kosis0</span>
        </li>
        <li class="cmd-item" data-action="resume">
          <span>View Printable Resume</span>
          <span class="cmd-item-shortcut">PDF</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Resume Modal -->
  <div id="cv-modal-overlay" class="modal-overlay">
    <div class="modal-box">
      <button id="cv-modal-close" class="modal-close-btn" aria-label="Close">✕</button>

      <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid var(--text-main); padding-bottom: 0.75rem; margin-bottom: 1.25rem;">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: var(--text-main);">UDEH KOSISOCHUKWU EMMANUEL</h2>
          <div style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.2rem;">Full-Stack Developer & Systems Architect</div>
        </div>
        <button onclick="window.print()" class="theme-toggle-btn">🖨️ Print / PDF</button>
      </div>

      <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem; font-family: var(--font-mono);">
        Nigeria • English (Native) • +234 911 795 0895 • kosiudeh627@gmail.com • github.com/Kosis0
      </div>

      <section style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem;">Professional Summary</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
          Results-driven Computer Science undergraduate at Afe Babalola University (ABUAD) with proven hands-on industry experience at Gokly Oil & Gas Services (Bayelsa) and Rolof Institute of Management & Technology (Warri). Proficient in designing full-stack enterprise portals, multi-tenant cloud software, autonomous multi-agent operating systems, and embedded robotics using TypeScript, React 19, FastAPI, Node.js, Express, PostgreSQL, Python, and C++.
        </p>
      </section>

      <section style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem;">Experience & Internships</h3>
        
        <div style="margin-bottom: 0.75rem;">
          <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.88rem;">
            <span>Gokly Oil and Gas Services Limited</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">2025 – Present</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-main); font-weight: 500;">Software Engineering & Web Systems Intern (Bayelsa / Niger Delta)</div>
          <ul style="margin-left: 1.25rem; font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">
            <li>Developing full-stack web infrastructure and client service portals for NUPRC-licensed EPCI and NMDPRA MISTDO safety training operations.</li>
            <li>Engineered technical service tracking, client feedback systems, and compliance workflows using React, TypeScript, Express, and PostgreSQL.</li>
          </ul>
        </div>

        <div style="margin-bottom: 0.75rem;">
          <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.88rem;">
            <span>Agentic OS v2 Architecture</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">2024 – Present</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-main); font-weight: 500;">Lead Architect & Developer</div>
          <ul style="margin-left: 1.25rem; font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">
            <li>Built an event-sourced Python FastAPI micro-kernel with a wavefront DAG task scheduler and 4-tier vector memory bus.</li>
            <li>Implemented least-agency security governance matrix with HMAC-SHA256 human-in-the-loop approval tokens.</li>
          </ul>
        </div>

        <div style="margin-bottom: 0.75rem;">
          <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.88rem;">
            <span>Rolof Institute of Management & Technology / Rolof Academy</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">2024</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-main); font-weight: 500;">Software Development & Systems Intern (Warri, Delta State)</div>
          <ul style="margin-left: 1.25rem; font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">
            <li>Engaged in web application development, relational database schemas, and educational software deployment at Warri's pioneer NBTE institute.</li>
          </ul>
        </div>
      </section>

      <section style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem;">Technical Skills</h3>
        <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.6;">
          <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, C++, SQL (PostgreSQL, SQLite), HTML5, CSS3<br>
          <strong>Web & Backend:</strong> React 19, Next.js, FastAPI, Node.js, Express, RESTful APIs, Supabase PostgreSQL, SQLite<br>
          <strong>Embedded:</strong> Arduino C++, Microcontrollers, Sensor Integration, PWM Actuators, Python UART Telemetry<br>
          <strong>Tools:</strong> Git, GitHub, VS Code, Vercel, Render, Vite, Docker/Wasm
        </p>
      </section>

      <section>
        <h3 style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem;">Education</h3>
        <div style="font-size: 0.85rem; font-weight: 600;">B.Sc. in Computer Science — Afe Babalola University (ABUAD)</div>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">In Progress • Core coursework: Algorithms, Software Engineering, OOP, Database Systems, Computer Architecture.</div>
      </section>
    </div>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
"""

# Write all files to BASE_DIR and TARGET_DIR
files_map = {
    os.path.join(BASE_DIR, "css", "style.css"): STYLE_CSS,
    os.path.join(BASE_DIR, "js", "main.js"): MAIN_JS,
    os.path.join(BASE_DIR, "index.html"): INDEX_HTML,

    os.path.join(TARGET_DIR, "css", "style.css"): STYLE_CSS,
    os.path.join(TARGET_DIR, "js", "main.js"): MAIN_JS,
    os.path.join(TARGET_DIR, "index.html"): INDEX_HTML,
}

for path, content in files_map.items():
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Successfully generated: {path}")

print("Clean, human-crafted editorial portfolio generated successfully!")

