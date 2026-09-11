# Treasury Resource Center Guide

Desktop/tablet conversational demo for Treasury Resource Center topics, focused on **Truist One View**.

Protected by a demo password gate. Uses **Claude Haiku** for short, guided replies.

## Demo access

Default password: set in `.env.local` as `DEMO_ACCESS_PASSWORD` (see `.env.example`).

## Setup

```bash
cp .env.example .env.local
# add ANTHROPIC_API_KEY and DEMO_ACCESS_PASSWORD
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cost controls

- Model defaults to Claude Haiku
- Reply length capped via `ANTHROPIC_MAX_TOKENS`
- Set a spend limit in the Anthropic console (recommended: $20)

## Notes

- API key stays server-side (`/api/chat`)
- Password is checked server-side (`/api/auth`)
- Optimized for desktop and tablet
