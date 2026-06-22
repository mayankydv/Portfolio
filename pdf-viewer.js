/* pdf-viewer.js - Virtual PDF Document Viewport & Mock Document Database */

const PDF_DOCUMENTS = {
    "doc-launch-mumbai": {
        title: "Mumbai Expansion Playbook & P&L Analysis",
        subtitle: "WheelsEye Logistics GTM - Q3 Expansion",
        date: "September 2019",
        author: "Mayank Yadav (Launch Lead)",
        pages: [
            {
                section: "1. Executive Summary & Market Entry",
                content: `
                    <p class="pdf-text-simulated">This playbook outlines the strategic framework deployed to capture market share in Mumbai's commercial vehicle sector. The expansion targeted industrial transport hubs, introducing WheelsEye SaaS vehicle tracking and marketplace bidding to local fleet owners.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Key Performance Metric</div>
                        <p class="pdf-text-simulated">Within 180 days of launch, active vehicle subscriptions scaled by 300%, securing a monthly revenue run rate of ₹45 Lakhs from the cluster.</p>
                    </div>
                `,
                stats: [
                    { val: "300%", lbl: "User Growth" },
                    { val: "₹45L", lbl: "Monthly Run Rate" }
                ]
            },
            {
                section: "2. Operating Model & Cluster Restructuring",
                content: `
                    <p class="pdf-text-simulated">We divided the Mumbai logistics region into three geographic clusters: Navi Mumbai, Thane, and JNPT. A specialized team was assigned to each cluster, running weekly outreach campaigns to fleet owners and brokers.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Cluster Zone</th><th>Staff Count</th><th>Onboarded Fleets</th><th>Active Subscriptions</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Navi Mumbai</td><td>6 Sales / 1 Ops</td><td>120 Fleets</td><td>840 Vehicles</td></tr>
                            <tr><td>Thane</td><td>5 Sales / 1 Ops</td><td>95 Fleets</td><td>610 Vehicles</td></tr>
                            <tr><td>JNPT Corridor</td><td>4 Sales / 1 Ops</td><td>80 Fleets</td><td>530 Vehicles</td></tr>
                        </tbody>
                    </table>
                `,
                stats: [
                    { val: "18", lbl: "Total Field Staff" },
                    { val: "1,980", lbl: "Active Vehicles" }
                ]
            }
        ]
    },
    "doc-launch-bangalore": {
        title: "Bangalore Launch GTM Strategy Report",
        subtitle: "South India Expansion Initiative",
        date: "February 2020",
        author: "Mayank Yadav (Launch Lead)",
        pages: [
            {
                section: "1. Corridor Liquidization Strategy",
                content: `
                    <p class="pdf-text-simulated">The Bangalore launch focused on liquidizing high-volume transport corridors: Bangalore-Chennai and Bangalore-Hyderabad. Instead of broad geographical marketing, resources were concentrated directly on truck terminals at Nelamangala and Yeshwanthpur.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Resulting Corridor Penetration</div>
                        <p class="pdf-text-simulated">Achieved 22% market share of active GPS tracking installations on targeted commercial trucks traveling Bangalore outbound routes within 9 months.</p>
                    </div>
                `
            }
        ]
    },
    "doc-trolla-smb": {
        title: "Trolla SMB Market Penetration Brief",
        subtitle: "Scaling Regional Spot Logistics Marketplace",
        date: "October 2022",
        author: "Mayank Yadav (Head of Operations)",
        pages: [
            {
                section: "1. Demand Generation & SMB Capture",
                content: `
                    <p class="pdf-text-simulated">To launch Trolla's Small and Medium Business (SMB) marketplace, we deployed targeted performance campaigns to bypass middle brokers. SMB shippers were onboarded via a mobile-first digital load posting system.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Month</th><th>SMB Shippers</th><th>Monthly Load Posts</th><th>Gross Transaction Value</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Month 1</td><td>42 Shippers</td><td>180 Loads</td><td>₹12 Lakhs</td></tr>
                            <tr><td>Month 4</td><td>190 Shippers</td><td>850 Loads</td><td>₹65 Lakhs</td></tr>
                            <tr><td>Month 8</td><td>420 Shippers</td><td>2,400 Loads</td><td>₹2.0 Crores</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-growth-guru": {
        title: "Growth Guru Channel Program Guidelines",
        subtitle: "Decentralized Referral Architecture",
        date: "July 2021",
        author: "Mayank Yadav (Operations Director)",
        pages: [
            {
                section: "1. Channel Partner Structure",
                content: `
                    <p class="pdf-text-simulated">This document describes the operational rules of the Growth Guru channel partner program. By converting local automobile spare-part dealers and fuel pump cashiers into subscription agents, we unlocked highly cost-effective customer acquisition loops.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">CAC Impact</div>
                        <p class="pdf-text-simulated">Customer Acquisition Cost (CAC) through direct channels was ₹4,200. The Growth Guru program reduced this to ₹2,400 per active customer subscription, generating a 42% cost savings.</p>
                    </div>
                `
            }
        ]
    },
    "doc-sop": {
        title: "Standard Operating Procedures (SOP) Manual",
        subtitle: "Driver Onboarding & Verification Operations",
        date: "November 2021",
        author: "Mayank Yadav (Head of Process)",
        pages: [
            {
                section: "1. Verification Protocol & Quality Assurance",
                content: `
                    <p class="pdf-text-simulated">Standard operations flow to ensure trust and security in B2B marketplaces. Onboarding must adhere to the 3-step verification framework before trip dispatch.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Step</th><th>Action Required</th><th>SLA Time</th><th>Audit Mechanism</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>1. Kyc Verification</td><td>Aadhaar/DL validation via API</td><td>5 Mins</td><td>Automated API Match</td></tr>
                            <tr><td>2. Vehicle Verification</td><td>RC card and National Permit check</td><td>10 Mins</td><td>Vahan Database cross-ref</td></tr>
                            <tr><td>3. Bank Onboarding</td><td>Penny-drop verification for payments</td><td>2 Mins</td><td>Instapay API check</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-fraud": {
        title: "Logistics Fraud & GPS Geofence Audit Framework",
        subtitle: "Fulfillment & Subsidy Leakage Prevention",
        date: "January 2022",
        author: "Mayank Yadav (Operations Excellence)",
        pages: [
            {
                section: "1. Anomalies in Voucher Dispatches",
                content: `
                    <p class="pdf-text-simulated">Brokers were abusing driver fuel vouchers by submitting artificial trip completions. We established a 3-way telemetry audit framework to ensure payments only trigger upon physical delivery confirmation.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Financial Leakage Saved</div>
                        <p class="pdf-text-simulated">Prevented over ₹18 Lakhs in monthly fuel voucher fraud losses within 45 days of deploying GPS coordinate and toll timestamp validation models.</p>
                    </div>
                `
            }
        ]
    },
    "doc-kra": {
        title: "Operational Key Result Areas (KRAs) & Pod Structures",
        subtitle: "Scalable Organization Restructuring",
        date: "August 2021",
        author: "Mayank Yadav (Founder's Office)",
        pages: [
            {
                section: "1. Team Allocation & Pod Metrics",
                content: `
                    <p class="pdf-text-simulated">To ensure clear responsibility and fast scaling, we restructured our 400-strong field team into agile operational pods. Each pod holds direct responsibility for regional corridor metrics.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Role</th><th>Primary KRA</th><th>Target Threshold</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Pod Leader</td><td>Corridor GMV Growth & SLA Match</td><td>95% Fulfillment</td></tr>
                            <tr><td>Field Executive</td><td>Daily Fleet Lead Generation & Apps Onboarding</td><td>3 Apps installs/day</td></tr>
                            <tr><td>Support Coordinator</td><td>Driver Ticket Resolution & Toll Setup Support</td><td>&lt; 15 mins SLA</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-crm": {
        title: "Custom CRM Lead Routing System Architecture",
        subtitle: "Product Design Specification for Sales Automation",
        date: "May 2021",
        author: "Mayank Yadav (Product Lead)",
        pages: [
            {
                section: "1. Lead Routing Automation Logic",
                content: `
                    <p class="pdf-text-simulated">Design specification for capturing leads from LinkedIn, IndiaMart, and meta landing pages, running them through an allocation engine, and distributing them instantly to the nearest geographical field representative via WhatsApp Business API.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">System Turnaround</div>
                        <p class="pdf-text-simulated">Lead distribution latency reduced from 4 hours to 4.5 minutes. Lead contact rate increased from 52% to 94%.</p>
                    </div>
                `
            }
        ]
    },
    "doc-load-flow": {
        title: "Load Creation Flow Optimization Wireframes & Metrics",
        subtitle: "Conversion Rate Optimization (CRO) Report",
        date: "December 2022",
        author: "Mayank Yadav (Product & Growth)",
        pages: [
            {
                section: "1. User Friction Reduction",
                content: `
                    <p class="pdf-text-simulated">Analysis of driver engagement metrics on the load booking form. The initial form was 15 input fields long. The redesigned flow utilizes a 3-step dynamic route builder, reducing overall complexity.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Metric Measured</th><th>Original Flow</th><th>Optimized Flow</th><th>Relative Improvement</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Completion Rate</td><td>46%</td><td>79%</td><td>+71.7%</td></tr>
                            <tr><td>Avg Time to Post</td><td>3m 22s</td><td>42s</td><td>-79.2%</td></tr>
                            <tr><td>Error Rate</td><td>18%</td><td>3%</td><td>-83.3%</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-dashboards": {
        title: "Executive Operations Dashboard - Visual Mockups",
        subtitle: "Internal Analytics Dashboard Integration",
        date: "June 2023",
        author: "Mayank Yadav (Product & Operations)",
        pages: [
            {
                section: "1. Operations Control Center Design",
                content: `
                    <p class="pdf-text-simulated">Design mockups and details of Trolla's executive command dashboards. Aggregates live transaction values, broker commission spreads, driver compliance logs, and vehicle churn indicators in a unified view.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Management Efficiency</div>
                        <p class="pdf-text-simulated">Eliminated manual spreadsheet updates for regional heads, saving 12 operational hours per week per manager.</p>
                    </div>
                `
            }
        ]
    },
    "doc-wheelseye-revenue": {
        title: "WheelsEye Multi-channel Lead Generation Plan",
        subtitle: "B2B Outreach Strategy & Channel Mix",
        date: "March 2020",
        author: "Mayank Yadav (GTM Lead)",
        pages: [
            {
                section: "1. B2B Sourcing Channels",
                content: `
                    <p class="pdf-text-simulated">Structuring lead pipelines. Target profile: Small manufacturing enterprises (SMEs) spending &gt; ₹5 Lakhs monthly on freight services. Outreach mapped across three core digital pipelines.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Source Channel</th><th>Monthly Budget</th><th>Avg Leads</th><th>CPL Achieved</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Google Search (Freight Keywords)</td><td>₹45,000</td><td>1,200</td><td>₹37.50</td></tr>
                            <tr><td>Meta Lead Forms</td><td>₹35,000</td><td>2,400</td><td>₹14.50</td></tr>
                            <tr><td>B2B Directories (IndiaMart)</td><td>₹20,000</td><td>800</td><td>₹25.00</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-trolla-revenue": {
        title: "Trolla Spot Demand Lead Flow Map",
        subtitle: "Scaling SMB Spot Shipment Volume",
        date: "November 2022",
        author: "Mayank Yadav (Revenue Lead)",
        pages: [
            {
                section: "1. Spot Demand Acquisition Funnel",
                content: `
                    <p class="pdf-text-simulated">This report documents the performance parameters of Trolla's spot-market demand campaign. Through real-time ad integrations matching truck availabilities, we drove immediate bookings from manufacturers.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">CAC & LTV Analysis</div>
                        <p class="pdf-text-simulated">Customer Acquisition Cost (CAC) stabilized at ₹1,800 with an average Lifetime Value (LTV) of ₹24,000 based on repeat spot bookings over 6 months.</p>
                    </div>
                `
            }
        ]
    },
    "doc-ftl-res": {
        title: "Full Truck Load (FTL) Industry Whitepaper",
        subtitle: "Logistics Market Assessment and Telematics Opportunity",
        date: "April 2020",
        author: "Mayank Yadav (Research & GTM)",
        pages: [
            {
                section: "1. Indian FTL Logistics Ecosystem",
                content: `
                    <p class="pdf-text-simulated">Analysis of structural issues in the Indian Full Truck Load corridor. Highlights how broker pricing structures and lack of real-time transit visibility erode profits for individual truck owners.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Key Finding</div>
                        <p class="pdf-text-simulated">Small-scale truck operators (owning &lt; 5 trucks) represent 78% of total supply, yet they capture less than 35% of industrial demand due to reliance on offline commission agents.</p>
                    </div>
                `
            }
        ]
    },
    "doc-competitor-res": {
        title: "Competitive Landscape Matrix",
        subtitle: "Teardown of Major Indian Digital Freight Competitors",
        date: "September 2021",
        author: "Mayank Yadav (Founder's Office)",
        pages: [
            {
                section: "1. Competitive Analysis Summary",
                content: `
                    <p class="pdf-text-simulated">Comparing business models, monetization streams, and driver retention models across top tech-logistics platforms.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Competitor</th><th>Primary Focus</th><th>Revenue Model</th><th>Operational Weakness</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Porter</td><td>Intra-city LCV</td><td>Commission per trip (15%)</td><td>High driver churn in outskirts</td></tr>
                            <tr><td>BlackBuck</td><td>Long-haul FTL / Telematics</td><td>GPS Subscriptions + Toll Margins</td><td>High direct sales team CAC</td></tr>
                            <tr><td>SuperProcure</td><td>Enterprise SaaS</td><td>Annual Software Licensing</td><td>Slow onboarding cycle (90 days)</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-marketplace-res": {
        title: "Transactional Marketplace Take-Rate Analysis",
        subtitle: "Mathematical Pricing Thresholds in Freight Logistics",
        date: "January 2023",
        author: "Mayank Yadav (Growth Strategist)",
        pages: [
            {
                section: "1. Take-Rate Optimization Modeling",
                content: `
                    <p class="pdf-text-simulated">This whitepaper develops a pricing sensitivity model to discover the optimum take-rate for freight platforms. High take-rates (>6%) drive suppliers back to offline relationships, while low take-rates (<3%) fail to cover customer acquisition costs.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Optimum Threshold</div>
                        <p class="pdf-text-simulated">Based on transaction elasticities across 4 corridors, the optimal take-rate is calculated at 4.5%, balancing transaction velocity with platform gross revenue.</p>
                    </div>
                `
            }
        ]
    },
    "doc-lead-mgmt": {
        title: "Predictive Lead Scoring Model Specifications",
        subtitle: "Lead Allocation Engine & Dynamic Scoring Logic",
        date: "April 2021",
        author: "Mayank Yadav (Product & Revenue)",
        pages: [
            {
                section: "1. Scoring Weight Calculations",
                content: `
                    <p class="pdf-text-simulated">This specification outlines the scoring logic built into the lead routing CRM system. Leads are dynamically graded based on company details, location, and freight transport frequency.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Parameter</th><th>Value / Match</th><th>Score Added</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Company Scale</td><td>GST filer with > ₹50L revenue</td><td>+30 Points</td></tr>
                            <tr><td>Corridor Match</td><td>Corridor with active supply density</td><td>+25 Points</td></tr>
                            <tr><td>Frequency</td><td>Posts daily shipments</td><td>+25 Points</td></tr>
                            <tr><td>Contact info</td><td>Verified mobile & WhatsApp number</td><td>+20 Points</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-fastag": {
        title: "FASTag Automated Stock Replenishment Logic",
        subtitle: "Inventory Optimization & Auto-dispatch Algorithm",
        date: "December 2020",
        author: "Mayank Yadav (Operations Engineer)",
        pages: [
            {
                section: "1. Buffer Stock Auto-trigger Calculations",
                content: `
                    <p class="pdf-text-simulated">To prevent stockouts of RFID tags at highway toll booths, we designed an inventory formula that triggers warehouse dispatches based on regional sales velocity.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Inventory Threshold Formula</div>
                        <p class="pdf-text-simulated">Reorder Trigger (R) = (Average Daily Sales × Lead Time in Days) + Safety Buffer. Deployed triggers saved ₹15 Lakhs in safety stock overheads.</p>
                    </div>
                `
            }
        ]
    },
    "doc-associate-scoring": {
        title: "Business Associate Algorithmic Quality Grading",
        subtitle: "Fulfillment Ranking Engine Specifications",
        date: "May 2023",
        author: "Mayank Yadav (Product Manager)",
        pages: [
            {
                section: "1. Supplier Quality Performance Criteria",
                content: `
                    <p class="pdf-text-simulated">Fulfillment partners on Trolla are automatically ranked using trip reliability data. Associates with high ranks receive preferential load assignments, improving customer trust.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Performance Metric</th><th>Evaluation Period</th><th>Weight in Score</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Fulfillment Reliability</td><td>Last 30 Days</td><td>40%</td></tr>
                            <tr><td>Punctuality (GPS SLA)</td><td>Last 30 Days</td><td>30%</td></tr>
                            <tr><td>App Log Compliance</td><td>Last 30 Days</td><td>20%</td></tr>
                            <tr><td>Driver Rating</td><td>Lifetime</td><td>10%</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "doc-adoption": {
        title: "Field Force App Adoption Incentive Manual",
        subtitle: "Driver Engagement Strategy & Gamification Rules",
        date: "February 2022",
        author: "Mayank Yadav (Operations Lead)",
        pages: [
            {
                section: "1. Driver Incentive Levels & Milestones",
                content: `
                    <p class="pdf-text-simulated">Manual detailing the loyalty structure built into the driver application. Drivers log trip actions to level up and receive fuel cashback vouchers.</p>
                    <div class="pdf-highlight-box">
                        <div class="pdf-highlight-title">Loyalty Levels</div>
                        <p class="pdf-text-simulated">Gold: > 5 completed trips/month (1% fuel cashback)<br>Silver: 3-5 completed trips/month (0.5% fuel cashback)<br>Bronze: Entry level.</p>
                    </div>
                `
            }
        ]
    },
    "doc-trucksup-gtm": {
        title: "Outbound Agent Recruiting & Training Academy Manual",
        subtitle: "Sales Force Onboarding & Competency Checklists",
        date: "January 2021",
        author: "Mayank Yadav (Founder's Office)",
        pages: [
            {
                section: "1. Training Modules & Objection Scripts",
                content: `
                    <p class="pdf-text-simulated">This handbook serves as the onboarding curriculum for newly recruited sales forces. Outlines competitor argument defenses, cold-calling script playbooks, and GPS hardware installation walkthroughs.</p>
                    <table class="pdf-table-simulated">
                        <thead>
                            <tr><th>Module</th><th>Duration</th><th>Competency Checked</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>1. Product Telematics</td><td>2 Days</td><td>Hardware installation demonstration</td></tr>
                            <tr><td>2. Objection Handling</td><td>3 Days</td><td>Roleplay: defending price premiums</td></tr>
                            <tr><td>3. Territory Operations</td><td>2 Days</td><td>Corridor target planning test</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    }
};

// State for active document and page
let activePdfId = null;
let activePdfPage = 0;

function openPdfViewer(docId) {
    const doc = PDF_DOCUMENTS[docId] || {
        title: "Document Not Found",
        subtitle: "No preview available",
        date: "N/A",
        author: "N/A",
        pages: [{ section: "Error", content: "<p class='pdf-text-simulated'>The requested document does not exist.</p>" }]
    };

    activePdfId = docId;
    activePdfPage = 0;

    // Create modal element if not exists
    let modal = document.getElementById('pdf-viewer-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'pdf-viewer-modal';
        modal.className = 'pdf-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="pdf-viewer-container">
            <div class="pdf-toolbar">
                <div class="pdf-title-info">
                    <span class="pdf-doc-title">${doc.title}</span>
                    <span class="pdf-doc-meta">${doc.subtitle} | Page <span id="pdf-page-num">1</span> of ${doc.pages.length}</span>
                </div>
                <div class="pdf-actions">
                    <button class="pdf-btn" id="pdf-prev-btn" ${doc.pages.length <= 1 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button class="pdf-btn" id="pdf-next-btn" ${doc.pages.length <= 1 ? 'disabled' : ''}>
                        Next
                    </button>
                    <button class="pdf-btn pdf-btn-primary" id="pdf-download-btn">
                        Print / Save PDF
                    </button>
                    <button class="pdf-btn" id="pdf-close-btn" style="background:#ef4444; color:white; border-color:#ef4444;">
                        Close
                    </button>
                </div>
            </div>
            <div class="pdf-viewport">
                <div class="pdf-page-simulated" id="pdf-page-content">
                    <!-- Page content will inject here -->
                </div>
            </div>
        </div>
    `;

    modal.classList.add('open');
    renderPdfPage(doc);

    // Bind event listeners
    document.getElementById('pdf-prev-btn').addEventListener('click', () => {
        if (activePdfPage > 0) {
            activePdfPage--;
            renderPdfPage(doc);
        }
    });

    document.getElementById('pdf-next-btn').addEventListener('click', () => {
        if (activePdfPage < doc.pages.length - 1) {
            activePdfPage++;
            renderPdfPage(doc);
        }
    });

    document.getElementById('pdf-download-btn').addEventListener('click', () => {
        printSimulatedPdf(doc);
    });

    document.getElementById('pdf-close-btn').addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Close when clicking outside container
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
}

function renderPdfPage(doc) {
    const page = doc.pages[activePdfPage];
    const pageContainer = document.getElementById('pdf-page-content');
    const pageNumText = document.getElementById('pdf-page-num');
    
    pageNumText.innerText = activePdfPage + 1;
    
    let statsHtml = '';
    if (page.stats) {
        statsHtml = `<div class="pdf-stat-grid">`;
        page.stats.forEach(st => {
            statsHtml += `
                <div class="pdf-stat-card">
                    <div class="pdf-stat-val">${st.val}</div>
                    <div class="pdf-stat-lbl">${st.lbl}</div>
                </div>
            `;
        });
        statsHtml += `</div>`;
    }

    pageContainer.innerHTML = `
        <div class="pdf-header-simulated">
            <span>Mayank Yadav - Evidence Brief</span>
            <span>${doc.date}</span>
        </div>
        <h1 class="pdf-title-simulated">${doc.title}</h1>
        <h2 class="pdf-subtitle-simulated">${doc.subtitle}</h2>
        
        <h3 class="pdf-section-title-simulated">${page.section}</h3>
        <div>${page.content}</div>
        ${statsHtml}
        
        <div class="pdf-footer-simulated">
            <span>Prepared by: ${doc.author}</span>
            <span>Page ${activePdfPage + 1} of ${doc.pages.length}</span>
        </div>
    `;

    // Disable buttons if bounds reached
    document.getElementById('pdf-prev-btn').disabled = (activePdfPage === 0);
    document.getElementById('pdf-next-btn').disabled = (activePdfPage === doc.pages.length - 1);
}

function printSimulatedPdf(doc) {
    // Generate full-page layout for all pages to print cleanly
    const printWindow = window.open('', '_blank');
    let allPagesHtml = '';
    
    doc.pages.forEach((page, idx) => {
        let statsHtml = '';
        if (page.stats) {
            statsHtml = `<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:16px; margin:20px 0;">`;
            page.stats.forEach(st => {
                statsHtml += `
                    <div style="background:#FAFAFA; border:1px solid #E5E7EB; padding:16px; border-radius:4px; text-align:center;">
                        <div style="font-size:1.75rem; font-weight:800; color:#2563EB;">${st.val}</div>
                        <div style="font-size:0.75rem; color:#6B7280; text-transform:uppercase; font-weight:600;">${st.lbl}</div>
                    </div>
                `;
            });
            statsHtml += `</div>`;
        }

        allPagesHtml += `
            <div class="print-page" style="page-break-after:always; width:100%; max-width:700px; min-height:900px; background:#FFFFFF; color:#111111; padding:60px 50px; font-family:'Inter', sans-serif; position:relative; box-sizing:border-box;">
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid #E5E7EB; padding-bottom:12px; margin-bottom:32px; font-size:0.75rem; color:#6B7280; text-transform:uppercase; letter-spacing:0.05em; font-weight:600;">
                    <span>Mayank Yadav - Evidence Brief</span>
                    <span>${doc.date}</span>
                </div>
                <h1 style="font-size:2rem; font-weight:800; color:#111111; line-height:1.2; margin-bottom:16px; font-family:'Inter', sans-serif;">${doc.title}</h1>
                <h2 style="font-size:1.1rem; color:#2563EB; font-weight:600; margin-bottom:32px; text-transform:uppercase; letter-spacing:0.05em; font-family:'Inter', sans-serif;">${doc.subtitle}</h2>
                
                <h3 style="font-size:1.15rem; font-weight:700; margin:24px 0 12px 0; color:#111111; border-left:3px solid #2563EB; padding-left:10px; text-transform:uppercase; font-family:'Inter', sans-serif;">${page.section}</h3>
                <div style="font-size:0.925rem; line-height:1.6; margin-bottom:16px; color:#374151;">${page.content}</div>
                ${statsHtml}
                
                <div style="position:absolute; bottom:60px; left:50px; right:50px; border-top:1px solid #E5E7EB; padding-top:12px; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#888888;">
                    <span>Prepared by: ${doc.author}</span>
                    <span>Page ${idx + 1} of ${doc.pages.length}</span>
                </div>
            </div>
        `;
    });

    printWindow.document.write(`
        <html>
        <head>
            <title>${doc.title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
            <style>
                @media print {
                    body { margin: 0; padding: 0; background: #FFFFFF; }
                    .print-page { page-break-after: always; box-shadow: none !important; border: none !important; }
                }
                body { background: #E5E7EB; display: flex; flex-direction: column; align-items: center; padding: 20px; }
                .print-page { box-shadow: 0 4px 10px rgba(0,0,0,0.15); border: 1px solid #CCCCCC; margin-bottom: 20px; }
            </style>
        </head>
        <body>
            ${allPagesHtml}
            <script>
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Bind direct triggers on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        // Look for clicks on elements with data-pdf-id
        const trigger = e.target.closest('[data-pdf-id]');
        if (trigger) {
            e.preventDefault();
            const docId = trigger.getAttribute('data-pdf-id');
            openPdfViewer(docId);
        }
    });
});
