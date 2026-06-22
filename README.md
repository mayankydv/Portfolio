# Mayank Yadav - Business Builder Portfolio

A premium, data-driven multi-page personal website positioning Mayank Yadav as a Growth, Operations, Revenue, Product, and Founder’s Office leader. Styled after high-end executive layouts (like Stripe, Ramp, Linear, and McKinsey).

## 🚀 How to Launch the Site Live via GitHub Pages

GitHub Pages is the easiest, most reliable way to host static websites for free. Follow these steps to make your portfolio live in less than 5 minutes:

### Step 1: Create a GitHub Repository
1. Log into your account on [GitHub](https://github.com).
2. Click **New** (or "+" in the top-right corner) to create a new repository.
3. Set the **Repository name** (e.g., `portfolio` or `mayank-yadav`).
4. Set the visibility to **Public** (required for free GitHub Pages hosting).
5. Leave "Add a README", ".gitignore", and "Choose a license" **unchecked** (we already have our files).
6. Click **Create repository**.

### Step 2: Initialize Git Locally and Push Code
Open terminal/PowerShell in your project directory (`c:\Users\Mayank\Desktop\Portfolio Online`) and run the following commands:

```bash
# Initialize a local Git repository
git init

# Add all files to staging
git add .

# Create the initial commit
git commit -m "Initial commit of executive portfolio site"

# Rename default branch to main
git branch -M main

# Link your local repository to your remote GitHub repository
# (Replace USERNAME and REPO-NAME with your GitHub credentials)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in Settings
1. Go to your repository page on GitHub.
2. Click on the **Settings** tab (the gear icon on the top horizontal menu).
3. In the left-hand sidebar, under the "Code and automation" section, click on **Pages**.
4. Under **Build and deployment**:
   - Set **Source** to `Deploy from a branch`.
   - Under **Branch**, select `main` from the dropdown and set the folder to `/ (root)`.
5. Click **Save**.
6. Wait 1–2 minutes. Refresh the page, and you will see a banner at the top showing your live URL:
   `Your site is live at https://USERNAME.github.io/REPO-NAME/`

---

## 🔗 Share Direct Deep-Links (Founder & GTM Pitching)

Since this is a multi-page setup, you can share highly targeted direct links to specific pages rather than making recruiters or VCs search through your homepage.

*   **Whole GTM & Revenue Engine Page:**
    `https://USERNAME.github.io/REPO-NAME/revenue.html`
*   **Specific Business Launch Case Study (e.g., Growth Guru):**
    `https://USERNAME.github.io/REPO-NAME/launches.html#launch-growth-guru`
*   **Direct Document Proof (Opens in Virtual PDF Viewer immediately on load):**
    `https://USERNAME.github.io/REPO-NAME/proof.html?doc=doc-launch-mumbai`
*   **Book a Briefing directly:**
    `https://USERNAME.github.io/REPO-NAME/contact.html`

---

## ✏️ Real-Time CMS: How to Update Content
To support real-time copy changes without requiring database setups:
1. Open the Admin Center by clicking **CMS Live Admin** in the footer or going to `/admin.html`.
2. Edit any headline, subheadline, metric card, or launch case study. The changes reflect instantly on the preview panel.
3. Click **Export Config File**. This downloads an updated `portfolio-data.js` file.
4. Replace the old file in your local directory at `assets/js/portfolio-data.js` with the downloaded file.
5. Push the update to GitHub:
   ```bash
   git add assets/js/portfolio-data.js
   git commit -m "Update portfolio copy via CMS"
   git push origin main
   ```
   GitHub Pages will update your live site automatically in seconds!
