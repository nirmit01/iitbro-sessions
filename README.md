# IIT Bro Sessions page (prototype)

Static prototype of the new Sessions page: course list + session/video page.
No build step. Plain HTML, CSS and a little JS.

## Run locally
    python3 -m http.server 8000     # then open http://localhost:8000/index.html
    # or: npx serve .

## Share a preview with the team (pick one)
- **Netlify Drop:** drag this folder onto https://app.netlify.com/drop, you get a link in seconds.
- **Vercel:** `npx vercel` in this folder (preview URL), `npx vercel --prod` to go live.
- **GitHub Pages:** repo Settings > Pages > Deploy from branch `main` / root.
Each gives a link that works on phones, so the team can review on real devices.

## Before launch checklist
- [ ] Replace the video placeholder in `session.html` with the real embed
- [ ] Replace the demo sign-in in `app.js` with real Google sign-in (the page already keys off `body.guest`)
- [ ] Fill every `[placeholder]` and fix the `href="#"` links (about 12 on home, 20 on session)
- [ ] Set real titles, descriptions, canonical URL and OG image per session page
- [ ] Add a transcript under each video (this is what Google indexes)
- [ ] Connect Ask BRO to the real backend
- [ ] Add analytics events: visit, sign-up click, sign-up done, session started, quiz started, WhatsApp join
