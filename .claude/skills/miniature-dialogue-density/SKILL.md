---
name: miniature-dialogue-density
description: Check and fix dialogue density and visual composition for the Flemish comic "De Miniatuur" (the-miniature-cartoon-bible.md) - measure how much text each speech balloon holds, flag crowded panels, propose verbatim split points at natural boundaries, fill the manifest density fields (14 to 21), update the density review table, and review generated images against the visual-composition checklist. Use this whenever balloons are too big, a panel is "all text", a long speech needs splitting, the user asks whether dialogue fits, wants a density or composition check, gives feedback like "the balloon covers the King" or "too much text in this panel", or reviews a page generated with Copilot or ChatGPT for layout - even if they don't say "density".
---

# Dialogue Density and Visual Composition for De Miniatuur

Generated panels were sometimes dominated by one enormous speech balloon, because long Flemish passages were forced into a small area. The bible's answer (Section 23) rests on one principle:

**The story determines how many panels are needed. The space in a panel never determines how much of the story is shown.**

So this skill never shortens, rewords, reorders or drops dialogue. It changes panels: splits them, widens them, recomposes them, or adds reaction panels.

Priority order when goals conflict (Section 23.0): complete story and exact dialogue; correct speaker attribution; readable lettering; visual continuity; composition and artistic quality; fewest panels. Chess positions and canon are hard requirements, never traded away.

## What to read first
In the bible: Section 23 (all of it), Section 20 (manifest template, fields 14 to 21, worked example 5b), Section 19 (attribution: the speaker owns the balloon), Section 1 (the play), and the panel blocks (Section 18) or manifests for the scenes in question. Appendix B item 12 says whether the output size and font are decided yet.

Changes to the bible follow the `miniature-bible-change` skill: snapshot first, additive edits, log in Section 15, run its `verify-bible.sh` at the end.

## Mode 1: Density review of panels (text in the bible)

1. **Measure.** Run the report:
   ```bash
   bash .claude/skills/miniature-dialogue-density/scripts/density-report.sh the-miniature-cartoon-bible.md [max_words]
   ```
   It lists every balloon (panel script and manifests) with word and character counts, a verdict against the rule of thumb (default 30 words; use the measured value once Section 23.F has one), and split candidates for long balloons: after sentence ends and clause breaks, and before conjunctions (en, maar, want, omdat, ...), with the word count of each part.

2. **Judge the split candidates by meaning.** The script only sees punctuation and words. A good split:
   - ends a complete thought (a sentence, a clause, an address such as "Alfil, gene zever.");
   - follows a dramatic beat (a new idea, a change of addressee, an order after a complaint);
   - leaves both parts readable on their own and keeps the speaker obvious;
   - never cuts inside a quotation ("Dieje van den overkant", ‘gene slappen kak’) and never makes a fragment look like an answer to someone else.
   Reject false positives: in "zijn ze uitgeteld alvorens ze nog maar aan de strijd...", "maar" means "even", not "but", so splitting before it breaks the sentence.

3. **Choose the remedy**, in this order of preference:
   - two balloons for the same speaker in the same panel, in reading order, both tails to the speaker (when the panel has room and the pause is short);
   - a sequential dialogue panel: the speech continues in a new panel, with a variation in camera distance or angle, positions and continuity kept;
   - a reaction panel between the parts, when the listener's response belongs to the scene;
   - a wider or taller panel format.
   Never: smaller text, a narrower balloon, or a shortened line.

4. **Write it down.** For each panel reviewed, fill manifest fields 14 to 21 (length, segmentation, visual priority, lettering space, balloon-area estimate, layout strategy, overflow action, continuity) and update the density review table (Section 23.H). Proposed new splits of approved panels are proposals: mark them as such and let the author decide; do not rewrite approved Section 18 panel blocks on your own.

5. **Verify** with `verify-bible.sh`: the play unchanged, every balloon text still verbatim, and check yourself that the parts of every split speech reassemble into the original text in order.

## Mode 2: Composition review of a generated image

When the author shares a generated page or panel (or a path to one), view it and check it against Section 23.G and the panel's manifest:
- Does the panel show one clear visual event or dramatic beat?
- Are the relevant characters visible and expressive; is the speaker immediately identifiable; do listeners react (closed mouths unless stated)?
- Do the balloons take roughly 25 to 30% of the area in total, sit in negative space, and leave faces, gestures, crowns, Alfil's mitre and relevant board details uncovered?
- Is the lettering area big enough for the exact dialogue, and is the text readable at the intended size?
- Is the dialogue complete, verbatim and correctly attributed (compare letter by letter with the manifest)?
- Is the chess position right (Section 12), with every visible occupied square showing its piece?

Report each failure concretely ("the balloon covers the King's crown and half his face; about 50% of the panel"), name the remedy from step 3 above, and mark the panel for revision. Do not accept a failing image because it is close.

## Rule of thumb until the output size is known
A quarter to a third of a standard panel holds roughly 20 to 30 words of Flemish at a comfortable reading size (Section 23.F). It is a planning aid, not a cut-off: never force an unnatural split to meet it. Once the author decides the output size and font (Appendix B item 12), measure a lettered page, record the real capacity in Section 23.F, and pass it to the script as `max_words`.

## Report to the author
Keep it short and in plain language: which panels are crowded (with word counts), the proposed split for each (quoting the exact boundary words), which remedy, and what needs their approval. State that nothing was shortened and that the play is unchanged, with the verification result.
