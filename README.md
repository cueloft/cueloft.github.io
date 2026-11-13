<p align="center">
  <img src="icons/icon-512.png" width="120" alt="Cueloft app icon">
</p>

<h1 align="center">Cueloft</h1>
<p align="center"><b>Movies · Shows · Games</b><br>A private, Apple TV–inspired tracker for everything you watch and play.</p>

---

## What it does

- **Up Next** – whatever you're in the middle of, with one-tap actions: *Watched E7*, *Played today*, *Mark watched*, plus watchlist rows for movies, shows and games.
- **Search as you type** – start typing a title and pick the right movie, show or game; the type and year fill in for you.
- **Library** – everything you've logged, with search, filters, sorting and an activity heatmap colored by type.
- **The Vault** – your all-time favorites, with a ranked top 3 per category, an all-time #1 and a full grid per shelf.
- **Collections** – movie series and universes in the right order (filled in from Wikidata), plus directors, studios and your own collections.
- **Pick for me** – can't decide? Choose *Headliner night* or *Time to unwind* and Cueloft picks one movie from your watchlist.
- **Posters** – one-tap suggestions from Wikipedia, or add your own from Photos; they're resized on the device before saving.
- **Backfill** – add titles you finished years ago, with a date or "don't remember", one at a time or as a list.
- **Light & dark mode**, installable to the iPhone Home Screen, works offline.

## Privacy

Your library and posters are stored **only on your device** (localStorage and IndexedDB).
Nothing is uploaded, and there are no accounts, trackers or API keys in this repo.
Use **Settings → Export backup** to keep a copy of your data.

Title suggestions use the public [Wikipedia search API](https://www.mediawiki.org/wiki/API:Search):
only the text you type is sent, and titles with short descriptions come back.
When you pick a title (or tap **Find poster**), Cueloft can offer that page's main image as a poster.
It's only saved if you tap **Use this poster**, and then it's stored on your device. No artwork is kept in this repo.
For collections, movie titles are looked up on [Wikidata](https://www.wikidata.org/) (directors, studios, series and release order). Only titles are sent; nothing about you.

## Install on iPhone

1. Open the site in **Safari**.
2. Tap **Share → Add to Home Screen**.
3. Open Cueloft from the Home Screen for the full-screen app.

## Tech

Plain HTML, CSS and JavaScript in a single `index.html`, with no build step and no dependencies.
A small service worker (`sw.js`) caches the app so it opens offline, and `manifest.webmanifest` provides the name and icon.

Movie, show and game names and descriptions come from Wikipedia and are available under CC BY-SA.
