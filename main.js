/* main.js - Core Portfolio Application Shell, Theme Manager, Search & Content Hydration Engine */

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('mayank_portfolio_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleIcons(savedTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('mayank_portfolio_theme', newTheme);
            updateThemeToggleIcons(newTheme);
        });
    });
}

function updateThemeToggleIcons(theme) {
    const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.06 1.06c.39.39.39 1.03 0 1.41s-1.03.39-1.41 0l-1.06-1.06zm-12.37 12.37c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.06 1.06c.39.39.39 1.03 0 1.41s-1.03.39-1.41 0l-1.06-1.06z"/></svg>`;
    const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.7.7-6.4 4-6.4 7.8 0 4.4 3.6 8 8 8 3.8 0 7.1-2.7 7.8-6.4.1-.6.7-.9 1.3-.9s1 .4.9 1.3c-.9 4.7-5 8.2-9.8 8.2z"/></svg>`;
    
    const btns = document.querySelectorAll('.theme-toggle-btn');
    btns.forEach(btn => {
        btn.innerHTML = theme === 'dark' ? sunSvg : moonSvg;
    });
}

// Navigation & Sticky Headers
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = 'var(--shadow-md)';
            header.style.backgroundColor = document.documentElement.getAttribute('data-theme') === 'dark' 
                ? 'rgba(15, 18, 29, 0.95)' 
                : 'rgba(250, 250, 250, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = document.documentElement.getAttribute('data-theme') === 'dark' 
                ? 'rgba(15, 18, 29, 0.8)' 
                : 'rgba(250, 250, 250, 0.8)';
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    if (!toggleBtn || !overlay) return;

    toggleBtn.addEventListener('click', () => {
        overlay.classList.toggle('open');
        const isOpen = overlay.classList.contains('open');
        toggleBtn.innerHTML = isOpen 
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
    });

    // Close mobile menu on clicking links
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('open');
            toggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
        });
    });
}

// Global Client-Side Search
function initSearch() {
    const searchTriggers = document.querySelectorAll('.search-trigger');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchClose = document.getElementById('search-close');
    
    if (!searchModal) return;

    const dataIndex = generateSearchIndex(portfolioData);

    const openSearch = () => {
        searchModal.classList.add('open');
        setTimeout(() => searchInput.focus(), 150);
    };

    const closeSearch = () => {
        searchModal.classList.remove('open');
        searchInput.value = '';
        searchResults.innerHTML = '<div class="search-empty">Type to search for metrics, projects, documents, or skills...</div>';
    };

    searchTriggers.forEach(trigger => trigger.addEventListener('click', openSearch));
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    // Close on click outside container
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
    });

    // Keyboard Shortcuts (Esc to close, / to open)
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('open')) {
            closeSearch();
        }
        if (e.key === '/' && !searchModal.classList.contains('open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            openSearch();
        }
    });

    // Filter Logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.innerHTML = '<div class="search-empty">Type at least 2 characters to search...</div>';
            return;
        }

        const filtered = dataIndex.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<div class="search-empty">No results found matching your query.</div>';
            return;
        }

        let resultsHtml = '';
        filtered.forEach(item => {
            resultsHtml += `
                <a href="${item.url}" class="search-result-item" onclick="document.getElementById('search-modal').classList.remove('open')">
                    <span class="search-result-title">${item.title}</span>
                    <span class="search-result-excerpt">${item.description}</span>
                    <span class="search-result-category">${item.category}</span>
                </a>
            `;
        });
        searchResults.innerHTML = resultsHtml;
    });
}

// Deep Linking Routing Router
function handleDeepLinking() {
    // 1. Check query parameters for pre-opened PDFs (e.g. proof.html?doc=doc-sop)
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('doc');
    if (docId && typeof openPdfViewer === 'function') {
        // Wait briefly for resources to stabilize
        setTimeout(() => {
            openPdfViewer(docId);
        }, 300);
    }

    // 2. Smooth scroll to hash tags on other pages
    if (window.location.hash) {
        const hash = window.location.hash;
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Highlight item briefly
                target.style.outline = '2px solid var(--accent)';
                setTimeout(() => target.style.outline = 'none', 2000);
            }
        }, 500);
    }
}

// Content Hydrator - Dynamic client overrides from localStorage CMS
function hydrateContent() {
    if (!portfolioData) return;

    // Hydrate Hero Copy
    const heroName = document.querySelector('[data-cms="hero-name"]');
    const heroHeadline = document.querySelector('[data-cms="hero-headline"]');
    const heroSubheadline = document.querySelector('[data-cms="hero-subheadline"]');
    const heroDescription = document.querySelector('[data-cms="hero-description"]');
    
    if (heroName) heroName.innerText = portfolioData.hero.name;
    if (heroHeadline) heroHeadline.innerText = portfolioData.hero.headline;
    if (heroSubheadline) heroSubheadline.innerText = portfolioData.hero.subheadline;
    if (heroDescription) heroDescription.innerText = portfolioData.hero.description;

    // Hydrate Metrics
    if (portfolioData.metrics) {
        portfolioData.metrics.forEach((metric, index) => {
            const valEl = document.querySelector(`[data-cms="metric-val-${index}"]`);
            const lblEl = document.querySelector(`[data-cms="metric-lbl-${index}"]`);
            const descEl = document.querySelector(`[data-cms="metric-desc-${index}"]`);

            if (valEl) valEl.innerText = metric.value;
            if (lblEl) lblEl.innerText = metric.label;
            if (descEl) descEl.innerText = metric.desc;
        });
    }

    // Dynamic case studies, projects and research hydrations will run dynamically 
    // on their specific page triggers (inside page-specific javascript scripts).
}

// Scroll Reveal Animations
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => observer.observe(el));
}

// Navigation active state tracker
function updateActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Master Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Run core modules
    initTheme();
    initHeaderScroll();
    initMobileMenu();
    initSearch();
    hydrateContent();
    initScrollReveal();
    updateActiveNavLink();
    handleDeepLinking();
});
