// De Miniatuur - clean comic-style SVG renderer (layout previews; final art is made with an image generator).
// Draws one panel from panel data: camera, board state, cast overrides, balloons, effects.
(function () {
"use strict";
const NS = "http://www.w3.org/2000/svg", INK = "#17110d";
const FEN = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR","rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR","rnbqkbnr/ppp1pppp/8/3p4/8/4P3/PPPP1PPP/RNBQKBNR","rnbqkbnr/ppp1pppp/8/3p4/8/3BP3/PPPP1PPP/RNBQK1NR","rnbqkbnr/ppp2ppp/4p3/3p4/8/3BP3/PPPP1PPP/RNBQK1NR","rnbqkbnr/ppp2ppp/4p3/3p4/8/3BP2N/PPPP1PPP/RNBQK2R","rn1qkbnr/pppb1ppp/4p3/3p4/8/3BP2N/PPPP1PPP/RNBQK2R","rn1qkbnr/pppb1ppp/4p3/3p3Q/8/3BP2N/PPPP1PPP/RNB1K2R","rn1qkb1r/pppbnppp/4p3/3p3Q/8/3BP2N/PPPP1PPP/RNB1K2R","rn1qkb1r/pppbnppp/4p3/3p2NQ/8/3BP3/PPPP1PPP/RNB1K2R","rn1qkb1r/pppbnp1p/4p1p1/3p2NQ/8/3BP3/PPPP1PPP/RNB1K2R","rn1qkb1r/pppbnp1N/4p1p1/3p3Q/8/3BP3/PPPP1PPP/RNB1K2R","rn1qkb1r/pppbnp1N/4p3/3p3p/8/3BP3/PPPP1PPP/RNB1K2R"];
let W_ = { w:{f:"#efd2a2",s:"#d6ae78",n:"#e0a77c"}, b:{f:"#6b4630",s:"#4a2f1f",n:"#9a6a4c"} };
let COST = {
  koning:{robe:"#7d1f2e",shade:"#5e1622",trim:"#d4a72c"}, bking:{robe:"#2a3550",shade:"#1c2438",trim:"#a7afc0"},
  regina:{robe:"#f7f3ea",shade:"#ddd3bf",trim:"#d4a72c",hair:"#e8b77a",hairS:"#c99556"}, bqueen:{robe:"#4a2a44",shade:"#341d30",trim:"#a7afc0",hair:"#2b1b14",hairS:"#160d09"},
  alfil:{robe:"#46607f",shade:"#35496a",trim:"#d9c69a"}, wbishop:{robe:"#5d7a6a",shade:"#465e51",trim:"#d9c69a"}, bbishop:{robe:"#3b3346",shade:"#29233a",trim:"#9c98aa"},
  caballo:{robe:"#7d1f2e",shade:"#5e1622",trim:"#d4a72c"}, wknight:{robe:"#8a6a3a",shade:"#6b522c",trim:"#d9c69a"}, bknight:{robe:"#2a3550",shade:"#1c2438",trim:"#a7afc0"},
  wrook:{robe:"#8a6a3a",shade:"#6b522c",trim:"#d9c69a"}, brook:{robe:"#2a3550",shade:"#1c2438",trim:"#a7afc0"},
  wpawn:{robe:"#6d84a3",shade:"#56698a",trim:"#c9d3e0"}, bpawn:{robe:"#4d5a3a",shade:"#39432a",trim:"#9aa58a"} };
let BOARD = { dark: "#33241b", light: "#e6d6ae", frame: "#e6d6ae", line: "#20160f" };
// Palettes per panel (P.palette). Default: the current preview colours. "kingdoms": an experiment with one dominant
// costume colour per army (royal blue for White, royal purple for Black), gold and bronze for rank, exact board colours;
// the canon exceptions stay: the King's burgundy robe and medals, Regina in white and gold, Caballo's red sash (experiment, not canon).
const DEFAULT = { W: W_, COST, BOARD };
const GOLD = "#d6b44a", BRONZE = "#9e6e39", WB = { robe: "#5d7ea8", shade: "#2f5d9b" }, BP = { robe: "#40305e", shade: "#2e2244" };
const PALETTES = { kingdoms: {
  W: { w: { f: "#e7d1a3", s: "#cdb283", n: "#d9a67a" }, b: { f: "#5a382a", s: "#42281d", n: "#8a5c44" } },
  COST: Object.assign({}, COST, {
    koning: { robe: "#7d1f2e", shade: "#5e1622", trim: GOLD }, regina: Object.assign({}, COST.regina, { trim: GOLD }),
    alfil: Object.assign({ trim: GOLD }, WB), wbishop: Object.assign({ trim: GOLD }, WB), caballo: Object.assign({ trim: GOLD, sash: "#2f5d9b" }, WB), wknight: Object.assign({ trim: GOLD }, WB),
    wrook: { robe: "#2f5d9b", shade: "#24497a", trim: GOLD }, wpawn: { robe: "#5d7ea8", shade: "#4a6a94", trim: "#2f5d9b" },
    bking: Object.assign({ trim: BRONZE }, BP), bqueen: Object.assign({}, COST.bqueen, BP, { trim: BRONZE }), bbishop: Object.assign({ trim: BRONZE }, BP),
    bknight: Object.assign({ trim: BRONZE }, BP), brook: Object.assign({ trim: BRONZE }, BP), brookh8: { robe: "#2a3550", shade: "#1c2438", trim: BRONZE },
    bpawn: { robe: "#40305e", shade: "#2e2244", trim: "#2a3550" } }),
  BOARD: { dark: "#3a2418", light: "#dccfa9", frame: "#866240", line: "#20160f" } } };
// Lighter black-army variants of "kingdoms" (author feedback: the black wood and costumes too dark): violet or green costumes
for (const [name, robe, shade, pawn, pawnS] of [["kingdoms-violet", "#5c3d8c", "#45306c", "#5c3d8c", "#45306c"], ["kingdoms-green", "#4f7d55", "#3b6142", "#4f7d55", "#3b6142"]]) {
  // black army (bible 7.55): lighter walnut wood so the faces are the lightest part, a deeper violet costume, bronze to match
  const K = PALETTES.kingdoms, BR = "#c8925a", B = { robe, shade, trim: BR };
  PALETTES[name] = { W: { w: K.W.w, b: { f: "#9a6a4c", s: "#7c5440", n: "#c69474" } }, BOARD: K.BOARD,
    COST: Object.assign({}, K.COST, { bking: B, bqueen: Object.assign({}, K.COST.bqueen, B), bbishop: B, bknight: B, brook: B, brookh8: B,
      bpawn: { robe: pawn, shade: pawnS, trim: "#e2d3b8" } }) };
}
// The album colour style (bible 7.41): variant A, violet; a panel may still name another palette ("default" = the colours before 7.41).
function usePalette(name) { const p = PALETTES[name || "kingdoms-violet"] || DEFAULT; W_ = p.W; COST = p.COST; BOARD = p.BOARD; }
// The crowns of both Kings and both Queens, and the Kings' crosses, in the colour of their collar (the trim), in every panel (author decision, bible 7.53).
let CROWN_TRIM = false, CROSS_SUNK = false, CROWN_S = 1, CROWN_DY = 0, CROWN_SQ = 1, CROWN_DYQ = 0;
// the crown (with the queen's pearls and the king's cross) scaled about the centre of its base and lowered onto the head by CROWN_DY:
// the Kings' crowns at 88 %, the Queens' at 80 % (their heads are smaller), so the crowns fit like Alfil's mitre (author decision, bible 7.58)
const crownG = (g, y, s = CROWN_S, dy = CROWN_DY) => s === 1 && !dy ? g : mk("g", { transform: `translate(0 ${y + dy}) scale(${s}) translate(0 ${-y})` }, g);

function mk(tag, a, p) { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }
const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]], dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2], nrm=a=>{const l=Math.hypot(...a);return a.map(v=>v/l)}, cr=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const sqXY = sq => ["abcdefgh".indexOf(sq[0]) + 0.5, +sq[1] - 0.5];

// Which named character stands on a square in a given board state.
// Pawn moustaches (bible Section 7, author decision 7.9): the b-pawn and g-pawn of both armies, always.
// The moustache belongs to the pawn, so follow it to its starting file: the black g-pawn takes on h5 (6. ... gxh5, state 12).
function pawnHasMoustache(sq, ch, state) {
  if (ch !== "P" && ch !== "p") return false;
  const startFile = (ch === "p" && sq === "h5" && state >= 12) ? "g" : sq[0];
  return startFile === "b" || startFile === "g";
}
function roleOf(sq, ch, state) {
  if (sq === "e1" && ch === "K") return "koning";
  if (sq === "e8" && ch === "k") return "bking";
  if (sq === "h8" && ch === "r") return "brookh8";
  if (ch === "B" && ((state < 3 && sq === "f1") || (state >= 3 && sq === "d3"))) return "alfil";
  if (ch === "Q") return "regina";
  if (ch === "N" && ((state < 5 && sq === "g1") || (state >= 5 && state < 9 && sq === "h3") || (state >= 9 && state < 11 && sq === "g5") || (state >= 11 && sq === "h7"))) return "caballo";
  return null;
}
function costumeOf(type, col, role) {
  if (role === "koning") return COST.koning; if (role === "bking") return COST.bking; if (role === "regina") return COST.regina;
  if (role === "alfil") return COST.alfil; if (role === "caballo") return COST.caballo; if (role === "brookh8") return COST.brookh8 || COST.brook;
  return ({k:col==="w"?COST.koning:COST.bking, q:col==="w"?COST.regina:COST.bqueen, b:col==="w"?COST.wbishop:COST.bbishop, n:col==="w"?COST.wknight:COST.bknight, r:col==="w"?COST.wrook:COST.brook, p:col==="w"?COST.wpawn:COST.bpawn})[type];
}

// ---------------------------------------------------------------- piece sprites (unit: 50 = one square)
let TURN_N = 0;  // ids for the clip paths of half-turned faces
let BORED_ID = 0;
function face(g, x, y, r, col, o) {
  const W = W_[col], lx = (o.look || 0), E = o.expr || "neutral", talk = !!o.talk, brC = col === "w" ? "#5a3a1e" : "#efe2cf";
  const sw = r * 0.13 * (o.queenBrows ? 0.6 : 1);   // the queens: thinner eyebrows in every expression (bible 8.05)
  const brow = (s, dy, slope) => mk("path", { d: `M${x+s*r*.64} ${y-r*.42+dy} l${-s*r*.46} ${slope}`, stroke: brC, "stroke-width": sw, "stroke-linecap": "round", fill: "none" }, g);
  const browArc = (s, h) => mk("path", { d: `M${x+s*r*.66} ${y-r*.48} q${-s*r*.22} ${-h} ${-s*r*.46} ${-r*.06}`, stroke: brC, "stroke-width": sw, fill: "none", "stroke-linecap": "round" }, g);
  // o.bored 0..9: the c1 bishop growing bored during the King's monologue (10b to 11d), by eyes, eyebrows and mouth only;
  // 0 interested, 1 looking past the King, 2-8 heavier and heavier eyelids (4 staring down at the board), 9 a big yawn behind his hand (author decision, bible 7.61)
  if (o.bored !== undefined) { const b = o.bored, W2 = W_[col];
    if (b === 0) { browArc(-1, r*.22); browArc(1, r*.22); }
    else if (b <= 4) { brow(-1, r*.03*b, -r*.02); brow(1, r*.03*b, -r*.02); }
    else if (b === 5) { brow(-1, r*.08, -r*.2); brow(1, r*.08, -r*.2); }
    else if (b <= 8) { brow(-1, r*.12, -r*.15); brow(1, r*.12, -r*.15); }
    else { brow(-1, -r*.04, -r*.28); brow(1, -r*.04, -r*.28); }
    if (b === 9) for (const s of [-1, 1]) mk("path", { d: `M${x+s*r*.32-r*.22} ${y-r*.1} q${r*.22} ${-r*.12} ${r*.44} 0`, stroke: INK, "stroke-width": r*.1, fill: "none", "stroke-linecap": "round" }, g);
    else { const lid = [0, 0, .25, .42, .5, .5, .64, .76, .86][b], px = b === 0 ? lx : b === 5 ? 1 : 0, py = b === 4 ? .1 : b >= 6 ? .06 : 0;   // 4: staring down at the board (author: not rolled up)
      for (const s of [-1, 1]) { const cx = x+s*r*.32, cy = y-r*.12, rx = r*.24, ry = r*.29, id = "bl" + (++BORED_ID);
        mk("ellipse", { cx, cy, rx, ry, fill: "#fff", stroke: INK, "stroke-width": r*.05 }, g);
        mk("circle", { cx: cx+px*r*.11, cy: cy+r*.04+py*r, r: r*.12, fill: INK }, g);
        if (lid > 0) { const cp = mk("clipPath", { id }, g); mk("ellipse", { cx, cy, rx, ry }, cp); const ly = cy - ry + 2*ry*lid;
          mk("rect", { x: cx-rx-1, y: cy-ry-1, width: 2*rx+2, height: ly-(cy-ry)+1, fill: W2.f, "clip-path": `url(#${id})` }, g);
          const hw = rx * Math.sqrt(Math.max(0, 1 - Math.pow((ly-cy)/ry, 2)));
          mk("path", { d: `M${cx-hw} ${ly} L${cx+hw} ${ly}`, stroke: INK, "stroke-width": r*.07, "stroke-linecap": "round" }, g); }
        mk("ellipse", { cx, cy, rx, ry, fill: "none", stroke: INK, "stroke-width": r*.05 }, g); } }
    mk("path", { d: `M${x} ${y+r*.02} C${x-r*.26} ${y+r*.1} ${x-r*.22} ${y+r*.48} ${x} ${y+r*.48} C${x+r*.22} ${y+r*.48} ${x+r*.26} ${y+r*.1} ${x} ${y+r*.02} Z`, fill: W2.n, stroke: INK, "stroke-width": r*.05 }, g);
    const my = y + r*.7, ink = { stroke: INK, "stroke-width": r*.085, fill: "none", "stroke-linecap": "round" };
    if (b === 0) mk("path", Object.assign({ d: `M${x-r*.2} ${my} q${r*.2} ${r*.14} ${r*.4} 0` }, ink), g);
    else if (b <= 2) mk("path", Object.assign({ d: `M${x-r*.2} ${my} l${r*.4} 0` }, ink), g);
    else if (b <= 4) mk("path", Object.assign({ d: `M${x-r*.22} ${my+r*.06} q${r*.22} ${-r*(b === 3 ? .1 : .16)} ${r*.44} 0` }, ink), g);
    else if (b <= 6) mk("path", Object.assign({ d: `M${x-r*.04} ${my+r*.02} q${r*.14} ${-r*.08} ${r*.3} ${r*.04}` }, ink), g);
    else if (b <= 8) mk("ellipse", { cx: x+r*.04, cy: my+r*.04, rx: r*.12, ry: r*(b === 7 ? .06 : .09), fill: "#4a130d", stroke: INK, "stroke-width": r*.04 }, g);
    else mk("ellipse", { cx: x, cy: my+r*.12, rx: r*.27, ry: r*.36, fill: "#4a130d", stroke: INK, "stroke-width": r*.05 }, g);
    return; }
  if (o.queenBrows && E === "neutral") for (const s of [-1, 1]) mk("path", { d: `M${x+s*r*.66} ${y-r*.5} q${-s*r*.22} ${-r*.13} ${-s*r*.46} ${-r*.03}`, stroke: brC, "stroke-width": sw, fill: "none", "stroke-linecap": "round" }, g);   // the queens, neutral: gently arched brows, so a listening queen does not seem to frown (bible 8.05)
  else if (E === "wink") { brow(-1, r*.08, 0); browArc(1, r*.24); }   // wink: one eye shut in a happy arc, the other open, a small smile (Alfil on the closing page, bible 8.07)
  else if (E === "startled") { for (const s of [-1, 1]) mk("path", { d: `M${x+s*r*.7} ${y-r*.6} q${-s*r*.24} ${-r*.34} ${-s*r*.5} ${-r*.08}`, stroke: brC, "stroke-width": sw * 1.15, fill: "none", "stroke-linecap": "round" }, g); }   // startled: eyebrows shot up high (the a1 rook in 15a, bible 7.47)
  else if (E === "surprised" || E === "proud" || E === "pleading-up" || E === "amused" || E === "grin" || E === "relieved" || E === "yawn") { browArc(-1, r*.22); browArc(1, r*.22); }
  else if (E === "wondering") { browArc(-1, r*.3); browArc(1, r*.14); }   // wondering: brows raised unevenly, the eyes looking up (the King in 12a, bible 7.96)
  else if (E === "angry" || E === "furious" || E === "heroic" || E === "stubborn") { const k = E === "furious" ? .3 : E === "stubborn" ? .08 : .22; brow(-1, 0, r*k); brow(1, 0, r*k); }
  else if (E === "worried" || E === "despair" || E === "sigh" || E === "pleading" || E === "apologetic" || E === "disappointed") { brow(-1, r*.04, -r*.22); brow(1, r*.04, -r*.22); }
  else if (E === "offended" || E === "puzzled" || E === "disgusted" || E === "sly") { brow(-1, -r*.12, -r*.02); brow(1, r*.02, r*.14); }
  else if (E === "calm" || E === "smug") { brow(-1, 0, -r*.02); brow(1, 0, -r*.02); }
  else { brow(-1, 0, -r*.08); brow(1, 0, -r*.08); }
  const closed = E === "despair" || E === "sigh" || E === "asleep" || E === "yawn";   // asleep, yawn: the sleepy a1 rook (bible 7.45)
  if (E === "oneeye") {   // waking up: one eye snaps open, the other still shut (the a1 rook in 15a, bible 7.47)
    mk("path", { d: `M${x-r*.32-r*.2} ${y-r*.08} q${r*.2} ${r*.14} ${r*.4} 0`, stroke: INK, "stroke-width": r*.09, fill: "none", "stroke-linecap": "round" }, g);
    mk("ellipse", { cx: x+r*.32, cy: y-r*.12, rx: r*.27, ry: r*.36, fill: "#fff", stroke: INK, "stroke-width": r*.05 }, g); mk("circle", { cx: x+r*.32, cy: y-r*.08, r: r*.1, fill: INK }, g);
  } else if (E === "wink") { mk("path", { d: `M${x-r*.32-r*.2} ${y-r*.08} q${r*.2} ${-r*.22} ${r*.4} 0`, stroke: INK, "stroke-width": r*.1, fill: "none", "stroke-linecap": "round" }, g);
    mk("ellipse", { cx: x+r*.32, cy: y-r*.12, rx: r*.24, ry: r*.29, fill: "#fff", stroke: INK, "stroke-width": r*.05 }, g); mk("circle", { cx: x+r*.32, cy: y-r*.08, r: r*.12, fill: INK }, g); mk("circle", { cx: x+r*.28, cy: y-r*.12, r: r*.035, fill: "#fff" }, g);
  } else if (closed) { for (const s of [-1, 1]) mk("path", { d: `M${x+s*r*.32-r*.2} ${y-r*.08} q${r*.2} ${r*.14} ${r*.4} 0`, stroke: INK, "stroke-width": r*.09, fill: "none", "stroke-linecap": "round" }, g); }
  else if (E === "amused" || E === "relieved") { for (const s of [-1, 1]) mk("path", { d: `M${x+s*r*.32-r*.2} ${y-r*.04} q${r*.2} ${-r*.26} ${r*.4} 0`, stroke: INK, "stroke-width": r*.1, fill: "none", "stroke-linecap": "round" }, g); }  // eyes squeezed with laughter
  else {
    const ry = (E === "surprised" || E === "startled") ? .36 : (E === "furious" || E === "angry") ? .21 : (E === "calm" || E === "smug" || E === "disappointed" || E === "disgusted" || E === "sly") ? .17 : .29;
    for (const s of [-1, 1]) {
      mk("ellipse", { cx: x+s*r*.32, cy: y-r*.12, rx: r*((E === "surprised" || E === "startled") ? .27 : .24), ry: r*ry, fill: "#fff", stroke: INK, "stroke-width": r*.05 }, g);
      mk("circle", { cx: x+s*r*.32+lx*r*.11, cy: y-r*.08+(o.lookDown ? r*.09 : 0)+(E === "wondering" ? -r*.1 : 0), r: r*((E === "surprised" || E === "startled") ? .09 : .12), fill: INK }, g);
      mk("circle", { cx: x+s*r*.32+lx*r*.11-r*.04, cy: y-r*.12+(o.lookDown ? r*.09 : 0)+(E === "wondering" ? -r*.1 : 0), r: r*.035, fill: "#fff" }, g);
      if (E === "calm" || E === "smug" || E === "disappointed" || E === "disgusted" || E === "sly") mk("path", { d: `M${x+s*r*.32-r*.26} ${y-r*.2} q${r*.26} ${-r*.1} ${r*.52} 0`, stroke: W_[col].f, "stroke-width": r*.16, fill: "none" }, g);
    }
  }
  mk("path", { d: `M${x+lx*r*.08} ${y+r*.02} C${x+lx*r*.08-r*.26} ${y+r*.1} ${x+lx*r*.08-r*.22} ${y+r*.48} ${x+lx*r*.08} ${y+r*.48} C${x+lx*r*.08+r*.22} ${y+r*.48} ${x+lx*r*.08+r*.26} ${y+r*.1} ${x+lx*r*.08} ${y+r*.02} Z`, fill: W_[col].n, stroke: INK, "stroke-width": r*.05 }, g);
  if (o.must) mk("path", { d: `M${x} ${y+r*.47} c${-r*.2} ${-r*.1} ${-r*.62} ${-r*.05} ${-r*.78} ${r*.22} c${r*.3} ${r*.05} ${r*.58} 0 ${r*.78} ${-r*.12} c${r*.2} ${r*.12} ${r*.48} ${r*.17} ${r*.78} ${r*.12} c${-r*.16} ${-r*.27} ${-r*.58} ${-r*.32} ${-r*.78} ${-r*.22}Z`, fill: o.mustC || "#f4f0e6", stroke: INK, "stroke-width": r*.04 }, g);
  const my = o.must ? y + r*.84 : y + r*.7;
  if (talk && (E === "furious" || E === "heroic")) {
    mk("path", { d: `M${x-r*.34} ${my-r*.08} q${r*.34} ${-r*.08} ${r*.68} 0 q${-r*.04} ${r*.46} ${-r*.34} ${r*.46} q${-r*.3} 0 ${-r*.34} ${-r*.46}Z`, fill: "#4a130d", stroke: INK, "stroke-width": r*.05 }, g);
    mk("path", { d: `M${x-r*.28} ${my-r*.07} q${r*.28} ${r*.07} ${r*.56} 0 l${-r*.02} ${r*.1} q${-r*.26} ${r*.05} ${-r*.52} 0Z`, fill: "#fffaf0" }, g);
    mk("path", { d: `M${x-r*.18} ${my+r*.3} q${r*.18} ${-r*.14} ${r*.36} 0 q${-r*.18} ${r*.08} ${-r*.36} 0Z`, fill: "#c4584a" }, g);
  } else if (talk) {
    mk("ellipse", { cx: x, cy: my + r*.03, rx: r*.19, ry: r*.15, fill: "#4a130d", stroke: INK, "stroke-width": r*.04 }, g);
    mk("path", { d: `M${x-r*.1} ${my+r*.1} q${r*.1} ${-r*.06} ${r*.2} 0`, fill: "#c4584a", stroke: "none" }, g);
  } else if (E === "amused" || E === "grin" || E === "sly") {  // sly: half-lidded eyes, one brow up and this grin, "I got away with it" (the Black King in 16c, bible 7.87); grin: the same broad grin with the eyes open (the waving d5 pawn in 15e, bible 7.83); amused: broad grin with teeth (bible 7.23)
    mk("path", { d: `M${x-r*.34} ${my-r*.06} q${r*.34} ${r*.5} ${r*.68} 0 Z`, fill: "#4a130d", stroke: INK, "stroke-width": r*.05, "stroke-linejoin": "round" }, g);
    mk("path", { d: `M${x-r*.3} ${my-r*.04} l${r*.6} 0 l${-r*.04} ${r*.08} l${-r*.52} 0 Z`, fill: "#fffaf0" }, g);
  } else if (E === "yawn") {   // a big round yawn
    mk("ellipse", { cx: x, cy: my + r*.06, rx: r*.24, ry: r*.3, fill: "#4a130d", stroke: INK, "stroke-width": r*.05 }, g);
  } else if (E === "asleep") {   // mouth slightly open in sleep
    mk("ellipse", { cx: x, cy: my, rx: r*.1, ry: r*.07, fill: "#4a130d", stroke: INK, "stroke-width": r*.04 }, g);
  } else if (E === "surprised" && o.mouthOpen) {
    mk("ellipse", { cx: x, cy: my, rx: r*.14, ry: r*.19, fill: "#4a130d", stroke: INK, "stroke-width": r*.04 }, g);
  } else {
    const d = (E === "worried" || E === "pleading" || E === "apologetic") ? `M${x-r*.26} ${my} q${r*.13} ${-r*.1} ${r*.26} 0 q${r*.13} ${r*.1} ${r*.26} 0`
      : (E === "despair" || E === "angry" || E === "furious" || E === "disappointed") ? `M${x-r*.24} ${my+r*.08} q${r*.24} ${-r*.18} ${r*.48} 0`
      : (E === "disgusted") ? `M${x-r*.24} ${my+r*.04} q${r*.08} ${-r*.1} ${r*.16} 0 q${r*.08} ${r*.1} ${r*.16} 0 q${r*.08} ${-r*.1} ${r*.16} 0`   // disgusted: a wavy grimace (the pawns staring at the cola, bible 7.86)
      : (E === "offended" || E === "stubborn") ? `M${x-r*.2} ${my} l${r*.4} ${-r*.03}`
      : (E === "smug" || E === "wink") ? `M${x-r*.2} ${my} q${r*.26} ${r*.12} ${r*.36} ${-r*.08}`
      : (E === "sigh") ? `M${x-r*.1} ${my} q${r*.1} ${r*.1} ${r*.2} 0`
      : `M${x-r*.2} ${my} q${r*.2} ${r*.11} ${r*.4} 0`;
    if (!o.must || E === "despair" || E === "worried" || E === "angry" || E === "disappointed") mk("path", { d, stroke: INK, "stroke-width": r*.085, fill: "none", "stroke-linecap": "round" }, g);
  }
  if (o.flush || E === "furious") for (const s of [-1, 1]) mk("ellipse", { cx: x+s*r*.62, cy: y+r*.3, rx: r*.22, ry: r*.13, fill: "#d9543a", opacity: .55 }, g);
  else if (o.blush) for (const s of [-1, 1]) mk("ellipse", { cx: x+s*r*.58, cy: y+r*.28, rx: r*.19, ry: r*.11, fill: "#f2849a", opacity: o.blush === "strong" ? .6 : .4 }, g);  // a soft pink blush (Regina and the h8 rook, bible 7.34), not the red flush of anger
}
function backHead(g, x, y, r, col) { mk("circle", { cx: x, cy: y, r, fill: W_[col].f, stroke: INK, "stroke-width": r*.07 }, g); mk("path", { d: `M${x+r*.3} ${y-r*.7} q${r*.6} ${r*.5} ${r*.4} ${r*1.2}`, stroke: W_[col].s, "stroke-width": r*.18, fill: "none" }, g); }
function felt(g) { mk("ellipse", { cx: 0, cy: 2, rx: 20, ry: 6.5, fill: "#2e7a3a", stroke: INK, "stroke-width": 1.4 }, g); }
function base(g, col) { const W = W_[col]; felt(g);
  mk("path", { d: "M-19 0 L-19 -8 L19 -8 L19 0 A19 6 0 0 1 -19 0Z", fill: W.s, stroke: INK, "stroke-width": 1.6 }, g);
  mk("ellipse", { cx: 0, cy: -8, rx: 19, ry: 5.5, fill: W.f, stroke: INK, "stroke-width": 1.6 }, g); }
function robe(g, h, top, c, back) {
  mk("path", { d: `M-15 -9 C-13 ${-h*.5} -9 ${-h*.82} -${top} ${-h} L${top} ${-h} C9 ${-h*.82} 13 ${-h*.5} 15 -9 Z`, fill: c.robe, stroke: INK, "stroke-width": 1.8 }, g);
  mk("path", { d: `M4 -9 C6 ${-h*.4} 6 ${-h*.7} ${top*.6} ${-h} L${top} ${-h} C9 ${-h*.82} 13 ${-h*.5} 15 -9 Z`, fill: c.shade, stroke: "none" }, g);
  mk("path", { d: `M-15 -9 C-13 ${-h*.5} -9 ${-h*.82} -${top} ${-h} L${top} ${-h} C9 ${-h*.82} 13 ${-h*.5} 15 -9 Z`, fill: "none", stroke: INK, "stroke-width": 1.8 }, g);
  if (!back) mk("path", { d: `M0 ${-h+2} V-9`, stroke: c.trim, "stroke-width": 2.6 }, g);
  mk("ellipse", { cx: 0, cy: -h, rx: top + 4, ry: 3.2, fill: c.trim, stroke: INK, "stroke-width": 1.4 }, g);
}
function arm(g, sx, sy, angDeg, len, c, hand, col) {
  const a = angDeg * Math.PI / 180, ex = sx + Math.cos(a) * len, ey = sy + Math.sin(a) * len, mx = sx + Math.cos(a)*len*.5 - Math.sin(a)*3, my = sy + Math.sin(a)*len*.5 + Math.cos(a)*3;
  mk("path", { d: `M${sx} ${sy} Q${mx} ${my} ${ex} ${ey}`, stroke: INK, "stroke-width": 7.6, fill: "none", "stroke-linecap": "round" }, g);
  mk("path", { d: `M${sx} ${sy} Q${mx} ${my} ${ex} ${ey}`, stroke: c.robe, "stroke-width": 5.4, fill: "none", "stroke-linecap": "round" }, g);
  const hx = ex + Math.cos(a) * 3, hy = ey + Math.sin(a) * 3, F = W_[col].f;
  if (hand === "point") { mk("path", { d: `M${hx} ${hy} l${Math.cos(a)*8} ${Math.sin(a)*8}`, stroke: INK, "stroke-width": 3.6, "stroke-linecap": "round" }, g); mk("path", { d: `M${hx} ${hy} l${Math.cos(a)*8} ${Math.sin(a)*8}`, stroke: F, "stroke-width": 2, "stroke-linecap": "round" }, g); }
  if (hand === "open") for (const d of [-0.5, 0, 0.5]) { const b = a + d; mk("path", { d: `M${hx} ${hy} l${Math.cos(b)*6} ${Math.sin(b)*6}`, stroke: INK, "stroke-width": 3, "stroke-linecap": "round" }, g); mk("path", { d: `M${hx} ${hy} l${Math.cos(b)*6} ${Math.sin(b)*6}`, stroke: F, "stroke-width": 1.6, "stroke-linecap": "round" }, g); }
  mk("circle", { cx: hx, cy: hy, r: hand === "fist" ? 5.2 : 4, fill: F, stroke: INK, "stroke-width": 1.4 }, g);
  if (hand === "fist") mk("path", { d: `M${hx-3} ${hy-1.5} h5 M${hx-3} ${hy+1.5} h5`, stroke: INK, "stroke-width": .8 }, g);
}
const SH = { p: -24, b: -30, q: -36, k: -40, r: -30, n: -32 }, HEAD = { p: [-35, 11], b: [-41, 10], q: [-50, 10.5], k: [-57, 11.5], r: [-26, 10], n: [-50, 5] };
function gestureArms(g, type, col, c, gest) {
  const s = SH[type], L = 22;
  const map = {
    "fist-up-l": [[-12, s, -115, 26, "fist"]], "fist-up-r": [[12, s, -65, 26, "fist"]],
    "point-l": [[-12, s, 190, L, "point"]], "point-r": [[12, s, -10, L, "point"]],
    "point-down-l": [[-12, s, 140, L, "point"]], "point-down-r": [[12, s, 40, L, "point"]],
    "point-up-l": [[-12, s, -140, L, "point"]], "point-up-r": [[12, s, -40, L, "point"]],
    "open-l": [[-12, s, 200, 18, "open"]], "open-r": [[12, s, -20, 18, "open"]],
    "both-open": [[-12, s, 150, 16, "open"], [12, s, 30, 16, "open"]],
    "raise-l": [[-12, s, -125, 24, "open"]], "raise-r": [[12, s, -55, 24, "open"]],
    "hands-head": [[-11, s, -86, 16, "open"], [11, s, -94, 16, "open"]],
    "crossed": [[-11, s + 4, 15, 14, "fist"], [11, s + 4, 165, 14, "fist"]],
    "hand-chest": [[11, s, 160, 11, "open"]],
    "wave-r": [[12, s, -35, 20, "open"]], "wave-l": [[-12, s, -145, 20, "open"]],
    "shake-r": [[12, s, 10, 10, "fist"]], "shake-l": [[-12, s, 170, 10, "fist"]] };   // handshake: arm stretched out sideways (bible 7.38)
    Object.assign(map, { "stretch": [[-12, s, -118, 26, "fist"], [12, s, -62, 26, "fist"]], "startle": [[-13, s, -150, 13, "open"], [13, s, -30, 13, "open"]], "hand-top": [[13, s, -96, 20, "open"]], "hand-mouth": [[12, s, 178, 8, "open"]], "wave-high": [[12, s, -68, 22, "open"]], "push-r": [[-12, s + 4, -8, 30, "open"], [12, s, 6, 20, "open"]], "push-l": [[12, s + 4, 188, 30, "open"], [-12, s, 174, 20, "open"]], "push1-r": [[12, s, -4, 34, "open"]], "push1-l": [[-12, s, 184, 34, "open"]], "pushed-r": [[12, s, -4, 15, "open"]], "pushed-l": [[-12, s, 184, 15, "open"]] });   // push1: one arm stretched out, pushing (14d, bible 7.50)   // push: both arms forward to one side, hands open (the h5 pawn pushing Regina off the board, bible 7.50)   // hand-top: one hand up against the top of the piece ("huh, what?", the a1 rook in 15a, bible 7.47)   // both arms stretched up and out, with a yawn (the a1 rook, bible 7.45)
  for (const gname of [].concat(gest || [])) for (const a of (map[gname] || [])) arm(g, a[0], a[1], a[2], a[3], c, a[4], col);
}
function crown(g, y, col, gem, c) { const T = CROWN_TRIM && c ? c.trim : null, F = T || W_[col].f;
  mk("path", { d: `M-12 ${y} L-12 ${y-10} L-6 ${y-5} L0 ${y-12} L6 ${y-5} L12 ${y-10} L12 ${y} Z`, fill: F, stroke: INK, "stroke-width": 1.5 }, g);
  mk("path", { d: `M-12 ${y} H12 V${y-3} H-12 Z`, fill: T ? "rgba(0,0,0,.18)" : W_[col].s, stroke: INK, "stroke-width": 1 }, g);
  if (gem) mk("circle", { cx: 0, cy: y - 1.5, r: 1.6, fill: "#b8202e", stroke: INK, "stroke-width": .6 }, g); }
const SPR = {
  p(g, col, c, o) { base(g, col); robe(g, 24, 6, c, o.back); mk("circle", { cx: 0, cy: -35, r: 11, fill: W_[col].f, stroke: INK, "stroke-width": 1.6 }, g);
    if (o.back) backHead(g, 0, -35, 11, col);
    else if (o.turn) {  // half turned (-1 = towards the left of the image, 1 = right): the face slides to that side, the far ear shows
      const id = "pt" + (++TURN_N), cp = mk("clipPath", { id }, g); mk("circle", { cx: 0, cy: -35, r: 10.2 }, cp);
      const tg = mk("g", { transform: `translate(${o.turn * 5} -35) scale(${Math.max(0.45, 1 - 0.28 * Math.abs(o.turn))} 1) translate(0 35)` }, mk("g", { "clip-path": `url(#${id})` }, g));  // |turn| up to about 1.8: the further turned, the narrower the face
      face(tg, 0, -35, 11, col, Object.assign({}, o, { look: o.turn }));
      mk("ellipse", { cx: -Math.sign(o.turn) * Math.min(10, 8.6 * Math.abs(o.turn)), cy: -34, rx: 2, ry: 3, fill: W_[col].f, stroke: INK, "stroke-width": 1 }, g);
    } else face(g, 0, -35, 11, col, o); },
  r(g, col, c, o) { const F = W_[col].f; felt(g); mk("path", { d: "M-18 0 L-18 -8 L18 -8 L18 0 A18 6 0 0 1 -18 0Z", fill: W_[col].s, stroke: INK, "stroke-width": 1.6 }, g);
    mk("path", { d: "M-14 -8 L-12 -42 L12 -42 L14 -8 Z", fill: F, stroke: INK, "stroke-width": 1.7 }, g);
    mk("path", { d: "M-14 -18 L14 -18 L13 -10 L-13 -10 Z", fill: c.robe, stroke: INK, "stroke-width": 1.3 }, g);
    mk("path", { d: "M-15 -42 L-15 -54 L-10 -54 L-10 -49 L-3 -49 L-3 -54 L3 -54 L3 -49 L10 -49 L10 -54 L15 -54 L15 -42 Z", fill: F, stroke: INK, "stroke-width": 1.7 }, g);
    if (!o.back) face(g, 0, -28, 10, col, o); },
  n(g, col, c, o) { const F = W_[col].f; felt(g); mk("path", { d: "M-19 0 L-19 -8 L19 -8 L19 0 A19 6 0 0 1 -19 0Z", fill: W_[col].s, stroke: INK, "stroke-width": 1.6 }, g);
    const h = mk("g", { transform: `scale(${o.dir || 1},1)` }, g);
    mk("path", { d: "M-12 -7 C-15 -24 -13 -40 -6 -52 C-2 -60 7 -62 13 -57 L24 -46 C27 -41 24 -37 18 -38 L9 -40 C7 -31 11 -19 13 -7Z", fill: F, stroke: INK, "stroke-width": 1.8 }, h);
    mk("path", { d: "M-12 -14 C-2 -12 6 -12 13 -14 L13 -7 L-12 -7 Z", fill: c.robe, stroke: INK, "stroke-width": 1.3 }, h);
    // Caballo's sash: deep blue in the colour style (bible 7.42), red in the old palette
    if (o.role === "caballo") { mk("path", { d: "M-11 -34 L11 -18", stroke: c.sash || "#b8202e", "stroke-width": 4 }, h); mk("circle", { cx: -2, cy: -24, r: 3, fill: "#e2b33a", stroke: INK, "stroke-width": 1 }, h); }
    mk("path", { d: "M-1 -59 L2 -69 L6 -58Z", fill: F, stroke: INK, "stroke-width": 1.5 }, h);
    mk("path", { d: "M-8 -54 q-6 4 -5 10 M-11 -45 q-6 4 -5 10 M-13 -36 q-5 4 -4 10", stroke: col === "w" ? "#7a5530" : "#c9a27a", "stroke-width": 2, fill: "none" }, h);
    const E = o.expr || "neutral", eyeR = E === "surprised" ? 6 : 5.2;
    mk("ellipse", { cx: 6, cy: -50, rx: 4.6, ry: eyeR, fill: "#fff", stroke: INK, "stroke-width": 1.1 }, h);
    mk("circle", { cx: 7.6 + (o.lookDown ? 0.6 : 0), cy: -49.5 + (o.lookDown ? 1.6 : 0), r: 2.4, fill: INK }, h);
    // smug: a heavy upper lid and a raised brow, pleased with himself (the e7 knight, "but I avoided it", 15c, bible 7.86)
    if (E === "smug") mk("path", { d: "M1.6 -51.5 Q6 -56.5 10.4 -51.5 L10.4 -55.6 L1.6 -55.6 Z", fill: W_[col].f, stroke: INK, "stroke-width": 1.1 }, h);
    if (E === "smug") mk("path", { d: "M14.5 -38.5 q4 2.6 8 -0.6", stroke: INK, "stroke-width": 1.4, fill: "none", "stroke-linecap": "round" }, h);   // a small satisfied smile at the snout
    const bs = E === "furious" || E === "heroic" || E === "angry" || E === "stubborn" ? "M1 -55 l10 2.5" : E === "worried" || E === "pleading" || E === "apologetic" ? "M1 -57 l10 -3" : E === "smug" ? "M1 -58.5 q5 -3 10 -1" : "M1 -57.5 l10 -1.5";
    mk("path", { d: bs, stroke: col === "w" ? "#5a3a1e" : "#efe2cf", "stroke-width": 2, "stroke-linecap": "round" }, h);
    mk("circle", { cx: 20, cy: -43, r: 1.2, fill: INK }, h);
    if (o.talk) mk("path", { d: E === "heroic" || E === "furious" ? "M12 -40 Q18 -34 23 -40 Q18 -37 12 -40Z" : "M13 -39 Q18 -36 22 -39", fill: "#4a130d", stroke: INK, "stroke-width": 1.2 }, h);
    else mk("path", { d: "M13 -39 q4 2 8 1", stroke: INK, "stroke-width": 1.2, fill: "none" }, h); },
  b(g, col, c, o) { base(g, col); robe(g, 32, 6, c, o.back); mk("circle", { cx: 0, cy: -41, r: 10, fill: W_[col].f, stroke: INK, "stroke-width": 1.6 }, g);
    if (o.back) backHead(g, 0, -41, 10, col); else face(g, 0, -41, 10, col, o);
    const mc = col === "w" ? "#f2e3c2" : "#5b4a3c";
    mk("path", { d: "M-9 -47 C-11 -58 -5 -68 0 -74 C5 -68 11 -58 9 -47 C3 -49 -3 -49 -9 -47Z", fill: mc, stroke: INK, "stroke-width": 1.6 }, g);
    mk("path", { d: "M0 -73 V-48", stroke: c.trim, "stroke-width": 2.4 }, g);
    if (o.role === "alfil") for (const [x, y, r] of [[-4, -56, 1.6], [4, -62, 1.3], [5, -52, 1.4], [-3, -65, 1.1], [-6, -51, 1]]) mk("ellipse", { cx: x, cy: y, rx: r, ry: r * .8, fill: "#d9541e" }, g); },
  q(g, col, c, o) { base(g, col); robe(g, 40, 6, c, o.back);
    for (const [sw, cl] of [[7.4, INK], [5.6, c.hair]]) mk("path", { d: "M-11 -52 C-17 -42 -16 -32 -11 -27 M11 -52 C17 -42 16 -32 11 -27", stroke: cl, "stroke-width": sw, fill: "none", "stroke-linecap": "round" }, g);
    mk("circle", { cx: 0, cy: -50, r: 10.5, fill: W_[col].f, stroke: INK, "stroke-width": 1.6 }, g);
    if (o.back) { mk("path", { d: "M-11 -54 C-12 -44 -6 -38 0 -37 C6 -38 12 -44 11 -54 C8 -62 -8 -62 -11 -54Z", fill: c.hair, stroke: INK, "stroke-width": 1.2 }, g); }
    else { mk("path", { d: "M-11 -53 C-8 -64 8 -64 11 -53 C6 -59 -6 -59 -11 -53Z", fill: c.hair, stroke: INK, "stroke-width": 1 }, g); face(g, 0, -49, 10.5, col, Object.assign({}, o, { queenBrows: true })); }
    { const cg = crownG(g, -58, CROWN_SQ, CROWN_DYQ); crown(cg, -58, col, o.role === "regina", c); for (const x of [-12, 0, 12]) mk("circle", { cx: x, cy: x ? -69 : -71, r: 1.8, fill: CROWN_TRIM ? c.trim : W_[col].f, stroke: INK, "stroke-width": 1 }, cg); } },
  k(g, col, c, o) { base(g, col); robe(g, 44, 7, c, o.back); mk("circle", { cx: 0, cy: -57, r: 11.5, fill: W_[col].f, stroke: INK, "stroke-width": 1.7 }, g);
    if (o.role === "koning" && !o.back) for (const [x, cc] of [[-6, "#2e7a3a"], [5, "#1f4e8c"], [9, "#b8202e"]]) { mk("path", { d: `M${x-1.6} -38 L${x} -33 L${x+1.6} -38 Z`, fill: cc, stroke: INK, "stroke-width": .6 }, g); mk("circle", { cx: x, cy: -31.5, r: 2, fill: "#e2b33a", stroke: INK, "stroke-width": .6 }, g); }
    if (o.back) backHead(g, 0, -57, 11.5, col);
    else { const bc = col === "w" ? "#f4f0e6" : "#2a1d16"; const long = col === "w";
      mk("path", { d: `M-10 -53 C-11 ${long ? -40 : -46} 11 ${long ? -40 : -46} 10 -53 C5 -49 -5 -49 -10 -53Z`, fill: bc, stroke: INK, "stroke-width": 1.1 }, g);
      face(g, 0, -57, 11.5, col, Object.assign({ must: true, mustC: bc }, o)); }
    // the cross sunk into the crown, behind it, so the crown is in front of the cross; a longer lower leg keeps it clearly a cross (bible 7.53); P.crossSunk: false puts it back on top
    const crossD = (d, leg) => { const u = d - (leg || 0); return `M-2 ${-78 + d} V${-83 + u} H-6 V${-87 + u} H-2 V${-91 + u} H2 V${-87 + u} H6 V${-83 + u} H2 V${-78 + d} Z`; }, crossA = { fill: CROWN_TRIM ? c.trim : W_[col].f, stroke: INK, "stroke-width": 1.3 };
    if (CROSS_SUNK) mk("path", Object.assign({ d: crossD(5, 2.5) }, crossA), crownG(g, -66));
    crown(crownG(g, -66), -66, col, o.role === "koning", c);
    if (!CROSS_SUNK) mk("path", Object.assign({ d: crossD(0) }, crossA), crownG(g, -66)); }
};
function drawPiece(parent, p, sw) {
  const g = mk("g", { transform: `translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) scale(${p.s.toFixed(3)})` }, parent);
  const inner = p.o.lean ? mk("g", { transform: `rotate(${p.o.lean}) scale(1,${p.o.bow || 1})` }, g) : g;
  inner.setAttribute("style", `stroke-width:${sw}`);
  SPR[p.t](inner, p.col, p.c, p.o);
  if (!p.o.back) gestureArms(inner, p.t, p.col, p.c, p.o.gest);
  if (p.o.back && p.o.gest && p.o.gest !== "crossed") gestureArms(inner, p.t, p.col, p.c, p.o.gest);  // crossed arms are hidden in front of the body
  const [hy, hr] = HEAD[p.t];
  if (p.o.anger) { const sd = [].concat(p.o.gest || []).some(x => /-r$/.test(x)) ? -1 : 1, ax = sd > 0 ? hr * .75 : -hr * 1.55;
    mk("path", { d: `M${ax+hr*.15} ${hy-hr*1.1} q3 -5 6 0 M${ax+hr*.15} ${hy-hr*.6} q3 5 6 0 M${ax} ${hy-hr*.95} q-5 3 0 6 M${ax+hr*.8} ${hy-hr*.95} q5 3 0 6`, stroke: "#c0392b", "stroke-width": 1.7, fill: "none", "stroke-linecap": "round" }, inner); }
  if (p.o.sweat) for (const [dx, dy] of [[hr*1.2, hy-hr*.5], [hr*1.45, hy+hr*.1]]) mk("path", { d: `M${dx} ${dy} q3 -6 4 0 q-1 4 -4 0Z`, fill: "#bfe3f5", stroke: INK, "stroke-width": .9 }, inner);
  if (p.o.sigh) mk("path", { d: `M${hr*.9} ${hy+hr*.6} q6 -3 8 2 q4 -3 7 2 q-3 5 -8 3 q-4 4 -7 -7Z`, fill: "#f4f6f8", stroke: INK, "stroke-width": .9 }, inner);
  // waving: two short curved motion lines beside the raised hand (the d5 pawn in 15e, bible 7.83)
  if (p.o.gest === "wave-high") { const a = -68 * Math.PI / 180, s0 = SH[p.t], hx = 12 + Math.cos(a) * 25, hy = s0 + Math.sin(a) * 25; for (const [dx, r] of [[9, 7], [14, 11]]) mk("path", { d: `M${hx + dx} ${hy - r} q${r * 0.6} ${r} 0 ${r * 2}`, stroke: INK, "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }, inner); for (const [dx, r] of [[-9, 7]]) mk("path", { d: `M${hx + dx} ${hy - r} q${-r * 0.6} ${r} 0 ${r * 2}`, stroke: INK, "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }, inner); }
  if (p.o.shake) mk("path", { d: `M${-hr*1.8} ${hy-hr*1.6} l-6 -4 M${-hr*2} ${hy-hr*.8} l-7 0 M${hr*1.8} ${hy-hr*1.6} l6 -4`, stroke: INK, "stroke-width": 1.6, "stroke-linecap": "round" }, inner);
  if (p.o.whoosh) { const sd = p.o.whoosh, s0 = SH[p.t], wg = mk("g", { stroke: INK, "stroke-width": 1.8, "stroke-linecap": "round", fill: "none" }, inner);   // just pushed: short speed lines ahead of the hand (the h5 pawn in 14d, bible 7.50)
    for (const [dy, a, b] of [[-7, 36, 50], [0, 34, 54], [7, 36, 50]]) mk("path", { d: `M${sd * a} ${s0 + dy} L${sd * b} ${s0 + dy}` }, wg); }
  if (p.o.trail) { const [tx, ty] = p.o.trail, tl = Math.hypot(tx, ty) || 1, ux = tx / tl, uy = ty / tl, tg = mk("g", { stroke: INK, "stroke-width": 1.8, "stroke-linecap": "round", fill: "none" }, g);   // still moving: motion lines trailing behind the piece, along its direction of travel (Regina in 14d, bible 7.50)
    for (const [off, h, a, b] of [[-9, -44, 22, 40], [0, -30, 24, 46], [9, -16, 22, 40]]) { const px = -uy * off, py = ux * off; mk("path", { d: `M${px - ux * a} ${h + py - uy * a} L${px - ux * b} ${h + py - uy * b}` }, tg); } }
  // jolt: "bold" = a crown of bold jolt lines around the top (the a1 rook waking in 15a, bible 7.73)
  if (p.o.jolt) { const jg = mk("g", { stroke: INK, "stroke-width": p.o.jolt === "bold" ? 3.4 : 2.2, "stroke-linecap": "round", fill: "none" }, inner);   // startled awake: big jolt lines around the top, a jump streak under the felt (the a1 rook, bible 7.47)
    for (const [a, r1, r2] of (p.o.jolt === "bold" ? [[-160, 30, 52], [-130, 32, 58], [-100, 34, 62], [-80, 34, 62], [-50, 32, 58], [-20, 30, 52]] : [[-150, 30, 44], [-120, 32, 48], [-90, 34, 50], [-60, 32, 48], [-30, 30, 44]])) { const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180); mk("path", { d: `M${c * r1} ${-40 + s * r1} L${c * r2} ${-40 + s * r2}` }, jg); }
    for (const dx of [-8, 0, 8]) mk("path", { d: `M${dx} 10 l0 10`, "stroke-width": 1.6 }, jg); }
  if (p.o.zzz) [[10, -62, 9], [17, -73, 11], [26, -87, 13]].forEach(([zx, zy, fz]) => { const t = mk("text", { x: zx, y: zy, "font-family": "'Comic Neue','Comic Sans MS',cursive", "font-weight": 700, "font-size": fz, fill: "#f4f6f8", stroke: INK, "stroke-width": .8, "paint-order": "stroke" }, g); t.textContent = "Z"; });   // Zzz for the sleeping a1 rook: author exception (bible 7.45)
  return g;
}

// ---------------------------------------------------------------- panel
// Line breaks are measured in Comic Sans MS, as all approved balloons were (the export measured before the web font loaded),
// so every balloon keeps its approved lines; the balloon width is then measured in the embedded Comic Neue (bible 7.92).
// n (b.lines): break into at most n lines, measured in Comic Neue, as narrow as possible (15a)
function wrap(text, fs, maxW, n) { const cv = wrap.cv || (wrap.cv = document.createElement("canvas").getContext("2d"));
  // with n: a lone punctuation mark ("!", "?", ":") stays on the line of the word before it (1b-2, bible 7.98)
  const brk = mw => { const words = n ? text.split(" ").reduce((a, w) => (/^[!?:;.]+$/.test(w) && a.length ? a[a.length - 1] += " " + w : a.push(w), a), []) : text.split(" "), lines = []; let cur = ""; for (const w of words) { const t = cur ? cur + " " + w : w; if (cv.measureText(t).width > mw && cur) { lines.push(cur); cur = w; } else cur = t; } if (cur) lines.push(cur); return lines; };
  const wid = lines => Math.max(...lines.map(l => cv.measureText(l).width)), NEUE = `700 ${fs}px 'Comic Neue','Comic Sans MS',cursive`;
  if (n) { cv.font = NEUE; let lines = brk(1e4); for (let mw = 60; mw < 2000; mw += 4) { const l = brk(mw); if (l.length <= n) { lines = l; break; } } const w = wid(lines); return { lines, w0: w, w }; }
  cv.font = `700 ${fs}px 'Comic Sans MS',cursive`;
  const lines = brk(maxW), w0 = wid(lines);   // w0: the width as approved (Comic Sans MS)
  cv.font = NEUE;
  return { lines, w0, w: wid(lines) }; }

function camFor(P) {
  if (P.cam && P.cam.from) return [P.cam.from, P.cam.at, P.cam.f || 700];
  const c = P.cam || {}; const pts = (c.frame || ["e1"]).map(sq => (sq.length === 2 ? [...sqXY(sq)] : sq));
  const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
  const spread = Math.max(0.8, ...pts.map(p => Math.hypot(p[0] - cx, p[1] - cy) * 2));
  const side = c.side || "b", dist = (c.dist || 1.9) + spread * 0.9, h = (c.h || 1.55) + spread * 0.25, dir = side === "b" ? 1 : -1;
  const at = [cx, cy, c.th !== undefined ? c.th : 0.95], k = c.tele || 1.8;  // telephoto: same framing, flatter perspective, so near pawns do not swamp the speakers
  const from = [at[0] + (c.ox || 0) * k, at[1] + dir * dist * k, at[2] + (h - at[2]) * k * (c.lift || 2.6)];
  return [from, at, (c.f || 640) * k];
}

function renderPanel(svg, P, opts) {
  opts = opts || {}; usePalette(P.palette); CROWN_TRIM = P.crownTrim !== false; CROSS_SUNK = P.crossSunk !== false; CROWN_S = P.crownScale || 0.88; CROWN_DY = P.crownDrop !== undefined ? P.crownDrop : 1.7; CROWN_SQ = P.queenCrownScale || 0.8; CROWN_DYQ = P.queenCrownDrop !== undefined ? P.queenCrownDrop : 2;
  const W0 = P.wide ? 1634 : 800, H = P.tall ? 1160 : 570; svg.setAttribute("viewBox", `0 0 ${W0} ${H}`);  // tall: two strips high (prototype, last page)
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const defs = mk("defs", {}, svg);
  // the font: embedded from font.js when loaded (bible 7.92), else the Google Fonts link; opts.noFont when the page holding the panel embeds it once
  defs.innerHTML = `${opts.noFont ? "" : "<style>" + (window.MINIATUUR_FONT_CSS || "@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&amp;display=swap');") + "</style>"}
  <filter id="soft${P.id}" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="3"/></filter>
  <filter id="bb${P.id}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
  <pattern id="ht${P.id}" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="4.5" cy="4.5" r="1.5" fill="#000" opacity=".09"/></pattern>
  <clipPath id="clip${P.id}"><rect x="0" y="0" width="${W0}" height="${H}"/></clipPath>`;
  const root = mk("g", { "clip-path": `url(#clip${P.id})` }, svg);
  const state = P.state || 0, scene = P.scene || 1;
  // P.cam.zoom: zoom in by this factor while the screen point P.cam.pin ([x, y], default the centre) stays fixed (15b: the bottom-left corner, bible 7.92)
  const [C, T, F0] = camFor(P), ZM = (P.cam && P.cam.zoom) || 1, PIN = (P.cam && P.cam.pin) || [W0 / 2, H / 2], F = F0 * ZM, OX = PIN[0] + ZM * (W0 / 2 - PIN[0]), OY = PIN[1] + ZM * (H / 2 - PIN[1]), fw = nrm(sub(T, C)), rt = nrm(cr(fw, [0, 0, 1])), up = cr(rt, fw);
  const pr = (x, y, z) => { const v = sub([x, y, z || 0], C), d = dot(v, fw); return [OX + F * dot(v, rt) / Math.max(d, .01), OY - F * dot(v, up) / Math.max(d, .01), d]; };
  // the boebel is shaded smoothly (a blurred light and shadow layer, a stronger shadow side, a soft warm highlight; author decision, bible 7.70);
  // P.boebelStyle "now" draws the earlier square-cell shading
  const BS = P.boebelStyle || "A", RISE = P.clean ? 0 : (P.rise || 1);  // P.rise: a taller, clearer rise in one panel (16c, bible 7.39)
  // P.clean: a board without the three defects (no rise, no cola stain, no greasy spot), so the cover gives no joke away (bible 7.53)
  const bump = (x, y) => { const r = Math.hypot((x - 4) / 1.15, (y - 4) / 1.15); return r >= 1 ? 0 : 0.14 * RISE * (0.5 + 0.5 * Math.cos(Math.PI * r)); };
  const pz = (x, y) => pr(x, y, bump(x, y));
  // room background (soft, no people, no text)
  const bg = mk("g", { filter: `url(#soft${P.id})` }, root);
  // The room, the table and the board are one scene seen by one camera (bible 7.56): every surface is a polygon in board
  // coordinates (1 = one square, z = 0 the table top), clipped where it passes behind the camera, then projected.
  { const near = 0.15, cut = poly3 => { const out = [];
      for (let i = 0; i < poly3.length; i++) { const a = poly3[i], b = poly3[(i + 1) % poly3.length], da = dot(sub(a, C), fw) - near, db = dot(sub(b, C), fw) - near;
        if (da >= 0) out.push(a); if ((da >= 0) !== (db >= 0)) { const t = da / (da - db); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]); } }
      return out.map(p => pr(p[0], p[1], p[2])); };
    const draw = (poly3, a) => { const q = cut(poly3); if (q.length > 2) mk("polygon", Object.assign({ points: q.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ") }, a), bg); };   // soft, like the rest of the room
    // the chess club room: about 3.5 x 3 m, 2.5 m high; the floor 13 squares (75 cm) below the table top
    const RX0 = -26, RX1 = 34, RY0 = -22, RY1 = 30, FZ = -13, CZ = 30, at = (p, d, s, z) => [p[0] + d[0] * s, p[1] + d[1] * s, z];
    mk("rect", { width: W0, height: H, fill: "#dfe4d6" }, bg);
    draw([[RX0, RY0, CZ], [RX1, RY0, CZ], [RX1, RY1, CZ], [RX0, RY1, CZ]], { fill: "#dfe4d6" });   // ceiling
    const corners = [[RX0, RY0], [RX1, RY0], [RX1, RY1], [RX0, RY1]];
    corners.forEach((a, i) => { const b = corners[(i + 1) % 4], len = Math.hypot(b[0] - a[0], b[1] - a[1]), d = [(b[0] - a[0]) / len, (b[1] - a[1]) / len];
      const inw = [-d[1] * 0.05, d[0] * 0.05], w = (s, z) => [a[0] + d[0] * s + inw[0], a[1] + d[1] * s + inw[1], z];
      // the wall: pale green-grey, the side walls a shade darker so the corners read
      draw([[a[0], a[1], FZ], [b[0], b[1], FZ], [b[0], b[1], CZ], [a[0], a[1], CZ]], { fill: i % 2 ? "#c7d0bd" : "#cfd8c6" });
      // windows every 14 squares, 7 wide, from 70 cm to 170 cm above the floor, with a cross of glazing bars
      for (let s = 6; s + 7 <= len - 4; s += 14) {
        draw([w(s, -1), w(s + 7, -1), w(s + 7, 16), w(s, 16)], { fill: "#e9eedc", stroke: "#b9c2ad", "stroke-width": 4 });
        draw([w(s + 3.3, -1), w(s + 3.7, -1), w(s + 3.7, 16), w(s + 3.3, 16)], { fill: "#b9c2ad" });
        draw([w(s, 7.3), w(s + 7, 7.3), w(s + 7, 7.7), w(s, 7.7)], { fill: "#b9c2ad" }); }
      // a dark wooden skirting band along the bottom of the wall
      draw([w(0, FZ), w(len, FZ), w(len, FZ + 2.5), w(0, FZ + 2.5)], { fill: "#5d4330" }); });
    // the floor of the room, a darker warm grey (bible 7.56)
    draw([[RX0, RY0, FZ], [RX1, RY0, FZ], [RX1, RY1, FZ], [RX0, RY1, FZ]], { fill: "#7d7468" });
    // the table (bible 7.56): a real rectangle under the board, 13 squares deep (White to Black) and 20 squares long (rook to rook),
    // the board in the middle, with a thin edge; drawn with the board's camera, so it is seen from the same angle
    const X0 = -6, X1 = 14, Y0 = -2.5, Y1 = 10.5, TH = 0.45, top = [[X0, Y0, 0], [X1, Y0, 0], [X1, Y1, 0], [X0, Y1, 0]];
    for (let i = 0; i < 4; i++) { const a = top[i], b = top[(i + 1) % 4]; draw([a, b, [b[0], b[1], -TH], [a[0], a[1], -TH]], { fill: "#6c7a85", stroke: "#4b555d", "stroke-width": 1.5 }); }
    // light grey-blue: lighter than the black pieces, darker than the white pieces and the wall (bible 7.54; brown #8d6b4a until 7.53)
    draw(top, { fill: "#8f9ea8", stroke: "#5d6870", "stroke-width": 1.5 }); }
  mk("rect", { width: W0, height: H, fill: `url(#ht${P.id})` }, root);
  // board
  const poly = (pts, a, par) => { const q = pts.map(([x, y]) => pz(x, y)); if (q.some(p => p[2] < 0.25)) return; mk("polygon", Object.assign({ points: q.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ") }, a), par || root); };
  const bd = mk("g", {}, root);
  poly([[-0.4, -0.4], [8.4, -0.4], [8.4, 8.4], [-0.4, 8.4]], { fill: "#7a5a3c" }, bd);
  for (let s = 0; s < 8; s++) for (const r of [[[s, -0.15], [s + 1, -0.15], [s + 1, 0], [s, 0]], [[8, s], [8.15, s], [8.15, s + 1], [8, s + 1]], [[-0.15, s], [0, s], [0, s + 1], [-0.15, s + 1]], [[s, 8], [s + 1, 8], [s + 1, 8.15], [s, 8.15]]]) poly(r, { fill: BOARD.frame, stroke: INK, "stroke-width": .5 }, bd);
  for (let i = 0; i < 8; i++) for (let n = 1; n <= 8; n++) { const a = n - 1, pts = []; const K = BS !== "now" && i >= 2 && i <= 5 && a >= 2 && a <= 5 ? 10 : 4; for (let k = 0; k < K; k++) pts.push([i + k / K, a]); for (let k = 0; k < K; k++) pts.push([i + 1, a + k / K]); for (let k = 0; k < K; k++) pts.push([i + 1 - k / K, a + 1]); for (let k = 0; k < K; k++) pts.push([i, a + 1 - k / K]); poly(pts, { fill: (i + n) % 2 ? BOARD.dark : BOARD.light, stroke: BOARD.line, "stroke-width": .6 }, bd); }
  { const shG = mk("g", { filter: `url(#bb${P.id})` }, bd); const hx = C[0] - 4, hy = C[1] - 4, hl = Math.hypot(hx, hy) || 1, L = nrm([hx / hl * .55 - .25 * hy / hl, hy / hl * .55 + .25 * hx / hl, 1]), G = 0.08, flat = L[2];
    for (let x = 2.8; x < 5.2; x += G) for (let y = 2.8; y < 5.2; y += G) { const cx = x + G / 2, cy = y + G / 2; if (bump(cx, cy) <= .001) continue; const e = .01, dzx = (bump(cx + e, cy) - bump(cx - e, cy)) / (2 * e), dzy = (bump(cx, cy + e) - bump(cx, cy - e)) / (2 * e), v = dot(nrm([-dzx, -dzy, 1]), L) - flat; if (Math.abs(v) < .004) continue; poly([[x, y], [x + G, y], [x + G, y + G], [x, y + G]], BS === "now" ? { fill: v > 0 ? "#fff" : "#000", opacity: Math.min((v > 0 ? .55 : .2) * Math.sqrt(RISE), Math.abs(v) * (v > 0 ? 5 : 2)).toFixed(3) } : { fill: v > 0 ? "#fff3d6" : "#1a0e06", opacity: Math.min(v > 0 ? .32 : .5, Math.abs(v) * (v > 0 ? 3 : 4)).toFixed(3) }, BS === "now" ? bd : shG); }
  }
  const colaExplicit = scene >= 15, f3Explicit = scene >= 9;
  // explicit cola in colour (author decision, bible 7.67; 15c and 15d): P.colaStyle = [edge, middle, core]: dark red-brown edge,
  // near-black middle, a glossy shine and many tiny fizz dots
  // the cola stain on f6 in every panel except 15c and 15d (author decision, bible 7.68): the shape of the explicit stain, two flat dark tones,
  // no shine, no fizz dots, darker, so it stays in the background
  if (!P.clean && !P.colaStyle) { const [sE, sC, sO] = P.colaSubtle || ["#3e1a0e", "#2a0f07", 0.9], cx0 = 5.48, cy0 = 5.52;
    const blob = (r, k) => Array.from({ length: 18 }, (_, i) => { const a = i / 18 * Math.PI * 2, w = 1 + 0.12 * Math.sin(a * 3 + k) + 0.07 * Math.cos(a * 5 + k); return [cx0 + Math.cos(a) * r * w, cy0 + Math.sin(a) * r * 0.92 * w]; });
    poly(blob(0.45, 1), { fill: sE, opacity: sO }, bd); poly(blob(0.32, 2), { fill: sC, opacity: sO }, bd); }
  if (colaExplicit && !P.clean && P.colaStyle) { const [cE, cM, cC] = P.colaStyle, cx0 = 5.48, cy0 = 5.52;
    const blob = (r, k) => Array.from({ length: 18 }, (_, i) => { const a = i / 18 * Math.PI * 2, w = 1 + 0.12 * Math.sin(a * 3 + k) + 0.07 * Math.cos(a * 5 + k); return [cx0 + Math.cos(a) * r * w, cy0 + Math.sin(a) * r * 0.92 * w]; });
    poly(blob(0.45, 1), { fill: cE, stroke: "#2a0c04", "stroke-width": 1.2 }, bd);
    poly(blob(0.36, 2), { fill: cM }, bd); poly(blob(0.26, 3), { fill: cC }, bd);
    poly([[5.26, 5.62], [5.42, 5.7], [5.5, 5.66], [5.34, 5.58]], { fill: "#fff6e0", opacity: .75 }, bd);
    poly([[5.58, 5.36], [5.66, 5.34], [5.7, 5.38], [5.6, 5.4]], { fill: "#fff6e0", opacity: .7 }, bd);
    // fizz: many tiny light dots, denser towards the edge of the puddle
    let sd = 7; const rnd = () => (sd = (sd * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 46; i++) { const a = rnd() * Math.PI * 2, rr = 0.42 * Math.sqrt(0.15 + 0.85 * rnd()), bx = cx0 + Math.cos(a) * rr, by = cy0 + Math.sin(a) * rr * 0.92, br = 0.007 + rnd() * 0.009;
      poly(Array.from({ length: 6 }, (_, j) => { const b = j / 6 * Math.PI * 2; return [bx + Math.cos(b) * br, by + Math.sin(b) * br]; }), { fill: "#f2dfbd", opacity: .9 }, bd); } }
  // the greasy spot on f3 (author decision, bible 7.72): an irregular translucent yellowish smear, smeared out to the sides with a few
  // greasy drops, a slight shine; faint before Scene 9 (P.greaseStyle "A" or "C" kept for comparison)
  if (!P.clean) { const gs = P.greaseStyle || "B", cx0 = 5.5, cy0 = 2.5, a0 = f3Explicit ? 1 : 0.35;
    const blob = (r, ry, k, n) => Array.from({ length: n || 22 }, (_, i) => { const a = i / (n || 22) * Math.PI * 2, w = 1 + 0.18 * Math.sin(a * 3 + k) + 0.1 * Math.cos(a * 5 + 2 * k); return [cx0 + Math.cos(a) * r * w, cy0 + Math.sin(a) * ry * w]; });
    poly(blob(0.36, 0.26, 0.7), { fill: "#b89a3a", opacity: (0.38 * a0).toFixed(2) }, bd);
    poly(blob(0.24, 0.17, 2.1), { fill: "#a88a2c", opacity: (0.35 * a0).toFixed(2) }, bd);
    if (gs !== "A") { for (const [dx, dy, l, w] of [[0.3, -0.12, 0.28, 0.05], [0.26, 0.1, 0.2, 0.04], [-0.32, 0.06, 0.18, 0.04]]) poly([[cx0 + dx, cy0 + dy - w], [cx0 + dx + l, cy0 + dy - w * 0.4], [cx0 + dx + l, cy0 + dy + w * 0.4], [cx0 + dx, cy0 + dy + w]], { fill: "#b89a3a", opacity: (0.32 * a0).toFixed(2) }, bd);
      for (const [dx, dy, r] of [[0.66, -0.06, 0.035], [0.6, 0.16, 0.025], [-0.5, -0.14, 0.03]]) poly(Array.from({ length: 8 }, (_, j) => { const b = j / 8 * Math.PI * 2; return [cx0 + dx + Math.cos(b) * r, cy0 + dy + Math.sin(b) * r * 0.7]; }), { fill: "#a88a2c", opacity: (0.45 * a0).toFixed(2) }, bd); }
    if (gs === "C" && f3Explicit) for (const [c, dx, dy] of [["#e88a9c", -0.06, -0.03], ["#8ad0e8", 0.03, 0.01], ["#c8e88a", 0.1, 0.05]]) poly([[cx0 + dx - 0.16, cy0 + dy - 0.03], [cx0 + dx + 0.12, cy0 + dy - 0.07], [cx0 + dx + 0.16, cy0 + dy - 0.03], [cx0 + dx - 0.12, cy0 + dy + 0.01]], { fill: c, opacity: .35 }, bd);
    if (f3Explicit) { poly(blob(0.07, 0.035, 1, 10).map(([x, y]) => [x - 0.1, y - 0.06]), { fill: "#fffbe0", opacity: .75 }, bd); poly(blob(0.035, 0.018, 2, 8).map(([x, y]) => [x + 0.08, y + 0.04]), { fill: "#fffbe0", opacity: .6 }, bd); } }
  // P.slide = { from, to, hop }: a captured piece taken off the board, three dashed white lines from its square to where it now stands, like the move marks (Regina in 14d, bible 7.88)
  if (P.slide) { const hop = P.slide.hop || 0, [a, b] = [P.slide.from, P.slide.to], L = Math.hypot(b[0] - a[0], b[1] - a[1]), u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n = [-u[1], u[0]];
    for (const k of [-0.18, 0, 0.18]) { const pts = Array.from({ length: 12 }, (_, i) => { const t = 0.05 + 0.82 * i / 11; return pr(a[0] + u[0] * L * t + n[0] * k, a[1] + u[1] * L * t + n[1] * k, 0.02 + hop * 4 * t * (1 - t)); });
      if (pts.some(p => p[2] < 0.2)) continue; const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
      mk("path", { d, stroke: INK, "stroke-width": 7, fill: "none", "stroke-dasharray": "20 12", "stroke-linecap": "round" }, root); mk("path", { d, stroke: "#fffaf0", "stroke-width": 4, fill: "none", "stroke-dasharray": "20 12", "stroke-linecap": "round" }, root); } }
  // a DGT 2010-style digital chess clock beside the board (the author's addition to the setting, bible 7.89): on the table on White's right, beside the h-file, display towards the board.
  // Every part is a closed convex solid (8 corners) whose faces are culled against the camera, so you never look inside:
  // a low bordeaux wedge (vertical back towards the board, a long sloping front facing away), a grey face plate on the slope with
  // one wide display (no digits) and five small buttons below it, and one black rocker bar across the top, tilted (one side pressed).
  const CLK = P.clock === false ? null : (P.clock || {});   // the clock stands in every panel (bible 7.89); P.clock = false leaves it out (the cover)
  const drawClock = () => { const [cx0, cy0] = CLK.at || [9.6, 4], sd = cx0 < 4 ? -1 : 1, k = CLK.faceBoard === false ? -sd : sd, cg = mk("g", {}, root);   // faceBoard (default): the display faces the board
    const V = (x, y, z) => [cx0 + k * x, cy0 + y, z];   // local x: the front (x < 0) faces the board when faceBoard
    const poly3 = (pts, a) => { const q = pts.map(p => pr(...p)); if (q.some(p => p[2] < 0.2)) return; mk("polygon", Object.assign({ points: q.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" "), stroke: INK, "stroke-width": 1.3, "stroke-linejoin": "round" }, a), cg); };
    // a convex solid from 4 bottom and 4 top corners (same order); fills: { top, bottom, sides: [4] }
    const solid = (bot, top, fills) => { const all = bot.concat(top), c = all.reduce((s, p) => [s[0] + p[0] / 8, s[1] + p[1] / 8, s[2] + p[2] / 8], [0, 0, 0]);
      const faces = [[bot.slice().reverse(), fills.bottom], [top, fills.top]].concat([0, 1, 2, 3].map(i => [[bot[i], bot[(i + 1) % 4], top[(i + 1) % 4], top[i]], fills.sides[i]]));
      for (const [f, fill] of faces) { if (!fill) continue; const n = cr(sub(f[1], f[0]), sub(f[2], f[0])), fc = f.reduce((s, p) => [s[0] + p[0] / f.length, s[1] + p[1] / f.length, s[2] + p[2] / f.length], [0, 0, 0]);
        const out = dot(n, sub(fc, c)) > 0 ? n : n.map(v => -v); if (dot(out, sub(C, fc)) > 0) poly3(f, { fill }); } };
    const L2 = 1.3, D = 0.55, H = 0.5, xf = -0.15, BOR = "#6e1a2b", BOR_D = "#4e1220", BOR_T = "#86283a";
    // the body: bottom from x -D (front) to D (back), top from xf to D
    solid([V(-D, -L2, 0), V(D, -L2, 0), V(D, L2, 0), V(-D, L2, 0)], [V(xf, -L2, H), V(D, -L2, H), V(D, L2, H), V(xf, L2, H)],
      { top: BOR_T, bottom: null, sides: [BOR_D, "#5a1524", BOR_D, BOR] });
    // the face plate and display on the sloping front, raised a hair so they sit on top of it
    const sl = [xf + D, H], sn = Math.hypot(...sl), nx = -sl[1] / sn * 0.006, nz = sl[0] / sn * 0.006;
    const S3 = (t, y) => V(-D + sl[0] * t + nx, y, sl[1] * t + nz);
    const front = dot([k * (-sl[1]), 0, sl[0]], sub(C, V(-D + sl[0] / 2, 0, H / 2))) > 0;
    if (front) { poly3([S3(0.1, -L2 * 0.9), S3(0.1, L2 * 0.9), S3(0.92, L2 * 0.9), S3(0.92, -L2 * 0.9)], { fill: "#3a3a3d", "stroke-width": 1 });   // dark grey face plate
      poly3([S3(0.45, -L2 * 0.7), S3(0.45, L2 * 0.7), S3(0.86, L2 * 0.7), S3(0.86, -L2 * 0.7)], { fill: "#a7b5a0", "stroke-width": 1 });   // the display, no digits
      poly3([S3(0.76, -L2 * 0.62), S3(0.76, -L2 * 0.1), S3(0.82, -L2 * 0.13), S3(0.82, -L2 * 0.62)], { fill: "#c9d4c4", stroke: "none" });   // a faint glare
      for (let k = -2; k <= 2; k++) { const y = k * L2 * 0.2, r = 0.06; poly3([S3(0.18, y - r), S3(0.18, y + r), S3(0.32, y + r), S3(0.32, y - r)], { fill: k ? "#151515" : "#2f6fb0", "stroke-width": 0.8 }); } }   // five buttons
    // the rocker bar: one closed bar across the top, tilted about the middle; P.clockUp "w" raises the white end (towards rank 1), else the black end (bible 7.93)
    const b0 = xf + 0.12, b1 = D - 0.1, bw = L2 * 0.88, z0 = H, tilt = (P.clockUp === "w" ? -1 : 1) * 0.07, th = 0.1;
    solid([V(b0, -bw, z0), V(b1, -bw, z0), V(b1, bw, z0), V(b0, bw, z0)], [V(b0, -bw, z0 + th - tilt), V(b1, -bw, z0 + th - tilt), V(b1, bw, z0 + th + tilt), V(b0, bw, z0 + th + tilt)],
      { top: "#2a2a2a", bottom: null, sides: ["#141414", "#141414", "#141414", "#1c1c1c"] }); };
  // pieces
  const items = [], cast = P.cast || {};
  // P.stage: pieces placed at free positions on the board, in addition to the board state; P.omit: squares of the board state not drawn
  // (the kings' handshake in the middle of the board, the other pieces back on their starting squares: bible 7.38, 7.39)
  FEN[state].split("/").forEach((row, ri) => { let i = 0; for (const ch of row) { if (/\d/.test(ch)) { i += +ch; continue; } const n = 8 - ri, sq = "abcdefgh"[i] + n; if (!(P.omit || []).includes(sq)) items.push({ sq, ch, x0: i + .5, y0: n - .5 }); i++; } });
  for (const st of (P.stage || [])) items.push({ sq: st.id, ch: st.ch, x0: st.at[0], y0: st.at[1], role: st.role });
  for (const b of (P.beside || [])) items.push({ sq: b.id, ch: b.ch, x0: b.at[0], y0: b.at[1], beside: true, role: b.role });
  const placed = [];
  for (const it of items) {
    const col = it.ch === it.ch.toUpperCase() ? "w" : "b", t = it.ch.toLowerCase(), role = it.role || roleOf(it.sq, it.ch, state);
    const [x, y, d] = pr(it.x0, it.y0, it.beside ? 0 : bump(it.x0, it.y0)); if (d < 0.7) continue;
    const ov = Object.assign({}, cast[it.sq] || {}, role ? cast[role] || {} : {});
    const faceDir = col === "w" ? 1 : -1, back = ov.back !== undefined ? ov.back : (C[1] - it.y0) * faceDir < 0;
    const o = Object.assign({ role, back, must: !it.beside && pawnHasMoustache(it.sq, it.ch, state) }, ov);
    // a piece standing on the boebel (d4, e4, d5 or e5) leans with the slope, away from the top of the rise, by 5 degrees as the kings
    // in 16c (author decision, bible 7.57); seen straight along the slope the lean is towards or away from the camera, so it does not show
    if (!it.beside && !P.clean && o.lean === undefined && it.x0 > 3 && it.x0 < 5 && it.y0 > 3 && it.y0 < 5) {
      const e = .01, nz = nrm([-(bump(it.x0 + e, it.y0) - bump(it.x0 - e, it.y0)) / (2 * e), -(bump(it.x0, it.y0 + e) - bump(it.x0, it.y0 - e)) / (2 * e), 1]);
      const z0 = bump(it.x0, it.y0), tip = pr(it.x0 + nz[0], it.y0 + nz[1], z0 + nz[2]), upr = pr(it.x0, it.y0, z0 + 1);
      const ang = (Math.atan2(tip[0] - x, y - tip[1]) - Math.atan2(upr[0] - x, y - upr[1])) * 180 / Math.PI;
      if (Math.abs(ang) > 0.5) o.lean = 5 * Math.sign(ang); }
    // pawn solidarity during the mutiny (bible Section 7, author decisions 7.10 and 7.81): crossed arms and the grumpy face of 2b
    if (P.crossArms && it.ch === "P" && !it.beside) { o.gest = "crossed"; if (!ov.expr) o.expr = "stubborn"; }
    // knights face the centre files (bible Section 6, 7.46): seen from White's or Black's side (camera looking along the files) they turn towards
    // the d- and e-files; seen from the side (camera looking along the ranks) towards the middle of the board, between the armies
    if (t === "n") { const side = Math.abs(fw[0]) > Math.abs(fw[1]), onCentre = it.x0 > 3 && it.x0 < 5; o.dir = pr(4, side && !onCentre ? 4 : it.y0, 0)[0] > x ? 1 : -1; }
    if (o.lookAt && t === "n" && /^[a-h][1-8]$/.test(o.lookAt)) { const sx = pr(...sqXY(o.lookAt), 0)[0]; o.dir = sx > x ? 1 : -1; }   // a knight staring at a square turns towards it
    if (o.lookAt) { const tg = items.find(q => q.sq === o.lookAt || roleOf(q.sq, q.ch, state) === o.lookAt || q.role === o.lookAt) || (/^[a-h][1-8]$/.test(o.lookAt) ? { x0: sqXY(o.lookAt)[0], y0: sqXY(o.lookAt)[1] } : null); if (tg) { const tx = pr(tg.x0, tg.y0, 0)[0]; o.look = tx < x - 4 ? -1 : tx > x + 4 ? 1 : 0; } }
    const s = F / d / 50;
    placed.push({ t, col, o, x, y: y - (o.jump || 0) * s, d, s, sq: it.sq, role, c: costumeOf(t, col, role) });   // o.jump: lifted off the square (startled, bible 7.47)
  }
  placed.sort((a, b) => b.d - a.d);
  // move indicators (fx.move = [from, to]); P.moveStyle picks the style (prototype after bible 7.58): "now" (the dashed arcs), or
  // "A" speed lines on the board for sliding pieces / a dotted jump arc for knights, "B" a ghost on the start square with a track,
  // "C" an arrow on the board for sliding pieces / an arched arrow over the board for knights
  // depth-sorted move marks: a mark queued with a slot is drawn just before the piece with that index (pieces are drawn far to near),
  // so a knight's jump passes behind the pieces nearer to the camera and in front of the pieces farther away
  const slotQ = [], slotFx = i => { for (const q of slotQ) if (q.slot === i) q.draw(); }, slotOf = dd => placed.filter(p => p.d > dd).length;
  const moveFx = (fx, phase) => { const [a, b] = fx.move, style = P.moveStyle || "D4", A0 = sqXY(a), B0 = sqXY(b);
    const sp = placed.find(p => p.sq === b) || placed.find(p => p.role && items.some(q => q.sq === b && (q.role || roleOf(q.sq, q.ch, state)) === p.role));
    const knight = sp ? sp.t === "n" : false, L = Math.hypot(B0[0] - A0[0], B0[1] - A0[1]), u = [(B0[0] - A0[0]) / L, (B0[1] - A0[1]) / L], n = [-u[1], u[0]];
    const on = (x, y, h) => pr(x, y, bump(x, y) + (h || 0.03)), line = (pts, a2, par) => mk("polyline", Object.assign({ points: pts.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" "), fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" }, a2), par);
    const arc = (z0, apex, z1, t0, t1, k) => Array.from({ length: k + 1 }, (_, i) => { const t = t0 + (t1 - t0) * i / k; return pr(A0[0] + (B0[0] - A0[0]) * t, A0[1] + (B0[1] - A0[1]) * t, z0 + (z1 - z0) * t + apex * 4 * t * (1 - t)); });
    const g = mk("g", {}, root);
    // flat comic marks, drawn on the page (not in 3D), so they read from every camera angle
    const q0 = pr(A0[0], A0[1], bump(...A0)), q1 = sp ? [sp.x, sp.y] : pr(B0[0], B0[1], bump(...B0)), sc = sp ? sp.s : 1;
    const dx = q1[0] - q0[0], dy = q1[1] - q0[1], dl = Math.hypot(dx, dy) || 1, ux = dx / dl, uy = dy / dl;
    const hop = (H, tEnd) => { const side = Math.abs(dx) > 30 ? 0 : (q1[0] > W0 / 2 ? -1 : 1) * H * 0.6, c1 = [q0[0] + side, q0[1] - H * 1.3], c2 = [q1[0] + side, q1[1] - 70 * sc - H];
      return Array.from({ length: 31 }, (_, i) => { const t = tEnd * i / 30, m = 1 - t; return [m * m * m * q0[0] + 3 * m * m * t * c1[0] + 3 * m * t * t * c2[0] + t * t * t * q1[0], m * m * m * q0[1] + 3 * m * m * t * c1[1] + 3 * m * t * t * c2[1] + t * t * t * (q1[1] - 70 * sc)]; }); };
    const H = Math.max(70, Math.min(160, dl * 0.5));
    const P0D = (t, k) => [A0[0] + u[0] * t * L + n[0] * k, A0[1] + u[1] * t * L + n[1] * k];
    // style D (author idea after 7.58): the dashed arcs kept, but a knight's are a hop arc on the page and a sliding piece's run flat
    // along the board; "D+" adds landing ticks under the knight and a little scuff at the end of a slide, "Dg" a faint ghost on the start square
    if (style[0] === "D") { const dash = (pts, par) => { for (const [c, w] of [[INK, 7], ["#fffaf0", 4]]) line(pts, { stroke: c, "stroke-width": w, "stroke-dasharray": "20 12" }, par); };
      // refinements of D for the knight (author feedback): the jump ends on the target square. D1: the arc lies in the scene, from the
      // centre of the start square to the centre of the target square; D2: a hop on the page from the start square's foot to the target
      // square's foot; D3: as D1, and for every move the start square is outlined with a dashed line (sliding pieces too)
      const ticks = () => { for (const k of [-1, 1]) for (const j of [0, 1]) line([[q1[0] + k * (24 + j * 6) * sc, q1[1] - (2 + j * 9) * sc], [q1[0] + k * (40 + j * 10) * sc, q1[1] - (4 + j * 16) * sc]], { stroke: INK, "stroke-width": 3 }, g); };
      const arc3 = (k, h) => Array.from({ length: 29 }, (_, i) => { const t = 0.04 + 0.96 * i / 28, x = A0[0] + (B0[0] - A0[0]) * t + n[0] * k, y = A0[1] + (B0[1] - A0[1]) * t + n[1] * k; return pr(x, y, bump(x, y) + 0.03 + h * 4 * t * (1 - t)); });
      // the part of the jump that comes down behind the knight is drawn behind it, so the knight stands in front of its own landing
      const split = pts => { const i = sp ? pts.findIndex((p, j) => j > pts.length / 2 && Math.abs(p[0] - sp.x) < 30 * sp.s && p[1] > sp.y - 100 * sp.s) : -1; return i < 0 ? [pts, []] : [pts.slice(0, i + 1), pts.slice(i)]; };
      if (knight && (style === "D1" || style === "D3")) { for (const k of [-0.16, 0, 0.16]) dash(split(arc3(k, 1.4))[phase === "front" ? 0 : 1], g); if (phase === "front") { ticks(); return; } }
      // D4 (refined D2, author feedback on 13b): a higher, rounder hop on the page, raised until it crosses no face or hat, its three lines
      // offset across the path, coming down steeply onto the target square behind the knight; a take-off puff on the start square (slides too)
      const puff = (pt, s1) => { for (const [dx2, dy2, r] of [[-14, 0, 6], [0, -5, 7.5], [14, 0, 6]]) mk("circle", { cx: pt[0] + dx2 * s1, cy: pt[1] + dy2 * s1, r: r * s1, fill: "#fffaf0", stroke: INK, "stroke-width": 2 }, g); };
      if (style === "D4") {
        // (no take-off puff: author feedback)
        if (knight) { const xa = Math.min(q0[0], q1[0]), xb = Math.max(q0[0], q1[0]), others = placed.filter(p => p !== sp && p.s > 0.3 && p.head && p.head[0] > xa && p.head[0] < xb && p.d < Math.max(sp.d, 1) * 1.15), crosses = pts => pts.some(([x, y]) => others.some(p => Math.abs(x - p.head[0]) < 18 * p.s && y > p.top - 4 && y < p.mouth[1] + 6 * p.s));
          const curve = Hb => { const c1 = [q0[0], q0[1] - Hb * 1.25], c2 = [q1[0], q1[1] - Hb * 1.1]; return Array.from({ length: 41 }, (_, i) => { const t = i / 40, m = 1 - t; return [m * m * m * q0[0] + 3 * m * m * t * c1[0] + 3 * m * t * t * c2[0] + t * t * t * q1[0], m * m * m * q0[1] + 3 * m * m * t * c1[1] + 3 * m * t * t * c2[1] + t * t * t * q1[1]]; }); };
          const Hmax = Math.max(60, (Math.min(q0[1], q1[1]) - 40) / 1.0); const hf = P.hopH || 0.5; let Hb = Math.min(Hmax, Math.max(100 * sc * hf, dl * 0.3 * hf)), pts = curve(Hb);
          const offs = off => pts.map((p, i) => { const a2 = pts[Math.max(0, i - 1)], b2 = pts[Math.min(pts.length - 1, i + 1)], tl = Math.hypot(b2[0] - a2[0], b2[1] - a2[1]) || 1; return [p[0] - (b2[1] - a2[1]) / tl * off, p[1] + (b2[0] - a2[0]) / tl * off]; });
          if (phase === "behind") { const n3 = pts.length - 1, dep = pts.map((_, i) => { const t = i / n3, x = A0[0] + (B0[0] - A0[0]) * t, y = A0[1] + (B0[1] - A0[1]) * t, dd = pr(x, y, bump(x, y))[2]; return t > 0.7 ? Math.max(dd, sp.d + 1e-3) : dd; });
            for (const off of [-11, 0, 11]) { const lp = offs(off), cum = [0]; for (let i = 1; i <= n3; i++) cum.push(cum[i - 1] + Math.hypot(lp[i][0] - lp[i - 1][0], lp[i][1] - lp[i - 1][1]));
              let i0 = 0; for (let i = 1; i <= n3; i++) { const s0 = slotOf((dep[i0] + dep[i0 + 1]) / 2), s1 = i < n3 ? slotOf((dep[i] + dep[i + 1]) / 2) : -1; if (s1 !== s0) { const seg = lp.slice(i0, i + 1), off0 = cum[i0];
                slotQ.push({ slot: s0, draw: () => { for (const [c, w] of [[INK, 7], ["#fffaf0", 4]]) line(seg, { stroke: c, "stroke-width": w, "stroke-dasharray": "20 12", "stroke-dashoffset": -off0 }, root); } }); i0 = i; } } } }
          if (phase === "front") ticks(); }
        // a slide straight towards or away from the camera: the track would hide behind the piece and stick out above its head,
        // so its lines run on both sides of the piece instead, like skid marks
        else if (phase === "behind") { const along = Math.abs(ux) < 0.45, t1 = along ? 1 : 1 - 0.3 / L; for (const k of (along ? [-0.32, 0, 0.32] : [-0.16, 0, 0.16])) dash(Array.from({ length: 14 }, (_, i) => on(...P0D(0.05 + (t1 - 0.05) * i / 13, k))), g); }
        return; }
      if (knight && style === "D2") { const Hb = Math.max(80, Math.min(170, dl * 0.6)), c1 = [q0[0], q0[1] - Hb], c2 = [q1[0], q1[1] - Hb];
        for (const off of [-10, 0, 10]) dash(split(Array.from({ length: 31 }, (_, i) => { const t = i / 30, m = 1 - t; return [m * m * m * q0[0] + 3 * m * m * t * c1[0] + 3 * m * t * t * c2[0] + t * t * t * q1[0] + off, m * m * m * q0[1] + 3 * m * m * t * c1[1] + 3 * m * t * t * c2[1] + t * t * t * q1[1]]; }))[phase === "front" ? 0 : 1], g); if (phase === "front") { ticks(); return; } }
      if (phase === "behind" && style === "D3") { const sq = [[-0.44, -0.44], [0.44, -0.44], [0.44, 0.44], [-0.44, 0.44]], pts = []; for (let i = 0; i < 4; i++) for (let j = 0; j < 8; j++) { const a2 = sq[i], b2 = sq[(i + 1) % 4]; pts.push(on(A0[0] + a2[0] + (b2[0] - a2[0]) * j / 8, A0[1] + a2[1] + (b2[1] - a2[1]) * j / 8)); }
        pts.push(pts[0]); line(pts, { stroke: INK, "stroke-width": 6, "stroke-dasharray": "14 9" }, g); line(pts, { stroke: "#fffaf0", "stroke-width": 3, "stroke-dasharray": "14 9" }, g); }
      if (phase === "behind") {
        if (style === "Dg" && sp) { const [gx, gy, gd] = pr(A0[0], A0[1], bump(...A0)); const gs = F / gd / 50, gh = mk("g", { opacity: .3 }, g);
          drawPiece(gh, Object.assign({}, sp, { x: gx, y: gy, d: gd, s: gs, o: Object.assign({}, sp.o, { talk: false, gest: undefined, shake: false }) }), (Math.max(0.8, Math.min(2.2, 1.9 / Math.sqrt(gs)))).toFixed(2)); }
        if (!knight) { const t1 = 1 - 0.3 / L; for (const k of [-0.16, 0, 0.16]) dash(Array.from({ length: 14 }, (_, i) => on(...P0D(0.05 + (t1 - 0.05) * i / 13, k))), g);
          if (style === "D+") { const e = on(...P0D(1 - 0.42 / L, 0)); for (const j of [-1, 1]) line([[e[0] + j * 30 * sc, e[1] + 4 * sc], [e[0] + j * 42 * sc, e[1] - 6 * sc]], { stroke: INK, "stroke-width": 3 }, g); } }
        return; }
      if (knight) { for (const off of [-12, 0, 12]) dash(hop(H, 0.92).map(p => [p[0], p[1] + off]), g);
        if (style === "D+") for (const k of [-1, 1]) for (const j of [0, 1]) line([[q1[0] + k * (24 + j * 6) * sc, q1[1] - (2 + j * 9) * sc], [q1[0] + k * (40 + j * 10) * sc, q1[1] - (4 + j * 16) * sc]], { stroke: INK, "stroke-width": 3 }, g); }
      return; }
    if (style[0] !== "D" && (style === "now") !== (phase === "behind") && !(style === "B" && phase === "behind")) return;
    if (style === "B" && phase === "behind") { if (!sp) return; } else if (style === "now") { const p0 = pr(...A0, 0.4), p1 = pr(...B0, 0.4); const gg = mk("g", { stroke: "#fffaf0", "stroke-linecap": "round", opacity: .95 }, g); for (const off of [-12, 0, 12]) { const dd = `M${p0[0]} ${p0[1] + off} Q${(p0[0] + p1[0]) / 2} ${Math.min(p0[1], p1[1]) - 60 + off} ${p1[0]} ${p1[1] + off}`; mk("path", { d: dd, stroke: INK, "stroke-width": 7, fill: "none", "stroke-dasharray": "20 12" }, gg); mk("path", { d: dd, stroke: "#fffaf0", "stroke-width": 4, fill: "none", "stroke-dasharray": "20 12" }, gg); } return; }
    if (style === "B" && phase === "behind") {   // the piece as a faint ghost on its start square
      const [gx, gy, gd] = pr(A0[0], A0[1], bump(...A0)); const gs = F / gd / 50, gh = mk("g", { opacity: .32 }, g);
      drawPiece(gh, Object.assign({}, sp, { x: gx, y: gy, d: gd, s: gs, o: Object.assign({}, sp.o, { talk: false, gest: undefined, shake: false }) }), (Math.max(0.8, Math.min(2.2, 1.9 / Math.sqrt(gs)))).toFixed(2)); }
    if (phase === "behind") return;
    if (knight) {
      if (style === "A") { const pts = hop(H, 0.93).filter((p, i) => i % 2 === 0); pts.forEach(p => { mk("circle", { cx: p[0], cy: p[1], r: 5.5, fill: "#fffaf0" }, g); mk("circle", { cx: p[0], cy: p[1], r: 3.2, fill: INK }, g); });
        for (const k of [-1, 1]) for (const j of [0, 1]) line([[q1[0] + k * (24 + j * 6) * sc, q1[1] - (2 + j * 9) * sc], [q1[0] + k * (40 + j * 10) * sc, q1[1] - (4 + j * 16) * sc]], { stroke: INK, "stroke-width": 3 }, g); }
      if (style === "B") { const pts = hop(H, 0.93); line(pts, { stroke: "#fffaf0", "stroke-width": 6, "stroke-dasharray": "2 12" }, g); line(pts, { stroke: INK, "stroke-width": 3, "stroke-dasharray": "2 12" }, g); }
      if (style === "C") { const pts = hop(H, 0.9), e = pts[pts.length - 1], q = pts[pts.length - 3], ang = Math.atan2(e[1] - q[1], e[0] - q[0]);
        line(pts, { stroke: INK, "stroke-width": 13 }, g); line(pts, { stroke: "#fffaf0", "stroke-width": 8 }, g);
        const hd = (r, w) => [[e[0] + Math.cos(ang) * r, e[1] + Math.sin(ang) * r], [e[0] + Math.cos(ang + 2.4) * w, e[1] + Math.sin(ang + 2.4) * w], [e[0] + Math.cos(ang - 2.4) * w, e[1] + Math.sin(ang - 2.4) * w]];
        mk("polygon", { points: hd(26, 22).map(p => p.join(",")).join(" "), fill: "#fffaf0", stroke: INK, "stroke-width": 3, "stroke-linejoin": "round" }, g); }
      return; }
    // sliding pieces
    const P0 = (t, k) => [A0[0] + u[0] * t * L + n[0] * k, A0[1] + u[1] * t * L + n[1] * k];
    if (style === "A") for (const k of [-1, 0, 1]) { const by = q1[1] - (18 + 14 * (k + 1)) * sc, bx = q1[0] - ux * 26 * sc, len = Math.min(dl, 120) * (k ? 0.75 : 1);
      for (const [s0, s1, w] of [[0.55, 1, 1.4], [0.25, 0.55, 2.6], [0, 0.25, 3.8]]) { const pts = [[bx - ux * len * s0, by - uy * len * s0], [bx - ux * len * s1, by - uy * len * s1]];
        line(pts, { stroke: "#fffaf0", "stroke-width": w + 3 }, g); line(pts, { stroke: INK, "stroke-width": w }, g); } }
    if (style === "B") { const pts = Array.from({ length: 12 }, (_, i) => on(...P0(-0.2 / L + (1 - 0.3 / L + 0.2 / L) * i / 11, 0))); line(pts, { stroke: "#fffaf0", "stroke-width": 6, "stroke-dasharray": "14 10" }, g); line(pts, { stroke: INK, "stroke-width": 3, "stroke-dasharray": "14 10" }, g); }
    if (style === "C") { const t1 = 1 - 0.42 / L, sh = 0.1, hw = 0.26, hl = 0.36 / L, poly3 = [P0(-0.15 / L, -sh), P0(t1 - hl, -sh), P0(t1 - hl, -hw), P0(t1, 0), P0(t1 - hl, hw), P0(t1 - hl, sh), P0(-0.15 / L, sh)];
      const dense = []; for (let i = 0; i < poly3.length; i++) { const p = poly3[i], q = poly3[(i + 1) % poly3.length]; for (let j = 0; j < 6; j++) dense.push(on(p[0] + (q[0] - p[0]) * j / 6, p[1] + (q[1] - p[1]) * j / 6)); }
      mk("polygon", { points: dense.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" "), fill: "#fffaf0", "fill-opacity": .85, stroke: INK, "stroke-width": 2.5, "stroke-linejoin": "round" }, g); } };
  // the clock is drawn in depth order among the pieces, so pieces in front of it cover it and pieces behind it are covered
  if (CLK) { const [qx, qy] = CLK.at || [9.6, 4]; slotQ.push({ slot: slotOf(pr(qx, qy, 0.3)[2]), draw: drawClock }); }
  // effects behind pieces
  for (const fx of (P.fx || [])) {
    if (fx.burst) { const sp = placed.find(p => p.role === fx.burst || p.sq === fx.burst); if (sp) { const [hy] = HEAD[sp.t]; const cx = sp.x, cy = sp.y + hy * sp.s; const gg = mk("g", { stroke: "#fffaf0", "stroke-linecap": "round", opacity: .9 }, root); mk("circle", { cx, cy, r: 260, fill: "#fff6d6", opacity: .35, stroke: "none" }, gg); for (let k = 0; k < 14; k++) { const a = k / 14 * Math.PI * 2 + .2; mk("path", { d: `M${cx + Math.cos(a) * 70} ${cy + Math.sin(a) * 70} L${cx + Math.cos(a) * 900} ${cy + Math.sin(a) * 900}`, "stroke-width": 5 + (k % 3) * 2 }, gg); } } }
    if (fx.move) moveFx(fx, "behind");
  }
  for (const [pi, p] of placed.entries()) { slotFx(pi);
    // a lifted piece (o.jump) casts a soft shadow on its square, so the lift reads (Caballo keeping his felt clean, 15c/15d)
    if (p.o.jump && !p.beside) mk("ellipse", { cx: p.x.toFixed(1), cy: (p.y + p.o.jump * p.s).toFixed(1), rx: (19 * p.s).toFixed(1), ry: (6 * p.s).toFixed(1), fill: "#000", opacity: .28 }, root);
    const sw = Math.max(1.1, Math.min(4.6, 1.3 / Math.max(p.s, .3) * p.s * 1.0)); drawPiece(root, p, (Math.max(0.8, Math.min(2.2, 1.9 / Math.sqrt(p.s)))).toFixed(2)); p.head = [p.x, p.y + HEAD[p.t][0] * p.s]; p.mouth = [p.x + (p.t === "n" ? (p.o.dir || 1) * 17 * p.s : 0), p.y + (HEAD[p.t][0] + (p.t === "n" ? 12 : HEAD[p.t][1] * .8)) * p.s]; p.top = p.y + (p.t === "k" ? -90 : p.t === "b" ? -74 : p.t === "q" ? -72 : p.t === "n" ? -68 : p.t === "r" ? -55 : -47) * p.s; }
  slotFx(placed.length);
  for (const fx of (P.fx || [])) if (fx.move) moveFx(fx, "front");   // move marks in front of the pieces, like comic speed lines
  // keep-clear zones for balloon tails: every head with its hat (crown, mitre, cross), from the top of the piece to the chin
  const HATW = { k: 13, q: 14, b: 11, p: 11, r: 17, n: 20 };  // half-width of the hat (crown, mitre, battlements) in sprite units
  const zones = placed.filter(p => p.s > 0.3 && !p.beside).map(p => { const r = HEAD[p.t][1] * p.s, hx = p.head[0], hy = p.head[1];
    const boxes = p.t === "n" ? [[hx - 20 * p.s, p.top - 4, hx + 20 * p.s, p.mouth[1] + 6 * p.s]] : [[hx - r * 1.05, hy - r, hx + r * 1.05, p.mouth[1] + 4 * p.s], [hx - HATW[p.t] * p.s, p.top - 4, hx + HATW[p.t] * p.s, hy - r * 0.5]];
    return { p, boxes }; });
  const inBox = (x, y, b) => x > b[0] && x < b[2] && y > b[1] && y < b[3];
  const quad = (a, c, e, n) => Array.from({ length: n + 1 }, (_, k) => { const t = k / n; return [(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * e[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * e[1]]; });
  const tailHits = (pts, sp) => { const hits = new Set(); pts.forEach(([x, y], k) => { for (const z of zones) { if (z.p === sp && k >= pts.length * 0.8) continue; if (z.boxes.some(bx4 => inBox(x, y, bx4))) hits.add(z.p.role || z.p.sq); } }); return [...hits]; };
  const audit = (typeof window !== "undefined") ? (window.__tailAudit = window.__tailAudit || []) : [];
  // balloons
  const fs = 25, bal = P.balloons || [];
  let nextX = 16;
  bal.forEach((b, i) => {
    const sp = placed.find(p => p.role === b.who || p.sq === b.who);
    const maxW = b.w ? Math.min(W0 * 0.7, b.w) : Math.min(W0 * 0.46, 380), wr = wrap(b.text, fs, maxW - (b.shout ? 60 : 36), b.lines);
    // a shout balloon is a jagged ellipse: size it so the whole text block fits inside its inner points (bible 7.25)
    const lh = fs * 1.18, th = wr.lines.length * lh, bw = b.shout ? 2 * (wr.w / 2 * 1.2 / 0.9 + 8) : wr.w + 44, bh = b.shout ? 2 * (th / 2 * 1.3 / 0.9 + 8) : th + 26;
    const by = b.y !== undefined ? b.y : 14;
    // placement uses the balloon width as approved (bw0, Comic Sans MS); the snug Comic Neue balloon then shrinks on the side away from the speaker (bible 7.92)
    const bw0 = b.shout ? 2 * (wr.w0 / 2 * 1.2 / 0.9 + 8) : wr.w0 + 44;
    let bx;
    if (b.x !== undefined) bx = b.x;
    else {
      // choose the x that covers the fewest heads (faces, crowns, mitres), preferring a spot near the speaker
      const boxes = placed.filter(p => p.s > 0.6).map(p => { const hw = (p.t === "k" ? 17 : p.t === "n" ? 20 : 15) * p.s; return [p.head[0] - hw, p.top - 4, p.head[0] + hw, p.mouth[1] + 6 * p.s]; });
      let best = null;
      for (let cx = Math.max(nextX, 16); cx <= W0 - bw0 - 16; cx += 10) {
        let ov = 0; for (const [x1, y1, x2, y2] of boxes) { const ox = Math.max(0, Math.min(cx + bw0, x2) - Math.max(cx, x1)), oy = Math.max(0, Math.min(by + bh, y2) - Math.max(by, y1)); ov += ox * oy; }
        const near = sp ? Math.abs(cx + bw0 / 2 - sp.mouth[0]) : 0, score = ov * 4 + near;
        if (!best || score < best[0]) best = [score, cx];
      }
      bx = best ? best[1] : nextX;
    }
    // keep the edge that faces the speaker, so the tail leaves where it was approved; b.anchor "centre" (15c) or "left"/"right" overrides
    nextX = bx + bw0 + 14; { const an = b.anchor || (sp && sp.mouth[0] > bx + bw0 / 2 ? "right" : "left"); bx += an === "right" ? bw0 - bw : an === "centre" ? (bw0 - bw) / 2 : 0; }
    const g = mk("g", {}, root);
    // Cartoon tail (bible 7.25): a curved, tapering wedge that leaves the balloon and stops just beside the speaker's mouth,
    // never inside a face or hat. Candidates: tip left or right of the face; start points along the balloon's lower edge
    // (or its side edge when the mouth is level with the balloon); straight or curving outward. The route that crosses
    // no head or hat wins (the speaker's own included), then the shortest.
    let tail = null;
    if (sp && !b.noTail) {
      // Balloon tails, general rule for every speaker (bible 7.25, 7.44):
      // - the tail leaves the balloon from its real outline (the flat edge of a round balloon, the jagged ellipse of a shout balloon)
      //   and the outline is opened where it joins, so the tail is attached;
      // - its last stretch is aimed at the speaker's mouth and the tip stops a little short of it: it points at the mouth, it does not touch it;
      // - it crosses no face, crown, mitre, hair or hat (the speaker's own included); among the routes that do not, the shortest wins.
      const r = HEAD[sp.t][1] * sp.s, tw = Math.max(14, Math.min(24, bw * 0.08)), dir = sp.o.dir || 1;
      const cx0 = bx + bw / 2, cy0 = by + bh / 2, rr = Math.min(30, bh / 2);
      const onEllipse = (x, top) => { const ex = (x - cx0) / (bw / 2 * .9); return cy0 + (top ? -1 : 1) * (bh / 2 * .9 * Math.sqrt(Math.max(0, 1 - ex * ex)) - 4); };
      let best = null;
      // tips: left or right of the face, beside the mouth; for a knight also in front of the snout; under the mouth when the balloon is below
      const side = sp.t === "n" ? (b.snug ? 4.5 * sp.s + 6 : r * 2.4 + 8) : r * 1.3 + 8;
      const tips = [];
      for (const sd of [-1, 1]) for (const dy of [-0.2, -0.7, 0.4]) tips.push([sp.mouth[0] + sd * (side + (b.gap || 0)), sp.mouth[1] + r * dy]);
      for (const sd of [-1, 1]) tips.push([sp.mouth[0] + sd * (side * 0.75 + (b.gap || 0)), sp.mouth[1] + r * 0.9]);   // diagonally below the mouth
      if (by > sp.mouth[1]) tips.push(sp.t === "n" ? [sp.mouth[0] + dir * (4.5 * sp.s + 8), sp.mouth[1] + 4 * sp.s] : [sp.mouth[0], sp.mouth[1] + r * 0.5 + 12]);
      for (const tip of (b.front ? tips.filter(t => (t[0] - sp.mouth[0]) * dir > 0) : tips)) {
        const bases = [], span = b.shout ? bw * .62 : bw - 2 * rr - tw;   // start points along the edge, kept off the rounded corners
        for (const f of [0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9]) { const x = cx0 - span / 2 + span * f; bases.push({ p: [x, b.shout ? onEllipse(x, false) : by + bh - 1.5], o: "h" }); }
        if (tip[1] < by + bh + 30) for (const sd of [-1, 1]) bases.push({ p: [cx0 + sd * (b.shout ? bw / 2 * .9 - 4 : bw / 2 - 1.5), cy0], o: "v" });
        if (tip[1] < by) for (const f of [0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9]) { const x = cx0 - span / 2 + span * f; bases.push({ p: [x, b.shout ? onEllipse(x, true) : by + 1.5], o: "t" }); }
        // the control point lies beyond the tip, on the line from the mouth through the tip, so the tail arrives aimed at the mouth
        const mx = tip[0] - sp.mouth[0], my = tip[1] - sp.mouth[1], ml = Math.hypot(mx, my) || 1, ux = mx / ml, uy = my / ml;
        for (const B of bases) for (const [a, rot] of (b.bend !== undefined ? [[null, 0]] : [[0.3, 0], [0.5, 0], [0.3, 0.35], [0.3, -0.35], [0.5, 0.6], [0.5, -0.6]])) {   // rot: the approach may turn up to about 35 degrees, still roughly aimed at the mouth
          const dx = tip[0] - B.p[0], dy = tip[1] - B.p[1], len = Math.hypot(dx, dy);
          const vx = ux * Math.cos(rot) - uy * Math.sin(rot), vy = ux * Math.sin(rot) + uy * Math.cos(rot);
          const c = a === null ? [B.p[0] + dx * 0.5 - dy * b.bend, B.p[1] + dy * 0.5 + dx * b.bend] : [tip[0] + vx * len * a, tip[1] + vy * len * a];
          const pts = quad(B.p, c, tip, 28), hits = tailHits(pts, null);
          const inside = pts.slice(4).some(([x, y]) => x > bx && x < bx + bw && y > by && y < by + bh);
          const gap = Math.hypot(Math.max(bx - tip[0], 0, tip[0] - bx - bw), Math.max(by - tip[1], 0, tip[1] - by - bh));  // how far the tip sticks out of the balloon
          const out = tip[0] < 8 || tip[0] > W0 - 8 || tip[1] > H - 8 || c[1] > H || c[1] < 0;
          const nearOther = zones.some(z => z.p !== sp && z.boxes.some(q => tip[0] > q[0] - 14 && tip[0] < q[2] + 14 && tip[1] > q[1] - 14 && tip[1] < q[3] + 14));   // a tip right beside another face would seem to point at that one
          const score = hits.length * 5000 + (nearOther ? 3000 : 0) + (inside ? 5e4 : 0) + (gap < 14 ? 4000 : 0) + (out ? 1e5 : 0) + len + (B.o === "v" ? 30 : 0) + (a === null ? 0 : a * 20 + Math.abs(rot) * 60);   // a tail through the balloon (detached-looking) is never acceptable
          if (!best || score < best.score) best = { score, B, c, tip, hits };
        }
      }
      const { B, c, tip } = best, h = tw / 2;
      // the base is perpendicular to the direction in which the tail leaves the balloon
      const lx = c[0] - B.p[0], ly = c[1] - B.p[1], ll = Math.hypot(lx, ly) || 1, nx = -ly / ll * h, ny = lx / ll * h;
      const L = [B.p[0] - nx, B.p[1] - ny], R = [B.p[0] + nx, B.p[1] + ny];
      mk("path", { d: `M${L[0]} ${L[1]} Q${c[0] - nx * 0.5} ${c[1] - ny * 0.5} ${tip[0]} ${tip[1]} Q${c[0] + nx * 0.5} ${c[1] + ny * 0.5} ${R[0]} ${R[1]} Z`, fill: "#fffdf5", stroke: INK, "stroke-width": 3, "stroke-linejoin": "round" }, g);
      tail = { B, h, c, nx, ny, lx: lx / ll, ly: ly / ll };
      audit.push({ panel: P.id, who: b.who, hits: best.hits });
    }
    if (b.shout) { const cx = bx + bw / 2, cy = by + bh / 2, rx = bw / 2, ry = bh / 2, N = 30; let d = ""; for (let k = 0; k < N; k++) { const a = k / N * Math.PI * 2, f = k % 2 ? .9 : 1; d += (k ? "L" : "M") + (cx + Math.cos(a) * rx * f).toFixed(1) + " " + (cy + Math.sin(a) * ry * f).toFixed(1); } mk("path", { d: d + "Z", fill: "#fffdf5", stroke: INK, "stroke-width": 3.4, "stroke-linejoin": "miter" }, g); }
    else mk("rect", { x: bx, y: by, width: bw, height: bh, rx: Math.min(30, bh / 2), fill: "#fffdf5", stroke: INK, "stroke-width": 3 }, g);
    if (tail) {  // open the balloon outline where the tail joins: a cream patch from inside the balloon over the outline into the tail (no stroke)
      const { B, nx, ny, lx, ly } = tail, k = b.shout ? 14 : 9, w = .78;
      mk("path", { d: `M${B.p[0] - nx * w - lx * k} ${B.p[1] - ny * w - ly * k} L${B.p[0] + nx * w - lx * k} ${B.p[1] + ny * w - ly * k} L${B.p[0] + nx * w * .85 + lx * k * .7} ${B.p[1] + ny * w * .85 + ly * k * .7} L${B.p[0] - nx * w * .85 + lx * k * .7} ${B.p[1] - ny * w * .85 + ly * k * .7} Z`, fill: "#fffdf5" }, g);
    }
    wr.lines.forEach((l, j) => { const e = mk("text", { x: bx + bw / 2, y: (b.shout ? by + bh / 2 - th / 2 - 3 : by + 13) + fs + j * lh, "text-anchor": "middle", "font-family": "'Comic Neue','Comic Sans MS',cursive", "font-weight": 700, "font-size": fs, fill: INK }, g); e.textContent = l; });
  });
  // grumble balloons: a wavy scribble, or grumble symbols (P.grumbleText, e.g. "#@!%&*!") in a wider balloon
  // Placement: try spots around the grumbler's head and take the one that covers the least of the pawns' faces and
  // crossed arms (weight 4), the officers' faces (weight 3) and the earlier grumble balloons (weight 3); prefer upward spots.
  const keepClear = placed.filter(p => p.s > 0.3 && !p.o.back).map(p => { const hw = (p.t === "k" ? 17 : p.t === "n" ? 20 : 15) * p.s;
    return { sq: p.sq, w: p.t === "p" ? 4 : 3, box: [p.head[0] - hw, p.top - (p.t === "k" ? 22 : 4) * Math.max(1, p.s), p.head[0] + hw, p.t === "p" ? p.y - 12 * p.s : p.mouth[1] + 6 * p.s] }; });
  const overlap = (a, b) => Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));
  const grumbleBoxes = [];
  for (const gq of (P.grumble || [])) { const sp = placed.find(p => p.sq === gq); if (!sp) continue; const r = Math.max(12, Math.min(26, 7 * sp.s)), gt = Array.isArray(P.grumbleText) ? P.grumbleText[grumbleBoxes.length % P.grumbleText.length] : P.grumbleText, gfs = r * 1.05, sx = gt ? Math.max(1.35, gt.length * gfs * 0.62 / (2 * r)) : 1.35;
    const hw = r * 1.2 * sx, hh = r * 1.2, hr = HEAD[sp.t][1] * sp.s; let best = null;
    for (const ring of [1, 1.5, 2]) for (const deg of [-90, -65, -115, -40, -140, -15, -165, 0, 180]) { const a = deg * Math.PI / 180, dist = (Math.abs(Math.cos(a)) * (hr + hw) + Math.abs(Math.sin(a)) * (hr + hh)) * ring + 6;
      const x = sp.head[0] + Math.cos(a) * dist, y = sp.head[1] + Math.sin(a) * dist, bx = [x - hw, y - hh, x + hw, y + hh];
      let tailHit = 0; for (let t = 0.3; t < 0.95; t += 0.08) { const px = x + (sp.head[0] - x) * t, py = y + (sp.head[1] - y) * t; for (const k of keepClear) if (k.sq !== gq && px > k.box[0] && px < k.box[2] && py > k.box[1] && py < k.box[3]) tailHit += k.w * 300; }
      let score = tailHit + keepClear.reduce((s, k) => s + k.w * overlap(bx, k.box), 0) + grumbleBoxes.reduce((s, b) => s + 3 * overlap(bx, b), 0) + Math.abs(deg + 90) * 0.5 + (ring - 1) * 60;
      if (bx[0] < 12 || bx[2] > W0 - 12 || bx[1] < 12) score += 1e6;
      if (!best || score < best.score) best = { score, x, y, bx }; }
    // P.grumbleAt { square: [x, y] }: a fixed spot for that grumble balloon (2b, bible 7.94)
    const ga = P.grumbleAt && P.grumbleAt[gq]; if (ga) best = { x: ga[0], y: ga[1], bx: [ga[0] - hw, ga[1] - hh, ga[0] + hw, ga[1] + hh] };
    grumbleBoxes.push(best.bx); const cx = best.x, cy = best.y; let d = "";
    { const ang = Math.atan2(sp.head[1] - cy, sp.head[0] - cx), tipD = Math.hypot(sp.head[0] - cx, sp.head[1] - cy) - hr * 1.1, tx = cx + Math.cos(ang) * tipD, ty = cy + Math.sin(ang) * tipD, nx = -Math.sin(ang) * r * .35, ny = Math.cos(ang) * r * .35;  // short tail to the grumbling pawn
      mk("path", { d: `M${cx + nx} ${cy + ny} L${tx} ${ty} L${cx - nx} ${cy - ny} Z`, fill: "#fffdf5", stroke: INK, "stroke-width": 1.6, "stroke-linejoin": "round" }, root); } for (let k = 0; k <= 24; k++) { const a = k / 24 * Math.PI * 2, rr = r * (k % 2 ? 1 : 1.2); d += (k ? "L" : "M") + (cx + Math.cos(a) * rr * sx).toFixed(1) + " " + (cy + Math.sin(a) * rr).toFixed(1); } const g = mk("g", {}, root); mk("path", { d: d + "Z", fill: "#fffdf5", stroke: INK, "stroke-width": 1.6 }, g);
    if (gt) { const e = mk("text", { x: cx, y: cy + gfs * 0.36, "text-anchor": "middle", "font-family": "'Comic Neue','Comic Sans MS',cursive", "font-weight": 700, "font-size": gfs, fill: INK }, g); e.textContent = gt; }
    else mk("path", { d: `M${cx - r * .85} ${cy} c${r * .2} ${-r * .55} ${r * .35} ${r * .55} ${r * .55} 0 s${r * .35} ${r * .55} ${r * .55} 0 s${r * .35} ${r * .55} ${r * .55} 0`, stroke: INK, "stroke-width": 2, fill: "none" }, g); }
  // caption: a rectangular text area in the lower right corner (stage direction, verbatim from the play)
  if (P.caption) { const cfs = 24, wr = wrap(P.caption, cfs, 640), bw = wr.w + 36, lh = cfs * 1.2, bh = wr.lines.length * lh + 22, bx = W0 - 24 - bw, by = H - 24 - bh;
    mk("rect", { x: bx, y: by, width: bw, height: bh, fill: "#fff6c8", stroke: INK, "stroke-width": 2.5 }, svg);
    wr.lines.forEach((l, j) => { const e = mk("text", { x: bx + bw / 2, y: by + 11 + cfs + j * lh - 4, "text-anchor": "middle", "font-family": "'Comic Neue','Comic Sans MS',cursive", "font-weight": 700, "font-style": "italic", "font-size": cfs, fill: INK }, svg); e.textContent = l; }); }
  // move box (bible Section 13, Move Box): the played move, verbatim, bold, in a small white rectangle bottom-left
  if (P.movebox) { const fs = 32, bw = Math.round(P.movebox.length * fs * 0.5 + 34), bh = fs + 20, bx = P.moveboxCenter ? Math.round((W0 - bw) / 2) : 24, by = H - 24 - bh;   // moveboxCenter: the result box centred at the bottom (bible 7.39)
    mk("rect", { x: bx, y: by, width: bw, height: bh, fill: "#ffffff", stroke: INK, "stroke-width": 2.5 }, svg);
    const e = mk("text", { x: bx + bw / 2, y: by + bh / 2 + fs * 0.36, "text-anchor": "middle", "font-family": "'Comic Neue','Comic Sans MS',cursive", "font-weight": 700, "font-size": fs, fill: INK }, svg); e.textContent = P.movebox; }
  // panel border
  mk("rect", { x: 3, y: 3, width: W0 - 6, height: H - 6, rx: 6, fill: "none", stroke: INK, "stroke-width": 7 }, svg);
  if (opts.mark && P.status === "proposal") mk("rect", { x: 10, y: 10, width: W0 - 20, height: H - 20, rx: 6, fill: "none", stroke: "#e08a1e", "stroke-width": 6, "stroke-dasharray": "22 12" }, svg);
  return placed;
}
window.MiniatuurRenderer = { renderPanel, FEN };
})();
