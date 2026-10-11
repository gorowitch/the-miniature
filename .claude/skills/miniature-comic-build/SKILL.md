---
name: miniature-comic-build
description: Build, audit and improve the whole SVG preview comic of "De Miniatuur" (comic/ folder - renderer.js, panels.js, index.html album, exported SVG pages and panels) as one album. Syncs the panel data with the approved bible, checks every balloon against the play, reviews every page against the visual checklist, fixes composition defects across the album, improves the renderer, and exports the SVG files to disk. Use this whenever the user wants the full comic or album (re)generated, refreshed after bible changes, checked or polished as a whole, exported, or when a renderer improvement must be rolled out over all panels, even if they only say "update the comic", "regenerate the svg" or "make the comic better". For feedback on one panel or one scene with the author, use miniature-preview-feedback instead.
---

# Building and Improving the SVG Comic

The SVG comic is a **preview**: the final images are made by Copilot or ChatGPT from the bible (`the-miniature-cartoon-bible.md`). The preview exists so the author can see and judge the whole story at album size. Two things follow:
- **The bible is the source.** The comic follows the bible, never the other way round. Approved panels are rendered as the bible describes them; proposals are marked as proposals (dashed orange border) until the author approves them.
- **Text is sacred.** Every balloon is copied from the bible and checked against the play by script. A wrong letter is a defect, like a wrong speaker.

Read `references/renderer-guide.md` (panel data, cameras, pitfalls) before changing data or code, and use `references/visual-checklist.md` for every review.

## Tools
- Server: `comic/serve.ps1 -Port 8768` (run in the background; check first whether one is already running).
- Screenshots: `scripts/shot.ps1` (headless Edge; works with a minimised window and always loads the current files). Read the PNG to inspect it. Script execution is disabled on this machine, so run the `.ps1` files as `powershell -NoProfile -ExecutionPolicy Bypass -File <script> <args>`, for example `... -File .claude/skills/miniature-comic-build/scripts/shot.ps1 -Out <scratchpad>\s.png -From 9a -N 8 -H 1650`.
- Text check: `bash .claude/skills/miniature-comic-build/scripts/check-panel-texts.sh` from the project root.
- Export: `powershell -NoProfile -ExecutionPolicy Bypass -File comic/export-svg.ps1`.
- No Python or Node on this machine: use PowerShell, Git Bash and headless Edge.

## Workflow

### 1. Sync with the bible
Compare `comic/panels.js` with bible Section 18 (panel blocks) and Section 20.3 (manifests):
- Every approved panel in the bible has a panel object with `status: "approved"`, in the same order, with the same speaker, balloon text, characters, expressions, gaze and camera intent.
- Panels the bible lists as proposals have `status: "proposal"`.
- Panels that were split, merged, approved or changed in the bible since the last build are updated.
Copy balloon text from the bible by script or by careful copy, never retype it. Then run `check-panel-texts.sh`; it must report 0 not found and no mojibake.

### 2. Render and review the whole album
Shoot the panels in batches with `review.html` (about 8-12 per screenshot) and check each against the visual checklist. Then shoot the album itself (`index.html`, page by page) to check the page rhythm: no half-empty pages, wide panels where they help, the cover. Keep a short defect list: panel id, failed check, intended fix.

### 3. Fix
- **Panel defects** (camera, gesture, balloon placement): fix in `panels.js`. For approved panels, a fix may change how the preview shows the bible's description, never what the description says. If the bible's description itself seems wrong or impossible, do not "fix" it in the preview: add it to the report as a question for the author (Appendix B).
- **Renderer defects** that affect many panels (a sprite, balloon placement, camera defaults): fix in `renderer.js`, then re-shoot `test.html` and a sample of different panel types to catch regressions.
- Re-shoot every changed panel and check it again. Repeat until the defect list is empty or only contains items that need the author.

### 4. Export
Run `export-svg.ps1`. It writes `comic/svg/pages/` (cover and A4 pages) and `comic/svg/panels/` (one file per panel, numbered in reading order). Check that the count matches the panel count plus the pages, that every file is valid XML (`[xml]` in PowerShell), and open one page file directly in headless Edge to confirm it renders on its own.

### 5. Record and report
- Changes to the bible (new proposals, rules learned from the author) go through the `miniature-bible-change` skill (snapshot, additive edit, verification script, log). Renderer and layout fixes need no bible change unless they change what is shown.
- Report to the user: what changed, how many panels and pages were exported and where, the text check result, the defects you could not fix, and the questions for the author. Do not commit unless the user asks.

## Judgement
- A proposal is allowed to be imperfect but must never be presented as approved.
- Prefer fewer, larger, readable characters over showing everything small; but every visible occupied square still shows its piece.
- When the author has given feedback on a panel before (bible Section 15, Appendix A), that feedback wins over your taste.
