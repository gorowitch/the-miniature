---
name: miniature-bible-change
description: Apply any change to the-miniature-cartoon-bible.md (the canonical bible for the Flemish comic "De Miniatuur") safely and additively - new canon, author feedback, new rules or sections, corrections, open questions - with a snapshot before and a verification after. Use this whenever the user asks to update, extend, improve, correct or restructure the cartoon bible, records feedback on a panel or scene that should become canon, says "add this to the bible", "record this", "make this a rule for the whole cartoon", or pastes a specification change request for the bible, even if they don't say "bible" explicitly but are clearly giving canon for De Miniatuur.
---

# Changing the Miniature Cartoon Bible

`the-miniature-cartoon-bible.md` (repository root) is the single source of truth for the comic. Conversations are only the editor. Earlier AI tools regenerated the file and silently lost canon (the play text, decision meanings, running gags), which is why the author insists on this discipline:

**new version = previous version + new content + explicitly logged corrections.** Never a summary or rewrite of what was there.

## Workflow

### 1. Read the whole bible first
Read the entire file in chunks before changing anything. Changes often touch several places (a rule in Section 13 also belongs in Section 14 Forbidden, Section 16 Validation Checklist, the Section 18 Common Prompt Block, and the Section 15 log). You can only place cross-references correctly if you know what is already there, and you must not duplicate a rule that already exists.

Key landmarks (check the actual headings, they may have grown):
- Section 1: the original play, **verbatim** - never touch it.
- Sections 2-12: extracted facts, world, board, materials, visual canon, dossiers, relationships, board-as-character, tone, game, board states.
- Section 13 Production Rules, 14 Forbidden Elements, 15 Canon Decision Log, 16 Validation Checklist.
- Section 17 Scene Catalog, 18 Panel Script (Ready for Image Generation), 19 Dialogue Attribution, 20 Panel Manifests, 21 Workflow, 22 Completeness Checklist + Script Coverage Map.
- Appendix A superseded canon, B open questions, C version history.

### 2. Snapshot
Copy the bible to the session scratchpad (or a temp directory) before editing, e.g. `bible-before.md`. The verification compares against it.

### 3. Classify the change
- **New canon or rule** (author feedback such as "knights look towards the centre files"): add it where it belongs, plus cross-references, plus a Section 15 Corrections row naming the source ("author feedback on panel 4b").
- **Correction of existing canon** (e.g. board colours change): change the line, move the old wording to Appendix A, log it in Section 15. A decision-code row that is superseded keeps its text with "(Superseded in X.Y: ...)".
- **New section**: insert it in a logical place without renumbering existing sections (append after the last section, before the appendices). Renumbering breaks every cross-reference and every diff.
- **Something the author has not decided**: do not decide it. Add it to Appendix B as an open question, and mark resolved questions with strikethrough plus "Resolved in X.Y: ..." instead of deleting them.

### 4. Apply the change additively
- Use small, targeted edits; never rewrite whole sections.
- Keep the author's wording when they give it. Where you phrase new canon yourself, keep it concrete and checkable (what must or must not be visible), because the image generator (Copilot or ChatGPT) generates the images from this text.
- Dialogue anywhere in the bible (balloons, manifests, examples) is copied from Section 1; the only allowed normalisation is collapsing runs of spaces. Quote marks (straight and curly), spelling and punctuation stay exactly as in the play.
- Do not invent visual content that is not in the script or decided by the author (Script Fidelity Rule, Section 13).
- Shell gotcha: Flemish text contains curly quotes and apostrophes (’ “ ” ‘). Inline heredocs and `sed` replacements can break on them; for larger insertions write the text to a file with the Write tool and insert it from there.

### 5. Version and log
- Check `git log -1 -- the-miniature-cartoon-bible.md` and `git status`. If the current version number is already committed, bump the minor version (7.1 -> 7.2): update the "Version" line, add a line to the Canon Integrity Statement, add an Appendix C row. If the current version is still uncommitted, extend its existing rows instead of bumping again.
- Add Section 15 Corrections rows for every new rule or correction, with the reason.

### 6. Verify
Run the bundled script against the snapshot:

```bash
bash .claude/skills/miniature-bible-change/scripts/verify-bible.sh <snapshot> the-miniature-cartoon-bible.md
```

It checks that the play is byte-identical, lists every removed or changed line (each must be an intended, logged correction: typically only the Version line and the version-history row), checks every balloon text against the play, and counts the Script Coverage Map rows (45). A "MISS" for a balloon means the text is not verbatim - fix it, don't explain it away.

### 7. Report
Tell the author, briefly and in plain language:
- what was added or changed, and where (section numbers);
- the verification results (play unchanged, which lines changed, balloon check);
- new or still-open questions in Appendix B that need their decision;
- that nothing is committed yet. Commit only when the author asks; commit messages end with the attribution line the session specifies.

## Why this matters
The author diffs every version in git and has been burned by silent loss of canon. A change that looks small but drops a line, paraphrases a balloon, or quietly decides an open question destroys trust in the file. When in doubt, add rather than replace, log rather than assume, and ask rather than decide.
