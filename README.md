# Vishal Kumar Rao — Portfolio

Personal site for **Vishal Kumar Rao**, a Java backend developer (Spring Boot, Microservices, REST APIs, Cloud) with 3+ years of production experience. Positioned as a freelancer/consulting-style site — services, real project case studies, process and a project-inquiry contact form — rather than a plain resume page. Static site, no build step — plain HTML5, CSS3 and vanilla JavaScript on top of a small design-token system.

## Sections

- **Home** — client-focused hero, trust indicators
- **Trust bar** — core technologies + real stats (years experience, users served, production apps, API performance improvement)
- **Services** — what I build (backend, API, database, cloud, modernization, web apps)
- **Problem → Solution** — common client needs mapped to what I actually do
- **Work** — real project case studies (GitHub repos + resume projects), each with an expandable "Problem / Approach / Features" breakdown
- **Why Work With Me** — engineering approach and working style
- **How I Build** — the layered backend pattern used across projects
- **Process** — the 5-step Discovery → Planning → Development → Testing → Launch flow
- **About** — bio, real credentials (NIT Bhopal MCA, NIMCET rank, DSA problems solved), technology I use, resume download
- **Experience** — full career and education timeline
- **Contact** — project-inquiry form (EmailJS-backed), social and direct contact links

## Tech Stack

- **HTML5 / CSS3 / JavaScript** — no framework, no bundler
- **Bootstrap 5** — grid and layout utilities
- **AOS** — scroll-reveal animations (respects `prefers-reduced-motion`)
- **vanilla-tilt.js** — hero photo tilt effect
- **typed.js** — hero role typing effect
- **Font Awesome** — icons
- **EmailJS** — contact form email delivery
- **SweetAlert** — form submit feedback

## How to Run Locally

No build tools or dependencies to install — this is a static site, so it just needs to be served over HTTP (opening `index.html` directly as a `file://` URL will break some of the JS, so use a local server).

```bash
git clone https://github.com/Vishal112151/My-Portfolio.git
cd My-Portfolio
python -m http.server 8734
```

Then open **http://localhost:8734** in your browser.

No Python available? Any static file server works the same way, for example:

```bash
npx serve .
```

## Project Structure

```
index.html              Single-page site — all sections
css/
  tokens.css             Design tokens (colors, spacing, type, shadows)
  style-main.css          Layout, nav, hero, services, process, footer, buttons
  skill.css                Technology badge components (used inside About)
  timeline.css              Experience/education timeline
  slider-project.css          Work case-study cards
  contact-form.css              Contact / project-inquiry form
  preloder.css                    Preloader
js/
  nav.js                  Scroll-aware navbar, mobile slide-out panel, floating CTA
  contact-form-validation.js   Form validation + EmailJS send
document/                Resume and NIMCET rank card (PDF)
image/                   Photos, logos, icons
```

## Contact

- Email: [vishalbth99@gmail.com](mailto:vishalbth99@gmail.com)
- LinkedIn: [linkedin.com/in/vishalbth99](https://www.linkedin.com/in/vishalbth99/)
- GitHub: [github.com/Vishal112151](https://github.com/Vishal112151)
