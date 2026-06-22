/* portfolio-data.js - Single Source of Truth for Portfolio Content */

const DEFAULT_PORTFOLIO_DATA = {
    // --- Page 1: Home ---
    hero: {
        name: "Mayank Yadav",
        headline: "Building Systems That Scale Businesses",
        subheadline: "Growth | Operations | Revenue | Product | Founder’s Office",
        description: "Over the last 8+ years, I have worked across logistics marketplaces, technology businesses, healthcare and retail sectors, helping organizations launch new markets, build growth engines, create operational systems, improve product adoption and scale revenue.",
        cvUrl: "#",
        linkedinUrl: "https://linkedin.com/in/mayank-yadav",
        contactUrl: "contact.html",
        portfolioUrl: "launches.html"
    },
    
    metrics: [
        { id: "metric-1", value: "₹10 Cr+", label: "Revenue Scaled", desc: "Annualized revenue growth managed and scaled across marketplace operations." },
        { id: "metric-2", value: "1.5 Lakh+", label: "Qualified Leads Generated", desc: "High-intent leads sourced through multi-channel organic and performance operations." },
        { id: "metric-3", value: "400+", label: "People Enabled", desc: "Sales, operations, and channel partner teams hired, trained, and structured." },
        { id: "metric-4", value: "80%", label: "Lead Relevancy Achieved", desc: "Targeted customer profile matching with minimal leakage and high GTM efficiency." },
        { id: "metric-5", value: "₹1 Lakh+", label: "Monthly Digital Marketing Budget Managed", desc: "ROI-driven deployment across Google, Meta, and App acquisition channels." },
        { id: "metric-6", value: "3+", label: "Marketplace Businesses Built", desc: "End-to-end launch of transactional platforms, balancing supply and demand from scratch." }
    ],

    // --- Page 2: Launches ---
    launches: [
        {
            id: "launch-mumbai",
            title: "WheelsEye Mumbai Launch",
            subtitle: "New Market Expansion",
            problem: "WheelsEye needed to establish a strong presence in Mumbai's highly fragmented and competitive commercial vehicle logistics market. Initial trust was low, and regional marketplace dynamics differed from the North.",
            approach: "Designed and executed a local GTM playbook targeting key transport hubs in Mumbai. Implemented localized sales strategies, built a boots-on-the-ground team, and established direct relationships with fleet owners.",
            hiring: "Recruited 15+ local sales executives and operations coordinators fluent in Marathi and Gujarati, ensuring cultural alignment and deep local logistics network access.",
            training: "Created a 7-day intensive training module covering product features, objection handling, commercial vehicle tracking solutions, and local route dynamics.",
            teamSetup: "Segmented the team into geographic clusters (Navi Mumbai, Thane, JNPT) reporting to a central coordinator, enabling rapid feedback loops.",
            revenueImpact: "Scaled local active user base by 300% within 6 months, contributing to a monthly revenue run rate of ₹45 Lakhs from the Mumbai cluster alone.",
            evidenceDocId: "doc-launch-mumbai"
        },
        {
            id: "launch-bangalore",
            title: "WheelsEye Bangalore Launch",
            subtitle: "South India Hub Establishment",
            problem: "Expanding to South India required navigating different regulatory frameworks (toll, tax structures) and building a fleet supply chain in Bangalore from scratch.",
            approach: "Leveraged data-driven corridor analysis to identify the highest-volume transport routes out of Bangalore. Established micro-partnerships with local truck unions.",
            training: "Designed specialized modules on South-bound lane pricing, toll automation products, and regional transit rules.",
            ld: "Established a continuous learning framework, including weekly role-plays and competitor product analysis updates.",
            revenueImpact: "Achieved market share leadership on Bangalore-Chennai and Bangalore-Hyderabad corridors within 9 months, generating ₹60 Lakhs in monthly transaction value.",
            evidenceDocId: "doc-launch-bangalore"
        },
        {
            id: "launch-trolla-smb",
            title: "Trolla SMB Launch",
            subtitle: "Logistics Marketplace Setup",
            problem: "Trolla needed to launch its Small-to-Medium Business (SMB) division to tap into high-margin regional freight demand, which was heavily dominated by offline brokers.",
            approach: "Built a self-serve platform onboarding mechanism. Utilized field-marketing campaigns across industrial clusters to educate SMB owners on transparent pricing.",
            execution: "Deployed a zero-commission trial phase for the first 100 bookings, backed by a dedicated customer support desk to ensure a 99% fulfillment rate.",
            revenueImpact: "Scaled SMB division from ₹0 to ₹2 Cr MRR in 8 months, with a repeat booking rate of 74%.",
            evidenceDocId: "doc-trolla-smb"
        },
        {
            id: "launch-growth-guru",
            title: "Growth Guru Program",
            subtitle: "Commission-Based Channel Model",
            problem: "High customer acquisition costs (CAC) for direct field sales were limiting the pace of expansion into Tier 2 and Tier 3 cities.",
            approach: "Designed a decentralized agent network model (Growth Guru) enabling local auto-brokers, spare-parts dealers, and logistics agents to sell WheelsEye subscriptions.",
            operatingModel: "Tiered payout structure rewarding active renewals. Provided co-branded marketing collateral, instant commission payouts via UPI, and an agent-tracking app dashboard.",
            results: "Onboarded 500+ active agents across 4 states, accounting for 35% of all new client acquisitions and reducing overall CAC by 42%.",
            evidenceDocId: "doc-growth-guru"
        }
    ],

    // --- Page 3: Revenue & GTM ---
    revenue: {
        headline: "Building Revenue Engines",
        trolla: {
            title: "Trolla GTM and Scale",
            stats: "₹3 Cr → ₹10 Cr MRR",
            enterprise: "Onboarded 12 key enterprise accounts (including major cement and FMCG brands), locking in contractual monthly shipping volumes.",
            smb: "Scaled SMB spot market demand using targeted digital lead capture, resulting in 4,000+ transactional spot users.",
            cashFlow: "Optimized working capital by negotiating 15-day payment cycles with enterprises while offering early payment discounts to truck suppliers (factoring models).",
            mix: "Shifted revenue mix from 90% low-margin enterprise contracts to 60% Enterprise / 40% High-margin SMB spot, boosting overall gross margins by 8%.",
            evidenceDocId: "doc-trolla-revenue"
        },
        wheelseye: {
            title: "WheelsEye Lead Gen Engine",
            stats: "1.5 Lakh Leads | 80% Relevancy",
            leadGen: "Implemented a multi-channel lead engine across LinkedIn, IndiaMart, trade directories, and optimized landing pages.",
            gstIntel: "Built a GTM targeting model utilizing public GST registry data to identify businesses with high freight transport declarations.",
            scoring: "Implemented an automated lead scoring framework based on business size, transport frequency, and regional match.",
            evidenceDocId: "doc-wheelseye-revenue"
        },
        trucksup: {
            title: "TrucksUp SME GTM Strategy",
            stats: "Commercial Vehicle Marketplace Growth",
            smeGtm: "Launched a hyper-local GTM model focusing on agricultural and steel industrial corridors.",
            channel: "Established the 'Growth Guru' channel program in TrucksUp, recruiting village-level influencers to drive mobile app downloads and load postings.",
            evidenceDocId: "doc-trucksup-gtm"
        }
    },

    // --- Page 4: Product & Automation ---
    product: {
        headline: "Building Products That Improve Business Performance",
        projects: [
            {
                id: "prod-crm",
                title: "Custom CRM & Automation Systems",
                problem: "Sales representatives were losing 30% of high-intent leads due to manual tracking, slow assignment, and lack of historical follow-up contexts.",
                solution: "Designed and implemented an automated lead routing CRM. Connected website inquiries, WhatsApp chats, and third-party listings directly to field agents based on geography.",
                result: "Reduced lead contact turnaround time from 4 hours to under 5 minutes, boosting overall lead-to-conversion rates by 22%.",
                evidenceDocId: "doc-crm"
            },
            {
                id: "prod-lead-mgmt",
                title: "Lead Management and Scoring Engine",
                problem: "Sales team was spending 40% of their day calling unqualified or low-volume leads, leading to fatigue and poor conversion metrics.",
                solution: "Integrated a custom predictive lead scoring model that evaluates historical firmographic and behavioral data.",
                result: "Achieved 80% lead relevancy, allowing the sales force to focus on top-tier prospects and increasing transaction volumes.",
                evidenceDocId: "doc-lead-mgmt"
            },
            {
                id: "prod-fastag",
                title: "FASTag Inventory Automation",
                problem: "Manual stock allocation of FASTags to regional offices led to inventory shortages in high-demand zones and deadstock in others.",
                solution: "Built a centralized inventory automation tracker with automated threshold alerts and auto-dispatch triggers linked to local sales run rates.",
                result: "Achieved 0% stockouts, decreased delivery lead time by 3 days, and saved ₹15 Lakhs in locked working capital.",
                evidenceDocId: "doc-fastag"
            },
            {
                id: "prod-load-flow",
                title: "Load Creation Flow Optimization",
                problem: "Truck owners and shippers experienced high bounce rates during load creation due to a tedious, multi-step 15-input form.",
                solution: "Redesigned the flow into a 3-step intuitive UI with smart autofills, dynamic pricing estimations, and past route suggestions.",
                result: "Reduced average load posting time from 3.5 minutes to 45 seconds, improving product conversion by 34%.",
                evidenceDocId: "doc-load-flow"
            },
            {
                id: "prod-scoring",
                title: "Business Associate Scoring Model",
                problem: "Poor reliability and frequent cancellations from marketplace supply partners damaged Trolla's brand trust with enterprise shippers.",
                solution: "Created an algorithmic scoring system evaluating fulfillment rates, punctuality, ratings, and document validity.",
                result: "Automatic allocation of orders to associates with scores > 85%, resulting in a 95% overall marketplace fulfillment rate.",
                evidenceDocId: "doc-associate-scoring"
            },
            {
                id: "prod-recommendation",
                title: "Freight Recommendation Engines",
                problem: "Empty trucks return trips (backhauls) were causing massive revenue leaks for transport operators.",
                solution: "Designed a matching engine that matches returning empty trucks with available shipments in their destination route in real-time.",
                result: "Increased backhaul load matching by 28%, adding ₹18,000 avg monthly revenue per participating vehicle.",
                evidenceDocId: "doc-recommendation"
            },
            {
                id: "prod-dashboards",
                title: "Executive Dashboard Systems",
                problem: "Operations leaders spent hours consolidating spreadsheets to extract weekly business health reports.",
                solution: "Built real-time visualization dashboards aggregating MRR, active users, load fulfillment rates, and sales pipeline metrics.",
                result: "Saved 12 management hours weekly, shifting the organization toward proactive, data-informed operations.",
                evidenceDocId: "doc-dashboards"
            }
        ]
    },

    // --- Page 5: Market Research ---
    research: {
        headline: "Research Driven Decision Making",
        projects: [
            {
                id: "res-ftl",
                title: "FTL Logistics Industry Research",
                summary: "A comprehensive analysis of the Full Truck Load (FTL) logistics landscape in India, identifying key regulatory tailwinds and operational bottlenecks.",
                findings: [
                    "Identified 15% transit speed improvements post-GST implementation due to check-post removals.",
                    "Discovered critical fleet optimization gaps: 65% of small operators lacked return load assurance.",
                    "Estimated massive growth in cold-chain and pharmaceutical logistics corridors."
                ],
                evidenceDocId: "doc-ftl-res"
            },
            {
                id: "res-marketplace",
                title: "Marketplace Industry Analysis",
                summary: "Evaluating transactional dynamics, take rates, and customer lifetime value across logistics marketplaces in emerging markets.",
                findings: [
                    "Optimal marketplace take rate identified at 4.5% to balance liquidity and profitability.",
                    "High correlation discovered between driver retention and instant digital payment clearing.",
                    "Identified critical path for multi-modal logistics integrations."
                ],
                evidenceDocId: "doc-marketplace-res"
            },
            {
                id: "res-cv",
                title: "Commercial Vehicle Marketplace Research",
                summary: "Deep dive into commercial vehicle financing, second-hand marketplace demand, and digital service adoption among fleet owners.",
                findings: [
                    "Fleet owners are 3x more likely to adopt telematics if bundled with insurance discounts.",
                    "Documented structural hurdles in obtaining formal financing for Tier-3 fleet owners.",
                    "Identified secondary market pricing trends for major vehicle brands."
                ],
                evidenceDocId: "doc-cv-res"
            },
            {
                id: "res-competitor",
                title: "Competitor Landscape Analysis",
                summary: "Strategic teardown of top logistics platforms including Porter, BlackBuck, SuperProcure, and Loadsor.",
                findings: [
                    "Porter: Dominated intra-city LCV space with high density; key focus is driver density and low SLA response times.",
                    "BlackBuck: Scaled FTL and payments (FASTag/Fuel cards); major advantage in high-volume fuel pricing integrations.",
                    "SuperProcure & Loadsor: Focused on enterprise SaaS workflow automation; margin strengths in software licensing models."
                ],
                evidenceDocId: "doc-competitor-res"
            }
        ]
    },

    // --- Page 6: Demand Generation ---
    demand: {
        headline: "Building Demand Engines",
        linkedin: {
            title: "LinkedIn Executive Branding & Lead Capture",
            desc: "Designed and scaled direct customer outreach campaigns to target senior logistics directors, supply chain managers, and factory owners.",
            campaigns: [
                { name: "WheelsEye Outreach", results: "Connected with 2,500+ supply chain stakeholders, converting 120+ high-volume corporate accounts." },
                { name: "Trolla Founder Branding", results: "Scaled content views by 400k+ in 6 months, building market credibility for SMB offerings." },
                { name: "Alden Global Advisory GTM", results: "Generated outbound consulting leads targeting family offices and logistics operators." }
            ]
        },
        social: {
            title: "Social Media Campaign Management",
            desc: "Constructed targeted, community-oriented content pipelines focusing on regional truck fleet owners and transport brokers.",
            campaigns: [
                { name: "HealthyHomes campaigns", results: "Generated 10,000+ direct homeowner leads for localized home health solutions." },
                { name: "Khadi Ratlam Promotion", results: "Built digital awareness campaign scaling regional product inquiries by 45%." }
            ]
        },
        performance: {
            title: "Performance Marketing & App Acquisition",
            desc: "Managed digital marketing budgets exceeding ₹1 Lakh monthly, building low-CAC user acquisition funnels.",
            metrics: [
                { label: "Google Search Ads", value: "₹0.85 Cost Per Lead (CPL) achieved on high-volume commercial keywords." },
                { label: "Meta Lead Generation", value: "8,000+ monthly leads capture with 65% verification accuracy." },
                { label: "App Acquisition campaigns", value: "45,000+ app installs with a 30-day retention rate of 18%." }
            ]
        },
        seo: {
            title: "SEO, Content & Directory Dominance",
            desc: "Dominated organic search channels through directory visibility and content cluster optimization.",
            channels: [
                { name: "B2B Directory Listings (IndiaMart/TradeIndia)", details: "Secured Top-3 spots in regional freight keywords, driving 40+ inbound business inquiries daily." },
                { name: "SEO Content Engine", details: "Published 50+ optimized articles on route compliance, tax laws, and fuel management, bringing 1.2 Lakh organic views monthly." }
            ]
        }
    },

    // --- Page 7: Process Excellence ---
    process: {
        headline: "Operational Systems & Process Design",
        sections: [
            {
                id: "ops-sop",
                title: "Standard Operating Procedure (SOP) Design",
                problem: "Inconsistent onboarding processes for marketplace truck operators led to high cancellation rates and customer disputes.",
                solution: "Mapped out a 5-step digital onboarding SOP covering compliance verification, vehicle health screening, and mobile app training.",
                framework: "Verification -> Training -> Activation -> Trial Booking -> Quality Audit.",
                evidenceDocId: "doc-sop"
            },
            {
                id: "ops-kra",
                title: "Key Result Area (KRA) & Org Architecture",
                problem: "Unclear team roles caused operational overlap, slow resolving of driver issues, and low sales motivation.",
                solution: "Restructured the operations team, defining crisp KRAs around SLA response times, collection delays, and supply retention rates.",
                framework: "Metric-driven accountability sheets with daily automated tracker report cards.",
                evidenceDocId: "doc-kra"
            },
            {
                id: "ops-fraud",
                title: "Fraud Prevention Frameworks",
                problem: "Sophisticated booking manipulation schemes by local transport brokers cost the platform over ₹18 Lakhs in fuel voucher leakages.",
                solution: "Designed a real-time geo-fencing audit framework verifying GPS location of vehicles against load-dispatch timestamps.",
                framework: "Three-way verification (GPS ping + Toll transaction timestamp + E-Way Bill scan).",
                evidenceDocId: "doc-fraud"
            },
            {
                id: "ops-adoption",
                title: "App Adoption Frameworks",
                problem: "Drivers and fleet owners preferred offline coordination, leading to data-entry delays and offline payments.",
                solution: "Engineered a behavioral incentive framework, offering cashbacks on fuel cards if trip logs were fully updated in-app.",
                framework: "Gamified active status indicators with tiered benefits (Gold, Silver, Platinum driver levels).",
                evidenceDocId: "doc-adoption"
            }
        ]
    },

    // --- Page 8: Leadership ---
    leadership: {
        headline: "Building Teams That Scale",
        sections: {
            hiring: "Established a structured recruitment machine capable of sourcing, interviewing, and hiring 50+ sales representatives monthly. Utilized standardized role-specific scenario assessments.",
            training: "Designed dynamic onboarding academies. Created standard curriculum playbooks containing competitor defense scripts, technical product training modules, and route pricing strategies.",
            performance: "Implemented a transparent, tier-based commission calculator model that motivated representatives. Scaled high-performers into regional leadership roles.",
            structures: "Organized regional sales forces into agile pods (1 Pod Leader, 6 Field Executives, 1 Support Coordinator), boosting regional coordination speed.",
        },
        metrics: [
            { value: "400+ People", label: "Enabled & Trained", desc: "Across field sales, inside operations, customer success, and partner networks." },
            { value: "20+", label: "Zonal Managers Developed", desc: "Promoted from field executives to manage regional profit and loss metrics." },
            { value: "Multiple", label: "Regional Teams Built", desc: "Established and stabilized high-performing hubs in Mumbai, Bangalore, Pune, and Delhi-NCR." }
        ]
    },

    // --- Page 9: Evidence Vault ---
    vault: {
        headline: "Evidence Vault",
        folders: [
            { id: "vault-growth", name: "Growth" },
            { id: "vault-ops", name: "Operations" },
            { id: "vault-product", name: "Product" },
            { id: "vault-marketing", name: "Marketing" },
            { id: "vault-research", name: "Research" },
            { id: "vault-automation", name: "Automation" },
            { id: "vault-leadership", name: "Leadership" }
        ],
        documents: [
            // Growth
            { id: "doc-launch-mumbai", folder: "vault-growth", title: "Mumbai Expansion Playbook & P&L Analysis", desc: "Detailed timeline, recruitment schedule, and regional corridor P&L metrics showing WheelsEye's market penetration in Mumbai.", previewType: "brief" },
            { id: "doc-launch-bangalore", folder: "vault-growth", title: "Bangalore Launch GTM Strategy Report", desc: "Corridor volume analysis, fleet driver onboarding funnels, and commission models deployed in Bangalore.", previewType: "brief" },
            { id: "doc-trolla-smb", folder: "vault-growth", title: "Trolla SMB Market Penetration Brief", desc: "Case study documentation on scaling the SMB logistics marketplace from zero transactions to ₹2 Cr MRR.", previewType: "brief" },
            { id: "doc-growth-guru", folder: "vault-growth", title: "Growth Guru Program Guidelines", desc: "Agent onboarding protocols, referral commission structures, and digital tracking dashboard specifications.", previewType: "brief" },
            
            // Operations
            { id: "doc-sop", folder: "vault-ops", title: "Standard Operating Procedures (SOP) manual", desc: "Operational manual outlining step-by-step digital truck onboarding, compliance checks, and transaction auditing.", previewType: "brief" },
            { id: "doc-fraud", folder: "vault-ops", title: "Logistics Fraud & GPS Geofence Audit Framework", desc: "Operational blueprint for detecting fuel voucher anomalies and false GPS coordinate pings.", previewType: "brief" },
            { id: "doc-kra", folder: "vault-ops", title: "Operational Key Result Areas (KRAs) & Pod Structures", desc: "Excel-based organizational KPI framework and geographic pods communication hierarchy.", previewType: "brief" },
            
            // Product
            { id: "doc-crm", folder: "vault-product", title: "Custom CRM Lead Routing System Architecture", desc: "Functional design documentation outlining automated WhatsApp lead capture and executive distribution logic.", previewType: "brief" },
            { id: "doc-load-flow", folder: "vault-product", title: "Load Creation Flow Optimization Wireframes & Metrics", desc: "Before-and-after conversion funnel metrics and user flow designs for load bookings.", previewType: "brief" },
            { id: "doc-dashboards", folder: "vault-product", title: "Executive Operations Dashboard - Visual Mockups", desc: "Consolidated executive control layout tracking real-time delivery performance and active sales conversion metrics.", previewType: "brief" },
            
            // Marketing
            { id: "doc-wheelseye-revenue", folder: "vault-marketing", title: "WheelsEye Multi-channel Lead Generation Plan", desc: "Strategic blueprint details on organic directory setups, IndiaMart optimization, and outbound LinkedIn sequencing.", previewType: "brief" },
            { id: "doc-trolla-revenue", folder: "vault-marketing", title: "Trolla Spot Demand Lead Flow Map", desc: "Funnel layouts and CAC performance parameters across Meta and Google Search campaigns.", previewType: "brief" },
            
            // Research
            { id: "doc-ftl-res", folder: "vault-research", title: "Full Truck Load (FTL) Industry Whitepaper", desc: "Comprehensive market study detailing digital service adoption rates and route optimization gaps.", previewType: "brief" },
            { id: "doc-competitor-res", folder: "vault-research", title: "Competitive Landscape Matrix (Porter, BlackBuck)", desc: "Strategic analysis of margins, customer acquisition models, and value propositions of top logistics SaaS players.", previewType: "brief" },
            { id: "doc-marketplace-res", folder: "vault-research", title: "Transactional Marketplace Take-Rate Analysis", desc: "Mathematical evaluation of transaction pricing thresholds in commercial freight marketplaces.", previewType: "brief" },
            
            // Automation
            { id: "doc-lead-mgmt", folder: "vault-automation", title: "Predictive Lead Scoring Model Specifications", desc: "Data inputs, scoring weights, and system integration logic for the lead sorting engine.", previewType: "brief" },
            { id: "doc-fastag", folder: "vault-automation", title: "FASTag Automated Stock Replenishment Logic", desc: "Inventory thresholds, trigger formulas, and regional logistics automation code architecture.", previewType: "brief" },
            { id: "doc-associate-scoring", folder: "vault-automation", title: "Business Associate Algorithmic Quality Grading", desc: "Logic design for evaluating supply partners and auto-allocating client bookings.", previewType: "brief" },
            
            // Leadership
            { id: "doc-adoption", folder: "vault-leadership", title: "Field Force App Adoption Incentive Manual", desc: "Gamification guidelines, active status levels, and driver engagement incentive matrices.", previewType: "brief" },
            { id: "doc-trucksup-gtm", folder: "vault-leadership", title: "Outbound Agent Recruiting & Training Academy Manual", desc: "Curriculum materials, competency assessments, and regional management progression frameworks.", previewType: "brief" }
        ]
    },

    // --- Page 10: Contact ---
    contact: {
        email: "mayank.yadav@example.com",
        phone: "+91 98765 43210",
        linkedin: "linkedin.com/in/mayank-yadav",
        location: "Delhi-NCR, India",
        resumeUrl: "#"
    }
};

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
