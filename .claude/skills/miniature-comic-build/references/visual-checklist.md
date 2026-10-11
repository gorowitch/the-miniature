# Visual Checklist for a Rendered Panel

Check every panel against this list in the screenshot before showing it to the author. Order follows the bible's priority (Section 23.0): fidelity, then attribution, then continuity, then composition.

## 1. Fidelity (bible: Strict Adaptation Protocol)
- [ ] Balloon text matches the panel block or manifest; `check-panel-texts.sh` passes.
- [ ] No content that is not in the approved source: no extra props, captions, labels, notation outside dialogue and the move box, people in the room. No anger symbols (red popping-vein marks) on heads. Staging choices in proposals are listed as proposals.
- [ ] Only the cover carries the title. The only caption is the stage direction of panel 2b, verbatim (bible 7.12).
- [ ] A panel in which a move is played has the move box bottom-left, with the move line of the play verbatim (e.g. "1. ... d5", "6. Pxh7"); a move that is only spoken or ordered has none (bible Section 13, Move Box).

## 2. Attribution (bible Section 19)
- [ ] The tail is curved and rounded and ends just beside the speaker's mouth; it crosses no face, crown, mitre, hair or hat (bible 7.25). Run `scripts/tail-audit.ps1` to check all panels at once.
- [ ] The speaker's mouth is open; listeners have closed mouths.
- [ ] Pieces that talk to each other look at each other; listeners look at the speaker.
- [ ] Shouted lines use a jagged balloon; other lines a smooth one.

## 3. Continuity (bible Sections 4, 11, 12)
- [ ] The board matches the panel's board state; every visible occupied square shows its piece.
- [ ] Captured pieces stand beside the board, never on it.
- [ ] Greasy spot on f3: subtle before Scene 9, clearly visible from Scene 9. Cola stain on f6: subtle before Scene 15, clearly visible from Scene 15.
- [ ] Paprika stains only on Alfil's mitre; costumes per Section 5; knights face the centre files.
- [ ] Moustaches on exactly the b-pawns and g-pawns of both armies (also after they change file); no other pawn has one.
- [ ] Dark brown and beige board; empty club room, soft and out of focus.

## 4. Composition (bible Section 23)
- [ ] No balloon covers a face or a crown; the text fits inside the balloon (also inside a jagged shout balloon's points).
- [ ] The characters the panel is about are large and fully readable; no giant foreground face or arm blocks them.
- [ ] No gesture covers another character's face.
- [ ] A move panel shows the moving piece and its start and end squares clearly.
- [ ] Reading order: the balloon read first is top-left of the one read second.

When a check fails: fix it in the panel data (camera, gesture, balloon `x`/`w`) or in the renderer, re-shoot, and check again. Report what could not be fixed.
