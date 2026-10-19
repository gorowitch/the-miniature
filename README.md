# The Miniature / De Miniatuur

A short comic album based on the article "De Miniatuur" by Sven Gorts (2012), a modern farce in one act written as a play, in which the pieces of a chess game have their say. The album exists in two editions: the Flemish original and an English translation.

## The albums

| Edition                                                         | PDF                                   |
|-----------------------------------------------------------------|---------------------------------------|
| Flemish: *De Miniatuur* (Een hedendaagse klucht in één bedrijf) | `comic/flemish/pdf/de-miniatuur.pdf`  |
| English: *The Miniature* (A Modern Farce in One Act)            | `comic/english/pdf/the-miniature.pdf` |

Each album is 14 pages: front cover, 11 story pages, a closing page with the game and the colophon, and the back cover. The drawings were generated with Claude (Anthropic) as SVG; both editions use exactly the same drawings, only the texts differ.

## Repository layout

- `the-miniature-cartoon-bible.md`: the bible of the comic, in English, with the original Flemish play text, the characters, the board, every panel, the production rules and the full history of decisions.
- `the-miniature-cartoon-bible-en.md`: the English edition, a supplement to the bible with the English play text and all text in the images.
- `comic/flemish/` and `comic/english/`: one folder per edition, each containing:
  - `renderer.js`, `panels.js`, `index.html`: the code that draws the album (identical drawings in both editions);
  - `svg/`: the exported pages and panels;
  - `pdf/`: the album as a PDF;
  - `facebook/` (Flemish only): one image per page, for posting.
- `comic/*/…-the-making-of.md`: statistics on the effort behind each edition.
- `.claude/skills/`: the working instructions and scripts used to build and check the comic.

## Rebuilding a PDF

Requires Windows with PowerShell and Microsoft Edge (no Python or Node).

    powershell -ExecutionPolicy Bypass -File .claude/skills/miniature-comic-pdf/scripts/make-pdf.ps1 -Edition flemish -Export
    powershell -ExecutionPolicy Bypass -File .claude/skills/miniature-comic-pdf/scripts/make-pdf.ps1 -Edition english -Export

`-Export` first re-exports the SVG pages from the current panel data; a local preview server is started automatically (port 8768 for Flemish, 8769 for English).

## Releases

- `the-miniature-flemish-v1.0.0`: the finished Flemish edition.
- `the-miniature-english-v1.0.0`: the finished English edition.

© 2026 Sven Gorts. All rights reserved.
