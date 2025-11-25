# BaseStyle Lab 🧪

> Transform your images into Base-style neon punk masterpieces.

BaseStyle Lab is a client-side Farcaster Mini App that allows users to apply custom neon and punk aesthetic filters to their images directly in the browser.

![BaseStyle Lab Banner](/public/splash.png)

## Features

-   **Client-Side Processing**: All image manipulation happens locally using the Canvas API. No server uploads required.
-   **Neon & Punk Filters**: Custom-tuned filters with teal (#0ea5a1) and pink (#ff4d6d) gradients, glitch effects, and "Base" styling.
-   **Offline Capable**: Fully functional PWA with offline support.
-   **Gallery**: Save your creations locally using IndexedDB.
-   **Farcaster Ready**: Optimized for Farcaster Frames and Mini Apps.

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Storage**: IndexedDB (via `idb`)
-   **Deployment**: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open (https://nftlab-4e6yxh87n-peruks-projects.vercel.app/) with your browser to see the result.

## Deployment

This project is ready to be deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

MIT
