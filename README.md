<p align="center">
  <img src="icons/icon-512.png" width="120" alt="Cueloft app icon">
</p>

<h1 align="center">Cueloft</h1>
<p align="center"><b>Movies · Shows · Games</b><br>A private, Apple TV–inspired tracker for everything you watch and play.</p>

---

## What it does

- **Up Next** – whatever you're in the middle of, with one-tap actions: *Watched E7*, *+1 hr played*, *Mark watched*.
- **Search as you type** – start typing a title and pick the right movie, show or game; the type and year fill in for you.
- **Library** – everything you've logged, with search, filters and an activity heatmap colored by type.
- **The Vault** – your all-time favorites, with a ranked top 3 per category and an all-time #1.
- **Posters** – add your own from Photos; they're resized on the device before saving.
- **Backfill** – add titles you finished years ago, with a date or "don't remember", one at a time or as a list.
- **Light & dark mode**, installable to the iPhone Home Screen, works offline.

## Privacy

Your library and posters are stored **only on your device** (localStorage and IndexedDB).
Nothing is uploaded, and there are no accounts, trackers or API keys in this repo.
Use **Settings → Export backup** to keep a copy of your data.

Title suggestions use the public [Wikipedia search API](https://www.mediawiki.org/wiki/API:Search):
only the text you type is sent, and only titles and short descriptions come back. No images are fetched.

## Install on iPhone

1. Open the site in **Safari**.
2. Tap **Share → Add to Home Screen**.
3. Open Cueloft from the Home Screen for the full-screen app.

## Tech

Plain HTML, CSS and JavaScript in a single `index.html`, with no build step and no dependencies.
A small service worker (`sw.js`) caches the app so it opens offline, and `manifest.webmanifest` provides the name and icon.

Movie, show and game names and descriptions come from Wikipedia and are available under CC BY-SA.
