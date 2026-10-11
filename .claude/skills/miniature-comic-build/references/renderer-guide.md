# SVG Comic Renderer: Panel Data and Camera Guide

The preview comic lives in `comic/`:

| File | Role |
|---|---|
| `renderer.js` | `window.MiniatuurRenderer.renderPanel(svg, P, {mark})`: draws one panel (800×570, or 1634×570 when wide) in the clean comic style |
| `panels.js` | `window.PANELS`: the data for every panel, in reading order |
| `index.html` | the album: cover plus A4 pages (2 columns × 4 rows; a wide or lone panel takes a whole strip), "Download SVG" per page; `?export=1` gives the export block |
| `review.html` | `review.html?from=<id>&n=<count>`: panels one by one at a readable size, with id and status |
| `serve.ps1` | local server (`-Port 8768`) |
| `export-svg.ps1` | writes `comic/svg/pages/*.svg` and `comic/svg/panels/*.svg` |
| `test.html` | four fixed panels (5a, 2b, 1c, 6d) for regression checks after a renderer change |

## Panel object
```js
{ id: "9c", scene: 9, status: "approved" | "proposal", state: 5,       // board state 0-12 (bible Section 12)
  wide: true,                                                          // optional: full strip
  cam: ...,                                                            // see Cameras
  cast: { koning: {...}, e2: {...} },                                  // overrides by role or by square
  beside: [{ id: "xh7", ch: "p", at: [8.95, 7.3] }, { id: "xQ", ch: "Q", role: "regina", at: [9.05, 6.1] }],  // captured pieces next to the board
  fx: [{ burst: "koning" }, { move: ["g1", "h3"] }],                   // speed lines behind a role; dashed move streak
  grumble: ["h2", "f2"],                                               // wordless grumble balloons (squares)
  movebox: "3. Ph3",                                                   // only in the panel where a move is played: verbatim move line of the play (bible Section 13, Move Box)
  balloons: [{ who: "koning", text: "...", shout: true, w: 360, x: 470, y: 20, noTail: true }] }
```
- **Roles** (`roleOf`): `koning` (e1), `bking` (e8), `brookh8` (h8 rook), `regina` (any white queen), `alfil` (f1 before state 3, d3 from state 3), `caballo` (g1, h3 in states 5-8, g5 in states 9-10, h7 from state 11). Any other piece: by square, e.g. `e2`, `d5`.
- **Cast options:** `expr` (neutral, proud, angry, furious, surprised, worried, offended, despair, calm, puzzled, heroic, stubborn, sigh, pleading, apologetic, smug), `talk` (open mouth), `mouthOpen` (with surprised), `lookAt` (role or square), `gest` (one name or an array), `anger`, `sweat`, `sigh`, `shake`, `flush`, `must` (moustache; automatic for the b-pawns and g-pawns of both armies, bible Section 7, so never set it on pawns), `back` (force back/front view), `lean` (degrees) with `bow` (vertical squash).
- **Gestures:** fist-up-l/r, point-l/r, point-down-l/r, point-up-l/r, open-l/r, both-open, raise-l/r, hands-head, crossed, hand-chest, wave-l/r. **l and r are left and right in the image**, not the character's own.
- **Balloon text** is copied from the bible panel block or manifest, never typed from memory; inner double quotes are escaped `\"`; the original curly quotes and apostrophes stay as they are.
- Balloons are placed automatically to avoid heads; force a position with `x`/`y` (viewBox units) and a width with `w` when the automatic place covers a face or crown.

## Cameras
Two forms:
- **Auto framing:** `zb([squares], opts)` (from Black's side) or `zw([squares], opts)` (from White's side). Options: `dist`, `h`, `th` (look-at height), `f` (focal length), `ox` (sideways shift), `tele` (default 1.8: flatter perspective), `lift` (default 2.6: how far the camera rises above the look-at point).
- **Explicit:** `{ from: [x, y, z], at: [x, y, z], f }`, in squares: a1 is (0.5, 0.5), h8 is (7.5, 7.5); z is height (a king is about 1.4 tall).

Lessons from earlier rounds:
- **Faces:** white pieces face +y (towards Black). To see a white piece's face the camera must be on Black's side of it (higher y); for black pieces the reverse. From White's side you see the white pieces' backs.
- **From Black's side the files are mirrored:** the h-file is on the left, the a-file on the right.
- **Rank 2 is in front of rank 1** from Black's side; the default `lift` keeps the officers' faces above the pawns. If pawns still cover a speaker, raise `lift` or `h`.
- **Alfil on d3 hides the King on e1** from straight behind Black's side; use the `KING_ALFIL` camera in `panels.js` (from the kingside).
- **Gestures towards a neighbour cover the neighbour's face** (the King's right arm over Regina in an e1/d1 frame). Gesture to the free side.
- **A piece close to the camera becomes a giant foreground face.** Move the camera up or back rather than accept it.
- Knights face the centre files automatically.
- The renderer draws every piece that projects into the frame; never remove a piece to clear a view (bible: every visible occupied square shows its piece).

## Pitfalls
- **Edit `panels.js` and `renderer.js` with the Edit tool or sed.** Never round-trip them through PowerShell `Get-Content`/`Set-Content`: that double-encodes the UTF-8 (’ becomes â€™). `check-panel-texts.sh` warns about it.
- The browser pane cannot screenshot a minimised window and caches scripts; use `shot.ps1` (headless Edge, fresh cache).
- After a renderer change, re-shoot `test.html` and a few panels of different types: close-up, wide, from White's side, move panel.
