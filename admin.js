/* admin.js - Core logic for CMS Editor & Configuration Exporter */

let cmsData = null;

function initAdminCms() {
    cmsData = { ...portfolioData };
    setupAdminForms();
    bindAdminEvents();
    renderLivePreview();
}

function setupAdminForms() {
    // 1. Hero Inputs
    document.getElementById('edit-hero-name').value = cmsData.hero.name;
    document.getElementById('edit-hero-headline').value = cmsData.hero.headline;
    document.getElementById('edit-hero-subheadline').value = cmsData.hero.subheadline;
    document.getElementById('edit-hero-desc').value = cmsData.hero.description;

    // 2. Metrics inputs
    const metricsContainer = document.getElementById('metrics-editor-container');
    metricsContainer.innerHTML = '';
    cmsData.metrics.forEach((metric, idx) => {
        metricsContainer.innerHTML += `
            <div class="admin-form-section" style="margin-bottom:12px;">
                <h4 style="margin-bottom:8px; font-size:0.85rem; color:var(--accent);">Metric Card ${idx + 1}</h4>
                <div class="admin-input-group">
                    <label>Metric Value (e.g., ₹10 Cr+)</label>
                    <input type="text" class="metric-val-input" data-index="${idx}" value="${metric.value}">
                </div>
                <div class="admin-input-group">
                    <label>Label</label>
                    <input type="text" class="metric-lbl-input" data-index="${idx}" value="${metric.label}">
                </div>
                <div class="admin-input-group">
                    <label>Detailed Description</label>
                    <textarea class="metric-desc-input" data-index="${idx}" rows="2">${metric.desc}</textarea>
                </div>
            </div>
        `;
    });

    // 3. Launches List
    const launchesSelect = document.getElementById('launch-select');
    launchesSelect.innerHTML = '';
    cmsData.launches.forEach((launch, idx) => {
        launchesSelect.innerHTML += `<option value="${launch.id}">${launch.title}</option>`;
    });
    loadSelectedLaunch();
}

function loadSelectedLaunch() {
    const launchId = document.getElementById('launch-select').value;
    const launch = cmsData.launches.find(l => l.id === launchId);
    if (!launch) return;

    document.getElementById('edit-launch-title').value = launch.title;
    document.getElementById('edit-launch-problem').value = launch.problem;
    document.getElementById('edit-launch-approach').value = launch.approach;
    document.getElementById('edit-launch-revenue').value = launch.revenueImpact;
}

function bindAdminEvents() {
    // Hero Event Listeners
    document.getElementById('edit-hero-name').addEventListener('input', (e) => {
        cmsData.hero.name = e.target.value;
        saveAndPreview();
    });
    document.getElementById('edit-hero-headline').addEventListener('input', (e) => {
        cmsData.hero.headline = e.target.value;
        saveAndPreview();
    });
    document.getElementById('edit-hero-subheadline').addEventListener('input', (e) => {
        cmsData.hero.subheadline = e.target.value;
        saveAndPreview();
    });
    document.getElementById('edit-hero-desc').addEventListener('input', (e) => {
        cmsData.hero.description = e.target.value;
        saveAndPreview();
    });

    // Metrics Change Listeners
    document.getElementById('metrics-editor-container').addEventListener('input', (e) => {
        const input = e.target;
        const index = parseInt(input.getAttribute('data-index'));
        
        if (input.classList.contains('metric-val-input')) {
            cmsData.metrics[index].value = input.value;
        } else if (input.classList.contains('metric-lbl-input')) {
            cmsData.metrics[index].label = input.value;
        } else if (input.classList.contains('metric-desc-input')) {
            cmsData.metrics[index].desc = input.value;
        }
        saveAndPreview();
    });

    // Launches Select & Edit Listeners
    document.getElementById('launch-select').addEventListener('change', loadSelectedLaunch);
    
    document.getElementById('edit-launch-title').addEventListener('input', (e) => {
        const id = document.getElementById('launch-select').value;
        const l = cmsData.launches.find(item => item.id === id);
        if (l) l.title = e.target.value;
        saveAndPreview();
        updateLaunchDropdownLabel(id, e.target.value);
    });
    document.getElementById('edit-launch-problem').addEventListener('input', (e) => {
        const id = document.getElementById('launch-select').value;
        const l = cmsData.launches.find(item => item.id === id);
        if (l) l.problem = e.target.value;
        saveAndPreview();
    });
    document.getElementById('edit-launch-approach').addEventListener('input', (e) => {
        const id = document.getElementById('launch-select').value;
        const l = cmsData.launches.find(item => item.id === id);
        if (l) l.approach = e.target.value;
        saveAndPreview();
    });
    document.getElementById('edit-launch-revenue').addEventListener('input', (e) => {
        const id = document.getElementById('launch-select').value;
        const l = cmsData.launches.find(item => item.id === id);
        if (l) l.revenueImpact = e.target.value;
        saveAndPreview();
    });

    // Exporter button
    document.getElementById('export-data-btn').addEventListener('click', exportConfigFile);

    // Reset button
    document.getElementById('reset-data-btn').addEventListener('click', () => {
        if (confirm("Are you sure you want to discard all changes and revert to the default template copy?")) {
            resetPortfolioData();
            window.location.reload();
        }
    });
}

function updateLaunchDropdownLabel(id, newTitle) {
    const option = document.querySelector(`#launch-select option[value="${id}"]`);
    if (option) option.innerText = newTitle;
}

function saveAndPreview() {
    savePortfolioData(cmsData);
    renderLivePreview();
}

function renderLivePreview() {
    const previewContainer = document.getElementById('cms-live-preview');
    if (!previewContainer) return;

    // Generate simulated home hero preview
    previewContainer.innerHTML = `
        <div style="background-color:var(--bg-secondary); border:1px solid var(--border-color); padding:32px; border-radius:8px; box-shadow:var(--shadow-sm);">
            <span style="font-size:0.75rem; text-transform:uppercase; color:var(--accent); font-weight:700; letter-spacing:0.1em;">Live Hero Preview</span>
            <h1 style="font-size:2.25rem; font-weight:800; line-height:1.1; margin:12px 0 6px 0;">${cmsData.hero.headline}</h1>
            <h2 style="font-size:1rem; font-weight:600; color:var(--text-secondary); margin-bottom:12px;">${cmsData.hero.subheadline}</h2>
            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">${cmsData.hero.description}</p>
        </div>
        
        <div style="margin-top:20px;">
            <span style="font-size:0.75rem; text-transform:uppercase; color:var(--accent); font-weight:700; letter-spacing:0.1em; display:block; margin-bottom:12px;">Live Metrics Grid Preview</span>
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px;">
                ${cmsData.metrics.slice(0, 4).map(m => `
                    <div style="background-color:var(--card-bg); border:1px solid var(--border-color); padding:16px; border-radius:6px; box-shadow:var(--shadow-sm);">
                        <div style="font-size:1.5rem; font-weight:800; color:var(--accent);">${m.value}</div>
                        <div style="font-size:0.8rem; font-weight:700; margin-top:2px;">${m.label}</div>
                        <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:4px; line-height:1.3;">${m.desc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function exportConfigFile() {
    // Generate JS content string
    const exportString = `/* portfolio-data.js - Exported Portfolio Content */

const DEFAULT_PORTFOLIO_DATA = ${JSON.stringify(cmsData, null, 4)};

// Global state controller
let portfolioData = null;

// Initialize data helper
function initPortfolioData() {
    const saved = localStorage.getItem('mayank_portfolio_data');
    if (saved) {
        try {
            portfolioData = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved portfolio data, resetting...", e);
            portfolioData = { ...DEFAULT_PORTFOLIO_DATA };
            localStorage.setItem('mayank_portfolio_data', JSON.stringify(portfolioData));
        }
    } else {
        portfolioData = { ...DEFAULT_PORTFOLIO_DATA };
        localStorage.setItem('mayank_portfolio_data', JSON.stringify(portfolioData));
    }
    return portfolioData;
}

// Reset data helper
function resetPortfolioData() {
    portfolioData = { ...DEFAULT_PORTFOLIO_DATA };
    localStorage.setItem('mayank_portfolio_data', JSON.stringify(portfolioData));
    return portfolioData;
}

// Save modified data helper
function savePortfolioData(newData) {
    portfolioData = newData;
    localStorage.setItem('mayank_portfolio_data', JSON.stringify(portfolioData));
}

// Export data helper
initPortfolioData();
`;

    // Create a blob and trigger download
    const blob = new Blob([exportString], { type: 'application/javascript;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'portfolio-data.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert("Configuration file 'portfolio-data.js' successfully generated and downloaded!\n\nTo apply these updates permanently to your codebase, simply drag and drop the downloaded file to replace the existing 'assets/js/portfolio-data.js' in your project folder.");
}

// Load on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('edit-hero-name')) {
        initAdminCms();
    }
});
