---
name: miniature-preview-feedback
description: Run the feedback loop with the author on previews of "De Miniatuur" - one panel, one scene or a set of proposals at a time - render the preview, self-check it, show it, take the author's feedback, apply it to the panel data and to the bible as canon, and show the improved version until the author approves. Use this whenever the author wants to see, review, judge, correct, approve or walk through panels or scenes ("show me scene 7", "panel 9c: the king should look angrier", "next scene", "approve scene 8", "walk me through the proposals"), or gives visual feedback on a preview or SVG, even without the word "preview". For rebuilding, auditing or exporting the whole album, use miniature-comic-build.
---

# Preview Feedback Loop

The author judges the comic panel by panel. Each round turns the author's reaction into a better preview **and** into canon in the bible, because the bible is what Copilot and ChatGPT will eventually generate from. A remark that only changes the SVG is lost the moment the real images are made.

Read `../miniature-comic-build/references/renderer-guide.md` before changing panel data, and check every render against `../miniature-comic-build/references/visual-checklist.md`. Scripts live in `../miniature-comic-build/scripts/`; run the `.ps1` files with `powershell -NoProfile -ExecutionPolicy Bypass -File` (script execution is disabled on this machine).

## The loop

### 1. Pick the unit
One scene at a time works best (the author walks through scenes in order); a single panel when the author names one. "Next scene" means the first scene whose panels are not yet approved (`status: "proposal"` in `comic/panels.js`, or the Script Coverage Map in bible Section 22.E).

### 2. Render and self-check before showing
Start the server if needed (`comic/serve.ps1 -Port 8768`, in the background), shoot the panels with `shot.ps1 -From <first id> -N <count>` and inspect the PNG against the visual checklist. Fix what you can (camera, gesture, balloon placement) and re-shoot. **Never show the author a panel you have not looked at yourself**; an earlier round showed a broken panel ("something went terribly wrong") because it was not checked first.

### 3. Show
Show the panels so the author can judge them at a readable size. Use the SendUserFile tool with the screenshot, or the browser pane at `http://localhost:8768/review.html?from=<id>&n=<count>`. With each panel give, in a few lines:
- the panel id and its status (approved, or proposal);
- the balloon text and the speaker;
- the staging choices you made that are not in the play (camera, expressions, gestures), so the author can accept or reject them.
Ask one clear question, for example "Scene 9: approve, or what should change?". When there are several independent decisions, ask them one at a time with AskUserQuestion; the author prefers that to a long list.

### 4. Classify the feedback
For each remark decide what it is:
- **Panel-specific** ("zoom in on the king", "Regina should look at the King"): change that panel.
- **A general rule** ("pieces that talk look at each other", "knights face the centre files"): it applies to every panel. Apply it to all affected panels and record it as canon.
- **Approval**: the panel or scene is approved as shown.
- **A question or a gap in the source**: do not invent an answer. Flag it in Appendix B and ask.
If a remark is ambiguous, ask before changing anything.

### 5. Apply in both places
- **Preview:** change `comic/panels.js` (or `renderer.js` for a general visual rule), re-shoot, and run the visual checklist again.
- **Bible:** use the `miniature-bible-change` skill (snapshot, additive edit, verification, log in Section 15). Specifically:
  - panel-specific feedback updates that panel's block in Section 18 and its manifest in Section 20.3 (camera, characters, gaze, expression);
  - a general rule goes to the relevant canon section and the Common Prompt Block if the image generator must know it, and is logged as an author decision;
  - **approval of a proposal**: set `status: "approved"` in `panels.js`, rewrite the proposal block as a full Section 18 panel block in the style of Scenes 1 to 5, and write its manifest with the `miniature-panel-manifests` skill;
  - write descriptions for the image generator in words it understands: describe, never name, the centre hump ("boebel" only inside dialogue), and no invented details.
- Run `check-panel-texts.sh` and the bible's `verify-bible.sh` after the changes.

### 6. Show again
Show the improved panels, and state in one line per remark what you changed. Repeat from step 4 until the author approves, then move to the next unit.

## Ground rules from the author
- Don't invent anything that is not in the script; what is shown must be in the script or approved staging.
- The original Flemish text always wins, letter for letter, including rough words.
- Feedback is canon: record every remark in the bible, even small ones, so nothing depends on memory.
- The clean comic style, not the hand-drawn one.
- Commit only when the author asks; when a scene is approved, offer to commit.

## When the author wants the final images
The preview is not the deliverable. When a scene is approved, the bible panel blocks and manifests for that scene are what the author pastes into Copilot or ChatGPT. Offer to show the exact prompt text for one panel (Common Prompt Block + panel block, in the format of bible Section 21, Stage 2).
