# DevOps Portfolio App

A personal portfolio web application built with React and Vite to showcase a DevOps and Site Reliability Engineer profile. The site highlights professional summary, core skills, enterprise experience, and social links in a clean single-page layout.

## Features

- Hero section with profile image, role summary, and external links
- About section with dynamically calculated experience duration
- Skills section grouped by cloud, CI/CD, containers, observability, and security tooling
- Experience section for enterprise project highlights
- Footer with collaboration call-to-action and social links
- Production-ready Docker setup with multi-stage build and Nginx serving
- SPA-friendly Nginx configuration for client-side routing safety

## Tech Stack

- React 18
- Vite
- JavaScript (ES modules)
- CSS
- Docker
- Nginx

## Project Structure

```text
portfolio_reactvite/
|-- public/
|   |-- profile.jpg
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Projects.jsx
|   |   `-- Skills.jsx
|   |-- data/
|   |   `-- projects.js
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- main.jsx
|-- Dockerfile
|-- docker-compose.yml
|-- nginx.conf
|-- package.json
`-- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Run Locally

```bash
npm install
npm run dev
```

Open the app in your browser at the Vite development URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

## Run with Docker

### Build and Start with Docker Compose

```bash
docker compose up --build
```

The application will be available at `http://localhost:8080`.

### Build the Image Manually

```bash
docker build -t react-portfolio .
docker run -p 8080:80 react-portfolio
```

## Customizing the Portfolio

Update these files to personalize the portfolio:

- `src/components/Hero.jsx` for name, title, summary, and primary links
- `src/components/About.jsx` for the profile description and experience start date
- `src/components/Skills.jsx` for skills and capability groups
- `src/data/projects.js` for company and experience entries
- `src/components/Footer.jsx` for footer text and contact links
- `public/profile.jpg` for the profile image

## Deployment Notes

The included `Dockerfile` uses a multi-stage build:

1. Build the React application with Node.js
2. Serve the generated static files through Nginx

The `nginx.conf` file includes a `try_files` fallback so the app can safely serve single-page routes.

If you want to deploy this app into Kubernetes from this repository, review the manifests in `../../kube_configs/` first. They are generic Nginx examples and should be updated with the correct image, labels, namespace, and service settings for this portfolio app.

## Author

Chayan Samanta

- LinkedIn: https://in.linkedin.com/in/chayan-samanta-a01856100
- GitHub: https://github.com/chayan0104
