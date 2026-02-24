# Jason Lam – Portfolio (Next.js)

This repository contains my personal developer portfolio for **Lam Leung Yiu, Jason**, a final‑year **Bachelor of Computer Science (Year 4)** student at **The Chinese University of Hong Kong (CUHK)**.
The site showcases my projects, internships, skills, and resume using a clean, responsive layout built with Next.js and Tailwind CSS.

Key projects highlighted:

- **AI‑Powered Exam System** – Full‑stack platform using Node.js/Express and Generative AI (Gemini 2.5) with a production‑grade RAG pipeline (Azure Document AI, spaCy, Supabase pg\_vector).
- **ASL Educational Survival Game** – 2D Unity (C#) game with a real‑time Python/MediaPipe computer‑vision pipeline over UDP sockets.
- **Timetable Course Planner** – Full‑stack web app for university course scheduling with a REST API, JWT auth, and comment system.
- **Split Bill Mobile App** – React Native + Node.js app for splitting group expenses.

---

## Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript / JavaScript
- **Styling**: Tailwind CSS
- **Markdown rendering**: `react-markdown` with custom typography
- **Deployment**: Optimized for platforms like Vercel

This project is customized from a public template inspired by Brittany Chiang’s v5 portfolio and the `nextjs-portfolio-site` starter by dBCooper2.

---

## Project structure & content

Most of the resume content is stored as Markdown/JSON so it can be updated without touching React components.

- **Summary / header**
  - `src/content/Summary.md` – name and short summary.
  - `src/content/Abstract.md` – longer introduction and overview.
  - `src/components/Summary.jsx` – headshot image, social links, and resume link (`/public/documents/LamLeungYiu_resume.pdf`).

- **Resume sections**
  - `src/content/Education.md` – CUHK Bachelor of Computer Science (Year 4), cGPA/tGPA.
  - `src/content/Experience.md` – work experience:
    - Software Engineering Intern – InnoSpire Technology Limited.
    - Software Engineering Intern – HeyBen.
    - Executive Officer I / ADS / RP3 (Intern) – EMSD CCep Team.
  - `src/content/Footer.md` – footer attribution text.
  - `src/content/Certificates.md` – currently **not rendered** on the site (the Certificates section has been removed from `src/app/page.tsx` and the sidebar buttons).

- **Skills & projects**
  - `src/content/tags.json` – skills/technologies (Python, Java, C++, C, C#, R, SAS, JavaScript, HTML, CSS, Node.js, React Native, Unity, OpenCV/MediaPipe, Google Gemini, Azure Document AI, Supabase, Socket Programming, Git, REST APIs, etc.).
  - `src/content/projects.json` – project cards (title, description, skills, links), rendered via `src/components/Projects.jsx`.

- **Pages & layout**
  - `src/app/page.tsx` – main landing page; wires Abstract, Skills, Education, Projects, Experience, and Footer.
  - `src/app/head.tsx` – document `<title>`, favicon, and the left‑side resume navigation buttons.
  - `src/app/contact/page.tsx` – contact page with phone, email, LinkedIn, GitHub, and languages.
  - `src/app/layout.tsx` – global layout and metadata.

- **Markdown rendering**
  - `src/components/MarkdownContent.tsx` – shared renderer for the Markdown sections using `react-markdown` and custom heading/paragraph styles.
  - `src/utils/markdown.ts` – helper for loading Markdown files from `src/content`.

---

## Running the project locally

```bash
# install dependencies
npm install

# start dev server
npm run dev

# then open http://localhost:3000
```

---

## Content management

All resume and project data is stored in Markdown and JSON files under `src/content/`, including my summary, abstract, education, work experience, skills, and projects.
Static assets such as my resume PDF (`public/documents/LamLeungYiu_resume.pdf`) and headshot (`public/images/headshot.jpg`) are served from the `public` directory.
This structure keeps the React components small and lets me evolve my academic record, experience, and projects without changing the application logic.
