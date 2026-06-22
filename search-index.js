/* search-index.js - Dynamically builds search index from current portfolio data */

function generateSearchIndex(data) {
    const index = [];

    // 1. Home / Metrics
    index.push({
        title: "Overview & Impact Metrics",
        category: "Overview",
        description: "Overview of Mayank Yadav's scale: ₹10 Cr+ revenue scaled, 1.5 Lakh+ leads generated, 400+ people enabled.",
        url: "index.html#impact"
    });

    // 2. Business Launches
    if (data.launches) {
        data.launches.forEach(item => {
            index.push({
                title: item.title,
                category: "Business Launches",
                description: `${item.subtitle}. Problem: ${item.problem.substring(0, 100)}...`,
                url: `launches.html#${item.id}`
            });
        });
    }

    // 3. Revenue & GTM
    if (data.revenue) {
        if (data.revenue.trolla) {
            index.push({
                title: data.revenue.trolla.title,
                category: "Revenue & GTM",
                description: `Scaling Trolla: ${data.revenue.trolla.stats}. Enterprise: ${data.revenue.trolla.enterprise.substring(0, 80)}...`,
                url: "revenue.html#trolla"
            });
        }
        if (data.revenue.wheelseye) {
            index.push({
                title: data.revenue.wheelseye.title,
                category: "Revenue & GTM",
                description: `WheelsEye Leads Engine: ${data.revenue.wheelseye.stats}. Lead Gen: ${data.revenue.wheelseye.leadGen.substring(0, 80)}...`,
                url: "revenue.html#wheelseye"
            });
        }
        if (data.revenue.trucksup) {
            index.push({
                title: data.revenue.trucksup.title,
                category: "Revenue & GTM",
                description: `TrucksUp SME GTM: Commercial Vehicle Marketplace. ${data.revenue.trucksup.smeGtm.substring(0, 80)}...`,
                url: "revenue.html#trucksup"
            });
        }
    }

    // 4. Product & Automation
    if (data.product && data.product.projects) {
        data.product.projects.forEach(proj => {
            index.push({
                title: proj.title,
                category: "Product & Automation",
                description: `Problem: ${proj.problem.substring(0, 80)}... Solution: ${proj.solution.substring(0, 80)}...`,
                url: `product.html#${proj.id}`
            });
        });
    }

    // 5. Market Research
    if (data.research && data.research.projects) {
        data.research.projects.forEach(res => {
            index.push({
                title: res.title,
                category: "Market Research",
                description: res.summary,
                url: `research.html#${res.id}`
            });
        });
    }

    // 6. Demand Generation
    if (data.demand) {
        index.push({
            title: data.demand.linkedin.title,
            category: "Demand Generation",
            description: data.demand.linkedin.desc,
            url: "demand.html#linkedin"
        });
        index.push({
            title: data.demand.performance.title,
            category: "Demand Generation",
            description: data.demand.performance.desc,
            url: "demand.html#performance"
        });
        index.push({
            title: data.demand.seo.title,
            category: "Demand Generation",
            description: data.demand.seo.desc,
            url: "demand.html#seo"
        });
    }

    // 7. Process Excellence
    if (data.process && data.process.sections) {
        data.process.sections.forEach(sec => {
            index.push({
                title: sec.title,
                category: "Process Excellence",
                description: `Problem: ${sec.problem.substring(0, 80)}... Framework: ${sec.framework}`,
                url: `process.html#${sec.id}`
            });
        });
    }

    // 8. Leadership
    if (data.leadership) {
        index.push({
            title: "Team Scaling & Organization Building",
            category: "Leadership",
            description: "Hiring machinery, Onboarding Academy, Pod architectures, and team scaling metrics (400+ enabled).",
            url: "leadership.html"
        });
    }

    // 9. Proof Library
    if (data.vault && data.vault.documents) {
        data.vault.documents.forEach(doc => {
            index.push({
                title: doc.title,
                category: "Evidence Vault",
                description: doc.desc,
                url: `proof.html?doc=${doc.id}`
            });
        });
    }

    // 10. Contact
    index.push({
        title: "Contact Mayank Yadav",
        category: "Contact",
        description: "Get in touch for Growth, Operations, GTM, Product, and Founder's office leadership. Schedule on Calendly.",
        url: "contact.html"
    });

    return index;
}
