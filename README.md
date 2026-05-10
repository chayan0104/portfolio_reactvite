# DevOps Portfolio App

A modern developer portfolio built with React and Vite for showcasing DevOps and Site Reliability Engineering experience.

## Overview

This project is a single-page portfolio application that highlights professional summary, technical skills, enterprise experience, and contact links. It includes a development workflow with Vite and a production-ready Docker deployment powered by Nginx.

## Features

- Responsive portfolio layout with Hero, About, Skills, Projects, and Footer sections
- Reusable React components with clean structure
- Dockerized build and runtime setup for production deployment
- Nginx configuration optimized for SPA routing
- Easy customization via component and data files

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
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── profile.jpg
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── About.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Projects.jsx
    │   └── Skills.jsx
    └── data/
        └── projects.js
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm 10 or later
- Docker (optional, for containerized deployment)

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the app in your browser at the URL shown in the terminal, typically `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Production assets are generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Docker Deployment

### Start with Docker Compose

```bash
docker compose up --build
```

Then open `http://localhost:8080`.

### Build and Run the Image

```bash
docker build -t devops-portfolio .
docker run -p 8080:80 devops-portfolio
```

## Customize Your Portfolio

Edit these files to personalize the content:

- `src/components/Hero.jsx` – name, title, summary, hero buttons, and main links
- `src/components/About.jsx` – profile story, experience text, and personal details
- `src/components/Skills.jsx` – skills, tools, and categories
- `src/data/projects.js` – project and enterprise experience entries
- `src/components/Footer.jsx` – footer messaging, calls-to-action, and contact links
- `public/profile.jpg` – profile image asset

## Notes on Production Setup

The included `Dockerfile` performs a multi-stage build:

1. Use Node.js and Vite to build the React app
2. Copy the output to an Nginx image for static hosting

The `nginx.conf` file uses `try_files $uri /index.html` so single-page application routes resolve correctly.

## Author

Chayan Samanta

- LinkedIn: https://in.linkedin.com/in/chayan-samanta-a01856100
- GitHub: https://github.com/chayan0104
