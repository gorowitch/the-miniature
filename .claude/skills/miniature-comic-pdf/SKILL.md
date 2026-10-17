---
name: miniature-comic-pdf
description: Regenerate the PDF of the whole De Miniatuur album in one step - re-export the SVG pages from the current panels and bundle the cover plus every A4 album page into one PDF (comic/flemish/pdf/de-miniatuur.pdf, or comic/english/pdf/the-miniature.pdf with -Edition english), one page per A4 sheet, using headless Edge (no Python or Node needed). Use this whenever the user wants the comic, the album or the preview "as a PDF", wants to regenerate, refresh, rebuild or update the PDF after changes to panels, colours or the bible, wants to print it, read it on a tablet, send or share it, or to "wrap" or "bundle" the comic, even if they don't say "PDF" explicitly. For rebuilding or fixing the panels themselves, use miniature-comic-build.
---

# The Album as one PDF

The SVG preview of De Miniatuur (`comic/flemish/`) is exported as separate files: a cover and the A4 album pages in `comic/flemish/svg/pages/` (`page-00-cover.svg`, `page-01.svg`, ...). This skill turns the current state of the comic into one PDF, so the author can print the album, read it on a tablet or send it to someone.

The PDF is a picture of the current preview, not a new version of the comic: it changes nothing in the bible or in the panels.

## Regenerate (the normal case)

Run from the project root (script execution is disabled on this machine, so call PowerShell with Bypass):
```bash
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/skills/miniature-comic-pdf/scripts/make-pdf.ps1 -Export
```
This does everything in one go:
1. starts the preview server (`comic/flemish/serve.ps1`) if none is running on the port, and stops it again afterwards;
2. re-exports all SVG pages and panels from the current `comic/flemish/panels.js` and `comic/flemish/renderer.js` (`comic/flemish/export-svg.ps1`);
3. inlines every page SVG in one HTML document (inline, so the comic font of the pages loads), sizes each page to exactly one A4 sheet without margins, and prints it to PDF with headless Edge.

Always use `-Export` unless you know the SVG pages are current: a PDF made from stale SVGs silently shows an old version of the comic (for example a colour change that is in the panels but not yet in the SVGs).

Options: `-Edition flemish|english` (default `flemish`; the English edition is `comic/english/`, its PDF `comic/english/pdf/the-miniature.pdf`, port 8769), `-Out <path>` (default `comic/flemish/pdf/de-miniatuur.pdf`), `-Port` (default 8768 or 8769 per edition). Without `-Export` the script only bundles the SVG pages that are already there, which is quicker.

The re-export rewrites the files in `comic/flemish/svg/`. If `git status` shows changed SVGs afterwards, the committed SVGs were behind the panels; mention it to the author (they may want those committed too).

## Check the result
The script reports the number of pages in the PDF next to the number of album pages it found; they must be equal (today 12: the cover and 11 pages). A mismatch means a page broke over two sheets or was dropped: say so, don't hand over the file.

The PDF itself cannot be rendered on this machine (no poppler). For a visual check, take a screenshot of the print document the script leaves at `%TEMP%\miniatuur-print.html` with `.claude/skills/miniature-comic-build/scripts/shot.ps1 -Url file:///... -W 800 -H 2300`: each page must be complete and in the comic font.

## Hand it over
Send the PDF with SendUserFile (display "attach") and give its path, size and page count. Mention whether the pages were re-exported, and that proposal panels show their dashed orange frame in the PDF just as in the preview.

## Notes
- The PDF is generated output, like the SVGs. Do not commit it unless the user asks; `comic/flemish/pdf/` stays out of commits.
- Fonts: the pages use the Comic Neue web font from Google Fonts. Without an internet connection Edge falls back to Comic Sans MS, which looks close but not identical; mention it if the check shows the fallback.
- Size: about 12 MB for 12 pages, because every panel is vector art with many shapes. That is normal.
