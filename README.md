# Sheryn Mae Abril — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS. Dark mode, an optional AI chatbot (Groq), and a project showcase.

## Edit your content
All the text on the site lives in one file: `src/data/info.js`. Edit your name, bio, skills, education, experience, projects, and contact info there — no need to touch the components.

## Run locally
\`\`\`
npm install
npm run dev
\`\`\`

## Enable the chatbot (optional)
1. Get a free API key at https://console.groq.com/keys
2. Copy `.env.example` to `.env`
3. Paste your key as `VITE_GROQ_API_KEY=...`

Without a key, the chat widget still opens but tells visitors it isn't set up yet.

## Deploy to Vercel
1. Push this project to a new GitHub repo (see steps below).
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, and import the repo.
3. Vercel auto-detects Vite — leave the defaults (build command `npm run build`, output directory `dist`).
4. If you're using the chatbot, add `VITE_GROQ_API_KEY` under **Environment Variables** before deploying.
5. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.

### Pushing to GitHub first
\`\`\`
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
\`\`\`
