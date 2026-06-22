/* dashboard.js - Interactive SVG Analytics Dashboard & ROI Calculator */

const DASHBOARD_DATA = {
    revenue: {
        title: "Logistics Marketplace Revenue Growth",
        subtitle: "Trolla MRR Ramp-up (₹ in Lakhs)",
        labels: ["Q1-22", "Q2-22", "Q3-22", "Q4-22", "Q1-23", "Q2-23"],
        values: [30, 45, 80, 150, 220, 310], // ₹3 Cr -> ₹10 Cr annualized (MRR 30L -> 83L -> 1Cr)
        prefix: "₹",
        suffix: "L"
    },
    leads: {
        title: "Qualified B2B Leads Sourced",
        subtitle: "Multi-channel Inquiries (Cumulative)",
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        values: [20000, 45000, 85000, 110000, 135000, 152000],
        prefix: "",
        suffix: ""
    },
    scale: {
        title: "Operations & Fleet Enablement",
        subtitle: "Active Drivers & Channel Partners Onboarded",
        labels: ["Launch", "Month 3", "Month 6", "Month 9", "Month 12", "Month 18"],
        values: [40, 110, 180, 260, 340, 420],
        prefix: "",
        suffix: " Operators"
    }
};

let currentTab = 'revenue';

function initDashboard() {
    renderChart();
    setupDashboardEventListeners();
    updateRoiCalculator();
}

function renderChart() {
    const chartContainer = document.getElementById('dashboard-chart-viewport');
    if (!chartContainer) return;

    const data = DASHBOARD_DATA[currentTab];
    const width = chartContainer.clientWidth || 550;
    const height = 240;
    const padding = { top: 20, right: 30, bottom: 40, left: 50 };

    const maxVal = Math.max(...data.values) * 1.1;
    const minVal = 0;

    // Build SVG
    let svgHtml = `
        <svg class="chart-svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
            <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.0"/>
                </linearGradient>
            </defs>
    `;

    // Draw Gridlines and Y Axis Labels
    const gridLinesCount = 4;
    for (let i = 0; i <= gridLinesCount; i++) {
        const y = padding.top + (i * (height - padding.top - padding.bottom) / gridLinesCount);
        const val = maxVal - (i * (maxVal - minVal) / gridLinesCount);
        const formattedVal = formatMetricValue(val, data.prefix, data.suffix);
        
        svgHtml += `
            <line class="chart-grid-line" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"></line>
            <text class="chart-axis-text" x="${padding.left - 10}" y="${y + 4}" text-anchor="end">${formattedVal}</text>
        `;
    }

    // Calculate Coordinates
    const points = [];
    const stepX = (width - padding.left - padding.right) / (data.values.length - 1);
    
    data.values.forEach((val, index) => {
        const x = padding.left + (index * stepX);
        const y = height - padding.bottom - ((val - minVal) / (maxVal - minVal) * (height - padding.top - padding.bottom));
        points.push({ x, y, val, label: data.labels[index] });
    });

    if (currentTab === 'leads') {
        // Draw Bar Chart for Leads
        const barWidth = Math.min(stepX * 0.5, 30);
        points.forEach((pt) => {
            const barHeight = height - padding.bottom - pt.y;
            svgHtml += `
                <rect class="chart-bar" x="${pt.x - barWidth/2}" y="${pt.y}" width="${barWidth}" height="${barHeight}" 
                      data-value="${data.prefix}${pt.val.toLocaleString()}${data.suffix}" data-label="${pt.label}"></rect>
            `;
        });
    } else {
        // Draw Line Chart for Revenue and Operations
        let pathD = `M ${points[0].x} ${points[0].y}`;
        let areaD = `M ${points[0].x} ${height - padding.bottom} L ${points[0].x} ${points[0].y}`;
        
        for (let i = 1; i < points.length; i++) {
            pathD += ` L ${points[i].x} ${points[i].y}`;
            areaD += ` L ${points[i].x} ${points[i].y}`;
        }
        
        areaD += ` L ${points[points.length - 1].x} ${height - padding.bottom} Z`;

        // Area under path
        svgHtml += `<path class="chart-area" d="${areaD}"></path>`;
        // Stroke line
        svgHtml += `<path class="chart-line" d="${pathD}"></path>`;

        // Draw points
        points.forEach((pt) => {
            svgHtml += `
                <circle class="chart-point" cx="${pt.cx = pt.x}" cy="${pt.cy = pt.y}" r="5"
                        data-value="${data.prefix}${pt.val.toLocaleString()}${data.suffix}" data-label="${pt.label}"></circle>
            `;
        });
    }

    // Draw X Axis Labels
    points.forEach((pt) => {
        svgHtml += `
            <text class="chart-axis-text" x="${pt.x}" y="${height - 15}" text-anchor="middle">${pt.label}</text>
        `;
    });

    // Draw X Axis Line
    svgHtml += `
        <line class="chart-axis-line" x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}"></line>
        </svg>
    `;

    chartContainer.innerHTML = svgHtml;
    setupChartTooltips(chartContainer);
}

function formatMetricValue(val, prefix, suffix) {
    if (val >= 100000) {
        return `${prefix}${(val / 100000).toFixed(1)}L`;
    } else if (val >= 1000) {
        return `${prefix}${(val / 1000).toFixed(0)}K`;
    }
    return `${prefix}${val.toFixed(0)}${suffix}`;
}

function setupChartTooltips(container) {
    const tooltip = document.createElement('div');
    tooltip.className = 'chart-tooltip';
    container.appendChild(tooltip);

    const items = container.querySelectorAll('.chart-point, .chart-bar');
    items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const val = item.getAttribute('data-value');
            const label = item.getAttribute('data-label');
            tooltip.innerHTML = `<strong>${label}</strong><br>${val}`;
            tooltip.style.opacity = '1';
        });

        item.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}

function setupDashboardEventListeners() {
    const tabs = document.querySelectorAll('[data-dashboard-tab]');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.getAttribute('data-dashboard-tab');
            renderChart();
        });
    });

    // Sliders
    const sliders = document.querySelectorAll('.control-slider');
    sliders.forEach(slider => {
        slider.addEventListener('input', () => {
            const id = slider.id;
            const val = slider.value;
            const valueDisplay = document.getElementById(`${id}-val`);
            
            if (id === 'slider-budget') {
                valueDisplay.innerText = `₹${(val / 100000).toFixed(1)} Lakh`;
            } else if (id === 'slider-conversion') {
                valueDisplay.innerText = `${val}%`;
            } else if (id === 'slider-efficiency') {
                valueDisplay.innerText = `${val}x`;
            }
            
            updateRoiCalculator();
        });
    });

    // Handle resizing chart
    window.addEventListener('resize', () => {
        if (document.getElementById('dashboard-chart-viewport')) {
            renderChart();
        }
    });
}

function updateRoiCalculator() {
    const budgetSlider = document.getElementById('slider-budget');
    const conversionSlider = document.getElementById('slider-conversion');
    const efficiencySlider = document.getElementById('slider-efficiency');

    if (!budgetSlider || !conversionSlider || !efficiencySlider) return;

    const budget = parseFloat(budgetSlider.value);
    const conversion = parseFloat(conversionSlider.value) / 100;
    const efficiency = parseFloat(efficiencySlider.value);

    // Dynamic calculations representing scaling business results
    // Example: leads = budget / 45 (avg cost per lead)
    // Conversions = leads * conversion
    // Business Value = Conversions * ₹25,000 avg deal size * operational efficiency
    const estimatedLeads = Math.round(budget / 35); // ₹35 cost per lead base
    const rawConversions = estimatedLeads * conversion;
    const businessValueGenerated = Math.round(rawConversions * 45000 * efficiency);

    // Populate displays
    const displayLeads = document.getElementById('calc-leads-val');
    const displayValue = document.getElementById('calc-value-val');

    if (displayLeads) {
        displayLeads.innerText = estimatedLeads.toLocaleString();
    }
    if (displayValue) {
        if (businessValueGenerated >= 10000000) {
            displayValue.innerText = `₹${(businessValueGenerated / 10000000).toFixed(2)} Cr`;
        } else {
            displayValue.innerText = `₹${(businessValueGenerated / 100000).toFixed(1)} Lakh`;
        }
    }
}

// Global initialization check
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('dashboard-chart-viewport')) {
        initDashboard();
    }
});
