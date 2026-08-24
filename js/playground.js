/**
 * Interactive Recruiter Systems Lab
 * Clean, lightweight, responsive simulations
 */

document.addEventListener('DOMContentLoaded', () => {
  initPlaygroundTabs();
  initDagSimulator();
  initRbacSimulator();
  initRoboticsTelemetry();
  initDeveloperTerminal();
});

/* 1. Tab Switcher */
function initPlaygroundTabs() {
  const tabs = document.querySelectorAll('.lab-tab-btn');
  const panes = document.querySelectorAll('.lab-content-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(tab.dataset.tab);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* 2. Agentic OS Wavefront Scheduler & Task DAG Simulator */
function initDagSimulator() {
  const runBtn = document.getElementById('run-dag-btn');
  const logFeed = document.getElementById('dag-log-stream');
  if (!runBtn || !logFeed) return;

  const nodes = [
    { id: 'node-dispatcher', name: 'Dispatcher / Root Planner', time: 500 },
    { id: 'node-research', name: 'Vector Ingestion & Search', time: 700 },
    { id: 'node-coder', name: 'Code Synthesis & Tool Execution', time: 1000 },
    { id: 'node-critic', name: 'Verification Critic & Safety Gate', time: 650 },
    { id: 'node-hitl', name: 'Delta Commit & Token Authorization', time: 600 }
  ];

  let isRunning = false;

  function appendLog(msg, color = '#10b981') {
    const timestamp = new Date().toISOString().substring(11, 19);
    const line = document.createElement('div');
    line.style.color = color;
    line.textContent = `[${timestamp}] ${msg}`;
    logFeed.appendChild(line);
    logFeed.scrollTop = logFeed.scrollHeight;
  }

  runBtn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    runBtn.disabled = true;
    runBtn.textContent = 'Executing Graph Wavefront...';
    logFeed.innerHTML = '';

    appendLog('Kernel v2.4 initialized. Dispatching goal: "Deploy Multi-Tenant Partition"...', '#38bdf8');

    let currentStep = 0;

    function runNextNode() {
      if (currentStep >= nodes.length) {
        appendLog('✔ Objective finalized. All graph deltas committed to EventStore (200 OK).', '#10b981');
        runBtn.disabled = false;
        runBtn.textContent = 'Trigger Swarm DAG Execution';
        isRunning = false;
        return;
      }

      const node = nodes[currentStep];
      const elem = document.getElementById(node.id);
      const badge = elem?.querySelector('.dag-status-badge');

      if (elem && badge) {
        elem.className = 'dag-node-card active-run';
        badge.className = 'dag-status-badge running';
        badge.textContent = 'RUNNING';
      }

      appendLog(`▶ [WAVEFRONT] Worker spawned: ${node.name} (PID: ${Math.floor(1000 + Math.random() * 9000)})`, '#f59e0b');

      setTimeout(() => {
        if (elem && badge) {
          elem.className = 'dag-node-card completed-run';
          badge.className = 'dag-status-badge completed';
          badge.textContent = 'COMPLETED';
        }
        appendLog(`✔ Node '${node.name}' succeeded with confidence score: ${(0.95 + Math.random() * 0.04).toFixed(3)}`, '#10b981');
        currentStep++;
        runNextNode();
      }, node.time);
    }

    runNextNode();
  });
}

/* 3. RBAC Simulator */
const RBAC_DATA = {
  admin: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfYWRtaW4iLCJyb2xlIjoiU1VQRVJfQURNSU4iLCJ0ZW5hbnRfaWQiOiJnbG9iYWwiLCJleHAiOjE3ODcwMDAwMDB9...',
    endpoints: [
      { method: 'POST', path: '/api/v1/payroll/batch-execute', allowed: true },
      { method: 'GET', path: '/api/v1/employees/dossier/all', allowed: true },
      { method: 'PUT', path: '/api/v1/leave/approve-override', allowed: true },
      { method: 'POST', path: '/api/v1/tenants/provision', allowed: true },
      { method: 'DELETE', path: '/api/v1/audit/purge-logs', allowed: true }
    ]
  },
  hr: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfaHIwMSIsInJvbGUiOiJIUl9BRE1JTiIsInRlbmFudF9pZCI6InRlbmFudF9hY21lIiwiZXhwIjoxNzg3MDAwMDAwfQ...',
    endpoints: [
      { method: 'POST', path: '/api/v1/payroll/batch-execute', allowed: true },
      { method: 'GET', path: '/api/v1/employees/dossier/all', allowed: true },
      { method: 'PUT', path: '/api/v1/leave/approve-override', allowed: true },
      { method: 'POST', path: '/api/v1/tenants/provision', allowed: false },
      { method: 'DELETE', path: '/api/v1/audit/purge-logs', allowed: false }
    ]
  },
  manager: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfbWdyMDQiLCJyb2xlIjoiREVQVF9MRUFEIiwidGVuYW50X2lkIjoidGVuYW50X2FjbWUiLCJleHAiOjE3ODcwMDAwMDB9...',
    endpoints: [
      { method: 'POST', path: '/api/v1/payroll/batch-execute', allowed: false },
      { method: 'GET', path: '/api/v1/employees/dossier/all', allowed: false },
      { method: 'PUT', path: '/api/v1/leave/approve-override', allowed: true },
      { method: 'POST', path: '/api/v1/tenants/provision', allowed: false },
      { method: 'DELETE', path: '/api/v1/audit/purge-logs', allowed: false }
    ]
  },
  employee: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfZW1wOTkiLCJyb2xlIjoiU0VMRl9TRVJWSUNFIiwidGVuYW50X2lkIjoidGVuYW50X2FjbWUiLCJleHAiOjE3ODcwMDAwMDB9...',
    endpoints: [
      { method: 'POST', path: '/api/v1/payroll/batch-execute', allowed: false },
      { method: 'GET', path: '/api/v1/employees/dossier/all', allowed: false },
      { method: 'PUT', path: '/api/v1/leave/approve-override', allowed: false },
      { method: 'POST', path: '/api/v1/tenants/provision', allowed: false },
      { method: 'DELETE', path: '/api/v1/audit/purge-logs', allowed: false }
    ]
  }
};

function initRbacSimulator() {
  const cards = document.querySelectorAll('.persona-card');
  const endpointsContainer = document.getElementById('rbac-endpoints');
  const tokenDisplay = document.getElementById('rbac-jwt-token');

  if (!endpointsContainer) return;

  function renderPersona(roleKey) {
    const data = RBAC_DATA[roleKey];
    if (!data) return;

    if (tokenDisplay) tokenDisplay.textContent = data.token;

    endpointsContainer.innerHTML = data.endpoints.map(ep => `
      <div class="endpoint-row">
        <div class="endpoint-meta">
          <span class="method-tag method-${ep.method.toLowerCase()}">${ep.method}</span>
          <span>${ep.path}</span>
        </div>
        <span class="access-status ${ep.allowed ? 'access-allowed' : 'access-denied'}">
          ${ep.allowed ? '✓ ALLOW (200 OK)' : '✕ DENY (403)'}
        </span>
      </div>
    `).join('');
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderPersona(card.dataset.role);
    });
  });

  renderPersona('admin');
}

/* 4. Arduino Telemetry Simulator */
function initRoboticsTelemetry() {
  const pwmSlider = document.getElementById('telemetry-pwm-slider');
  const pwmVal = document.getElementById('telemetry-pwm-val');
  const distVal = document.getElementById('telemetry-dist-val');
  const statusVal = document.getElementById('telemetry-status-val');
  const logStream = document.getElementById('telemetry-logs');
  const canvas = document.getElementById('telemetry-canvas');

  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let currentPWM = 190;
  let currentDist = 48;
  const dataPoints = Array(45).fill(48);

  if (pwmSlider) {
    pwmSlider.addEventListener('input', (e) => {
      currentPWM = parseInt(e.target.value, 10);
      if (pwmVal) pwmVal.textContent = `${currentPWM} PWM (${Math.round((currentPWM/255)*100)}%)`;
    });
  }

  function drawChart() {
    canvas.width = canvas.parentElement.offsetWidth || 380;
    canvas.height = 130;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Subtle grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    for (let y = 25; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Waveform line
    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;

    const step = canvas.width / (dataPoints.length - 1);
    dataPoints.forEach((val, idx) => {
      const x = idx * step;
      const y = canvas.height - (val / 110) * canvas.height;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  function updateTelemetry() {
    const delta = (Math.random() - 0.5) * 5;
    currentDist = Math.max(12, Math.min(105, currentDist + delta));

    dataPoints.shift();
    dataPoints.push(currentDist);

    if (distVal) distVal.textContent = `${Math.round(currentDist)} cm`;

    if (statusVal) {
      if (currentDist < 20) {
        statusVal.textContent = 'OBSTACLE DETECTED';
        statusVal.style.color = '#ef4444';
      } else {
        statusVal.textContent = 'NOMINAL';
        statusVal.style.color = '#10b981';
      }
    }

    if (logStream) {
      const line = document.createElement('div');
      line.textContent = `[UART] PWM=${currentPWM} | ECHO=${Math.round(currentDist * 58)}us | DIST=${Math.round(currentDist)}cm`;
      logStream.appendChild(line);
      if (logStream.children.length > 15) {
        logStream.removeChild(logStream.children[0]);
      }
      logStream.scrollTop = logStream.scrollHeight;
    }

    drawChart();
  }

  setInterval(updateTelemetry, 450);
}

/* 5. Terminal */
function initDeveloperTerminal() {
  const input = document.getElementById('terminal-input');
  const history = document.getElementById('terminal-history');

  if (!input || !history) return;

  const COMMANDS = {
    help: `Available commands:
  • whoami       - View developer background & core profile
  • projects     - Inspect featured engineered systems
  • skills       - Display technical capabilities & stack
  • contact      - Print direct email, WhatsApp, and phone
  • github       - View GitHub repository links
  • cat resume   - View resume summary
  • clear        - Clear output`,

    whoami: `KOSI UDEH (Udeh Kosisochukwu Emmanuel)
Role: Full-Stack Developer & Systems Architect
Degree: B.Sc. Computer Science @ Afe Babalola University (ABUAD)
Location: Nigeria (Available for Global Remote, Hybrid, Relocation)`,

    projects: `FEATURED SYSTEMS:
1. Agentic OS v2            -> Multi-Agent OS & Wavefront DAG Scheduler (React 19, FastAPI, SQLite)
2. Nexus ERP & ESS          -> Enterprise Employee Self-Service Command Center (React 19, Vite, RBAC)
3. Mercato E-Commerce       -> Multi-Tenant Marketplace with dynamic routing (Next.js, Supabase, Stripe)
4. RecordKeeper API         -> Production Cloud REST API with JWT Auth & Bcrypt (Python, FastAPI)
5. Autonomous Robotics      -> Obstacle Avoidance & Telemetry Stream (Arduino, C++, Python UART)
6. Local Service Web        -> High-Converting Landing Architecture (React 18, Tailwind, Vite)`,

    skills: `TECHNICAL MATRIX:
• Languages:     JavaScript (ES6+), TypeScript, Python, C++, SQL, HTML5, CSS3
• Frontend:      React 19, Next.js, Vite, CSS Custom Properties, Tailwind CSS
• Backend:       Python FastAPI, Node.js, Express, REST APIs, Supabase PostgreSQL, SQLite
• Embedded:      Arduino C++, Microcontrollers, Sensor Integration, PWM Actuators, UART`,

    contact: `DIRECT REACH:
• WhatsApp:  +2349117950895 (https://wa.me/2349117950895)
• Phone:     +2347071070282 (tel:+2347071070282)
• Email:     kosiudeh627@gmail.com
• GitHub:    https://github.com/Kosis0
• Timezone:  WAT (UTC+1)`,

    github: `GITHUB PROFILE:
• URL: https://github.com/Kosis0
• Public Repositories:
  - Kosis0/multi-tenant-ecommerce
  - Kosis0/local-service-landing-page
  - Kosis0/Company-Portal
  - Kosis0/RecordKeeperAPI`,

    'cat resume': `Kosi Udeh — B.Sc. Computer Science (ABUAD)
Focus: Systems Architecture, Multi-Tenant Database Partitioning, Reactive Web Applications.
Type 'contact' or click 'View CV' to inspect printable version.`,

    clear: 'CLEAR_ACTION'
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.value.trim();
      const cmd = rawCmd.toLowerCase();
      input.value = '';

      if (!cmd) return;

      if (cmd === 'clear') {
        history.innerHTML = '';
        return;
      }

      const row = document.createElement('div');
      row.style.marginBottom = '0.5rem';

      const promptLine = document.createElement('div');
      promptLine.innerHTML = `<span style="color: #10b981; font-weight: 700;">kosi@dev:~$</span> <span style="color: #fafafa;">${rawCmd}</span>`;
      row.appendChild(promptLine);

      const respLine = document.createElement('div');
      respLine.style.color = '#a1a1aa';
      respLine.style.whiteSpace = 'pre-wrap';
      respLine.style.marginTop = '0.2rem';

      if (COMMANDS[cmd]) {
        respLine.textContent = COMMANDS[cmd];
      } else {
        respLine.textContent = `Command not found: "${rawCmd}". Type "help" for a list of available commands.`;
        respLine.style.color = '#ef4444';
      }

      row.appendChild(respLine);
      history.appendChild(row);

      const body = input.closest('.terminal-body');
      if (body) body.scrollTop = body.scrollHeight;
    }
  });
}
