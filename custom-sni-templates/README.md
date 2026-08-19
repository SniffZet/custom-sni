# Custom SNI Templates

13 original decoy/placeholder sites for use behind Xray Reality SNI — when someone connects directly to the server's SNI domain instead of going through the proxy, one of these pages is served instead of anything revealing.

These are hand-built from scratch: no images, icons, text, code, or color palettes reused from `../sni-templates`. Only the general *category* of site matches (error page, cloud storage, converter, etc.) — everything else (branding, copy, layout, colors) is original.

Most templates are plain HTML/CSS/JS with no build step. Five (`06-streamloop`, `08-forgemods`, `11-dispatch`, `12-cartway`, `13-roundtable`) are built with React + Vite for stylistic variety — their `assets/` folder is a production build, so they can be dropped in as-is just like the others.

## Templates

| Folder | Concept | Stack |
|---|---|---|
| `01-outage` | Generic 503 / service-unavailable page with a live retry countdown and request ID | HTML/CSS/JS |
| `02-cloudbox` | "Stashly" — cloud storage sign-in screen with a feature/benefits panel | HTML/CSS/JS |
| `03-swiftconvert` | "Swiftly" — file format converter with drag-and-drop and a fake conversion progress bar | HTML/CSS/JS |
| `04-fetchlink` | "Fetchlink" — paste-a-link media downloader gated behind an invite-code screen | HTML/CSS/JS |
| `05-pulsemeter` | "Pulsemeter" — internet speed test with an animated gauge | HTML/CSS/JS |
| `06-streamloop` | "StreamLoop" — video hosting grid behind a tile-select verification gate | React + Vite (built) |
| `07-chuckledeck` | "Chuckledeck" — meme feed with infinite scroll and upvotes | HTML/CSS/JS |
| `08-forgemods` | "ForgeMods" — game mod manager with a library view and a mod browser | React + Vite (built) |
| `09-pixelarcade` | "Pixelarcade" — retro browser-games portal with category filters | HTML/CSS/JS |
| `10-clipforge` | "Clipforge" — online video studio with a trim timeline and export progress | HTML/CSS/JS |
| `11-dispatch` | "Dispatch" — newspaper-style news portal with sections and a featured layout | React + Vite (built) |
| `12-cartway` | "Cartway" — online store with category filters and a working cart drawer | React + Vite (built) |
| `13-roundtable` | "Roundtable" — community forum with threads, replies and a composer | React + Vite (built) |

## Usage

### Standalone

Copy a template folder's contents to your webroot, e.g.:

```bash
mkdir -p /var/www/html
cp -r custom-sni-templates/01-outage/* /var/www/html/
```

Each folder is self-contained (`index.html` + `assets/`) — no external dependencies, nothing to build, nothing phones home.

### Via selfsteal.sh

These 13 templates are also wired into [`selfsteal.sh`](../selfsteal.sh)'s template picker (`selfsteal template`), listed as ids `12`-`24` alongside the original 11 templates from `../sni-templates`. Picking one of those ids (or letting `r`/random selection land on one) downloads straight from this repo — no manual copying needed.
