# Thamer Mecharnia - Academic Portfolio

Welcome to my academic portfolio and research blog! 🎓

This is my personal academic website showcasing my research, publications, projects, and insights in:
- **Semantic Web & Knowledge Graphs** 🌐
- **Artificial Intelligence & Symbolic AI** 🤖
- **Building Industry & Asbestos Detection** 🏗️
- **Blockchain & Traceability** ⛓️

---

## 🚀 Quick Links

- **[About Me](about.md)** - Learn about my research interests and background
- **[Publications](publications.md)** - Explore my papers with live citation counts
- **[Projects](projects.md)** - See what I've been working on
- **[Blog](blog.md)** - Research insights and technical articles
- **[CV](cv.md)** - My academic curriculum vitae

---

## ✨ Highlights

### 🔬 Recent Publications
- **CODE-ACCORD** (2025) - A corpus for automatic compliance checking
- **Drug Traceability System** (2024) - Semantic blockchain-based approach
- **Smart Building Digital Twins** (2023) - Modular knowledge integration

### 💼 Key Projects
- **ACCORD** - Automated compliance checks for construction/renovation/demolition
- **ORIGAMI** - Online tool for asbestos identification in buildings
- **TIMO** - 3D adventure game
- **Smart In My City** - 3D serious game

---

## 🛠️ Site Setup & Customization

This site is built with **[al-folio](AL_FOLIO_README.md)**, a Jekyll theme for academics. Here are helpful guides:

### 📋 Essential Documentation
- **[Quick Start](QUICKSTART.md)** - Get started in 5 minutes
- **[Installation & Deployment](INSTALL.md)** - Deploy to GitHub Pages
- **[Customization Guide](CUSTOMIZE.md)** - Personalize your site
- **[Troubleshooting](TROUBLESHOOTING.md)** - Fix common issues

### 💡 Tips for Updating

#### Adding Publications
1. Edit `_bibliography/papers.bib` with your BibTeX entries
2. Citations auto-update **every Mon/Wed/Fri** from Google Scholar
3. Supported BibTeX fields: `pdf`, `code`, `doi`, `slides`, `video`, `bibtex_show`, etc.

#### Adding Blog Posts
1. Create a file: `_posts/YYYY-MM-DD-title.md`
2. Add frontmatter: `layout: post`, `title`, `date`, `categories`
3. Write in Markdown, supports **math**, **code**, **images**, **diagrams**

#### Adding Projects
1. Create a file: `_projects/project-name.md`
2. Add project image to `assets/img/project_preview/`
3. Set `img:`, `description:`, `importance:` in frontmatter

#### Managing Coauthors
1. Auto-generated from `papers.bib` **every Mon/Wed/Fri**
2. Fill in `_data/coauthors.yml` with colleague URLs
3. Your coauthors' names become clickable links on publications page

#### Publication Venues
1. Auto-generated from `papers.bib` **every Mon/Wed/Fri**
2. Edit `_data/venues.yml` to add conference URLs
3. All venues display with **blue badges** by default
4. Customize colors with hex codes (e.g., `#FF5733`)

### 🔄 Automated Workflows

Your site includes **3 automated update workflows** running every **Monday, Wednesday, Friday at midnight UTC**:

1. **Citations** - Fetches live citation counts from your Google Scholar profile
2. **Coauthors** - Extracts coauthors from papers.bib (you fill in URLs)
3. **Venues** - Extracts conferences/journals from papers.bib (you fill in URLs)

All changes auto-commit to your repository! No manual updates needed.

### 📱 Social Media

Add your social profiles to `_data/socials.yml`:
```yaml
linkedin_username: your-username
github_username: your-username
twitter_username: your-handle
scholar_userid: YOUR_GOOGLE_SCHOLAR_ID
```

---

## 🎨 Customization

### Color Themes
Change the theme color in `_sass/_themes.scss`:
```scss
--global-theme-color: #9cbf45;  // Change to your preferred color
```

### Profile Picture
Replace `assets/img/prof_pic.jpg` with your photo

### Dark/Light Mode
The site automatically detects your system preference and includes a toggle in the top-right corner

---

## 📊 Features

✅ **Live Citation Counts** - Auto-updated from Google Scholar  
✅ **Dark Mode Support** - Automatic system preference detection  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Math & Code** - Full LaTeX and syntax highlighting support  
✅ **SEO Optimized** - Improves discoverability  
✅ **Open Graph** - Rich social media previews  
✅ **RSS Feed** - Subscribe to your blog at `/feed.xml`  
✅ **Related Posts** - Automatic suggestions for readers  
✅ **Projects Grid** - Responsive showcase of your work  

---

## 🔧 Local Development

### Using Docker (Recommended)
```bash
docker compose up
# Visit http://localhost:8080
```

### Using Ruby/Jekyll
```bash
bundle install
bundle exec jekyll serve --port 4000
# Visit http://localhost:4000
```

---

## 📚 File Structure

```
.
├── _bibliography/          # BibTeX files for publications
├── _data/                  # YAML data (socials, coauthors, venues, cv, etc.)
├── _pages/                 # Static pages (about, cv, publications, etc.)
├── _posts/                 # Blog posts (YYYY-MM-DD-title.md)
├── _projects/              # Project showcase
├── assets/img/
│   ├── prof_pic.jpg       # Your profile picture
│   └── project_preview/   # Project thumbnail images
├── _config.yml            # Main configuration
├── .github/workflows/     # GitHub Actions (auto-update citations, etc.)
└── bin/                   # Utility scripts
```

---

## 🚀 Deployment

Your site auto-deploys to GitHub Pages when you push changes:
1. Push to your repository
2. GitHub Actions builds and deploys automatically
3. Visit `https://yourusername.github.io`

---

## 📖 More Resources

- [al-folio Original Documentation](AL_FOLIO_README.md)
- [Markdown Cheatsheet](https://www.markdownguide.org/)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://pages.github.com/)

---

## 📝 License

This site uses the [al-folio](https://github.com/alshedivat/al-folio) theme, available under the MIT License.

---

**Last Updated:** February 2026  
**Maintained with ❤️ by Thamer Mecharnia**
