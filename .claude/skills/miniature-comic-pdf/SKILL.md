---
name: miniature-comic-pdf
description: Bundle the whole SVG preview album of "De Miniatuur" (the cover plus every A4 album page in comic/svg/pages) into one PDF file, one album page per A4 sheet, using headless Edge (no Python or Node needed). Use this whenever the user wants the comic, the album or the preview "as a PDF", "in one file", to print, to read on a tablet, to send or share with someone, or to "wrap" or "bundle" the comic, even if they don't say "PDF" explicitly. For rebuilding or fixing the panels themselves, use miniature-comic-build.
---

# The Album as one PDF

The SVG preview of De Miniatuur (`comic/`) is exported as separate files: a cover and the A4 album pages in `comic/svg/pages/` (`page-00-cover.svg`, `page-01.svg`, ...). This skill puts those pages, in reading order, into one PDF, so the author can print the album, read it on a tablet or send it to someone.

The PDF is a picture of the current preview, not a new version of the comic: it changes nothing in the bible or in the panels.

## Steps

1. **Make sure the pages are current.** The PDF takes whatever is in `comic/svg/pages/`. If panels, colours or the renderer changed since the last export (check `git status` for changes in `comic/panels.js` or `comic/renderer.js` that are newer than the SVG files), re-export first. The script does this for you with `-Export`, which needs the preview server: start `comic/serve.ps1 -Port 8768` in the background if it is not running.

2. **Make the PDF** from the project root (script execution is disabled on this machine, so call PowerShell with Bypass):
   ```bash
   powershell -NoProfile -ExecutionPolicy Bypass -File .claude/skills/miniature-comic-pdf/scripts/make-pdf.ps1
   ```
   Options: `-Export` (re-export the SVGs first), `-Out <path>` (default `comic/pdf/de-miniatuur.pdf`), `-Port` (default 8768).
   The script inlines every page SVG in one HTML document (inline, so the comic font of the pages loads), sizes each page to exactly one A4 sheet without margins, and prints it to PDF with headless Edge.

3. **Check the result.** The script reports the number of pages in the PDF next to the number of album pages it found; they must be equal (today 12: the cover and 11 pages). A mismatch means a page broke over two sheets or was dropped: say so, don't hand over the file. The PDF itself cannot be rendered on this machine (no poppler), so for a visual check take a screenshot of the print document the script leaves at `%TEMP%\miniatuur-print.html` with `.claude/skills/miniature-comic-build/scripts/shot.ps1 -Url file:///... -W 800 -H 2300`: each page must be complete and in the comic font.

4. **Hand it over.** Send the PDF with SendUserFile (display "attach") and give its path, size and page count. Mention whether the pages were re-exported first, and that proposal panels show their dashed orange frame in the PDF just as in the preview.

## Notes
- The PDF is generated output, like the SVGs. Do not commit it unless the user asks; `comic/pdf/` can be left out of commits.
- Fonts: the pages use the Comic Neue web font from Google Fonts. Without an internet connection Edge falls back to Comic Sans MS, which looks close but not identical; mention it if the check shows the fallback.
- Size: about 12 MB for 12 pages, because every panel is vector art with many shapes. That is normal.
