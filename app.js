/**
 * Excel Automation Toolkit - Official Commercial Landing Page Scripts
 * Interactive ROI Calculator, Module Tabs Showcase, FAQ Accordion, and Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initModuleTabs();
  initRoiCalculator();
  initFaqAccordion();
});

/* -------------------------------------------------------------
 * 1. Navbar Scroll Effect
 * ----------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(8, 12, 20, 0.94)';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.background = 'rgba(8, 12, 20, 0.8)';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      navbar.style.boxShadow = 'none';
    }
  });
}

/* -------------------------------------------------------------
 * 2. 9 Module Showcase Data & Tabs
 * ----------------------------------------------------------- */
const MODULES_DATA = [
  {
    id: 'merge',
    name: 'Smart Multi-File Merger',
    title: 'Merge 100+ Workbooks in Seconds with Column Auto-Align',
    desc: 'Combines hundreds of XLSX, XLS, and CSV files into a unified master report. Features intelligent fuzzy column header mapping, automatic sheet indexing, and zero memory exhaustion.',
    specs: [
      'Multiprocessing batch engine processes 50+ files per second',
      'Auto-detects varied column schemas and unifies headers',
      'Preserves original cell formats, date types, and numeric precision',
      'Direct Windows Explorer right-click integration'
    ],
    image: 'assets/media/real_ui/04_tool_merge.png'
  },
  {
    id: 'cleanse',
    name: 'Cleanse & Deduplication',
    title: 'Lightning Deduplication & Data Scrubbing Suite',
    desc: 'Purges duplicate rows based on composite keys, trims invisible non-breaking spaces, strips formatting artifacts, and standardizes casing across millions of rows.',
    specs: [
      'Composite multi-column uniqueness hash verification',
      'Removes trailing and internal irregular whitespace',
      'Standardizes messy date formats (YYYY-MM-DD, DD/MM/YYYY)',
      'Exports audit report of purged vs retained records'
    ],
    image: 'assets/media/real_ui/02_tool_cleanse.png'
  },
  {
    id: 'pipeline',
    name: 'Workflow Pipeline Engine',
    title: 'Chain Multi-Step Automations in 1-Click Recipes',
    desc: 'Construct powerful batch processing pipelines. Cleanse, merge, format currencies, and split outputs into separate files sequentially without human intervention.',
    specs: [
      'Visual drag-and-drop or sequential task queue builder',
      'Save custom company automation recipes as reusable presets',
      'Real-time execution log with step-by-step progress timers',
      'Unattended background batch execution'
    ],
    image: 'assets/media/real_ui/03_tool_pipeline.png'
  },
  {
    id: 'audit',
    name: 'Audit & Security Suite',
    title: 'Unhide Sheets, Strip Metadata & Inspect Hidden Risks',
    desc: 'Designed for financial auditors and security officers. Effortlessly reveals very hidden (xlSheetVeryHidden) tabs, inspects external formula links, and purges sensitive metadata before external dispatch.',
    specs: [
      'Deep forensic inspection of hidden rows, columns, and worksheets',
      'Identifies broken external workbook formula references',
      'Wipes author names, revision history, and printer properties',
      '100% offline verification ensures client NDA compliance'
    ],
    image: 'assets/media/real_ui/05_tool_audit_security.png'
  },
  {
    id: 'split',
    name: 'Workbook Splitter',
    title: 'Segment Master Files by Column Values or Row Counts',
    desc: 'Effortlessly split massive 100,000+ row master sheets into separate localized workbooks categorized by Department, Region, Branch, or Sales Rep with clean formatting.',
    specs: [
      'Split by distinct values in any column (e.g., Regional Branch)',
      'Split into fixed row-chunk workbooks (e.g., 5,000 rows each)',
      'Automated filename formatting with custom naming templates',
      'Generates automated ZIP delivery bundles'
    ],
    image: 'assets/media/real_ui/06_tool_split.png'
  },
  {
    id: 'pdf',
    name: 'PDF & Text Extractor',
    title: 'Extract Invoices & Bank Statements Directly to Clean Excel',
    desc: 'Converts tabular data locked inside PDF bank statements, vendor bills, and text exports into structured, editable Excel spreadsheets with pristine column boundaries.',
    specs: [
      'High-precision optical table boundary recognition',
      'Extracts multi-page continuous ledger tables flawlessly',
      'Sanitizes currency symbols and trailing minus signs into real numbers',
      'Completely offline: no financial documents sent to cloud OCR'
    ],
    image: 'assets/media/real_ui/05_tool_pdf_extract.png'
  }
];

function initModuleTabs() {
  const tabsContainer = document.getElementById('module-tabs');
  const displayContainer = document.getElementById('module-display');

  if (!tabsContainer || !displayContainer) return;

  // Render tabs
  tabsContainer.innerHTML = MODULES_DATA.map((mod, idx) => `
    <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-id="${mod.id}">
      <span>${mod.name}</span>
    </button>
  `).join('');

  // Function to render active module
  function renderModule(mod) {
    displayContainer.innerHTML = `
      <div class="module-info">
        <span class="mono-tag text-gradient">MODULE DEEP-DIVE</span>
        <h3>${mod.title}</h3>
        <p>${mod.desc}</p>
        <ul class="module-specs">
          ${mod.specs.map(spec => `
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${spec}</span>
            </li>
          `).join('')}
        </ul>
        <a href="#pricing" class="btn btn-primary btn-sm">Try in Free 14-Day Evaluation</a>
      </div>
      <div class="module-visual">
        <img src="${mod.image}" alt="${mod.name} Screenshot" class="module-preview-img" loading="lazy">
      </div>
    `;
  }

  // Initial render
  renderModule(MODULES_DATA[0]);

  // Tab click handler
  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const modId = btn.getAttribute('data-id');
    const selectedMod = MODULES_DATA.find(m => m.id === modId);
    if (selectedMod) {
      renderModule(selectedMod);
    }
  });
}

/* -------------------------------------------------------------
 * 3. Interactive ROI & Time Savings Calculator
 * ----------------------------------------------------------- */
function initRoiCalculator() {
  const sliderFiles = document.getElementById('slider-files');
  const sliderRate = document.getElementById('slider-rate');
  const valFiles = document.getElementById('val-files');
  const valRate = document.getElementById('val-rate');

  const statHoursYear = document.getElementById('stat-hours-year');
  const statMoneySaved = document.getElementById('stat-money-saved');
  const statPaybackDays = document.getElementById('stat-payback-days');

  if (!sliderFiles || !sliderRate) return;

  function recalculate() {
    const filesPerWeek = parseInt(sliderFiles.value, 10);
    const hourlyRate = parseInt(sliderRate.value, 10);

    valFiles.textContent = filesPerWeek.toLocaleString() + ' files';
    valRate.textContent = '$' + hourlyRate + '/hr';

    // Calculation model:
    // Manual handling: ~12 minutes (0.2 hr) per file (merging, cleaning, checking, reformatting).
    // With Toolkit: ~15 seconds (< 0.005 hr).
    // Net hours saved per file ~ 0.18 hours.
    const hoursSavedPerWeek = filesPerWeek * 0.18;
    const hoursSavedPerYear = Math.round(hoursSavedPerWeek * 50); // 50 work weeks
    const annualMoneySaved = Math.round(hoursSavedPerYear * hourlyRate);

    // Payback period based on Lifetime license ($49)
    // Daily value saved = annualMoneySaved / 250 work days
    const dailyValue = annualMoneySaved / 250;
    const paybackDays = dailyValue > 0 ? Math.max(1, Math.round(49 / dailyValue)) : 1;

    statHoursYear.textContent = hoursSavedPerYear.toLocaleString() + ' hrs';
    statMoneySaved.textContent = '$' + annualMoneySaved.toLocaleString();
    statPaybackDays.textContent = paybackDays + (paybackDays === 1 ? ' Day' : ' Days');
  }

  sliderFiles.addEventListener('input', recalculate);
  sliderRate.addEventListener('input', recalculate);

  // Initial run
  recalculate();
}

/* -------------------------------------------------------------
 * 4. FAQ Accordion
 * ----------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}
