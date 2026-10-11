# The Miniature Cartoon Bible

Version 7.12

## Purpose
Single canonical source of truth for all comic, cartoon, illustration, character-sheet and storyboard generation for "De Miniatuur".

## Canon Integrity Statement
This document is the cumulative canon established so far.
Version 7.0 is a consolidation: it restores content that was lost between versions 5.0 and 6.0 and merges every earlier version (1.0 through 6.0) into one file.
Version 7.1 adds the dialogue attribution specification, the panel manifest standard, the artwork/lettering workflow and the completeness checklist (Sections 19 to 22). Nothing from 7.0 was removed.
Version 7.2 adds dialogue density and visual composition rules (Section 23), eight manifest fields (Section 20) and density steps in the workflow (Section 21). Nothing from 7.1 was removed.
Version 7.3 records the author's answers to the open questions: five long panels split, album format, original text always (Flemish only), greasy spot subtle until Scene 9, Scene 5 approved, shout balloons, panel 4a camera corrected, title on the cover, a chess club room without people, full costumes for the officers, proposed dossiers for the remaining pieces.
Version 7.4 adds the panel manifests for all 21 panels of Scenes 1 to 5 (Section 20.3).
Version 7.5 specifies the boebel for image generation: a standard descriptive sentence (no name in prompts), a positive description with comparisons, dimensions, and a no-text rule for images (Sections 4 and 18).
Version 7.6 adds the Strict Adaptation Protocol (before Section 1): the approved source is immutable during production; illustration and lettering are separate from story authority; prohibited changes; what to do when the source is incomplete.
Version 7.7 adds proposed panels for Scenes 6 to 16 to Section 18, clearly marked as proposals awaiting author approval, made for the full SVG preview of the comic (`comic/`). Nothing from 7.6 was removed.
Version 7.8 adds the move box (author decision): every panel in which a move is played shows that move, verbatim from the play, in bold in a small white rectangle in the bottom-left corner, in the preview and in the final images (Section 13, Move Box). It replaces the rule that chess notation appears only inside dialogue.
Version 7.9 fixes which pawns have a moustache (author decision): the b-pawn and the g-pawn of both armies, in every image, and no other pawn (Section 7, White Pawns and Black Pawns).
Version 7.10 adds the pawns' solidarity (author decision): in panels 2b to 5d-2 every white pawn in frame stands with its arms crossed (Section 7, White Pawns; Sections 18 and 20.3).
Version 7.11 forbids anger symbols such as the red "popping vein" mark (author feedback on panel 5a; Section 14 and the Common Prompt Block).
Version 7.12 changes panel 2b (author decision after an experiment in the preview): grumble balloons with chess annotation symbols and the hash sign, each with a short tail to its pawn and clear of all faces, and the stage direction verbatim in a caption box in the lower right corner, the only caption in the cartoon.

## Maintenance Rules
- This file (`the-miniature-cartoon-bible.md`) is the artifact and the source of truth.
- Conversations are the editor, not the source of truth.
- Every new version = previous version + new canon + explicit corrections.
- Never: new version = summary(previous version).
- Never remove or rewrite a whole section. Remove information only when explicitly correcting an error, and record the correction in Section 15 and Appendix A.
- Every version is committed so it can be diffed. Milestones can be tagged (for example `v1.0-canon-complete`).

---

# STRICT ADAPTATION PROTOCOL — NO CREATIVE DEVIATION
Added in 7.6. Mandatory for every person and every tool that produces pages from this bible. It applies before and above every other production rule in this document.

The production process illustrates the existing story. It does not write, rewrite, improve, summarise or creatively continue it. The image generator is never an author and never a source of text: when it writes balloon text, it only copies the exact approved text it is given (P.1), and every balloon is checked letter for letter.

## P.1 Three Separate Responsibilities
1. **Story authority.** The approved source (P.2) determines everything that happens and everything that is said. Only the author changes it, through this bible (Maintenance Rules; Section 15).
2. **Illustration.** The image generator (Copilot or ChatGPT) produces the artwork: characters, expressions, environment, composition and the speech balloons, placed and tailed as specified. By author decision (7.6) it also writes the balloon text, but only by copying the exact text given in the panel block or manifest, letter for letter; it never composes, completes or changes text (Section 21, Stage 2). It receives the Common Prompt Block and one panel block or manifest (Section 18, Section 20.3), nothing else.
3. **Text verification, correction and assembly.** A separate step compares every balloon letter for letter with the manifest, corrects or rejects any deviation, assembles the page and validates it (Section 21, Stages 3 and 4). Fallback: when the generator keeps getting the text wrong, the balloons are generated empty and the exact text is inserted in this step. This step copies text; it never writes text.

## P.2 Script Authority: the Approved Source
The approved source is immutable during production. It consists of:
- **The play (Section 1), verbatim.** The sole authority for dialogue, speakers, the order of events, stage directions and chess moves.
- **The author-approved specifications in this bible**, which are derived from the play or decided by the author: the canon (Sections 2 to 12), the production rules (Sections 13, 14, 19, 21, 23), the approved panel script (Section 18) and the panel manifests (Section 20.3), and the decisions recorded in Section 15.

Approved staging is part of the approved source: the poses, gestures, gaze, listener reactions and camera of each panel are fixed in its approved panel block and manifest (Script Fidelity Rule, Section 13). The production process reproduces them; it does not add others.

Not part of the approved source:
- Previously generated images, sketches and layout previews. They are never an authority for story content, dialogue, panel structure or chess positions. The reference images in `references/` only illustrate canon that is written in this bible.
- Proposals that are not yet approved (for example the Proposed Dossiers in Section 7, or panel scripts marked "proposal").
- Conversations, chat messages and tool output, until the author's decision is recorded in this bible.

## P.3 Prohibited Changes
The production process must never:
- Invent dialogue or narration.
- Paraphrase, translate, shorten, expand or modernise dialogue.
- Correct or alter spelling, punctuation, capitalisation or grammar in approved dialogue (including the play's own spacing variants, quote marks and "Dieje van de overkant").
- Invent, remove, reorder, combine or duplicate panels.
- Move dialogue between panels.
- Change the identity of a speaker (Section 19.F).
- Invent reactions, actions, stage directions or character intentions beyond those in the approved panel block and manifest.
- Invent chess moves or change the board state (Sections 11 and 12).
- Add captions, headings, labels, signs, sound effects or explanatory text not explicitly specified in the source. This cartoon has no captions and no narration, with one exception decided by the author: the stage direction of panel 2b in a caption box (Section 18, panel 2b; 7.12); chess notation appears only where it is part of the dialogue (for example "Ten aanval ! 1. e4") and in the move box of a panel in which a move is played (Section 13, Move Box; author decision in 7.8); the title appears only on the cover (Section 13, Cover Direction).
- Use previously generated images as authority for story content.
- Fill gaps or resolve contradictions through creative guesswork.

Changing the panel structure (for example splitting a crowded panel, Section 23) is not production work: it is a change to the bible, made before production through the Maintenance Rules and approved by the author.

## P.4 When the Source Is Incomplete or Contradictory
- Stop producing the affected panel.
- Flag the issue in Appendix B (Open Questions), quoting the conflicting or missing text and naming the panels affected.
- Request a decision from the author. Continue that panel only after the decision is recorded in this bible (Section 15).
- Never resolve the issue by inventing a solution, by following a previously generated image, or by choosing the "most likely" reading.

## P.5 Relation to the Rest of This Bible
This protocol does not replace existing rules; it states their common principle. Detailed rules remain where they are:
- Script Fidelity Rule and staging: Section 13.
- Forbidden elements: Section 14.
- Dialogue attribution: Section 19.
- Panel manifests: Section 20.
- Artwork and lettering workflow: Section 21.
- Completeness and fidelity checks: Section 22.
- Dialogue density and composition, priority order: Section 23 (23.0).
If any rule elsewhere in this bible appears to allow what this protocol prohibits, the protocol applies and the conflict is flagged under P.4.

---

# SECTION 1 - FULL PLAY (VERBATIM)

De Miniatuur (Een hedendaagse klucht in één bedrijf)


Koning:
Wat is het vandaag toch een heuglijke dag. Aanschouw mijn troepen, van toren tot toren staan ze in perfecte slagorde opgesteld, klaar voor deze dappere strijd. Dat "Dieje van den overkant" al maar zeker is dat hij nu al begint te bibberen. Want, ik   voel het aan mijn viltje, deze roemrijke partij win ik vandaag ! Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?

Alfil:
Jawel Sire, zij wachten op uw bevel !

Koning:
Wel laat ons dan niet langer talmen : glorie en eer wachten op ons. Ten aanval ! 1. e4
(hoorbaar gemor vanop de tweede rij)

Regina:
Awel ? Waarom gebeurt er niks ?

Koning:
Alfil m’n raadsheer, ge weet dat ik als koning niet met dat lage boerenvolk spreek. Vraag aan die luie pitten op de tweede rij wat er aan de hand is. En maak voort want “Dieje van den overkant" denkt nu natuurlijk dat wij schrik hebben en zit op dit moment waarschijnlijk al met ons te lachen.
(Alfil overlegt met pionnen en komt terug)

Alfil:
Muiterij Sire! De pionnen willen niet opspelen naar een centrumveld omdat er daar naar 't schijnt nen boebel in het bord zit. Als ze de hele tijd bergop moeten marcheren zijn ze uitgeteld alvorens ze nog maar aan de strijd hebben deelgenomen. Als u de partij vandaag wil winnen zal u iets anders moeten spelen.

Koning:
Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever. Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’. Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum  in handen nemen.

Alfil:
Vergeef me dat ik u tegenspreek Sire, maar ik kan hier voorlopig nog niet naar buiten. Immers, zowel het veld e2 als g2 is nog door opstandige boeren bezet.

Koning:
Wel nondedju ! Heel mijn voorbereiding om zeep.

Regina:
Speelt dan e3 Sire, dan kan Alfil toch al gaan zien.


Koning:
Allee goed dan, want "Dieje van den overkant" wordt precies al serieus ongeduldig.
1. e3
1. ... d5

Koning:
Lap, ziet ge ’t nu ? Wat had ik jullie gezegd ? "Dieje van den overkant" pakt al direct het centrum in.

Alfil:
Jamaar Sire, met dieje boebel.

Koning:
Alfil veegt dieje paprika chips van uwe mijter en maakt dat ge buiten zijt.
2. Ld3

Koning:
Boebel, boebel. Zo zullen we de partij wel winnen als "Dieje van den overkant" mag schaken en wijlle hier maar stratego zitten spelen en niet in het centrum mogen komen.
2. ... e6

Koning:
Ridder Caballo, springt naar f3 zodat ik seffens kan rokeren.
3. Ph3

Koning:
Maar Caballo, zijt gij nu een paard of nen stommen ezel ? Naar f3 had ik toch gezegd !

Caballo:
Daar op dat vies veld in die vettige plek gaan staan ? Geen sprake van Sire ! Dat ge     uw voetvolk erdoor jaagt tot daar nog aan toe maar een officier laat ge niet met zijn voetstuk in zo'n vieze vuile plek staan verkommeren. Zie dat het opdroogt en ik straks geen vork meer kan geven omdat ik aan het bord vastplak? En daarbij, ge kunt zo even goed rokeren !
3. ... Ld7

Koning: (zucht)
Al meer als duizend partijen heb ik nu al gespeeld en nog nooit heb ik zo ne zever meegemaakt. In de eerste jaren, dat weet ik nog goed, dat was toen nog met houten borden. Uren en uren heb ik daar op gespeeld. En veel gewonnen hé want dat was nog in mijne jongen tijd. En ineens was een houten bord niet goed genoeg meer en de stukken begonnen te zagen : de lak is eraf, de zwarte velden zijn niet meer goed, er zitten splinters aan de rand. Enfin, ze wilden er nimmer op spelen en het moest van dag op dag zo’n modern plastieken zijn. En 't ergste van al : er kwam  een nief bord maar we waren nog geen drie jaar verder of ze begonnen al vanhaar te zagen. Die pasgepromoveerde officieren hebben totaal geen respect voor goei gerief. Dat zeg ik u.

Regina:
Jamaar Sire, uw officieren hebben misschien wel een punt.


Koning:
Regina luistert: Wie kent da bord hier nu eigenlijk het beste ? Gij loopt daar met uw lange zetten veel te gemakkelijk overheen en ge beseft volgens mij niet eens goe wat kwaliteit is. Daarentegen heb ik al meermaals, heel dat bord veld voor veld afgegaan, vierkanten gemaakt, driehoekskes gedraaid, oppositie gepakt. Ook verre oppositie hé. Ooit heb ik zelfs eens met onze twee paarden heel dat bord omgeploegd om "Dieje van de overkant" met zijne laatste pluspion mat te zetten. Héhé, daar was “m toen nie goe van zelle. En nu doet gij alsof ik mijn bord nie ken ? Ga liever buiten dieje lompen ezel op h3 een beetje in 't oog houden.
4. Dh5
4. ... Pe7

Koning:
Zou er op f6 misschien ook een plek zitten ? Want "Dieje van den overkant" zijnen ezel wilt precies ook niet goed mee. Seg, maar wacht eens effe … . Ridder Caballo, hop naar g5. Allez vooruit, ju !
5. Pg5
5. ... g6

Caballo:
Voor de glorie en de overwinning ! Ten aanval !
6. Pxh7

Koning:
Godverdoemme Caballo, gij se stommen ezel ! Hoe dikwijls moet ik nog zeggen dat ik hier het bevel voer tijdens de partij. Alfil, staat daar nu toch niet zo stom te gapen, doe nu eens iets. Regina staat in, dat ziet ge zelf toch ook ? Dju miljaar, "Dieje van    den overkant"  is al aan zet.
6. ... gxh5

Koning:
Lap, daar hebt ge’t al. Regina geslagen. En terwijl ik hier weer zit te zwoegen om de partij te winnen gaat ze daar van neffe 't bord waarschijnlijk weer heel de tijd zitten lonken naar dieje pipo van ne zwarten toren daar op h8. Pff, die sul kan niet eens diagonaal gaan, wat ze daar toch in gezien heeft.

Alfil:
Vergeef me dat ik u onderbreek Sire, maar we hebben geloof ik, een mat in één.

Koning:
Bedankt voor dieje info raadsheer Alfil, daar zal "Dieje van den overkant" niet goed   van zijn. Ridder Caballo onmiddellijk naar f6 !.

Caballo:
Absoluut geen sprake van Sire ! Er is daar met cola gesmost en ik ga niet met mijn proper viltje in dieje natten drets staan. Eventueel wil ik nog doorpakken op f8 want daar is het precies wel droog. Seg, "Dieje van den overkant" stelt trouwens remise voor.

Koning: (zucht)
Pakt dat dan maar aan.
1/2 - 1/2

## Source Notes
- The text above is the original play as supplied by the author (version 7.0), copied character for character, including spacing and punctuation.
- It replaces the copy from version 5.0 (commit 9a7ed4e), which had shortened four speeches with "...".
- Spelling variants are original and must be kept: straight and curly quotes around "Dieje van den overkant", and "Dieje van de overkant" (without n) once.

---

# SECTION 2 - EXTRACTED FACTS
Facts that follow directly from the play text.

## Opening
- The King's prepared opening was 1. e4.
- The order is not carried out: the pawns murmur from the second rank.
- The King does not speak directly to the pawns ("lage boerenvolk"). Alfil relays.

## The Pawn Mutiny
- The pawns refuse to advance to a centre square because of the boebel.
- Their reason: marching uphill the whole time would exhaust them before the fight starts.

## Alfil
- Alfil cannot leave his square because e2 and g2 are still occupied by pawns.
- Alfil would rather have been promoted to queen: the King mocks his "complex van de minor promotie".
- Alfil has paprika chips on his mitre (the King tells him to wipe them off). Visual canon renders this as paprika stains only (see Section 4).

## Regina
- Regina proposes 1. e3 so Alfil can get out. The King accepts.
- Regina suggests the officers may have a point; the King dismisses her.
- Regina is captured on h5 by 6...gxh5.
- The King says Regina crosses the board far too easily with her long moves and does not understand quality.
- The King sends Regina out to keep an eye on "dieje lompen ezel op h3" (Caballo). That is why she goes to h5 (4. Dh5).
- After 6. Pxh7 Regina is hanging ("Regina staat in").
- After her capture she stands beside the board ("van neffe 't bord") and, according to the King, makes eyes at the black rook on h8.

## Caballo and the Dirty Squares
- The King orders Caballo to f3 (so he can castle). Caballo goes to h3 instead.
- Caballo calls f3 a dirty square with a greasy spot ("vies veld in die vettige plek"). He fears drying stickiness would glue him to the board.
- Caballo points out the King can castle anyway.
- At the end Caballo refuses f6: cola was spilled there and he will not stand in it with his clean felt.
- Caballo offers instead to capture on f8, where it seems dry.

## The King
- The King has played more than a thousand games.
- The King compares the situation to playing Stratego.
- The King suspects a stain on f6 because the Black King's knight ("zijnen ezel") also avoids it (4...Pe7 instead of ...Pf6).
- The King feels things "aan mijn viltje" (in his felt).
- The King knows the board square by square and has studied it: squares ("vierkanten"), triangulation ("driehoekskes gedraaid"), opposition and distant opposition. This is endgame technique.
- He once mated "Dieje van de overkant" with two knights against his last extra pawn, ploughing across the whole board to do it.
- After 6. Pxh7 he insists that he is the one giving orders during the game, and tells Alfil to stop gaping and do something.

## Board History
- In the King's early years the games were played on wooden boards. He played on them for hours and won a lot.
- The pieces started complaining about the wooden board: the lacquer was gone, the black squares were no longer good, there were splinters at the edge.
- They refused to play on it any more and demanded a modern plastic board.
- A new plastic board came, but less than three years later they started complaining again.
- The King blames newly promoted officers ("pasgepromoveerde officieren") who have no respect for good equipment.

## The Ending
- After 6...gxh5, Alfil notes White has a mate in one.
- The mate is 7. Pf6# (knight h7-f6). Chess analysis: the Black King on e8 is checked and has no escape square; nothing can capture on f6.
- The mate is never played because of the cola stain on f6.
- The King says "Dieje van den overkant" will not like the mate, then orders Caballo to f6.
- The Black King ("Dieje van den overkant") offers a draw. The King accepts.
- Result: 1/2 - 1/2.

## The Black Rook
- The King calls the black rook on h8 "dieje pipo van ne zwarten toren".
- The King mocks him: "die sul kan niet eens diagonaal gaan" (he cannot even move diagonally), and wonders what Regina sees in him.

---

# SECTION 3 - WORLD CANON

## Core Concept
A living chess set prepares for a glorious battle while board defects, stains and imperfections make proper play nearly impossible.

## Premise
An overconfident King attempts to conduct a glorious chess battle while his living chess pieces refuse to cooperate because the chessboard is damaged, dirty and uncomfortable.

## World Rules
- Living chess pieces.
- Chess pieces can speak.
- Pieces possess free will.
- Medieval military interpretation of chess.
- Chess moves are military orders.
- The chessboard is a physical world.
- Board defects are real terrain features.
- Board acts almost as a character.
- Board defects drive the plot.
- Captured pieces simply leave the board.
- Captured pieces stay nearby, beside the board ("van neffe 't bord").
- Wooden pieces, plastic board.
- The opponent ("Dieje van den overkant") is the Black King. He is shown.

## Surroundings (author decision in 7.3)
- The board lies on a table in a chess club room.
- The room is empty: no people at all - no players, no spectators, no hands. The pieces are the only characters, as in the play, and they move themselves.
- Background furniture: other tables, chairs, other chess boards and chess clocks.
- The background stays soft and slightly out of focus, so the pieces and the board stand out.
- No readable text anywhere in the room (no signs, posters or labels): the Script Fidelity Rule and Section 14 still apply.
- Replaces the plain neutral placeholder background used in the early sketches (Appendix A).

## Scale
- Chess-piece scale.
- Small defects create major drama.

## Themes
- Grand strategy defeated by trivial problems.
- Leadership failure.
- Pride versus reality.
- Working-class resistance.
- Nostalgia.
- Absurd bureaucracy.
- Military drama applied to ridiculous problems.

---

# SECTION 4 - BOARD CANON

## Board
- Plastic tournament board.
- Dark brown (almost black)/beige tournament board: dark squares very dark brown with a near-black flavour, light squares beige. (Supersedes green/beige, see Appendix A.)
- Plastic board less than three years old.
- Worn but functional.
- Earlier wooden boards existed.
- The wooden boards were replaced because the pieces complained (lacquer gone, black squares worn, splinters at the edge).
- Within three years the pieces were complaining about the plastic board too.
- Defects slightly exaggerated for readability.

## Boebel
- Squares d4/e4/d5/e5.
- Part of the board itself.
- The board surface itself is warped.
- Not a separate object.
- Not a bubble.
- Not a dome.
- The four squares form one raised region.
- A modest plastic deformation that the characters treat as a major obstacle.
- Main source of conflict.
- In prompts the boebel is never named: it is described with the standard sentence (see Boebel Specification for Image Generation below). The "not a ..." lines above are review checks for people, not prompt text.

### Boebel Appearance (approved by the author on panel 2b)
- A smooth, rounded rise of the board surface, highest at the point where d4, e4, d5 and e5 meet, sloping gently down to flat board at the edges of those four squares.
- Modest height (slightly exaggerated for readability), like plastic that has warped upwards.
- The squares themselves bend with it: their edges and the colour pattern follow the curve; nothing sits on top of the board.
- Made readable only by light and shadow: one slope catches the light, the opposite slope is in soft shadow.
- No outline, no rings or contour lines, no separate object, no dome with a hard edge.
- Reference sketch: `references/boebel-panel-2b-sketch.png` (layout preview, not final art).

### Boebel Specification for Image Generation (added in 7.5)
Image generators were confused by the boebel. Three causes: the word itself (Flemish dialect for a bump, which models do not know and read as "bubble"), descriptions that mostly say what it is not (naming "bubble" or "dome" in a prompt tends to produce one), and no dimensions. This subsection fixes the term, describes the boebel positively and gives its size.

#### 1. Term and standard sentence
- "Boebel" is the canon name. It is used in the dialogue (lettered exactly as in Section 1) and in this bible, never in a prompt.
- In prompts, panel blocks and manifests the boebel is never named: it is described. The Common Prompt Block (Section 18) contains the standard sentence below; panel blocks and manifests refer to it descriptively, as "the gentle rise in the middle of the board" or "the board bulging gently in the middle". A name in a prompt reads like a label, and image generators then draw the label or an explanation (author feedback, 7.5).
- "Centre hump" is only an internal term in this bible (for people), never prompt text.
- Standard sentence, to be used word for word in every prompt where the centre of the board is visible:

> In the middle of the board, the plastic board surface itself bulges gently upward into one smooth, low, rounded hill where the four centre squares meet, like a vinyl roll-up chessboard that has warped from heat. The hill is about as high as the base of a chess piece and slopes smoothly back down until the board is flat again at the outer edges of those four squares. The squares, their grid lines and their colours bend over it; it is seen only through soft light on one side and soft shadow on the other.

- Adjusting this sentence is a canon change: record it in Section 15 and keep the previous wording in Appendix A.

#### 2. Positive description and comparisons
What the boebel is:
- A warp of the board itself: the plastic sheet of a roll-up tournament board that has bulged upward, as vinyl does when it has lain in the sun or near a radiator.
- One single, smooth, rounded hill, like a gentle swell in a vinyl floor or a small hill under a tablecloth.
- Covered by the board pattern: the four centre squares (d4, e4, d5, e5) lie over it, and their edges and colours follow its curve without a break.
- Low and wide: wider than it is high, with no flat top and no edge where it meets the flat board.
- Visible through light and shade, and in low views through the board's surface line rising in the middle.

The checks of what the boebel must not look like (a bubble, a dome with a hard edge, a separate object, an outline, rings or contour lines, a crack, a hole, a stain, a sticker) are review checks for people, in the Validation Checklist (Section 16). Do not put them in prompts.

#### 3. Dimensions (proposed in 7.5, to be confirmed by the image tests)
Measured in square widths (one square = 1):
- **Centre:** exactly on the shared corner of d4, e4, d5 and e5.
- **Footprint:** roughly round, about 2 squares across. It reaches the middle of the outer edges of the four centre squares; the outer corners of those squares (for example the corner of d4 towards c3) are flat again. The surrounding squares (c3 to f6 around the centre) are flat.
- **Height at the peak:** about 1/8 of a square width, roughly as high as a chess piece's base (wooden base plus felt). On a board with 50 mm squares that is about 6 mm. This is slightly exaggerated for readability: a real warp would be lower (decision G2, slightly exaggerated defects).
- **Profile:** a smooth bell shape: steepest about halfway between the peak and the edge, rounded at the top, blending into the flat board at the edge.
- **Relative to the pieces:** much lower than any piece; a pawn standing next to it is about eight times as tall as the hump.

## Cola Stain
- Square f6.
- Specifically cola.
- Covers most of the square.
- Wet ("natten drets").
- Critical plot element: it prevents the winning mate 7. Pf6#.

### Cola Stain Visibility
- Scenes 1 to 14: the stain may be visible, but subtly: a faint discolouration of f6, easy to overlook.
- Scene 15 (Caballo refuses f6): the stain is shown explicitly, wet, dark and glossy.
- The explicit stain is the reveal of Caballo's complaint; it must not be given away earlier.

## Greasy Spot (f3)
- Square f3.
- Named in the play: "vies veld in die vettige plek".
- Sticky as it dries.
- Reason Caballo plays 3. Ph3 instead of 3. Pf3.
- Visual: a faint, translucent, yellowish greasy smear with a slight shine.
- Smaller and subtler than the cola stain on f6; clearly visible from Scene 9 (see Greasy Spot Visibility).

### Greasy Spot Visibility (decided in 7.3)
- Scenes 1 to 8: barely noticeable, a faint sheen on f3 that is easy to overlook.
- From Scene 9 (Caballo refuses f3): clearly visible as described above.
- Same logic as the cola stain on f6: the explicit stain is the reveal of Caballo's complaint and must not be given away earlier.

## Paprika
- Paprika stains only on Alfil's mitre.
- No crumbs on the board.
- No paprika chips on the board.

---

# SECTION 5 - MATERIALS CANON

## Pieces
White pieces:
- Light natural wood.
- Visible grain.

Black pieces:
- Very dark brown stained wood.
- Visible grain.

## Felt
Felt:
- Traditional green felt.
- Always deliberately visible.
- Felt bottoms are a running gag (Caballo protects his clean felt).

## Board
- Plastic (see Section 4).

## Condition
- Officers pristine, pawns show wear.

## Costumes (author decision in 7.3)
- The officers of both armies (kings, queens, bishops, knights and rooks) wear full costumes.
- The pawns of both armies wear simple soldier uniforms.
- White officers, as first described in version 1.1:
  - White King: burgundy robe and medals; he keeps the simple medieval crown (not the gold crown of 1.1).
  - Regina: an elegant white-and-gold design.
  - Alfil: advisor robes; the paprika stains stay on his mitre.
  - Caballo: military decorations.
- Black officers wear costumes in darker colours.
- The felt bottoms stay visible under every costume, and the character of each piece still comes from face, crown, mitre, hair and gestures.
- Open (Appendix B, item 13): how a costume combines with the wooden body (cloth over the wood, or painted or carved on it), the exact colours of the black costumes, and the costumes of the white officers without a dossier.

---

# SECTION 6 - VISUAL CANON

## Style
- Primary influence: Suske en Wiske.
- Belgian comic style.
- Franco-Belgian comic tradition, Flemish humour.
- Medieval kingdom atmosphere.
- Family friendly.
- Bright colours.
- Strong outlines.
- Theatrical staging.
- Exaggerated physical comedy.

## Faces
- Expressive faces.
- Highly expressive eyes.
- Distinctive noses per important character.
- Important characters may have moustaches.
- Moustaches reserved mainly for important characters.

## Anthropomorphism
- Classic chess-piece bodies remain recognizable.
- Faces allowed: eyes, eyebrows, nose, mouth, moustaches.
- Simple arms and hands.
- No feet.
- Visible felt bottoms.

## Armies
- Armies visually similar.
- Subtle heraldry.
- Balanced officer/pawn visibility.

## Gestures
- Mixed gesture style: theatrical gestures and pointing gestures.

## Knight Orientation
- All knights (white and black) look towards the centre files (d and e), in every image.
- A knight on the kingside (f, g, h files) faces towards the queenside; a knight on the queenside (a, b, c files) faces towards the kingside.
- Applies regardless of camera angle: the knight faces the centre of the board, not the camera.

---

# SECTION 7 - CHARACTER DOSSIERS

## White King (Koning)
- Ancient veteran.
- More than 1000 games of experience.
- Endgame specialist.
- Masters endgame technique: triangulation, opposition, distant opposition.
- Once mated the Black King with two knights against his last extra pawn.
- Played on wooden boards in his youth; blames newly promoted officers for the switch to plastic.
- Pristine condition.
- Pristine despite age.
- Simple medieval crown.
- Costume: burgundy robe and medals (author decision in 7.3; see Section 5, Costumes).
- Medium beard and moustache.
- Proud, strategic, charismatic.
- Determined.
- Nostalgic about old wooden boards.
- Impatient.
- Cannot admit mistakes.
- Constantly talks and gestures.
- Uses both theatrical gestures and pointing gestures.
- Does not speak directly to the pawns.

## Black King (Dieje van den Overkant)
- Long-time rival.
- Same age as White King.
- Short beard.
- Costume in darker colours, like all black officers (author decision in 7.3).
- Calm, patient, disciplined.
- Professional.
- Greatest strength: patience.
- Controlled competence.
- The competent counterpart of the White King.
- Offers the draw at the end.

## Regina
- The White Queen.
- Elegant and regal.
- Regal.
- Visible hair.
- Hair colour: light, roughly blonde with a slight red tint. Never dark hair. The exact shade is not specified.
- Costume: an elegant white-and-gold design (author decision in 7.3).
- Clearly characterful queen.
- Voice of reason.
- Practical and intelligent.
- Often correct.
- Recurring interest in the Black Rook on h8.
- Moves easily across the board with her long moves.
- Captured on h5 (6...gxh5).
- After capture: stands beside the board, looking at the Black Rook on h8.

## Alfil
- Bishop with mitre.
- White bishop; tall mitre.
- Scholar and advisor.
- Raadsheer (counsellor).
- Church figure.
- Diplomat.
- Mediator.
- Paprika stains on mitre.
- Costume: advisor robes (author decision in 7.3).
- Former pawn who would rather have been promoted to queen.
- Starts on f1, moves to d3 (2. Ld3).

## Caballo
- White knight ("Ridder Caballo").
- Highly expressive horse-headed knight.
- Costume: military decorations (author decision in 7.3).
- Brave and loyal.
- Heroic and dramatic.
- Brave but foolish; causes accidental chaos.
- Refuses dirty squares.
- Refuses f3 (greasy spot) and f6 (cola).
- Protects his felt bottom.
- Felt safety over discipline.
- Starts on g1: g1-h3-g5xh7.
- Always looks towards the centre files (see Section 6, Knight Orientation).

## White Pawns
- Soldiers.
- Simple soldier uniforms (author decision in 7.3).
- The working class ("boerenvolk", "boeren").
- Mix of young and veteran soldiers.
- Solidarity in the mutiny (author decision in 7.10): from panel 2b up to and including panel 5d-2, every white pawn in frame stands with its arms crossed, all of them, as a sign of solidarity; no pawn points or gestures in those panels. Where only the pawns' heads are in frame (the close-ups 2c, 4b, 4c-1, 4c-2, 5a, 5b-1, 5b-2, 5c and 5d-1), the framing stays as approved: the camera is not changed to bring the crossed arms into view (author decision in 7.10).
- Moustache rule (author decision in 7.9): the b-pawn and the g-pawn of each army have a moustache, in every image; no other pawn has one. No pawn has a beard (author decision in 7.9). The moustache belongs to the pawn, not to the square: a b-pawn or g-pawn keeps it when it captures onto another file (the black g-pawn on h5 after 6. ... gxh5). Replaces "some veterans may have moustaches or short beards".
- Distinct noses allowed.
- More realistic faces; no blob-like cartoon faces.
- Slight individual differences.
- Show wear.
- Capable of collective action; usually shown in groups.
- Start the mutiny.

## Black Pawns
- Similar to white pawns.
- Nearly identical army appearance.
- The same moustache rule as the white pawns (author decision in 7.9): the black b-pawn and g-pawn have a moustache in every image, the other black pawns none.

## Black Rook (h8)
- Specifically the rook on h8.
- Handsome officer.
- Handsome military officer; handsome knightly figure.
- Confident.
- Appears in reaction shots.
- Object of Regina's recurring interest.
- The White King's opinion: a "pipo" and a "sul" who cannot even move diagonally.

## Other Pieces
White rooks (a1, h1), White knight (b1), White bishop (c1), Black Queen, Black bishops, Black knights and Black rook (a8) have no dossier yet. See Appendix B, item 5.

### Proposed Dossiers (7.3, awaiting author approval)
Drafted from the play and existing canon only. They become canon after the author approves them; until then, show these pieces only as described in their army's general canon.

- **White rooks (a1, h1):** steady, silent towers at the corners of the army; they never move in the game. Officer costume. Mostly background figures that stand at attention.
- **White knight (b1):** Caballo's counterpart on the other wing; never moves in the game. Calmer than Caballo, faces the centre like every knight. Officer costume.
- **White bishop (c1):** Alfil's colleague on the queenside; never moves in the game. A quiet scholar like Alfil, but without paprika stains, which stay unique to Alfil. Officer costume.
- **Black Queen (d8):** composed and elegant, a mirror of the Black King's calm. Never moves in the game. Officer costume in the darker black colours.
- **Black bishops (c8, f8):** disciplined like their king. The c8 bishop makes the only black bishop move of the game (3...Ld7); the f8 bishop never moves (Caballo's offer to capture on f8 is never played).
- **Black knights (b8, g8):** the g8 knight is "Dieje van den overkant zijnen ezel" in the King's words: he goes to e7 (4...Pe7) and avoids f6, which makes the King suspect a stain there. Faces the centre like every knight. The b8 knight never moves.
- **Black rook (a8):** a plain, dependable rook, in contrast to the handsome h8 rook who is the object of Regina's interest. Never moves in the game.

---

# SECTION 8 - RELATIONSHIP MATRIX
- White King ↔ Black King: competitive respect.
- White King ↔ Black King: long-time rivals with mutual respect.
- White King ↔ Regina: ignored wisdom.
- White King ↔ Alfil: advisor and reality-check.
- White King ↔ Caballo: authority versus felt safety.
- White King ↔ Caballo: constant frustration.
- White King ↔ Pawns: nobility versus practicality.
- Alfil ↔ Everyone: mediator.
- Regina ↔ Black Rook: recurring gag.
- Everyone ↔ Board: board-created problems.

Contrast:
- White King = expressive chaos.
- Black King = controlled competence.

---

# SECTION 9 - BOARD-AS-CHARACTER
The board acts almost as a character. Its defects drive every plot turn:

| Defect | Square(s) | Effect in the story |
|---|---|---|
| Boebel | d4, e4, d5, e5 | Pawns refuse 1. e4. White plays 1. e3. |
| Greasy spot | f3 | Caballo refuses f3, plays 3. Ph3. |
| Cola stain | f6 | Black knight avoids f6 (4...Pe7). Caballo refuses the mate 7. Pf6#. Game ends in a draw. |
| Paprika | Alfil's mitre | The King tells Alfil to wipe it off before 2. Ld3. |

---

# SECTION 10 - TONE CANON
- Comedy with genuine chess drama.
- Characters take events completely seriously.
- The audience laughs at the contrast between grand strategy and trivial obstacles.
- Humorous, theatrical, absurd, family friendly.
- "Family friendly" applies to the visuals and the tone. The dialogue always stays exactly as in the play, including rough words such as "godverdoemme", "gene slappen kak", "nondedju" and "Dju miljaar" (author decision in 7.3).

## Running Gags
- The boebel.
- Dirty squares.
- Cola stain.
- Felt bottoms.
- Old wooden boards.
- Paprika on Alfil's mitre.
- Regina and the Black Rook.
- Caballo refusing dirty terrain.

---

# SECTION 11 - CANONICAL GAME
Notation is Dutch, as in the play: K = Koning (king), D = Dame (queen), T = Toren (rook), L = Loper (bishop), P = Paard (knight).

1. e3 d5
2. Ld3 e6
3. Ph3 Ld7
4. Dh5 Pe7
5. Pg5 g6
6. Pxh7 gxh5

1/2 - 1/2 (draw offered by Black, accepted by White)

English notation: 1. e3 d5 2. Bd3 e6 3. Nh3 Bd7 4. Qh5 Ne7 5. Ng5 g6 6. Nxh7 gxh5

Not played:
- 1. e4 (the King's intended opening, refused by the pawns).
- 3. Pf3 (ordered, refused by Caballo).
- 7. Pf6# (mate in one, refused by Caballo).
- 7. Pxf8 (offered by Caballo instead).

---

# SECTION 12 - FULL BOARD-STATE TABLES
Every panel must match exactly one of these states. FEN fields: piece placement and side to move.

## Move Summary
Initial: standard starting position.
After 1.e3: e-pawn on e3.
After 1...d5: black d-pawn on d5.
After 2.Ld3: bishop f1-d3.
After 2...e6: pawn e7-e6.
After 3.Ph3: knight g1-h3.
After 3...Ld7: bishop c8-d7.
After 4.Dh5: queen d1-h5.
After 4...Pe7: knight g8-e7.
After 5.Pg5: knight h3-g5.
After 5...g6: pawn g7-g6.
After 6.Pxh7: knight captures h7 pawn.
After 6...gxh5: pawn captures queen on h5.

## State 0 - Initial
Standard starting position.
FEN: `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w`
Pieces: 32 (White 16, Black 16).

## State 1 - After 1. e3
Move: e-pawn e2-e3.
FEN: `rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b`
Pieces: 32 (White 16, Black 16).

## State 2 - After 1... d5
Move: black d-pawn d7-d5 (onto the boebel).
FEN: `rnbqkbnr/ppp1pppp/8/3p4/8/4P3/PPPP1PPP/RNBQKBNR w`
Pieces: 32 (White 16, Black 16).

## State 3 - After 2. Ld3
Move: bishop f1-d3.
FEN: `rnbqkbnr/ppp1pppp/8/3p4/8/3BP3/PPPP1PPP/RNBQK1NR b`
Pieces: 32 (White 16, Black 16).

## State 4 - After 2... e6
Move: pawn e7-e6.
FEN: `rnbqkbnr/ppp2ppp/4p3/3p4/8/3BP3/PPPP1PPP/RNBQK1NR w`
Pieces: 32 (White 16, Black 16).

## State 5 - After 3. Ph3
Move: knight g1-h3.
FEN: `rnbqkbnr/ppp2ppp/4p3/3p4/8/3BP2N/PPPP1PPP/RNBQK2R b`
Pieces: 32 (White 16, Black 16).

## State 6 - After 3... Ld7
Move: bishop c8-d7.
FEN: `rn1qkbnr/pppb1ppp/4p3/3p4/8/3BP2N/PPPP1PPP/RNBQK2R w`
Pieces: 32 (White 16, Black 16).

## State 7 - After 4. Dh5
Move: queen d1-h5.
FEN: `rn1qkbnr/pppb1ppp/4p3/3p3Q/8/3BP2N/PPPP1PPP/RNB1K2R b`
Pieces: 32 (White 16, Black 16).

## State 8 - After 4... Pe7
Move: knight g8-e7.
FEN: `rn1qkb1r/pppbnppp/4p3/3p3Q/8/3BP2N/PPPP1PPP/RNB1K2R w`
Pieces: 32 (White 16, Black 16).

## State 9 - After 5. Pg5
Move: knight h3-g5.
FEN: `rn1qkb1r/pppbnppp/4p3/3p2NQ/8/3BP3/PPPP1PPP/RNB1K2R b`
Pieces: 32 (White 16, Black 16).

## State 10 - After 5... g6
Move: pawn g7-g6.
FEN: `rn1qkb1r/pppbnp1p/4p1p1/3p2NQ/8/3BP3/PPPP1PPP/RNB1K2R w`
Pieces: 32 (White 16, Black 16).

## State 11 - After 6. Pxh7
Move: knight g5 captures the pawn on h7.
FEN: `rn1qkb1r/pppbnp1N/4p1p1/3p3Q/8/3BP3/PPPP1PPP/RNB1K2R b`
Pieces: 31 (White 16, Black 15).

## State 12 - After 6... gxh5 (final position)
Move: pawn g6 captures the queen (Regina) on h5.
FEN: `rn1qkb1r/pppbnp1N/4p3/3p3p/8/3BP3/PPPP1PPP/RNB1K2R w`
Pieces: 30 (White 15, Black 15).

White (15):
- King e1.
- Rooks a1, h1.
- Bishops c1, d3 (Alfil).
- Knights b1, h7 (Caballo).
- Pawns a2, b2, c2, d2, e3, f2, g2, h2.

Black (15):
- King e8.
- Queen d8.
- Rooks a8, h8.
- Bishops d7, f8.
- Knights b8, e7.
- Pawns a7, b7, c7, d5, e6, f7, h5.

---

# SECTION 13 - PRODUCTION RULES

ALWAYS:
- Exact board position.
- Board position as listed in Section 12.
- Correct piece count.
- Every visible square that holds a piece shows that piece. This holds for all images, including close-ups and cropped frames: if any part of an occupied square is in frame, its piece is drawn (it may be cut off by the frame edge).
- Original dialogue only.
- Only original story text in speech balloons.
- Visible felt.
- Boebel integrated into the board surface on d4/e4/d5/e5.
- Cola stain on f6 when visible.
- Cola stain subtle before Scene 15, explicit from Scene 15 (see Section 4).
- Greasy spot on f3 when visible.
- Greasy spot subtle before Scene 9, clearly visible from Scene 9 (see Section 4).
- Paprika only on Alfil's mitre.

If a panel contains an incorrect position, the panel is wrong.

## Dialogue Attribution (added in 7.1)
- Every panel follows the Dialogue Attribution Specification (Section 19): the speaker named in the script owns the balloon, the tail points to the speaker, listeners keep their mouths closed.
- A panel manifest (Section 20) is prepared before any image is generated.
- The image generator writes the balloon text by copying it exactly from the panel block or manifest (author decision, 7.6); every balloon is then checked letter for letter and any deviation is corrected or the panel is regenerated (Section 21). Empty balloons with the text inserted afterwards are the fallback.
- Priority order when rules conflict: source fidelity, speaker attribution, visual continuity, artistic composition (Section 19).

## Dialogue Density (added in 7.2)
- The story determines the number of panels; the space in a panel never determines how much of the story is shown (Section 23).
- Speech balloons take roughly 25 to 30% of a panel in total, where practical, and never cover faces, gestures, props or relevant board details.
- Long speeches are divided over consecutive panels at natural boundaries, every word kept in order (Section 23.B).
- Full priority order: Section 23.0.

## Script Fidelity Rule
- All production is governed by the Strict Adaptation Protocol at the start of this bible (added in 7.6): the image generator never adds content beyond the approved source.
- What is shown visually must be in the script (Section 1).
- Do not invent visual content that is not in the script: no extra objects, props, settings, events or actions.
- Character appearance and board details come from the canon in this bible, which is derived from the script or decided by the author.
- Anything that is neither in the script nor decided by the author is an open question (Appendix B), not something to fill in.
- Staging is allowed when it supports the line: poses, gestures, gaze and facial expressions may be chosen if they follow from the dialogue or the character canon (for example, the King gestures while talking and looks at whoever he addresses). Staging never adds new actions, events or objects.
- Characters in conversation look slightly at each other, also when seen from behind (heads turned a little towards each other, showing a partial profile).
- Rule for the entire cartoon: pieces that talk to each other look at each other. The speaker looks at the one addressed, and the one addressed looks back at the speaker, in every panel and from every camera angle (author feedback on Scene 4).
- The listener reacts visibly to what is said: for example surprise at unexpected news, anger and worry when plans have to change (author feedback on panels 4b and 4c).

## Master Illustration Prompt
Create a Belgian-comic-style illustration based on De Miniatuur, in the tradition of Suske en Wiske. Use the exact chess position from the board-state tables. Show living wooden chess pieces on a dark brown (near black)/beige plastic tournament board: white pieces in light natural wood, black pieces in very dark brown stained wood, both with visible grain and visible green felt bottoms. The White King is an ancient yet pristine monarch with a simple crown, medium beard and moustache. The Black King is a calm, disciplined rival with a short beard. Regina is elegant and regal with visible hair. Alfil is a scholar-bishop with paprika stains on his mitre. Caballo is a highly expressive, heroic knight who refuses dirty terrain. In the middle of the board, the plastic surface bulges gently upward into one smooth, low, rounded hill where the four centre squares meet, about as high as the base of a chess piece; the squares bend over it. The cola stain nearly covers f6. A faint yellowish greasy smear lies on f3. No invented text. The officers of both armies wear full costumes (the White King a burgundy robe with medals, Regina white and gold, Alfil advisor robes, Caballo military decorations, the black officers darker colours); the pawns wear simple soldier uniforms; in both armies the b-pawn and the g-pawn have a moustache, the other pawns none. The board lies on a table in an empty chess club room, softly out of focus, with no people. No coordinate labels. No extra pieces. No board inaccuracies.

## Move Box (author decision in 7.8)
- Every panel in which a move is played on the board shows that move, with its move number, in bold black text in a small white rectangle with a thin black ink outline, in the bottom-left corner of the panel. It applies to the preview and to the final images.
- The text is copied verbatim from the move lines of Section 1, letter for letter, including the dots and spaces of Black's moves and the "x" of a capture: for example "3. Ph3", "1. ... d5", "6. Pxh7".
- Only moves that are actually played on the board get a move box, and only in the panel where the move happens. A move that is only spoken or ordered gets none: "1. e4" in panel 2a (the pawns refuse to move), the King's order to f3 in panel 9a (Caballo jumps to h3 instead), the order to g5 in panel 12c (the box appears in 12d, where the move is played), the order to f6 in panel 15b (refused).
- One move box per panel. It sits in the corner, clear of faces, hands and important board details; balloons stay at the top of the panel.
- Apart from the title on the cover, the move box is the only text in the image outside the speech balloons.
- The moves and their panels (proposals until the panels are approved; Section 18, Proposed Panels):

| Move box | Panel | Move on the board |
|---|---|---|
| 1. e3 | 6c | pawn e2-e3 |
| 1. ... d5 | 6d | pawn d7-d5 |
| 2. Ld3 | 7d | Alfil f1-d3 |
| 2. ... e6 | 8c | pawn e7-e6 |
| 3. Ph3 | 9b | Caballo g1-h3 |
| 3. ... Ld7 | 9g | bishop c8-d7 |
| 4. Dh5 | 11g | Regina d1-h5 |
| 4. ... Pe7 | 11h | knight g8-e7 |
| 5. Pg5 | 12d | Caballo h3-g5 |
| 5. ... g6 | 12e | pawn g7-g6 |
| 6. Pxh7 | 13b | Caballo g5xh7 |
| 6. ... gxh5 | 14d | pawn g6xh5, Regina captured |

## Cover Direction
- The entire cast dominates the cover.
- The boebel is visible.
- The board is visible.
- The White and Black Kings are both present.
- The title and subtitle appear on the cover: De Miniatuur (Een hedendaagse klucht in één bedrijf). There is no title inside the panels (author decision in 7.3).

---

# SECTION 14 - FORBIDDEN ELEMENTS
NEVER:
- Anything prohibited by the Strict Adaptation Protocol (P.3), at the start of this bible.
- Visual content that is not in the script or decided by the author.
- Narrator boxes.
- Anger symbols such as the red "popping vein" mark (four curved red strokes) on a head; anger is shown by the face, the gesture and a shout balloon only (author feedback on panel 5a, 7.11).
- Invented captions.
- Coordinate labels.
- Field labels.
- Invented dialogue.
- Invented jokes.
- Extra pieces.
- Missing pieces.
- A visible occupied square without its piece (also in close-ups).
- Duplicated pieces.
- Decorative rearrangement.
- Approximations.
- Incorrect positions.
- Illegal positions.
- Paprika chips or crumbs on the board.
- Blob-like pawn faces.
- The boebel as a dome, bubble or separate object.
- A balloon tail pointing to a listener or to any character other than the speaker (Section 19.B).
- A listener drawn as if speaking: open speaking mouth or speaking gesture without a line in that panel (Section 19.C).
- One balloon holding lines of different speakers (Section 19.B).
- Paraphrased, shortened or reordered dialogue (Section 20).
- The word "boebel", or any name for it, in a prompt, panel block or manifest outside the dialogue: describe it with the standard sentence instead (Section 4, added in 7.5).
- Labels, arrows, annotations, legends or explanatory text in the image, for example a caption explaining the boebel (added in 7.5).
- Translated dialogue: the balloons are in the original Flemish only (author decision in 7.3).
- Softened or censored dialogue, or symbols replacing words (author decision in 7.3: the original text always takes precedence).
- People in the chess club room: no players, spectators or hands (author decision in 7.3).
- Dialogue omitted to simplify a panel (Section 22.A).
- A speech balloon that takes up most of a panel, or covers faces, important gestures, props or relevant board details (Section 23.A and 23.C).
- Lettering shrunk until it is hard to read, or text squeezed into narrow or distorted balloons (Section 23.C).
- Dialogue shortened, reworded or dropped to fit a panel or to reduce the page count (Section 23).

---

# SECTION 15 - CANON DECISION LOG

## Design Decisions
Codes: A2 B2 C1 D3 E2 F2 G2 H2 I3 J2 K1 L2 M1 N2 O2 P2 Q3 R2

| Code | Decision |
|---|---|
| A2 | Officers pristine, pawns show wear. |
| B2 | Subtle heraldry. |
| C1 | Armies visually similar. |
| D3 | Felt bottoms deliberately visible. |
| E2 | Black rook h8 gets reaction shots. |
| F2 | Suske en Wiske influence. |
| G2 | Slightly exaggerated defects. |
| H2 | Maintain decision log. |
| I3 | Highly expressive eyes. |
| J2 | Distinctive noses. |
| K1 | Moustaches mainly for important characters. |
| L2 | Medium beard for White King. |
| M1 | Green/beige tournament board. (Superseded in 7.0: dark brown/beige, see Corrections.) |
| N2 | Veteran pawns may have moustaches or short beards. |
| O2 | Mixed pawn age distribution. |
| P2 | Balanced officer/pawn visibility. |
| Q3 | Mixed gesture style. |
| R2 | Comedy with genuine chess drama. |

## Corrections
| Version | Correction |
|---|---|
| 1.1 | "Dieje van den Overkant" is the Black King, not an unseen opponent. |
| 1.1 | The central bump affects d4, e4, d5 and e5. |
| 1.1 | The cola stain almost completely covers f6. |
| 3.0 | The boebel is the warped board surface, not a separate object or dome. |
| 3.0 | Paprika only as stains on Alfil's mitre; no paprika chips or crumbs on the board. |
| 3.0 | Pawns have realistic faces, not blob-like faces. |
| 5.0 | Notation switched from English (Bd3, Nh3, Qh5) to Dutch (Ld3, Ph3, Dh5). |
| 6.0 | Board is less than three years old (previously "several years old"). |
| 7.0 | Restored content lost in 5.1 and 6.0. |
| 7.0 | Section 1 replaced by the original play text supplied by the author; the 5.0 copy had shortened four speeches. |
| 7.0 | Captured pieces stand beside the board (from the play text). |
| 7.0 | Added f3 greasy spot to board canon (from the play text). |
| 7.0 | f3 greasy spot visual approved by the author: faint yellowish greasy smear, subtler than the cola stain. |
| 7.0 | Cola stain on f6 is subtle until Caballo complains about it (Scene 15); only then is it shown explicitly (author feedback on Scene 1). |
| 7.0 | Universal rule: every visible square that holds a piece shows that piece, in every image including close-ups (author feedback on panel 1b). |
| 7.0 | Script fidelity rule: what is shown visually must be in the script; nothing may be invented (author feedback on panel 1b). |
| 7.0 | Staging (pose, gesture, gaze, expression) is allowed when it supports the line or the character canon; no new actions or objects. |
| 7.0 | Regina's hair is light, roughly blonde with a slight red tint, never dark; exact shade not specified. |
| 7.0 | All knights look towards the centre files, in every image. |
| 7.0 | Board colours: dark squares very dark brown (near black) instead of green; light squares stay beige (author feedback on panel 1c). Replaces M1. |
| 7.0 | Characters in conversation look slightly at each other, also when seen from behind (author feedback on panel 1c). |
| 7.0 | Rule for the entire cartoon: pieces that talk to each other look at each other (author feedback on Scene 4). |
| 7.0 | Listeners react visibly to what is said; the King is surprised in 4b and angry/worried in 4c (author feedback). |
| 7.0 | Boebel appearance approved: smooth warped rise shown only by light and shadow, squares bending with it (author feedback on panel 2b). |
| 7.0 | Final images are generated by Copilot; this bible is the script it follows. Sketches are layout previews only. |
| 7.1 | Added Section 19 (Dialogue Attribution Specification): the speaker named in the script owns the balloon, tails point to the speaker, listeners keep closed mouths; special rule for Koning and Alfil; canonical speaker names. Reason: generated images showed the wrong character speaking (for example Alfil appearing to speak the King's lines). |
| 7.1 | Added Section 20 (Panel Manifest Standard) with a reusable template and a worked example (panel 5b). |
| 7.1 | Added Section 21 (Production Workflow): artwork and lettering are separated; empty balloons preferred, original text typeset afterwards. Reason: generated text deviated from the Flemish script. |
| 7.1 | Added Section 22 (Completeness and Fidelity Checklist) with a Script Coverage Map of all 45 items of Section 1. |
| 7.1 | Priority order recorded: source fidelity, speaker attribution, visual continuity, artistic composition. |
| 7.1 | Cross-references added in Sections 13, 14, 16, 17 and 18; nothing removed. |
| 7.2 | Added Section 23 (Dialogue Density and Visual Composition): the story determines the panel count; balloons roughly 25 to 30% of a panel; long speeches split at natural boundaries; balloon layout; shot types; reserved lettering space; acceptance checklist; density review of existing panels. Reason: generated panels were dominated by enormous speech balloons. |
| 7.2 | Priority order extended (Section 23.0): complete story and exact dialogue, speaker attribution, readable lettering, visual continuity, composition, fewest panels. Chess positions and canon are hard requirements, never traded away. |
| 7.2 | Panel manifest extended with fields 14 to 21 (dialogue length, segmentation, visual priority, lettering space, balloon-area estimate, layout strategy, overflow action, continuity); worked example 5b extended. |
| 7.2 | Workflow (Section 21) extended with density steps in all four stages; cross-references in Sections 13, 14, 16, 18, 19, 20 and 22. Nothing removed. |
| 7.3 | Panels 1b, 3a, 4c, 5b and 5d split into two panels each at natural boundaries (author decision); Section 17, 18, 22.E and 23.H updated. |
| 7.3 | Output format: printed album page (A4, Suske en Wiske style), lettering about 8 pt; capacity estimates in Section 23.F (author decision). |
| 7.3 | The original text always takes precedence over "family friendly", which applies to visuals and tone; balloons in the original Flemish only, no translations (author decisions). |
| 7.3 | Greasy spot on f3 barely noticeable in Scenes 1 to 8, clearly visible from Scene 9 (author decision). |
| 7.3 | Scene 5 approved by the author. |
| 7.3 | Shout balloons (jagged outline) are the standard for shouted lines; the manifest marks them (author decision). |
| 7.3 | Panel 4a camera text corrected to the approved sketch: somewhat elevated, looking down over the boebel (author decision). |
| 7.3 | Title and subtitle on the album cover; no title in the panels (author decision). |
| 7.3 | Surroundings: an empty chess club room, soft and out of focus, no people, no readable text; replaces the plain placeholder background (author decision). |
| 7.3 | Full costumes for the officers of both armies (v1.1 descriptions for the white officers, darker colours for black), simple soldier uniforms for the pawns; the White King keeps the simple medieval crown (author decisions). |
| 7.3 | Proposed dossiers for the remaining pieces added to Section 7, awaiting approval (author asked for proposals). |
| 7.4 | Panel manifests (all 21 fields) for the 21 panels of Scenes 1 to 5 added as Section 20.3; script excerpts copied automatically from Section 1; Script Coverage Map updated (author request). |
| 7.5 | Boebel Specification for Image Generation (Section 4): "boebel" is never used in prompts; the prompt term is "the centre hump", defined by a standard sentence used word for word. Reason: image generation was confused by the insufficiently defined boebel (author feedback). |
| 7.5 | Boebel described positively with comparisons (a vinyl roll-up board warped by heat, a gentle swell, a hill under a tablecloth); the "not a ..." checks moved to the Validation Checklist for human review. |
| 7.5 | Boebel dimensions (proposed, to be confirmed by image tests): peak on the shared corner of d4/e4/d5/e5, footprint about 2 squares across, height about 1/8 of a square (about a piece's base), smooth bell profile. |
| 7.5 | "Boebel" replaced by "the centre hump" in the Master Illustration Prompt, the Common Prompt Block, the panel blocks (Section 18) and the manifests (Section 20.3); the dialogue keeps "boebel" verbatim. |
| 7.5 | Correction within 7.5: the boebel is not named at all in prompts. The image generator drew an explanation of the word in the image (author feedback). The standard sentence lost its name ("- the centre hump -"); panel blocks and manifests now describe it ("the gentle rise in the middle of the board", "the board bulging gently in the middle"); "centre hump" stays an internal term for people only. |
| 7.5 | No-text rule added to the Common Prompt Block: the image contains no written words, labels, arrows, captions or explanations; the only text is the dialogue in the balloons, or none when the balloons are empty (author feedback). Cross-references in Sections 14, 16 and 21. |
| 7.5 | The author generates images with both Copilot and ChatGPT: the bible now refers to "the image generator (Copilot or ChatGPT)"; Section 18 renamed "Panel Script (Ready for Image Generation)". |
| 7.6 | Strict Adaptation Protocol added before Section 1 (author request): three separate responsibilities (story authority, illustration, lettering and assembly); the approved source (the play plus author-approved specifications, including approved staging); prohibited changes; stop-and-flag procedure for gaps and contradictions; relation to existing rules. |
| 7.6 | Clarified, not changed: listener reactions and staging remain allowed as decided by the author, but only as fixed in the approved panel block and manifest; panel splits remain possible, but only as an approved bible change before production; the cartoon has no captions, chess notation only inside dialogue, the title only on the cover. |
| 7.6 | Author decision: the image generator writes the balloon text itself, by copying the exact text from the panel block or manifest letter for letter (prompt format in Section 21, Stage 2; instruction in the Common Prompt Block). Every balloon is checked letter for letter; a deviation is corrected or the panel regenerated, never accepted. Empty balloons with separate lettering become the fallback. Replaces "empty balloons preferred" (Sections 13, 18, 20.3, 21, 23.E and Strict Adaptation Protocol P.1). |
| 7.7 | Proposed panels for Scenes 6 to 16 added to Section 18 (author request: the full comic in SVG, Scenes 6 to 16 as proposals). 57 proposal blocks: dialogue copied from Section 1 and checked by script; moves from Sections 11 and 12; camera and character lines from the SVG preview. Not approved script: they are not sent to the image generator before the author approves them. |
| 7.7 | SVG preview of the whole comic added outside the bible: `comic/renderer.js`, `comic/panels.js` (all 78 panels: 21 approved, 57 proposals) and `comic/index.html` (cover plus A4 album pages, proposals marked with a dashed orange border). The preview is an illustration aid only; the bible remains the source. |
| 7.7 | Preview staging choices that are not canon until approved: costume colours beyond Section 5, the move streaks, the camera positions of Scenes 6 to 16, a captured piece standing beside the board next to the h-file. |
| 7.8 | Author decision: move box. Every panel in which a move is played shows the move with its move number in bold black text in a small white rectangle (thin black outline) in the bottom-left corner, in the preview and in the final images. Text verbatim from the move lines of Section 1 (Black's moves as "1. ... d5", captures as "6. Pxh7"; author: "use the verbatim format from the original text"). Only played moves, only in the panel where the move happens; spoken or ordered moves get none (2a, 9a, 12c, 15b). New Section 13, Move Box, with the table of the 12 moves; instruction added to the Common Prompt Block; cross-references in the Strict Adaptation Protocol (P.3), Sections 16, 20 (field 11 and the must-never-appear line), 21, 22 and 23, and Appendix B item 15. |
| 7.8 | The 12 proposal move panels in Section 18 (6c, 6d, 7d, 8c, 9b, 9g, 11g, 11h, 12d, 12e, 13b, 14d): "no caption, no notation in the image" replaced by a move box line with the verbatim move. The SVG preview draws the box (`comic/renderer.js`, `movebox` in `comic/panels.js`). |
| 7.9 | Author decision: pawn moustaches are fixed for consistency across images. The b-pawn and the g-pawn of both armies (white and black) have a moustache in every image; no other pawn has one. Replaces N2 ("veteran pawns may have moustaches or short beards"). Sections 7 (White Pawns, Black Pawns), 13 (Master Illustration Prompt), 16 and the Common Prompt Block updated. |
| 7.9 | Author decision (confirmed): the moustache belongs to the pawn, not to the file, so the black g-pawn keeps it on h5 after 6. ... gxh5. Pawns have no beards, so that "no other pawn" holds for all facial hair (confirmed by the author; Appendix B, item 17 resolved). |
| 7.10 | Author decision: pawn solidarity during the mutiny. In panels 2b, 2c, 3a-1, 3a-2, 3b, 4a, 4b, 4c-1, 4c-2, 5a, 5b-1, 5b-2, 5c, 5d-1 and 5d-2 every white pawn in frame stands with its arms crossed ("since the pawns are in solidarity the arms of all white pawns need to be crossed"). Section 7 (White Pawns), the 15 panel blocks in Section 18 and field 12 of the 15 manifests in Section 20.3 updated. |
| 7.10 | Consequence in panel 4a: the pawns on e2, f2 and g2 no longer point at the gentle rise in the middle of the board; they turn to Alfil with their arms crossed (panel block, manifest fields 8 and 16 of 4a, and the Scene Catalog in Section 17). The rise stays visible in the frame. |
| 7.10 | Author decision: in the close-ups where only the pawns' heads are in frame (2c, 4b, 4c-1, 4c-2, 5a, 5b-1, 5b-2, 5c, 5d-1) the approved framing stays; the camera is not lowered to show the crossed arms ("leave the images where there are no arms in sight as-is"). Section 7, White Pawns. |
| 7.11 | Author feedback on panel 5a: the four red curved strokes on the King's head (a cartoon "popping vein" anger symbol, added in the SVG preview, never part of the script) are unwanted. Anger symbols are now forbidden (Section 14, Common Prompt Block); anger is shown by the face, the gesture and the shout balloon. Removed from the preview panels 5a, 9c and 14a and from the proposal blocks 9c and 14a ("anger mark"). |
| 7.12 | Author decision on panel 2b ("it needs to be clear that all pawns are protesting in solidarity"), after an experiment in the SVG preview: (1) the stage direction (hoorbaar gemor vanop de tweede rij) appears verbatim, parentheses included, in a pale-yellow caption box in the lower right corner; this is the only caption in the cartoon; (2) the grumble balloons stay small and separate (a shared balloon with eight tails was tried and rejected) and contain only chess annotation symbols and the hash sign ("you can only mix them with the # symbol"): ??#, ?!, #!?, ??, #?!; (3) each grumble balloon has a short tail to its own pawn and covers no pawn face or crossed arms ("the pawns are the focus"), nor an officer's face or crown. Panel block and manifest 2b, Scene Catalog (Section 17), stage-direction table (Section 19), Strict Adaptation Protocol P.3, Common Prompt Block, Sections 16, 20 and 22 updated. |
| 7.12 | Claude's reading, open for correction (Appendix B, item 18): the caption exception covers panel 2b only, and the parentheses of the stage direction are kept. |

---

# SECTION 16 - VALIDATION CHECKLIST
- Exact board position (matches one state in Section 12).
- Correct piece count for that state.
- No extra, missing or duplicated pieces.
- Every visible occupied square shows its piece (check the frame edges of close-ups).
- Every knight looks towards the centre files.
- Pieces that talk to each other look at each other.
- White second-rank pawns have the major pieces behind them.
- Boebel integrated into d4/e4/d5/e5.
- Boebel (centre hump) check: one smooth, low, rounded hill of the board itself; peak on the shared corner of d4, e4, d5 and e5; about 2 squares across; about as high as a piece's base; the grid lines and colours bend over it.
- Boebel must not look like: a bubble, a dome with a hard edge, a separate object lying on the board, an outline, rings or contour lines, a crack, a hole, a stain or a sticker (Section 4).
- No labels, arrows, captions or explanations anywhere in the image; text appears only inside the speech balloons, in grumble balloons with symbols where specified, in the move box of a panel in which a move is played (Section 13, Move Box), and in the caption box of panel 2b (Section 18, Common Prompt Block; 7.12).
- A panel in which a move is played shows the move box in the bottom-left corner, with the move copied verbatim from Section 1 (for example "3. Ph3"); no other panel has one (Section 13, Move Box).
- In both armies the b-pawn and the g-pawn have a moustache and no other pawn has one; a pawn keeps its moustache after a capture onto another file (Section 7, White Pawns; author decision in 7.9).
- Cola stain on f6 when visible.
- Cola stain subtle before Scene 15; explicit only from Scene 15.
- Greasy spot on f3 when visible.
- Greasy spot subtle before Scene 9, clearly visible from Scene 9 (see Section 4).
- Paprika only on Alfil's mitre; none on the board.
- Felt visible.
- Realistic pawn faces.
- Only original dialogue; no invented text.
- Nothing shown that is not in the script or decided by the author (Script Fidelity Rule, Section 13).
- Nothing in the page comes from a previous generated image instead of the approved source; any gap or contradiction was flagged, not guessed (Strict Adaptation Protocol, P.2 to P.4).
- No narrator boxes.
- No coordinates or field labels.
- Every balloon belongs to the speaker named in the script, and its tail points to that speaker (Section 19.B).
- Every balloon written by the image generator matches its manifest text letter for letter (spaces, punctuation, quote marks, capitals); any deviation was corrected or the panel regenerated (Section 21, Stage 3).
- Listeners have closed mouths and listening poses; no listener appears to speak (Section 19.C).
- The page matches its panel manifests (Section 20).
- Every line of Section 1 is accounted for in the Script Coverage Map (Section 22.E).
- Balloons do not overwhelm the artwork; faces, gestures, props and board details stay visible; text is readable (Section 23.G).

---

# SECTION 17 - SCENE CATALOG
Each scene lists the board state shown, the characters and the dialogue it covers (by its first words in the play).
The Script Coverage Map (Section 22.E) tracks every line, stage direction and move of the play against these scenes and their panels.

## Scene 1 - Opening Speech
- Position: State 0 (initial).
- Characters: White King, Alfil; White army in formation.
- Dialogue: Koning "Wat is het vandaag toch een heuglijke dag..." / Alfil "Jawel Sire...".
- Purpose: Introduce the White King and the army.
- Full panel script: Section 18.
- Panels:
  - 1a: Koning "Wat is het vandaag toch een heuglijke dag. ... klaar voor deze dappere strijd."
    - Camera: from Black's perspective, zoomed in on the white pieces only.
    - Framing: Caballo (g1), Alfil (f1), White King (e1) and Regina (d1); from Black's side they appear left to right in that order.
    - The second-rank white pawns stand in the foreground; the officers tower behind them.
  - 1b: Koning "Dat "Dieje van den overkant" ... klaar voor deze heldhaftige strijd ?" (split in 7.3 into 1b-1 "Dat ... te bibberen." and 1b-2 "Want, ik voel ... strijd ?")
    - Camera: from Black's perspective, zoomed in on the white pieces only.
    - Framing: Alfil (f1) and White King (e1); from Black's side Alfil appears left, the King right.
    - Caballo (g1) and Regina (d1) are fully included in the image, flanking Alfil and the King.
    - The King gestures to Alfil.
  - 1c: Alfil "Jawel Sire, zij wachten op uw bevel !"
    - Camera: over Alfil's shoulder, from behind White's back rank, looking towards Black.
    - Framing: Alfil and the White King in the foreground seen from behind; the white troops before them; the black army in the distance.
    - Alfil and the King look slightly at each other (partial profiles).

## Scene 2 - Ten Aanval
- Position: State 0.
- Characters: White King, White Pawns, Regina.
- Dialogue: Koning "Wel laat ons dan niet langer talmen..." / (hoorbaar gemor) / Regina "Awel ? Waarom gebeurt er niks ?".
- Purpose: The 1. e4 order fails.
- Full panel script: Section 18.
- Panels:
  - 2a: Koning "Wel laat ons dan niet langer talmen : glorie en eer wachten op ons. Ten aanval ! 1. e4"
    - Camera: from Black's perspective, zoomed in on the White King (he is talking).
    - Framing: Alfil (f1) and Regina (d1) remain fully in the image.
  - 2b: (hoorbaar gemor vanop de tweede rij)
    - Camera: from Black's side, slightly off-centre, at an angle that keeps as many pawns as possible in the image: all eight pawns in frame, the officers behind them.
    - Wide panel format (landscape) to avoid empty background above the pieces.
    - The grumbling is shown with small grumble balloons containing chess annotation symbols (??, ?!, !?) and the hash sign, grumpy faces, and the stage direction verbatim in a caption box (changed in 7.12); the e2 pawn does not move.
    - Only half the board is in frame: up to the fourth rank.
    - Part of the boebel (on d4/e4) is visible in the image, in the foreground: seen from Black's side, rank 4 is the near edge of the frame.
  - 2c: Regina "Awel ? Waarom gebeurt er niks ?"
    - Camera: from Black's perspective, zoomed in on Regina (she is talking).
    - Regina looks at the White King.

## Scene 3 - Alfil Sent to the Pawns
- Position: State 0.
- Characters: White King, Alfil.
- Dialogue: Koning "Alfil m'n raadsheer...".
- Purpose: The King will not speak to the pawns.
- Full panel script: Section 18 (approved by the author).
- Panels:
  - 3a: Koning "Alfil m’n raadsheer, ... wat er aan de hand is." (split in 7.3 into 3a-1 "... boerenvolk spreek." and 3a-2 "Vraag aan die luie pitten ...")
    - Camera: behind White's first rank, over Alfil's shoulder, so the King's face is seen as he turns to Alfil.
    - The King points dismissively sideways at the pawns on the second rank without looking at them.
  - 3b: Koning "En maak voort want “Dieje van den overkant" ... al met ons te lachen."
    - Camera: over the White King's shoulder towards the black army.
    - The Black King waits calmly in the distance; he is not laughing (the joke is the contrast with the King's suspicion).

## Scene 4 - Pawn Mutiny
- Position: State 0.
- Characters: Alfil, White Pawns, White King.
- Dialogue: (Alfil overlegt met pionnen) / Alfil "Muiterij Sire!...".
- Purpose: Introduce the boebel.
- Full panel script: Section 18 (approved by the author).
- Staging constraint: Alfil cannot leave f1 (e2 and g2 block him, as he says in Scene 5). He consults the pawns from his own square by leaning forward over the f2 pawn; "en komt terug" means he turns back to the King. No piece leaves its square.
- Panels:
  - 4a: (Alfil overlegt met pionnen en komt terug), first part: Alfil leans over the second rank and confers with the pawns; the pawns face him with their arms crossed (changed in 7.10: no pawn points; the boebel stays visible). No balloons.
  - 4b: Alfil "Muiterij Sire! ... nen boebel in het bord zit."
  - 4c: Alfil "Als ze de hele tijd bergop ... iets anders moeten spelen." (split in 7.3 into 4c-1 "... hebben deelgenomen." and 4c-2 "Als u de partij vandaag wil winnen ...")

## Scene 5 - The King's Outburst
- Position: State 0.
- Characters: White King, Alfil.
- Dialogue: Koning "Wie is er hier nu godverdoemme eigenlijk koning ?..." / Alfil "Vergeef me dat ik u tegenspreek Sire..." / Koning "Wel nondedju !...".
- Purpose: Alfil's minor-promotion complex; Alfil is blocked by e2 and g2.
- Full panel script: Section 18 (approved by the author in 7.3).
- Panels:
  - 5a: Koning "Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever." The King explodes.
  - 5b: Koning "Ik weet maar al te goed ... ‘gene slappen kak’." The King jabs at Alfil's sore spot; Alfil is offended. (Split in 7.3 into 5b-1 "... tot dame waart gepromoveerd" and 5b-2 "en dat complex ...")
  - 5c: Koning "Ga buiten zien ... het centrum in handen nemen." The King orders Alfil out towards the centre.
  - 5d: Alfil "Vergeef me ... door opstandige boeren bezet." Alfil shows that the pawns on e2 and g2 block both his diagonals. (Split in 7.3 into 5d-1 "Vergeef me ... naar buiten." as a two-shot and 5d-2 "Immers, ..." as the high view.)
  - 5e: Koning "Wel nondedju ! Heel mijn voorbereiding om zeep." The King in despair.

## Scene 6 - Regina's Advice
- Position: State 0 → State 1 → State 2.
- Characters: Regina, White King.
- Dialogue: Regina "Speelt dan e3 Sire..." / Koning "Allee goed dan..." / 1. e3 / 1... d5.
- Purpose: The first move is played.

## Scene 7 - Black Takes the Centre
- Position: State 2 → State 3.
- Characters: White King, Alfil.
- Dialogue: Koning "Lap, ziet ge 't nu ?..." / Alfil "Jamaar Sire, met dieje boebel." / Koning "Alfil veegt dieje paprika chips..." / 2. Ld3.
- Purpose: Paprika on the mitre; Alfil leaves.

## Scene 8 - Stratego
- Position: State 3 → State 4.
- Characters: White King.
- Dialogue: Koning "Boebel, boebel..." / 2... e6.
- Purpose: The King's frustration.

## Scene 9 - Caballo Refuses f3
- Position: State 4 → State 5 → State 6.
- Characters: White King, Caballo.
- Dialogue: Koning "Ridder Caballo, springt naar f3..." / 3. Ph3 / Koning "Maar Caballo..." / Caballo "Daar op dat vies veld..." / 3... Ld7.
- Purpose: Introduce Caballo and the dirty squares.

## Scene 10 - A Thousand Games
- Position: State 6.
- Characters: White King, Regina.
- Dialogue: Koning (zucht) "Al meer als duizend partijen..." / Regina "Jamaar Sire, uw officieren hebben misschien wel een punt."
- Purpose: The King's nostalgia for wooden boards; the board's history.

## Scene 11 - Who Knows This Board Best
- Position: State 6 → State 7 → State 8.
- Characters: White King, Regina; Caballo on h3 (referred to).
- Dialogue: Koning "Regina luistert: Wie kent da bord hier nu eigenlijk het beste ?..." / 4. Dh5 / 4... Pe7.
- Purpose: The King's endgame pride; he sends Regina to watch Caballo, so she goes to h5.

## Scene 12 - The King Suspects f6
- Position: State 8 → State 9 → State 10.
- Characters: White King, Caballo.
- Dialogue: Koning "Zou er op f6 misschien ook een plek zitten ?..." / 5. Pg5 / 5... g6.
- Purpose: Foreshadow the cola stain.

## Scene 13 - Caballo's Charge
- Position: State 10 → State 11.
- Characters: Caballo.
- Dialogue: Caballo "Voor de glorie en de overwinning ! Ten aanval !" / 6. Pxh7.
- Purpose: The heroic blunder.

## Scene 14 - Regina Captured
- Position: State 11 → State 12.
- Characters: White King, Alfil, Regina, Black Rook (h8) in reaction shot.
- Dialogue: Koning "Godverdoemme Caballo, gij se stommen ezel !..." / 6... gxh5 / Koning "Lap, daar hebt ge’t al. Regina geslagen..."
- Purpose: The queen is lost; Regina beside the board; Black Rook gag.

## Scene 15 - Mate in One
- Position: State 12.
- Characters: Alfil, White King, Caballo.
- Dialogue: Alfil "Vergeef me dat ik u onderbreek Sire..." / Koning "Bedankt voor dieje info..." / Caballo "Absoluut geen sprake van Sire !...".
- Purpose: The cola stain blocks the winning mate.
- Note: First scene in which the cola stain on f6 is shown explicitly.

## Scene 16 - Draw Accepted
- Position: State 12.
- Characters: White King, Caballo, Black King.
- Dialogue: Koning (zucht) "Pakt dat dan maar aan." / 1/2 - 1/2.
- Purpose: Final punchline.

---

# SECTION 18 - PANEL SCRIPT (READY FOR IMAGE GENERATION)
The final images are generated by an image generator: the author uses both Copilot and ChatGPT. The prompts are written to work in either. For each panel, give the image generator the **Common Prompt Block** followed by that panel's block. When a result differs between the two generators, record the difference in this bible rather than writing a separate prompt per generator. Each panel block is self-contained: it lists everything that must be in the frame.

Orientation reminder: seen from Black's side, the files run from h (left) to a (right). Seen from White's side, from a (left) to h (right).

## Common Prompt Block
Belgian comic panel in the style of Suske en Wiske: clean ink outlines, bright flat colours, family friendly, highly expressive eyes, a distinctive nose for every character.

The characters are living wooden chess pieces with classic chess-piece bodies, faces, simple arms and hands, and no feet. White pieces are light natural wood with visible grain; black pieces are very dark brown stained wood with visible grain. Every piece has a traditional green felt bottom that is always visible.

The board is a plastic tournament board: very dark brown, almost black, dark squares and beige light squares, with a beige border. No coordinate letters or numbers anywhere.

Recurring characters:
- White King: ancient but pristine, simple medieval crown, medium white beard and moustache, burgundy robe with medals, proud and theatrical.
- Regina (White Queen): elegant and regal, light hair (roughly blonde with a slight red tint, never dark), an elegant white-and-gold costume.
- Alfil (White bishop that starts on f1): scholar and advisor in advisor robes, with a mitre that has small orange-red paprika stains.
- Caballo (White knight that starts on g1): highly expressive horse-headed knight with military decorations.
- Pawns: soldiers in simple soldier uniforms, with realistic faces (not blob-like); they show wear. In both armies the pawn that started on the b-file and the pawn that started on the g-file have a moustache (also after they move or capture); all other pawns have no moustache and no beard.
- Black officers: costumes in darker colours; the Black King is calm, with a short beard.

Board details:
- The middle of the board: In the middle of the board, the plastic board surface itself bulges gently upward into one smooth, low, rounded hill where the four centre squares meet, like a vinyl roll-up chessboard that has warped from heat. The hill is about as high as the base of a chess piece and slopes smoothly back down until the board is flat again at the outer edges of those four squares. The squares, their grid lines and their colours bend over it; it is seen only through soft light on one side and soft shadow on the other.
- Greasy spot on f3: a faint, translucent, yellowish greasy smear with a slight shine, smaller and subtler than a stain. Scenes 1 to 8: barely noticeable; from Scene 9: clearly visible.
- Cola stain on f6 (Scenes 1 to 14): only a faint discolouration of the square, easy to overlook.

Rules:
- Every knight faces towards the centre files (d and e).
- Pieces that talk to each other look at each other: the speaker looks at the one addressed, who looks back.
- Every visible square that holds a piece shows that piece (pieces may be cut off by the frame edge).
- No extra, missing or moved pieces.
- Background: the board lies on a table in an empty chess club room - other tables, chairs, chess boards and chess clocks, soft and slightly out of focus. No people, no hands, no readable text or signs.
- Speech balloons contain exactly the text given, nothing else.
- The speaker named in each panel block owns the balloon: its tail points to that character's mouth. All other characters listen with closed mouths unless the panel block says otherwise (Section 19).
- Write the text of each speech balloon exactly as given in the panel description, letter for letter, including every space before "!" and "?", every quote mark and every chess notation. The words are Flemish dialect dialogue: do not translate, correct, complete, explain, label or illustrate them.
- A balloon marked as a shout balloon has a jagged outline; all other balloons are round.
- Speech balloons sit in empty background space, take roughly a quarter of the panel in total, and never cover faces, hands, crowns, the mitre or important board details.
- No narrator boxes, no captions, no sound-effect words, no invented text, no props or objects that are not described.
- The image contains no written words, labels, arrows, captions or explanations anywhere. The only text is the dialogue inside the speech balloons, the move box and the caption box when the panel description gives them, and the symbols in grumble balloons when the panel description gives them. When the speech balloons are drawn empty and there is no move box or caption box, the image contains no text at all.
- No anger symbols (such as red "popping vein" marks) on any head: show anger with the face, the gesture and, for a shouted line, the jagged balloon.
- Move box (only when the panel description gives one): in the bottom-left corner, draw a small white rectangle with a thin black outline and write in it, in bold black letters, exactly the move text given, letter for letter (for example: 3. Ph3). Nothing else is written in or near it.
- Caption box (only when the panel description gives one; so far only panel 2b): in the lower right corner, draw a pale-yellow rectangle with a thin black outline and write in it, in italic letters, exactly the text given, letter for letter, parentheses included.
- Grumble balloons with symbols (only when the panel description gives them): small jagged balloons with a short tail to the grumbling piece, containing exactly the symbols given (chess annotation symbols such as ??, ?! and !?, and the hash sign #), nothing else; they never cover a face.

## Scene 1 - Opening Speech
Board position for all panels: the standard starting position (State 0). Nothing has moved.

### Panel 1a
- Camera: from Black's side of the board, close to the white army, at about the height of the officers' heads, looking at White's first rank.
- In frame, back row from left to right: the rook on h1 (partly, at the left edge), Caballo on g1, Alfil on f1, the White King on e1, Regina on d1, the bishop on c1 (partly, at the right edge). Caballo, Alfil, the King and Regina are fully in frame.
- In frame, front row: the white pawns on h2, g2, f2, e2, d2 and c2, standing lower in front of the officers. The officers' heads rise above the pawns.
- Board: the empty third and fourth ranks in the foreground; the greasy spot on f3 faintly visible. No black pieces (they are behind the camera).
- Characters: the King proud, mouth open mid-speech, one arm sweeping out towards his troops. Caballo faces right (towards the centre). Alfil, Regina and the pawns stand at attention.
- Balloon (White King): Wat is het vandaag toch een heuglijke dag. Aanschouw mijn troepen, van toren tot toren staan ze in perfecte slagorde opgesteld, klaar voor deze dappere strijd.

### Panel 1b-1
Split from panel 1b in 7.3 (author decision, Section 23.B).
- Camera: from Black's side, closer than 1a, centred between Alfil (f1) and the White King (e1).
- In frame: Alfil (left of centre) and the King (right of centre); Caballo (g1) fully in frame at the left, Regina (d1) fully in frame at the right; the bishop on c1 and the rook on h1 partly at the frame edges. The pawns on g2, f2, e2 and d2 cross the bottom of the frame in front of them.
- Characters: the King, proud and mocking, mouth open mid-speech, looks straight ahead past the camera, towards the black army ("Dieje van den overkant"), with a dismissive wave of one hand. Alfil, Regina and Caballo look at the King, mouths closed. Caballo faces right (towards the centre).
- Balloon (White King): Dat "Dieje van den overkant" al maar zeker is dat hij nu al begint te bibberen.

### Panel 1b-2
Split from panel 1b in 7.3 (author decision, Section 23.B).
- Camera: the same as 1b-1 (continuity: same positions, same framing).
- In frame: the same as 1b-1.
- Characters: the King turns towards Alfil and gestures to him with an open hand, mouth open; Alfil looks back at the King, attentive, mouth closed. Regina looks at the King. Caballo faces right (towards the centre).
- Balloon (White King): Want, ik voel het aan mijn viltje, deze roemrijke partij win ik vandaag ! Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?

### Panel 1c
- Camera: over Alfil's shoulder. Behind White's first rank, just behind and to the left of Alfil (between Alfil and the King), slightly above head height, looking across the whole board towards Black.
- Foreground, seen from behind: Alfil on f1 (right of centre; paprika stains visible on his mitre) and the White King on e1 (left of centre). Their heads are turned slightly towards each other, showing partial profiles. Regina (d1, light hair) seen from behind to the left of the King; Caballo (g1) in profile at the right, facing left towards the centre. The other white pieces of the first rank as far as they are in frame.
- Middle ground: all eight white pawns seen from behind, then the empty board: the board bulging gently in the middle, the cola stain on f6 only a faint discolouration, the greasy spot on f3 faint.
- Background: the complete black army in its starting formation in the distance, all 16 pieces, facing the camera; the black knights face the centre.
- Balloon (Alfil, tail to Alfil): Jawel Sire, zij wachten op uw bevel !

## Scene 2 - Ten Aanval
Board position for all panels: the standard starting position (State 0). Nothing moves: the e2 pawn stays on e2.

### Panel 2a
- Camera: from Black's side, zoomed in on the White King on e1 (he is talking).
- In frame: the King large in the centre; Alfil (f1) fully in frame at the left; Regina (d1) fully in frame at the right. The heads of the pawns on f2, e2 and d2 cross the bottom of the frame in front of them.
- Characters: the King raises one arm high, commanding the attack, proud, mouth wide open. Alfil and Regina look at the King.
- Balloon (White King): Wel laat ons dan niet langer talmen : glorie en eer wachten op ons. Ten aanval ! 1. e4

### Panel 2b
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Format: wide landscape panel.
- Camera: from Black's side, slightly off-centre and somewhat elevated, showing the white army from the front. Only half the board is in frame: the near (bottom) edge of the frame is at the fourth rank.
- In frame: all eight white pawns (a2 to h2) in one row across the frame, all sixteen white pieces with the officers standing behind the pawns. Caballo (g1) and the b1 knight face the centre.
- Board: the third and fourth ranks in the foreground. The gentle rise in the middle of the board rises in the foreground on d4/e4 (its far half is outside the frame). The greasy spot on f3 is faintly visible. No black pieces (they are behind the camera).
- Characters: the pawns frown, stubborn and grumbling; none of them moves. The officers look on.
- Grumbling, for the stage direction (hoorbaar gemor vanop de tweede rij): five small grumble balloons (jagged outline) beside the heads of the pawns on h2, f2, d2, b2 and e2, each with a short tail to its own pawn. Each balloon contains only chess annotation symbols and the hash sign, exactly: ??#, ?!, #!?, ??, #?! (one string per balloon; no letters, no other symbols). The balloons never cover a pawn's face or crossed arms, nor an officer's face or crown: the pawns are the focus of this panel (author decision in 7.12).
- Caption (author decision in 7.12, only in this panel): in the lower right corner a pale-yellow rectangle with a thin black outline containing the stage direction verbatim, in italic letters, parentheses included: (hoorbaar gemor vanop de tweede rij)
- No dialogue balloons.

### Panel 2c
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Camera: from Black's side, zoomed in on Regina on d1 (she is talking).
- In frame: Regina large in the centre; the White King (e1) partly in frame at the left; the bishop on c1 partly at the right; the heads of the pawns on e2, d2 and c2 cross the bottom of the frame.
- Characters: Regina turns her head towards the King and looks at him, puzzled (one eyebrow raised), mouth open. The King looks back at her. No lip colour or make-up.
- Balloon (Regina): Awel ? Waarom gebeurt er niks ?

## Scene 3 - Alfil Sent to the Pawns
Status: approved by the author.
Board position for all panels: the standard starting position (State 0). Nothing has moved.

### Panel 3a-1
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 3a in 7.3 (author decision, Section 23.B).
- Camera: behind White's first rank, behind and slightly to the right of Alfil on f1 (seen from White's side), at about head height, looking towards the White King on e1.
- In frame: Alfil (f1) in the right foreground, seen from behind and partly from the side; the White King (e1) left of centre, turned towards Alfil so his face is seen in three-quarter view; Regina (d1) at the left edge beside the King. In the middle ground the white pawns on d2, e2, f2 and g2, seen from behind. Further away, the empty board and the black army in its starting position, small and out of focus: every black piece on a square that is in frame is shown.
- Characters: the King looks at Alfil, chin raised, nose in the air ("lage boerenvolk"), mouth open. Alfil listens, head slightly bowed towards the King, mouth closed. Regina looks at the King.
- Balloon (White King): Alfil m’n raadsheer, ge weet dat ik als koning niet met dat lage boerenvolk spreek.

### Panel 3a-2
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 3a in 7.3 (author decision, Section 23.B).
- Camera: the same as 3a-1.
- In frame: the same as 3a-1.
- Characters: the King keeps looking at Alfil, mouth open, and points sideways (towards the second rank, in front of the officers) at the pawns without looking at them. Alfil looks at the King, mouth closed. Regina looks at the King.
- Balloon (White King): Vraag aan die luie pitten op de tweede rij wat er aan de hand is.

### Panel 3b
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Camera: over the White King's shoulder. Behind e1, slightly above the King's crown, looking across the whole board towards Black.
- Foreground: the back of the White King's crown and shoulder (left of centre), his arm pointing impatiently towards the black army. Alfil (f1) partly in frame at the right, seen from behind.
- Middle ground: all eight white pawns seen from behind, then the empty board: the board bulging gently in the middle, the cola stain on f6 only a faint discolouration, the greasy spot on f3 faint.
- Background: the complete black army in its starting formation, all 16 pieces, facing the camera. The Black King on e8 is clearly recognisable: calm, patient, short beard, waiting with composure. He is not laughing. The black knights face the centre.
- Balloon (White King): En maak voort want “Dieje van den overkant" denkt nu natuurlijk dat wij schrik hebben en zit op dit moment waarschijnlijk al met ons te lachen.

## Scene 4 - Pawn Mutiny
Status: approved by the author.
Board position for all panels: the standard starting position (State 0). Nothing has moved. Alfil stays on f1 in every panel: he cannot leave his square.

### Panel 4a
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Stage direction: (Alfil overlegt met pionnen en komt terug).
- Camera: from Black's side, somewhat elevated (above the black side of the board, at about twice the King's height), looking down across the gentle rise in the middle of the board towards White's second rank (corrected in 7.3 to match the approved sketch). The gentle rise in the middle of the board rises in the foreground (on d4/e4, its near half towards the camera); behind it the white pawns and officers.
- In frame: the white pawns on c2, d2, e2, f2, g2 and h2 facing the camera; behind them the officers on c1 to h1 (rook h1 and bishop c1 may be cut off by the frame edges). Every piece on a square that is in frame is shown.
- Characters: Alfil (f1) leans far forward over the f2 pawn, his mitre bent towards the pawns on e2, f2 and g2, listening. Those pawns turn towards him, arms crossed; the other pawns look on, arms crossed (author decision in 7.10: all white pawns keep their arms crossed, no pawn points). The King and Regina (e1, d1) wait upright, looking at Alfil. Caballo (g1) faces the centre.
- No balloons, no text.

### Panel 4b
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Camera: from Black's side, at officer height, zoomed in on Alfil (f1) and the White King (e1) (author feedback): their heads and upper bodies fill the frame. From this side Alfil is left, the King right. Caballo (g1) and Regina (d1) only partly at the frame edges; the heads of the pawns on f2 and e2 cross the bottom of the frame.
- Characters: Alfil has turned back to the King and looks straight at him, upright again, alarmed, one hand raised. The King looks back at Alfil, surprised by the news: eyebrows shot up, eyes wide, mouth open (author feedback).
- Balloon (Alfil): Muiterij Sire! De pionnen willen niet opspelen naar een centrumveld omdat er daar naar 't schijnt nen boebel in het bord zit.

### Panel 4c-1
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 4c in 7.3 (author decision, Section 23.B).
- Camera: from Black's side, slightly closer than 4b, the same two characters; the King now more in focus.
- Characters: Alfil, earnest, mouth open, looks at the King while gesturing with an open hand towards the centre of the board (towards the gentle rise in the middle of the board, "bergop"). The King looks back at Alfil, mouth closed, a frown forming: the bad news is sinking in.
- Balloon (Alfil): Als ze de hele tijd bergop moeten marcheren zijn ze uitgeteld alvorens ze nog maar aan de strijd hebben deelgenomen.

### Panel 4c-2
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 4c in 7.3 (author decision, Section 23.B).
- Camera: the same as 4c-1.
- Characters: Alfil, mouth open, looks at the King with both hands open: advice. The King looks back at Alfil, angry and worried at the same time: he realises he must change his plans. Furrowed brow, eyebrows pulled together, tight wavy mouth, reddening cheeks (author feedback on 4c). His anger bursts out in Scene 5.
- Balloon (Alfil): Als u de partij vandaag wil winnen zal u iets anders moeten spelen.

## Scene 5 - The King's Outburst
Status: approved by the author (7.3).
Board position for all panels: the standard starting position (State 0). Nothing has moved. Alfil stays on f1.

### Panel 5a
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Camera: from Black's side, close-up of the White King (e1), from the chest up; Alfil (f1) partly in frame at the left edge.
- Characters: the King explodes: face red, eyebrows pulled down hard, mouth wide open in a shout, one fist raised. He looks at Alfil. Alfil looks back at the King, taken aback.
- Balloon (White King, jagged shout balloon): Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever.

### Panel 5b-1
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 5b in 7.3 (author decision, Section 23.B).
- Camera: from Black's side, two-shot of Alfil (f1, left) and the White King (e1, right), at officer height. Caballo (g1) and Regina (d1) partly at the frame edges; pawn heads (f2, e2) cross the bottom of the frame.
- Characters: the King leans towards Alfil and jabs a pointing finger at him, a scornful look, mouth open. Alfil looks back at the King, mouth closed, stiffening: a sore spot is touched (his "minor promotion"). They look at each other.
- Balloon (White King): Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd

### Panel 5b-2
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 5b in 7.3 (author decision, Section 23.B).
- Camera: the same as 5b-1.
- Characters: the King, mocking, mouth open, finger still raised at Alfil. Alfil looks back at the King, openly offended: chin up, lips pressed together. They look at each other.
- Balloon (White King): en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’.

### Panel 5c
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
- Camera: from Black's side, same two-shot as 5b.
- Characters: the King looks at Alfil and points with his whole arm forward, over the pawns, towards the centre of the board (the gentle rise in the middle of the board): an order. Alfil looks back at the King, hesitant.
- Balloon (White King): Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum in handen nemen.

### Panel 5d-1
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 5d in 7.3 (author decision, Section 23.B).
- Camera: from Black's side, the same two-shot as 5c.
- Characters: Alfil looks at the King, apologetic, mouth open, both hands slightly spread. The King looks back at Alfil, impatient, mouth closed.
- Balloon (Alfil): Vergeef me dat ik u tegenspreek Sire, maar ik kan hier voorlopig nog niet naar buiten.

### Panel 5d-2
- White pawns (author decision in 7.10): every white pawn in frame stands with its arms crossed, in solidarity with the mutiny (Section 7, White Pawns).
Split from panel 5d in 7.3 (author decision, Section 23.B).
- Camera: high, from Black's side, above and in front of the white pawns, looking down on the f1 square, so that both of Alfil's diagonals are clear: f1-e2 and f1-g2. Alfil, the pawns and the King face the camera.
- In frame: Alfil (f1) in the centre, behind the pawns on e2, f2 and g2; from this side the King (e1) and Regina (d1) are at the right, Caballo (g1) and the rook (h1) at the left; the pawns on d2 and h2 at the edges.
- Characters: Alfil looks up at the King, apologetic, mouth open, and points with both hands to the pawns on e2 and g2 that block his diagonals. The pawns on e2 and g2 stand firm, arms crossed, stubborn, mouths closed. The King looks at Alfil, mouth closed.
- Balloon (Alfil): Immers, zowel het veld e2 als g2 is nog door opstandige boeren bezet.

### Panel 5e
- Camera: from Black's side, close-up of the White King (e1); Alfil (f1) partly at the left edge, Regina (d1) partly at the right edge.
- Characters: the King in despair: both hands to his face (or clutching his crown), eyes squeezed shut, mouth turned down. Alfil and Regina look at the King.
- Balloon (White King): Wel nondedju ! Heel mijn voorbereiding om zeep.

---

## Proposed Panels for Scenes 6 to 16 (PROPOSAL, awaiting author approval)
Added in 7.7. The author asked for the full comic as an SVG preview and chose to have Scenes 6 to 16 proposed by Claude and approved or corrected afterwards. These blocks are **proposals, not approved script**: under the Strict Adaptation Protocol (P.2) they must not be sent to the image generator until the author approves them. After approval each block is rewritten as a full panel block in the style of Scenes 1 to 5, with a manifest in Section 20.3 (sequence numbers from 22).
- Source: the dialogue is copied from Section 1 letter for letter (only runs of spaces collapsed) and checked by script; the panel splits follow sentence boundaries (Section 23). The moves follow Section 11 and the board states of Section 12.
- Camera and character lines describe the SVG preview (`comic/panels.js`, rendered by `comic/index.html`); gesture names are the preview's (for example "point-down-l": arm pointing down, to the left as seen in the image).
- Captured pieces stand beside the board, next to the h-file, from the capture onwards.
- Open points for these scenes are in Appendix B, items 14 and 15.

### Panel 6a (PROPOSAL)
- Board state: 0.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: Regina (speaking, looks at White King, gesture open-l); White King (puzzled, looks at Regina).
- Balloon (Regina): Speelt dan e3 Sire, dan kan Alfil toch al gaan zien.

### Panel 6b (PROPOSAL)
- Board state: 0.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (stubborn, speaking, gesture wave-l); Regina (looks at White King).
- Balloon (White King): Allee goed dan, want "Dieje van den overkant" wordt precies al serieus ongeduldig.

### Panel 6c (PROPOSAL)
- Board state: 1.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Move shown: e2-e3 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 1. e3
- No balloons.

### Panel 6d (PROPOSAL)
- Board state: 2.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: the piece on d5 (calm).
- Move shown: d7-d5 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 1. ... d5
- No balloons.

### Panel 7a (PROPOSAL)
- Board state: 2.
- Camera: from Black's side (the white pieces face the camera), framed on e1, f1.
- Characters: White King (angry, speaking, gesture point-down-l); Alfil (looks at White King); Regina (looks at White King).
- Balloon (White King): Lap, ziet ge ’t nu ? Wat had ik jullie gezegd ? "Dieje van den overkant" pakt al direct het centrum in.

### Panel 7b (PROPOSAL)
- Board state: 2.
- Camera: from Black's side (the white pieces face the camera), framed on f1, e1.
- Characters: Alfil (apologetic, speaking, looks at White King, gesture open-r); White King (angry, looks at Alfil).
- Balloon (Alfil): Jamaar Sire, met dieje boebel.

### Panel 7c (PROPOSAL)
- Board state: 2.
- Camera: from Black's side (the white pieces face the camera), framed on f1, e1.
- Characters: White King (angry, speaking, looks at Alfil, gesture point-up-l); Alfil (offended, looks at White King).
- Balloon (White King): Alfil veegt dieje paprika chips van uwe mijter en maakt dat ge buiten zijt.

### Panel 7d (PROPOSAL)
- Board state: 3.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d3, f1.
- Characters: Alfil (calm); White King (looks at Alfil).
- Move shown: f1-d3 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 2. Ld3
- No balloons.

### Panel 8a (PROPOSAL)
- Board state: 3.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (worried, speaking, gesture both-open); Regina (looks at White King).
- Balloon (White King): Boebel, boebel.

### Panel 8b (PROPOSAL)
- Board state: 3.
- Camera: from Black's side (the white pieces face the camera), framed on e1, f1.
- Characters: White King (angry, speaking, gesture point-down-r); Alfil (looks at White King); Regina (looks at White King).
- Balloon (White King): Zo zullen we de partij wel winnen als "Dieje van den overkant" mag schaken en wijlle hier maar stratego zitten spelen en niet in het centrum mogen komen.

### Panel 8c (PROPOSAL)
- Board state: 4.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Black King (calm).
- Move shown: e7-e6 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 2. ... e6
- No balloons.

### Panel 9a (PROPOSAL)
- Board state: 4.
- Camera: from Black's side (the white pieces face the camera), framed on e1, g1.
- Characters: White King (proud, speaking, looks at Caballo, gesture point-down-l); Caballo (looks at White King).
- Balloon (White King): Ridder Caballo, springt naar f3 zodat ik seffens kan rokeren.

### Panel 9b (PROPOSAL)
- Board state: 5.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (stubborn); White King (surprised).
- Move shown: g1-h3 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 3. Ph3
- No balloons.

### Panel 9c (PROPOSAL)
- Board state: 5.
- Camera: from Black's side (the white pieces face the camera), framed on e1, h3.
- Characters: White King (furious, speaking, looks at Caballo, gesture fist-up-r); Caballo (stubborn).
- Balloon (White King), shout balloon: Maar Caballo, zijt gij nu een paard of nen stommen ezel ? Naar f3 had ik toch gezegd !

### Panel 9d (PROPOSAL)
- Board state: 5.
- Camera: from Black's side (the white pieces face the camera), framed on h3.
- Characters: Caballo (angry, speaking).
- Balloon (Caballo): Daar op dat vies veld in die vettige plek gaan staan ? Geen sprake van Sire !

### Panel 9e (PROPOSAL)
- Board state: 5.
- Camera: from Black's side (the white pieces face the camera), framed on h3, f3.
- Characters: Caballo (offended, speaking).
- Balloon (Caballo): Dat ge uw voetvolk erdoor jaagt tot daar nog aan toe maar een officier laat ge niet met zijn voetstuk in zo'n vieze vuile plek staan verkommeren.

### Panel 9f (PROPOSAL)
- Board state: 5.
- Camera: from Black's side (the white pieces face the camera), framed on e1, h3.
- Characters: Caballo (smug, speaking); White King (angry, looks at Caballo).
- Balloon (Caballo): Zie dat het opdroogt en ik straks geen vork meer kan geven omdat ik aan het bord vastplak? En daarbij, ge kunt zo even goed rokeren !

### Panel 9g (PROPOSAL)
- Board state: 6.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Black King (calm).
- Move shown: c8-d7 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 3. ... Ld7
- No balloons.

### Panel 10a (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (sigh, speaking, sigh puff); Regina (looks at White King).
- Balloon (White King): Al meer als duizend partijen heb ik nu al gespeeld en nog nooit heb ik zo ne zever meegemaakt.

### Panel 10b (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (calm, speaking, gesture hand-chest); Regina (looks at White King).
- Balloon (White King): In de eerste jaren, dat weet ik nog goed, dat was toen nog met houten borden. Uren en uren heb ik daar op gespeeld.

### Panel 10c (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (proud, speaking, gesture raise-r).
- Balloon (White King): En veel gewonnen hé want dat was nog in mijne jongen tijd.

### Panel 10d (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (angry, speaking, gesture both-open); Regina (looks at White King).
- Balloon (White King): En ineens was een houten bord niet goed genoeg meer en de stukken begonnen te zagen :

### Panel 10e (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, e2.
- Characters: White King (angry, speaking, gesture point-down-l).
- Balloon (White King): de lak is eraf, de zwarte velden zijn niet meer goed, er zitten splinters aan de rand.

### Panel 10f (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (worried, speaking, gesture open-l); Regina (looks at White King).
- Balloon (White King): Enfin, ze wilden er nimmer op spelen en het moest van dag op dag zo’n modern plastieken zijn.

### Panel 10g (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (angry, speaking, gesture fist-up-r).
- Balloon (White King): En 't ergste van al : er kwam een nief bord maar we waren nog geen drie jaar verder of ze begonnen al vanhaar te zagen.

### Panel 10h (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (stubborn, speaking, looks at Regina, gesture raise-l); Regina (looks at White King).
- Balloon (White King): Die pasgepromoveerde officieren hebben totaal geen respect voor goei gerief. Dat zeg ik u.

### Panel 10i (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: Regina (speaking, looks at White King, gesture open-l); White King (stubborn, looks at Regina).
- Balloon (Regina): Jamaar Sire, uw officieren hebben misschien wel een punt.

### Panel 11a (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (angry, speaking, looks at Regina, gesture point-up-l); Regina (surprised, looks at White King).
- Balloon (White King): Regina luistert: Wie kent da bord hier nu eigenlijk het beste ?

### Panel 11b (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (smug, speaking, looks at Regina, gesture wave-l); Regina (offended, looks at White King).
- Balloon (White King): Gij loopt daar met uw lange zetten veel te gemakkelijk overheen en ge beseft volgens mij niet eens goe wat kwaliteit is.

### Panel 11c (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (proud, speaking, gesture hand-chest).
- Balloon (White King): Daarentegen heb ik al meermaals, heel dat bord veld voor veld afgegaan, vierkanten gemaakt, driehoekskes gedraaid, oppositie gepakt. Ook verre oppositie hé.

### Panel 11d (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (proud, speaking, gesture raise-l); Regina (looks at White King).
- Balloon (White King): Ooit heb ik zelfs eens met onze twee paarden heel dat bord omgeploegd om "Dieje van de overkant" met zijne laatste pluspion mat te zetten.

### Panel 11e (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (smug, speaking, looks at Regina); Regina (offended, looks at White King).
- Balloon (White King): Héhé, daar was “m toen nie goe van zelle. En nu doet gij alsof ik mijn bord nie ken ?

### Panel 11f (PROPOSAL)
- Board state: 6.
- Camera: from Black's side (the white pieces face the camera), framed on e1, d1.
- Characters: White King (angry, speaking, looks at Regina, gesture point-down-l); Regina (worried, looks at White King).
- Balloon (White King): Ga liever buiten dieje lompen ezel op h3 een beetje in 't oog houden.

### Panel 11g (PROPOSAL)
- Board state: 7.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Regina (calm).
- Move shown: d1-h5 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 4. Dh5
- No balloons.

### Panel 11h (PROPOSAL)
- Board state: 8.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Black King (calm).
- Move shown: g8-e7 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 4. ... Pe7
- No balloons.

### Panel 12a (PROPOSAL)
- Board state: 8.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (puzzled, speaking, gesture point-up-l).
- Balloon (White King): Zou er op f6 misschien ook een plek zitten ? Want "Dieje van den overkant" zijnen ezel wilt precies ook niet goed mee.

### Panel 12b (PROPOSAL)
- Board state: 8.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (surprised, speaking, gesture point-up-r).
- Balloon (White King): Seg, maar wacht eens effe … .

### Panel 12c (PROPOSAL)
- Board state: 8.
- Camera: from Black's side (the white pieces face the camera), framed on e1, h3.
- Characters: White King (proud, speaking, looks at Caballo, gesture point-down-l); Caballo (heroic).
- Balloon (White King): Ridder Caballo, hop naar g5. Allez vooruit, ju !

### Panel 12d (PROPOSAL)
- Board state: 9.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (heroic).
- Move shown: h3-g5 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 5. Pg5
- No balloons.

### Panel 12e (PROPOSAL)
- Board state: 10.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Regina (worried); the piece on g6 (calm).
- Move shown: g7-g6 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 5. ... g6
- No balloons.

### Panel 13a (PROPOSAL)
- Board state: 10.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (heroic, speaking).
- Balloon (Caballo), shout balloon: Voor de glorie en de overwinning ! Ten aanval !

### Panel 13b (PROPOSAL)
- Board state: 11.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (heroic).
- Move shown: g5-h7 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 6. Pxh7
- Beside the board: the captured black pawn (h7) stands beside the board.
- No balloons.

### Panel 14a (PROPOSAL)
- Board state: 11.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (furious, speaking, gesture fist-up-r); Regina (worried).
- Beside the board: the captured black pawn (h7) stands beside the board.
- Balloon (White King), shout balloon: Godverdoemme Caballo, gij se stommen ezel ! Hoe dikwijls moet ik nog zeggen dat ik hier het bevel voer tijdens de partij.

### Panel 14b (PROPOSAL)
- Board state: 11.
- Camera: from Black's side, off to the kingside, so the King (e1) and Alfil (d3) stand side by side.
- Characters: White King (angry, speaking, looks at Alfil, gesture point-down-r); Alfil (surprised, looks at White King).
- Beside the board: the captured black pawn (h7) stands beside the board.
- Balloon (White King): Alfil, staat daar nu toch niet zo stom te gapen, doe nu eens iets.

### Panel 14c (PROPOSAL)
- Board state: 11.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (worried, speaking, gesture point-up-l, sweat drops).
- Beside the board: the captured black pawn (h7) stands beside the board.
- Balloon (White King): Regina staat in, dat ziet ge zelf toch ook ? Dju miljaar, "Dieje van den overkant" is al aan zet.

### Panel 14d (PROPOSAL)
- Board state: 12.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Regina (surprised, looks at the piece on h5).
- Move shown: g6-h5 (move streak).
- Move box (bottom-left corner, bold, white rectangle): 6. ... gxh5
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- No balloons.

### Panel 14e (PROPOSAL)
- Board state: 12.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (despair, speaking).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (White King): Lap, daar hebt ge’t al. Regina geslagen.

### Panel 14f (PROPOSAL)
- Board state: 12.
- Camera: from Black's side, off to the kingside, so the King (e1) and Alfil (d3) stand side by side.
- Characters: White King (angry, speaking, gesture both-open); Alfil (looks at White King).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (White King): En terwijl ik hier weer zit te zwoegen om de partij te winnen

### Panel 14g (PROPOSAL)
- Board state: 12.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview. Wide panel (full strip).
- Characters: White King (speaking, gesture point-up-r); Regina (smug, looks at black rook (h8)); black rook (h8) (proud, looks at Regina).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (White King): gaat ze daar van neffe 't bord waarschijnlijk weer heel de tijd zitten lonken naar dieje pipo van ne zwarten toren daar op h8.

### Panel 14h (PROPOSAL)
- Board state: 12.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (smug, speaking, gesture wave-r).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (White King): Pff, die sul kan niet eens diagonaal gaan, wat ze daar toch in gezien heeft.

### Panel 15a (PROPOSAL)
- Board state: 12.
- Camera: from Black's side, off to the kingside, so the King (e1) and Alfil (d3) stand side by side.
- Characters: Alfil (apologetic, speaking, looks at White King, gesture point-up-l); White King (surprised, looks at Alfil).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (Alfil): Vergeef me dat ik u onderbreek Sire, maar we hebben geloof ik, een mat in één.

### Panel 15b (PROPOSAL)
- Board state: 12.
- Camera: from Black's side, off to the kingside, so the King (e1) and Alfil (d3) stand side by side.
- Characters: White King (proud, speaking, gesture point-up-l); Alfil (looks at White King).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (White King): Bedankt voor dieje info raadsheer Alfil, daar zal "Dieje van den overkant" niet goed van zijn. Ridder Caballo onmiddellijk naar f6 !.

### Panel 15c (PROPOSAL)
- Board state: 12.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (furious, speaking).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (Caballo): Absoluut geen sprake van Sire ! Er is daar met cola gesmost en ik ga niet met mijn proper viltje in dieje natten drets staan.

### Panel 15d (PROPOSAL)
- Board state: 12.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (smug, speaking).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (Caballo): Eventueel wil ik nog doorpakken op f8 want daar is het precies wel droog.

### Panel 15e (PROPOSAL)
- Board state: 12.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview.
- Characters: Caballo (neutral, speaking); Black King (calm, gesture open-l).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (Caballo): Seg, "Dieje van den overkant" stelt trouwens remise voor.

### Panel 16a (PROPOSAL)
- Board state: 12.
- Camera: from Black's side (the white pieces face the camera), framed on e1.
- Characters: White King (sigh, speaking, sigh puff).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- Balloon (White King): Pakt dat dan maar aan.

### Panel 16b (PROPOSAL)
- Board state: 12.
- Camera: special angle; see comic/panels.js for the camera position used in the SVG preview. Wide panel (full strip).
- Characters: White King (sigh); Black King (calm); Regina (looks at black rook (h8)).
- Beside the board: the captured black pawn (h7) and Regina stand beside the board.
- No balloons.

---

# SECTION 19 - DIALOGUE ATTRIBUTION SPECIFICATION
Added in 7.1. Purpose: every generated panel must show the correct speaker for every line, and listeners must never appear to be speaking. These rules apply to every panel, every scene and every character, and to every image generator.

Priority order (applies whenever rules conflict):
1. Source fidelity: the original play (Section 1) is the only authority for dialogue, speakers, order and stage directions.
2. Correct speaker attribution (this section).
3. Visual continuity: canon, chess positions, board details (Sections 3 to 12).
4. Artistic composition: camera, framing, layout.
If composition conflicts with the script or with correct speaker attribution, the script and attribution win: change the composition or split the panel.
Extended in 7.2: Section 23.0 adds readable lettering (after speaker attribution) and minimising the number of panels (last). Chess positions and canon are never traded away.

## 19.A Explicit Speaker Assignment
Every panel that contains dialogue must state, before any image is generated (see the Panel Manifest, Section 20):
- The speaker's canonical character name (Section 19.F).
- The exact dialogue assigned to that speaker, copied verbatim from Section 1.
- All other characters visible in the panel.
- Which characters are listening, and how they react.
- Any additional characters who have dialogue in the same panel, with their exact lines.
- The relevant stage direction from Section 1, where applicable.

Never infer the speaker from a character's position, size or prominence in the illustration. The speaker is whoever the script names before the line ("Koning:", "Alfil:", "Regina:", "Caballo:").

## 19.B Speech-Balloon Ownership
- Every speech balloon belongs unambiguously to the character the script assigns the dialogue to.
- The balloon tail points clearly to that character's mouth or speaking position.
- A balloon tail never points to a listener or to an unrelated character.
- Do not assign dialogue to a character because that character is closest to the balloon.
- Do not merge dialogue from different speakers into one balloon.
- One speaker's long speech may be split over several balloons or panels; each part keeps the same owner and the original wording.
- Preserve the original order of dialogue: within a panel, the balloon that is read first (top-left first, then left to right, then top to bottom) holds the earlier line.
- Shouted lines (decided in 7.3): a jagged shout balloon instead of a round one. The manifest (field 9) states which balloons are shout balloons; all other lines use round balloons. Panel 5a is the reference.

## 19.C Speaking and Listening Poses
The artwork makes the speaking role visually unambiguous.

For the speaker:
- A visibly speaking mouth (open, mid-word), or a clear speaking gesture where the mouth is hidden (for example a character seen from behind).
- A gaze directed at the character addressed (Section 13, Script Fidelity Rule: pieces that talk to each other look at each other).
- A pose that reflects the line's intention and emotion.

For listeners:
- Closed mouths while they are not speaking. Exception: a listener's mouth may fall open in surprise only when the manifest says so explicitly, and then the listener has no balloon and no tail points to them.
- Attentive, surprised, irritated, confused, worried or otherwise appropriate reactions (Section 13: the listener reacts visibly to what is said).
- Gaze towards the speaker when the scene calls for it.
- No speech balloon unless the script assigns them dialogue in that panel.

A character's presence in a panel never makes that character a speaker.

## 19.D Multiple Speakers in One Panel
When several characters speak in one panel:
- Each speaker gets a separate, clearly attributed balloon (or balloon sequence).
- The original dialogue order is preserved in the reading order of the balloons.
- The transition between speakers is visually clear.
- Each character's mouth, pose and gaze correspond to their own speaking turn.
- If clarity cannot be achieved, split the scene into additional panels rather than compromising attribution.

Default for this cartoon: one speaker per panel. A panel with two speakers needs an explicit reason in its manifest.

## 19.E Special Rule for the King and Alfil
The King and Alfil appear together in most panels and are the most vulnerable to speaker confusion.

When the King speaks:
- The King is the only speaker unless the script explicitly assigns dialogue to another character in that panel.
- Alfil visibly listens, mouth closed, unless Alfil has a separate line in the same panel.
- The King's balloon tail points to the King.

When Alfil speaks:
- Alfil visibly delivers the dialogue: open, speaking mouth and a speaking gesture.
- The King visibly listens and reacts, unless he has a separate line in the same panel.
- Alfil's balloon tail points to Alfil.

The same principles apply to every other pair and group: Koning and Regina, Koning and Caballo, Alfil and the pawns, and so on.

## 19.F Canonical Speaker Names
Use these names exactly, in manifests and prompts:

| Name in the script | Character | Square at the start | Notes |
|---|---|---|---|
| Koning | White King | e1 | Speaks most lines. |
| Alfil | White bishop (the one that starts on f1) | f1 | The c1 bishop is a different, unnamed piece. |
| Regina | White Queen | d1 | Captured on h5 by 6...gxh5; afterwards beside the board. |
| Caballo | White knight (the one that starts on g1) | g1 | The b1 knight is a different, unnamed piece. |
| "Dieje van den overkant" | Black King | e8 | Never speaks in the script; his draw offer is reported by Caballo. |
| (hoorbaar gemor vanop de tweede rij) | White pawns | second rank | No words: shown as grumble balloons with chess annotation symbols and #, and the stage direction verbatim in a caption box (panel 2b; author decision in 7.12). |

No other character speaks in the play.

---

# SECTION 20 - PANEL MANIFEST STANDARD
Added in 7.1. A panel manifest is prepared for every panel before any image is generated. It is derived from the original play (Section 1), never invented. The manifest is the reference for generation (Section 21) and for validation (Section 22).

Rules:
- Use the canonical names (Section 19.F) consistently.
- Copy dialogue verbatim from Section 1. The only allowed change is collapsing runs of spaces into one space; spelling, punctuation, capitals, quote marks and chess notation stay exactly as in Section 1.
- Do not omit dialogue to make a panel easier to compose: add panels or pages instead.
- Continuity constraints carry over from earlier panels (position, who has moved, who has been captured, which stains are explicit).
- Panels written in Section 18 before version 7.1 are the source for their manifests; they must be converted to the manifest format before generation (status in Section 22.E).
- Fields 14 to 21 (added in 7.2) plan dialogue density, lettering space and overflow (Section 23). The overflow action always adds or redesigns panels; it never shortens the original text.

## 20.1 Manifest Template
```
PANEL <scene><letter>   (sequence number <n> in the cartoon)

1.  Panel identifier and sequence:
2.  Script excerpt (Section 1, verbatim, with the speaker label):
3.  Dialogue in this panel (verbatim, one entry per balloon, in reading order):
      Balloon 1: "<text>"
4.  Speaker per line:
      Balloon 1 -> <canonical name>
5.  Characters visible (name, square, how much is in frame):
6.  Listening characters and their reactions (mouth closed unless stated):
7.  Positions and relative prominence (left to right as seen by the camera; who is largest):
8.  Mouth states, gestures and gaze:
      Speaker: mouth <open/speaking>, gesture <...>, looks at <...>
      Listener <name>: mouth <closed>, reaction <...>, looks at <...>
9.  Balloon ownership and reading order (where each balloon sits, where its tail points):
10. Stage directions (verbatim, or "none"):
11. Board state and moves (State number from Section 12; move notation if a move happens; if a move is played in this panel, the move box text copied verbatim from Section 1, Section 13 Move Box):
12. Continuity constraints inherited from earlier panels:
13. Must not appear:

    Dialogue density and composition (added in 7.2, Section 23):
14. Dialogue length (words and characters of the exact dialogue in this panel):
15. Dialogue segmentation (the original lines or sentence fragments assigned to this panel, in original order, and where the speech continues):
16. Visual priority (the character, action, interaction or board detail that must stay prominent):
17. Lettering space (the area reserved for the balloons, e.g. "top third, above the heads"):
18. Balloon-area estimate (all balloons together, % of panel area; target roughly 25 to 30%):
19. Layout strategy (shot type from Section 23.D and balloon placement):
20. Overflow action (what to do if the text does not fit comfortably: add a panel, split at a named natural boundary, use a wider panel; never shorten the text):
21. Continuity requirements (positions, expressions, props and chess position carried over from the adjacent panels):
```

## 20.2 Worked Example: Panel 5b (the King speaks, Alfil listens)
```
PANEL 5b   (sequence number 13)

1.  Scene 5, panel b, the second panel of the King's speech.
2.  Script excerpt:
      Koning:
      Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever. Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’. Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum  in handen nemen.
3.  Dialogue in this panel:
      Balloon 1: "Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’."
4.  Speaker per line:
      Balloon 1 -> Koning
5.  Characters visible: Koning (e1, upper body), Alfil (f1, upper body), Caballo (g1, partly at the left edge), Regina (d1, partly at the right edge), heads of the pawns on f2 and e2 (bottom edge).
6.  Listening: Alfil, mouth closed, lips pressed together, offended (his minor-promotion sore spot). Caballo and Regina, mouths closed, looking at the King.
7.  Positions (camera on Black's side): left to right Caballo, Alfil, Koning, Regina. Koning and Alfil equally large, Koning slightly more central.
8.  Koning: mouth open, speaking; leans towards Alfil and points a finger at him; looks at Alfil; scornful.
    Alfil: mouth closed; chin up; looks back at Koning.
9.  Balloon 1 at the top right, above Koning; tail ends at Koning's mouth; the tail does not pass near Alfil's head.
10. Stage directions: none.
11. State 0 (starting position). No move.
12. Continuity: same two-shot as 5c; Alfil stays on f1 (e2 and g2 block him); cola stain on f6 subtle; Koning angry since 5a.
13. Must not appear: an open mouth on Alfil; a balloon or tail at Alfil; any other text; any moved piece; an explicit cola stain.

    Dialogue density and composition (added in 7.2):
14. Dialogue length: 34 words, 181 characters.
15. Segmentation: the second sentence of Koning's speech (it starts after "Alfil, gene zever." in 5a and continues with "Ga buiten zien ..." in 5c).
16. Visual priority: Koning's pointing finger and scornful face, and Alfil's offended reaction.
17. Lettering space: the top band of the panel, above Koning and Regina, right of Alfil's mitre.
18. Balloon-area estimate: about 30% (upper limit of the target).
19. Layout strategy: medium two-shot (Section 23.D); one balloon in the top band; tail short and straight down to Koning's mouth.
20. Overflow action: split at the natural boundary after "liever tot dame waart gepromoveerd" into two balloons for Koning in reading order, or into panels 5b-1 and 5b-2 with Alfil's reaction growing in the second; never shorten the text.
21. Continuity: same camera as 5c; Koning angry since 5a; Alfil on f1; State 0; cola stain subtle.
```

Mirror case (Alfil speaks, Koning listens), panel 4b: Balloon 1 -> Alfil, tail to Alfil's mouth; Alfil mouth open with a raised hand; Koning's mouth open only because of surprise, as the manifest says explicitly (Section 19.C exception), with no balloon or tail near him.
Note (7.3): panel 5b has since been split into 5b-1 and 5b-2 (Section 18), and the sequence numbers changed with the splits. The example above shows 5b before the split and stays as an illustration of the format.

## 20.3 Manifests: Scenes 1 to 5 (added in 7.4)
Derived from the approved panel script (Section 18) and the play (Section 1). Field 2 is copied from Section 1 automatically, character for character. Balloon area estimates use the album format of Section 23.F (about 85 x 75 mm, lettering about 8 pt). Common to all 21 panels:
- Board: State 0 (starting position); no piece moves in Scenes 1 to 5. Alfil stays on f1 throughout (e2 and g2 block him).
- Board details: the gentle rise in the middle of the board on d4/e4/d5/e5 (the board's own warp, Section 4); cola stain on f6 and greasy spot on f3 only barely noticeable (Sections 4 and 23).
- Surroundings: empty chess club room, soft and out of focus, no people (Section 3).
- Costumes: officers in full costume, pawns in soldier uniforms (Section 5).
- Every knight faces the centre files; every visible occupied square shows its piece.
- Lettering: the image generator writes the balloon text exactly as in field 3; every balloon is checked letter for letter afterwards (Section 21). Fallback: empty balloons, text inserted afterwards.
- Must never appear (in addition to field 13): invented text, captions (except the caption box of panel 2b, 7.12), narrator boxes (the move box of Section 13 is not a caption), coordinate labels, people, moved pieces, an explicit cola stain, an explicit greasy spot.

### Scene 1 - Opening Speech

```
PANEL 1a   (sequence number 1)

1.  Scene 1, panel a: first part of the King's opening speech.
2.  Script excerpt:
      Koning:
      Wat is het vandaag toch een heuglijke dag. Aanschouw mijn troepen, van toren tot toren staan ze in perfecte slagorde opgesteld, klaar voor deze dappere strijd. Dat "Dieje van den overkant" al maar zeker is dat hij nu al begint te bibberen. Want, ik   voel het aan mijn viltje, deze roemrijke partij win ik vandaag ! Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?
3.  Dialogue:
      Balloon 1: "Wat is het vandaag toch een heuglijke dag. Aanschouw mijn troepen, van toren tot toren staan ze in perfecte slagorde opgesteld, klaar voor deze dappere strijd."
4.  Balloon 1 -> Koning
5.  Visible: rook h1 (partly, left edge), Caballo g1, Alfil f1, Koning e1, Regina d1, bishop c1 (partly, right edge); pawns h2, g2, f2, e2, d2, c2 in front.
6.  Listening: Alfil, Regina, Caballo and the pawns, mouths closed, standing at attention, looking at the King.
7.  Camera on Black's side, files h to a from left to right. Officers' heads rise above the pawns; Koning central and largest.
8.  Koning: mouth open, proud, one arm sweeping out towards his troops; looks out over his army.
    Listeners: mouths closed; eyes on the King.
9.  Balloon 1 in the top left; tail to Koning's mouth, not crossing Alfil's or Caballo's head.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: opening panel of the cartoon; sets the positions used in 1b-1 and 1b-2.
13. Must not appear: an open mouth on any listener; black pieces (behind the camera).
14. Dialogue length: 26 words, 159 characters.
15. Segmentation: the first two sentences of speech 1; continues in 1b-1 with "Dat "Dieje van den overkant" ...".
16. Visual priority: the King's sweeping gesture and the army in perfect formation.
17. Lettering space: top left, above Caballo and Alfil.
18. Balloon-area estimate: about 15%.
19. Layout: wide-medium shot (Section 23.D) of the white officers with the pawns in front; one round balloon.
20. Overflow: if it does not fit, split after "heuglijke dag." into two balloons for Koning in reading order.
21. Continuity requirements: positions and framing carry over to 1b-1.
```

```
PANEL 1b-1   (sequence number 2)

1.  Scene 1, panel b-1: second part of the opening speech, about the opponent.
2.  Script excerpt:
      Koning:
      Wat is het vandaag toch een heuglijke dag. Aanschouw mijn troepen, van toren tot toren staan ze in perfecte slagorde opgesteld, klaar voor deze dappere strijd. Dat "Dieje van den overkant" al maar zeker is dat hij nu al begint te bibberen. Want, ik   voel het aan mijn viltje, deze roemrijke partij win ik vandaag ! Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?
3.  Dialogue:
      Balloon 1: "Dat "Dieje van den overkant" al maar zeker is dat hij nu al begint te bibberen."
4.  Balloon 1 -> Koning
5.  Visible: Caballo g1 (fully, left), Alfil f1, Koning e1, Regina d1 (fully, right); bishop c1 and rook h1 partly at the edges; pawns g2, f2, e2, d2 crossing the bottom.
6.  Listening: Alfil, Regina, Caballo, mouths closed, looking at the King; amused confidence.
7.  Left to right: Caballo, Alfil, Koning, Regina; Alfil and Koning central and largest.
8.  Koning: mouth open, proud and mocking, dismissive wave of one hand; looks straight ahead past the camera, towards the black army.
    Listeners: mouths closed; eyes on the King.
9.  Balloon 1 top right, above Regina; tail to Koning's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: same positions as 1a, closer camera.
13. Must not appear: an open mouth on Alfil; a tail near Alfil.
14. Dialogue length: 16 words, 79 characters.
15. Segmentation: the third sentence of speech 1; continues in 1b-2 with "Want, ik voel ...".
16. Visual priority: the King's mocking confidence.
17. Lettering space: top right.
18. Balloon-area estimate: about 10%.
19. Layout: medium shot of the four officers; one round balloon.
20. Overflow: not expected; if needed, widen the balloon in the top band.
21. Continuity requirements: same camera and positions in 1b-2.
```

```
PANEL 1b-2   (sequence number 3)

1.  Scene 1, panel b-2: end of the opening speech; the King turns to Alfil with his question.
2.  Script excerpt:
      Koning:
      Wat is het vandaag toch een heuglijke dag. Aanschouw mijn troepen, van toren tot toren staan ze in perfecte slagorde opgesteld, klaar voor deze dappere strijd. Dat "Dieje van den overkant" al maar zeker is dat hij nu al begint te bibberen. Want, ik   voel het aan mijn viltje, deze roemrijke partij win ik vandaag ! Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?
3.  Dialogue:
      Balloon 1: "Want, ik voel het aan mijn viltje, deze roemrijke partij win ik vandaag ! Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?"
4.  Balloon 1 -> Koning
5.  Visible: the same as 1b-1.
6.  Listening: Alfil, mouth closed, attentive, looks back at the King; Regina looks at the King; Caballo faces the centre.
7.  Left to right: Caballo, Alfil, Koning, Regina; Koning turned towards Alfil.
8.  Koning: mouth open, turned to Alfil, open-hand gesture towards him; looks at Alfil.
    Alfil: mouth closed; looks at Koning.
9.  Balloon 1 top right; tail to Koning's mouth, not crossing Alfil's head.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: same camera as 1b-1.
13. Must not appear: an open mouth on Alfil; a tail near Alfil.
14. Dialogue length: 23 words, 139 characters.
15. Segmentation: the last two sentences of speech 1 (ends the speech).
16. Visual priority: the King turning to Alfil; the exchange of looks.
17. Lettering space: top right and top centre.
18. Balloon-area estimate: about 15%.
19. Layout: medium shot; one round balloon.
20. Overflow: split before "Alfil, zijn ook onze pionnen ..." into two balloons for Koning.
21. Continuity requirements: Alfil's answer follows in 1c.
```

```
PANEL 1c   (sequence number 4)

1.  Scene 1, panel c: Alfil answers.
2.  Script excerpt:
      Alfil:
      Jawel Sire, zij wachten op uw bevel !
3.  Dialogue:
      Balloon 1: "Jawel Sire, zij wachten op uw bevel !"
4.  Balloon 1 -> Alfil
5.  Visible: Alfil f1 and Koning e1 from behind in the foreground; Regina d1 from behind; Caballo g1 in profile; all white pawns from behind; the whole board; the complete black army (16 pieces) in the distance.
6.  Listening: Koning, mouth closed, head turned slightly towards Alfil (partial profile).
7.  Camera over Alfil's shoulder from White's side; Alfil right of centre, Koning left of centre in the foreground; black army small in the distance.
8.  Alfil: seen from behind, head turned slightly to the King (partial profile); speaking gesture: one hand raised towards the troops (the mouth is hidden, Section 19.C).
    Koning: partial profile towards Alfil, mouth closed.
9.  Balloon 1 above Alfil; tail to Alfil's head and mouth side.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: answers 1b-2.
13. Must not appear: a tail near the King; black pieces out of their starting squares.
14. Dialogue length: 7 words, 37 characters.
15. Segmentation: the whole of speech 2.
16. Visual priority: the two armies facing each other; Alfil and the King in the foreground.
17. Lettering space: top right, above Alfil, clear of the black army.
18. Balloon-area estimate: about 5%.
19. Layout: over-the-shoulder wide shot (Section 23.D); one round balloon.
20. Overflow: not expected.
21. Continuity requirements: positions of 1a; the black army in its starting formation.
```

### Scene 2 - Ten Aanval

```
PANEL 2a   (sequence number 5)

1.  Scene 2, panel a: the order to attack.
2.  Script excerpt:
      Koning:
      Wel laat ons dan niet langer talmen : glorie en eer wachten op ons. Ten aanval ! 1. e4
3.  Dialogue:
      Balloon 1: "Wel laat ons dan niet langer talmen : glorie en eer wachten op ons. Ten aanval ! 1. e4"
4.  Balloon 1 -> Koning
5.  Visible: Koning e1 large in the centre; Alfil f1 fully at the left; Regina d1 fully at the right; heads of the pawns f2, e2, d2 at the bottom.
6.  Listening: Alfil and Regina, mouths closed, looking at the King.
7.  Camera on Black's side, zoomed in on the King.
8.  Koning: mouth wide open, one arm raised high, commanding; proud.
    Listeners: mouths closed; eyes on the King.
9.  Balloon 1 top left, clear of the crown; tail to Koning's mouth. Round balloon (the manifest does not mark this line as shouted).
10. Stage directions: none in this panel; "(hoorbaar gemor vanop de tweede rij)" follows in 2b.
11. State 0. No move: the ordered 1. e4 is not played.
12. Continuity: after Alfil's answer in 1c.
13. Must not appear: an e-pawn on e4; an open mouth on Alfil or Regina.
14. Dialogue length: 17 words, 86 characters.
15. Segmentation: the whole of speech 3.
16. Visual priority: the King's raised arm.
17. Lettering space: top left.
18. Balloon-area estimate: about 10%.
19. Layout: medium close-up of the King; one balloon.
20. Overflow: not expected.
21. Continuity requirements: the pawns stay on the second rank in 2b.
```

```
PANEL 2b   (sequence number 6)

1.  Scene 2, panel b: the pawns grumble and do not move.
2.  Script excerpt:
      (hoorbaar gemor vanop de tweede rij)
3.  Dialogue: none. Grumble balloons with chess symbols only: "??#", "?!", "#!?", "??", "#?!". Caption, lower right, verbatim: "(hoorbaar gemor vanop de tweede rij)" (author decision in 7.12).
4.  No speaker; the white pawns grumble.
5.  Visible: all eight white pawns and all eight white officers; the third and fourth ranks with the gentle rise in the middle of the board in the foreground; no black pieces.
6.  Listening: the officers look on, mouths closed.
7.  Camera on Black's side, slightly off-centre and elevated; wide landscape panel; the frame ends at the fourth rank.
8.  Pawns: frowning, stubborn, grumbling (mouths in a wavy line); none moves.
9.  Five small grumble balloons (jagged outline) beside the heads of h2, f2, d2, b2 and e2, each with a short tail to its own pawn, containing "??#", "?!", "#!?", "??", "#?!"; they cover no pawn face, no crossed arms, no officer face or crown. Caption box lower right (author decision in 7.12).
10. Stage directions: (hoorbaar gemor vanop de tweede rij).
11. State 0. No move.
12. Continuity: right after the order in 2a. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: letters or words in the grumble balloons; symbols other than ? ! # in them; any other caption; a pawn off its square.
14. Dialogue length: none.
15. Segmentation: the stage direction after speech 3.
16. Visual priority: the row of grumbling pawns and the gentle rise in the middle of the board in front of them.
17. Lettering space: small grumble balloons beside the pawn heads; the caption box in the lower right corner, over the empty board.
18. Balloon-area estimate: about 5%.
19. Layout: wide shot (Section 23.D); landscape format.
20. Overflow: not applicable.
21. Continuity requirements: all pieces on their starting squares.
```

```
PANEL 2c   (sequence number 7)

1.  Scene 2, panel c: Regina asks why nothing happens.
2.  Script excerpt:
      Regina:
      Awel ? Waarom gebeurt er niks ?
3.  Dialogue:
      Balloon 1: "Awel ? Waarom gebeurt er niks ?"
4.  Balloon 1 -> Regina
5.  Visible: Regina d1 large in the centre; Koning e1 partly at the left; bishop c1 partly at the right; heads of the pawns e2, d2, c2 at the bottom.
6.  Listening: Koning, mouth closed, looks back at Regina.
7.  Camera on Black's side, zoomed in on Regina.
8.  Regina: head turned to the King, puzzled, one eyebrow raised, mouth open.
    Koning: mouth closed, looks at Regina.
9.  Balloon 1 top right; tail to Regina's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: after the grumbling in 2b. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: lip colour or make-up on Regina; a tail near the King.
14. Dialogue length: 5 words, 31 characters.
15. Segmentation: the whole of speech 4.
16. Visual priority: Regina's puzzled face.
17. Lettering space: top right.
18. Balloon-area estimate: about 5%.
19. Layout: close-up (Section 23.D).
20. Overflow: not expected.
21. Continuity requirements: positions of 2a.
```

### Scene 3 - Alfil Sent to the Pawns

```
PANEL 3a-1   (sequence number 8)

1.  Scene 3, panel a-1: the King will not speak to the pawns.
2.  Script excerpt:
      Koning:
      Alfil m’n raadsheer, ge weet dat ik als koning niet met dat lage boerenvolk spreek. Vraag aan die luie pitten op de tweede rij wat er aan de hand is. En maak voort want “Dieje van den overkant" denkt nu natuurlijk dat wij schrik hebben en zit op dit moment waarschijnlijk al met ons te lachen.
3.  Dialogue:
      Balloon 1: "Alfil m’n raadsheer, ge weet dat ik als koning niet met dat lage boerenvolk spreek."
4.  Balloon 1 -> Koning
5.  Visible: Alfil f1 in the right foreground (from behind, partly from the side); Koning e1 left of centre in three-quarter view; Regina d1 at the left edge; pawns d2, e2, f2, g2 from behind; the black army small and out of focus.
6.  Listening: Alfil, mouth closed, head slightly bowed; Regina looks at the King.
7.  Camera behind White's first rank, behind and right of Alfil, at head height.
8.  Koning: mouth open, chin raised, nose in the air; looks at Alfil.
    Alfil: mouth closed; looks at the King.
9.  Balloon 1 top left; tail to Koning's mouth, passing left of his crown.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: after Regina's question in 2c. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: the King looking at the pawns; a tail near Alfil.
14. Dialogue length: 15 words, 85 characters.
15. Segmentation: the first sentence of speech 5; continues in 3a-2.
16. Visual priority: the King's haughty face.
17. Lettering space: top left.
18. Balloon-area estimate: about 10%.
19. Layout: medium over-the-shoulder shot.
20. Overflow: not expected.
21. Continuity requirements: same camera in 3a-2.
```

```
PANEL 3a-2   (sequence number 9)

1.  Scene 3, panel a-2: the King orders Alfil to ask the pawns.
2.  Script excerpt:
      Koning:
      Alfil m’n raadsheer, ge weet dat ik als koning niet met dat lage boerenvolk spreek. Vraag aan die luie pitten op de tweede rij wat er aan de hand is. En maak voort want “Dieje van den overkant" denkt nu natuurlijk dat wij schrik hebben en zit op dit moment waarschijnlijk al met ons te lachen.
3.  Dialogue:
      Balloon 1: "Vraag aan die luie pitten op de tweede rij wat er aan de hand is."
4.  Balloon 1 -> Koning
5.  Visible: the same as 3a-1.
6.  Listening: Alfil, mouth closed, looks at the King; Regina looks at the King.
7.  The same camera as 3a-1.
8.  Koning: mouth open; keeps looking at Alfil while pointing sideways at the pawns on the second rank without looking at them.
    Alfil: mouth closed.
9.  Balloon 1 top left; tail to Koning's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: same camera and positions as 3a-1. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: the King looking at the pawns; a tail near Alfil.
14. Dialogue length: 15 words, 65 characters.
15. Segmentation: the second sentence of speech 5; continues in 3b.
16. Visual priority: the pointing hand and the haughty look.
17. Lettering space: top left.
18. Balloon-area estimate: about 10%.
19. Layout: medium over-the-shoulder shot.
20. Overflow: not expected.
21. Continuity requirements: speech continues in 3b from a new camera.
```

```
PANEL 3b   (sequence number 10)

1.  Scene 3, panel b: the King imagines the opponent laughing.
2.  Script excerpt:
      Koning:
      Alfil m’n raadsheer, ge weet dat ik als koning niet met dat lage boerenvolk spreek. Vraag aan die luie pitten op de tweede rij wat er aan de hand is. En maak voort want “Dieje van den overkant" denkt nu natuurlijk dat wij schrik hebben en zit op dit moment waarschijnlijk al met ons te lachen.
3.  Dialogue:
      Balloon 1: "En maak voort want “Dieje van den overkant" denkt nu natuurlijk dat wij schrik hebben en zit op dit moment waarschijnlijk al met ons te lachen."
4.  Balloon 1 -> Koning
5.  Visible: the back of Koning's crown and shoulder in the foreground; Alfil f1 partly at the right, from behind; all white pawns from behind; the board with the gentle rise in the middle of the board; the complete black army in the distance, the Black King on e8 recognisable.
6.  Listening: Alfil (from behind); the Black King far away, calm and patient, mouth closed, not laughing.
7.  Camera over the King's shoulder towards Black.
8.  Koning: seen from behind, arm pointing impatiently at the black army (speaking gesture).
    Black King: calm, composed, not laughing.
9.  Balloon 1 top left; tail to the King's head.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: end of speech 5; the King's impatience from 3a-2. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: a laughing Black King; a tail near Alfil.
14. Dialogue length: 26 words, 145 characters.
15. Segmentation: the last sentence of speech 5 (ends the speech).
16. Visual priority: the contrast between the impatient King and the calm Black King.
17. Lettering space: top left, clear of the black army.
18. Balloon-area estimate: about 15%.
19. Layout: over-the-shoulder wide shot.
20. Overflow: split after "dat wij schrik hebben" into two balloons for Koning.
21. Continuity requirements: the black army in its starting formation.
```

### Scene 4 - Pawn Mutiny

```
PANEL 4a   (sequence number 11)

1.  Scene 4, panel a: Alfil confers with the pawns and turns back.
2.  Script excerpt:
      (Alfil overlegt met pionnen en komt terug)
3.  Dialogue: none.
4.  No speaker.
5.  Visible: the gentle rise in the middle of the board in the foreground; white pawns c2 to h2; officers c1 to h1 (rook h1 and bishop c1 may be cut off).
6.  Watching: Koning and Regina wait upright, mouths closed, looking at Alfil.
7.  Camera on Black's side, somewhat elevated, looking down over the gentle rise in the middle of the board at the second rank.
8.  Alfil: leans far forward over the f2 pawn, listening; does not leave f1.
    Pawns e2, f2, g2: turned to Alfil, arms crossed; the other pawns look on, arms crossed (author decision in 7.10: no pawn points).
9.  No balloons.
10. Stage directions: (Alfil overlegt met pionnen en komt terug).
11. State 0. No move.
12. Continuity: Alfil is still blocked on f1 (e2, g2). All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: Alfil off f1; any text.
14. Dialogue length: none.
15. Segmentation: the stage direction after speech 5.
16. Visual priority: Alfil leaning over the pawns, who face him with their arms crossed; the gentle rise in the middle of the board visible in front of them (changed in 7.10: no pawn points).
17. Lettering space: none needed.
18. Balloon-area estimate: 0%.
19. Layout: wide-medium shot, elevated.
20. Overflow: not applicable.
21. Continuity requirements: Alfil returns upright in 4b.
```

```
PANEL 4b   (sequence number 12)

1.  Scene 4, panel b: Alfil reports the mutiny.
2.  Script excerpt:
      Alfil:
      Muiterij Sire! De pionnen willen niet opspelen naar een centrumveld omdat er daar naar 't schijnt nen boebel in het bord zit. Als ze de hele tijd bergop moeten marcheren zijn ze uitgeteld alvorens ze nog maar aan de strijd hebben deelgenomen. Als u de partij vandaag wil winnen zal u iets anders moeten spelen.
3.  Dialogue:
      Balloon 1: "Muiterij Sire! De pionnen willen niet opspelen naar een centrumveld omdat er daar naar 't schijnt nen boebel in het bord zit."
4.  Balloon 1 -> Alfil
5.  Visible: Alfil f1 and Koning e1, heads and upper bodies filling the frame; Caballo g1 and Regina d1 partly at the edges; heads of pawns f2 and e2 at the bottom.
6.  Listening: Koning, surprised: eyebrows shot up, eyes wide, mouth open in surprise (Section 19.C exception: no balloon, no tail near him).
7.  Camera on Black's side, zoomed in; Alfil left, Koning right.
8.  Alfil: mouth open, alarmed, one hand raised; looks at Koning.
    Koning: surprised; looks at Alfil.
9.  Balloon 1 top left, narrow enough to keep the King's crown clear; tail to Alfil's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: Alfil upright again after 4a. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: a balloon or tail at the King; the King's mouth shaped as if speaking.
14. Dialogue length: 22 words, 125 characters.
15. Segmentation: the first sentence of speech 6; continues in 4c-1.
16. Visual priority: Alfil's alarm and the King's surprise.
17. Lettering space: top left.
18. Balloon-area estimate: about 15%.
19. Layout: close two-shot.
20. Overflow: split after "Muiterij Sire!" into two balloons for Alfil.
21. Continuity requirements: positions carry over to 4c-1.
```

```
PANEL 4c-1   (sequence number 13)

1.  Scene 4, panel c-1: Alfil explains the pawns' reason.
2.  Script excerpt:
      Alfil:
      Muiterij Sire! De pionnen willen niet opspelen naar een centrumveld omdat er daar naar 't schijnt nen boebel in het bord zit. Als ze de hele tijd bergop moeten marcheren zijn ze uitgeteld alvorens ze nog maar aan de strijd hebben deelgenomen. Als u de partij vandaag wil winnen zal u iets anders moeten spelen.
3.  Dialogue:
      Balloon 1: "Als ze de hele tijd bergop moeten marcheren zijn ze uitgeteld alvorens ze nog maar aan de strijd hebben deelgenomen."
4.  Balloon 1 -> Alfil
5.  Visible: Alfil f1 and Koning e1; Caballo and Regina partly at the edges; pawn heads at the bottom.
6.  Listening: Koning, mouth closed, a frown forming.
7.  Camera on Black's side, slightly closer than 4b; the King more in focus.
8.  Alfil: mouth open, earnest, open hand towards the centre of the board ("bergop"); looks at Koning.
    Koning: mouth closed; looks at Alfil.
9.  Balloon 1 top left; tail to Alfil's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: after 4b; the King's surprise turns into worry. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: an open mouth on the King.
14. Dialogue length: 20 words, 116 characters.
15. Segmentation: the second sentence of speech 6; continues in 4c-2.
16. Visual priority: Alfil's gesture towards the centre and the King's darkening face.
17. Lettering space: top left.
18. Balloon-area estimate: about 12%.
19. Layout: close two-shot.
20. Overflow: not expected.
21. Continuity requirements: same camera in 4c-2.
```

```
PANEL 4c-2   (sequence number 14)

1.  Scene 4, panel c-2: Alfil's advice.
2.  Script excerpt:
      Alfil:
      Muiterij Sire! De pionnen willen niet opspelen naar een centrumveld omdat er daar naar 't schijnt nen boebel in het bord zit. Als ze de hele tijd bergop moeten marcheren zijn ze uitgeteld alvorens ze nog maar aan de strijd hebben deelgenomen. Als u de partij vandaag wil winnen zal u iets anders moeten spelen.
3.  Dialogue:
      Balloon 1: "Als u de partij vandaag wil winnen zal u iets anders moeten spelen."
4.  Balloon 1 -> Alfil
5.  Visible: the same as 4c-1.
6.  Listening: Koning, angry and worried: furrowed brow, eyebrows pulled together, tight wavy mouth, reddening cheeks; mouth closed.
7.  The same camera as 4c-1.
8.  Alfil: mouth open, both hands open; looks at Koning.
    Koning: looks at Alfil.
9.  Balloon 1 top left; tail to Alfil's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: the King's anger bursts out in 5a. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: an open mouth on the King.
14. Dialogue length: 13 words, 67 characters.
15. Segmentation: the last sentence of speech 6 (ends the speech).
16. Visual priority: the King's angry, worried face.
17. Lettering space: top left.
18. Balloon-area estimate: about 8%.
19. Layout: close two-shot; reaction emphasis on the King.
20. Overflow: not expected.
21. Continuity requirements: the King's red cheeks carry into 5a.
```

### Scene 5 - The King's Outburst

```
PANEL 5a   (sequence number 15)

1.  Scene 5, panel a: the King explodes.
2.  Script excerpt:
      Koning:
      Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever. Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’. Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum  in handen nemen.
3.  Dialogue:
      Balloon 1: "Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever."
4.  Balloon 1 -> Koning
5.  Visible: Koning e1 from the chest up; Alfil f1 partly at the left edge; Regina d1 partly at the right edge.
6.  Listening: Alfil, taken aback, eyes wide, mouth closed.
7.  Camera on Black's side, close-up of the King.
8.  Koning: face red, eyebrows pulled down hard, mouth wide open in a shout, one fist raised; looks at Alfil.
9.  Balloon 1 is a SHOUT balloon (jagged outline), top right, clear of the crown; tail to Koning's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: anger from 4c-2. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: a round balloon for this line; an open mouth on Alfil.
14. Dialogue length: 11 words, 68 characters.
15. Segmentation: the first two sentences of speech 7; continues in 5b-1.
16. Visual priority: the King's furious face and raised fist.
17. Lettering space: top right.
18. Balloon-area estimate: about 10%.
19. Layout: close-up (Section 23.D).
20. Overflow: not expected.
21. Continuity requirements: the King stays angry through 5c.
```

```
PANEL 5b-1   (sequence number 16)

1.  Scene 5, panel b-1: the jab at Alfil's past.
2.  Script excerpt:
      Koning:
      Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever. Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’. Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum  in handen nemen.
3.  Dialogue:
      Balloon 1: "Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd"
4.  Balloon 1 -> Koning
5.  Visible: Alfil f1 and Koning e1 (two-shot); Caballo g1 and Regina d1 partly at the edges; pawn heads f2, e2 at the bottom.
6.  Listening: Alfil, mouth closed, stiffening.
7.  Camera on Black's side, two-shot at officer height; Alfil left, Koning right.
8.  Koning: mouth open, leans towards Alfil, jabs a pointing finger at him, scornful; looks at Alfil.
    Alfil: looks at Koning.
9.  Balloon 1 top right; tail to Koning's mouth, not passing Alfil's head.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: after 5a. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: an open mouth on Alfil; a tail near Alfil.
14. Dialogue length: 14 words, 74 characters.
15. Segmentation: speech 7, third sentence, first part (ends after "gepromoveerd"); continues in 5b-2.
16. Visual priority: the pointing finger and Alfil's stiffening.
17. Lettering space: top right.
18. Balloon-area estimate: about 8%.
19. Layout: medium two-shot.
20. Overflow: not expected.
21. Continuity requirements: same camera in 5b-2.
```

```
PANEL 5b-2   (sequence number 17)

1.  Scene 5, panel b-2: the punchline of the jab.
2.  Script excerpt:
      Koning:
      Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever. Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’. Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum  in handen nemen.
3.  Dialogue:
      Balloon 1: "en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’."
4.  Balloon 1 -> Koning
5.  Visible: the same as 5b-1.
6.  Listening: Alfil, openly offended: chin up, lips pressed together.
7.  The same camera as 5b-1.
8.  Koning: mouth open, mocking, finger still raised at Alfil; looks at Alfil.
    Alfil: looks back at Koning.
9.  Balloon 1 top right; tail to Koning's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: same camera as 5b-1. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: an open mouth on Alfil.
14. Dialogue length: 20 words, 106 characters.
15. Segmentation: speech 7, third sentence, second part (starts with "en dat complex"); continues in 5c.
16. Visual priority: Alfil's offended face.
17. Lettering space: top right.
18. Balloon-area estimate: about 12%.
19. Layout: medium two-shot; reaction emphasis on Alfil.
20. Overflow: not expected.
21. Continuity requirements: same two-shot in 5c.
```

```
PANEL 5c   (sequence number 18)

1.  Scene 5, panel c: the order to go to the centre.
2.  Script excerpt:
      Koning:
      Wie is er hier nu godverdoemme eigenlijk koning ? Alfil, gene zever. Ik weet maar al te goed dat ge destijds liever tot dame waart gepromoveerd en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’. Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum  in handen nemen.
3.  Dialogue:
      Balloon 1: "Ga buiten zien wat dat is met dieje boebel en zorgt ervoor dat die boeren “sito presto” het centrum in handen nemen."
4.  Balloon 1 -> Koning
5.  Visible: the same as 5b-1.
6.  Listening: Alfil, hesitant, mouth closed.
7.  The same two-shot as 5b-1.
8.  Koning: mouth open, looks at Alfil, points with his whole arm forward over the pawns towards the centre of the board.
    Alfil: looks at Koning.
9.  Balloon 1 top right; tail to Koning's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: same camera as 5b-1 and 5b-2. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: an open mouth on Alfil.
14. Dialogue length: 22 words, 120 characters.
15. Segmentation: the last sentence of speech 7 (ends the speech; the double space in the play is collapsed).
16. Visual priority: the King's commanding arm.
17. Lettering space: top right.
18. Balloon-area estimate: about 12%.
19. Layout: medium two-shot.
20. Overflow: not expected.
21. Continuity requirements: same two-shot in 5d-1.
```

```
PANEL 5d-1   (sequence number 19)

1.  Scene 5, panel d-1: Alfil apologises.
2.  Script excerpt:
      Alfil:
      Vergeef me dat ik u tegenspreek Sire, maar ik kan hier voorlopig nog niet naar buiten. Immers, zowel het veld e2 als g2 is nog door opstandige boeren bezet.
3.  Dialogue:
      Balloon 1: "Vergeef me dat ik u tegenspreek Sire, maar ik kan hier voorlopig nog niet naar buiten."
4.  Balloon 1 -> Alfil
5.  Visible: the same two-shot as 5c.
6.  Listening: Koning, impatient, mouth closed.
7.  The same two-shot as 5c.
8.  Alfil: mouth open, apologetic, both hands slightly spread; looks at Koning.
    Koning: looks at Alfil.
9.  Balloon 1 top left; tail to Alfil's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: answers 5c. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: an open mouth on the King; a tail near the King.
14. Dialogue length: 16 words, 86 characters.
15. Segmentation: the first sentence of speech 8; continues in 5d-2.
16. Visual priority: Alfil's apologetic gesture.
17. Lettering space: top left.
18. Balloon-area estimate: about 10%.
19. Layout: medium two-shot.
20. Overflow: not expected.
21. Continuity requirements: the reason follows in 5d-2 from a high camera.
```

```
PANEL 5d-2   (sequence number 20)

1.  Scene 5, panel d-2: why Alfil cannot go out.
2.  Script excerpt:
      Alfil:
      Vergeef me dat ik u tegenspreek Sire, maar ik kan hier voorlopig nog niet naar buiten. Immers, zowel het veld e2 als g2 is nog door opstandige boeren bezet.
3.  Dialogue:
      Balloon 1: "Immers, zowel het veld e2 als g2 is nog door opstandige boeren bezet."
4.  Balloon 1 -> Alfil
5.  Visible: Alfil f1 behind the pawns e2, f2, g2; Koning e1 and Regina d1 at the right; Caballo g1 and rook h1 at the left; pawns d2 and h2 at the edges.
6.  Listening: Koning, mouth closed, looks at Alfil; pawns e2 and g2 stubborn, arms crossed, mouths closed.
7.  High camera on Black's side, looking down on f1 so both diagonals f1-e2 and f1-g2 are clear.
8.  Alfil: mouth open, looks up at the King, points with both hands at the pawns on e2 and g2.
9.  Balloon 1 top left; tail to Alfil's mouth.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: the blocked diagonals explain why Alfil cannot leave f1 until 2. Ld3. All white pawns in frame: arms crossed, in solidarity with the mutiny (author decision in 7.10).
13. Must not appear: Alfil off f1; empty e2 or g2.
14. Dialogue length: 13 words, 69 characters.
15. Segmentation: the last sentence of speech 8 (ends the speech).
16. Visual priority: the two blocked diagonals.
17. Lettering space: top left, clear of the pawns' heads.
18. Balloon-area estimate: about 8%.
19. Layout: high-angle medium shot.
20. Overflow: not expected.
21. Continuity requirements: positions unchanged.
```

```
PANEL 5e   (sequence number 21)

1.  Scene 5, panel e: the King's despair.
2.  Script excerpt:
      Koning:
      Wel nondedju ! Heel mijn voorbereiding om zeep.
3.  Dialogue:
      Balloon 1: "Wel nondedju ! Heel mijn voorbereiding om zeep."
4.  Balloon 1 -> Koning
5.  Visible: Koning e1 close-up; Alfil f1 partly at the left; Regina d1 partly at the right.
6.  Listening: Alfil and Regina, worried, mouths closed, looking at the King.
7.  Camera on Black's side, close-up of the King.
8.  Koning: head in his hands (or clutching his crown), eyes squeezed shut, mouth turned down, speaking.
9.  Balloon 1 top right; tail to Koning's mouth. Round balloon.
10. Stage directions: none.
11. State 0. No move.
12. Continuity: closes Scene 5; Regina's advice follows in Scene 6.
13. Must not appear: an open mouth on Alfil or Regina.
14. Dialogue length: 7 words, 47 characters.
15. Segmentation: the whole of speech 9.
16. Visual priority: the King's despair.
17. Lettering space: top right.
18. Balloon-area estimate: about 5%.
19. Layout: close-up.
20. Overflow: not expected.
21. Continuity requirements: positions unchanged into Scene 6.
```

---

# SECTION 21 - PRODUCTION WORKFLOW: ARTWORK AND LETTERING
Added in 7.1. Image generators tend to misattribute speakers and to alter or invent long Flemish text. The workflow therefore separates the artwork from the lettering.
The three responsibilities (story authority, illustration, lettering and assembly) are defined in the Strict Adaptation Protocol (P.1), added in 7.6.

## Stage 1 - Prepare the Panel Specification
- Extract every dialogue line and stage direction from Section 1, preserving wording and order.
- Assign each line to the speaker named in the script (Section 19.F).
- Write the panel manifest (Section 20) for every panel.
- Tick the line off in the Script Coverage Map (Section 22.E).
- Divide the dialogue into panels by dramatic beats, natural language boundaries and visual needs (Section 23.B); estimate the lettering space and the balloon area (Section 23.F); choose the shot type (Section 23.D). Fill manifest fields 14 to 21.

## Stage 2 - Generate the Artwork
- Generate the scene from the manifest, using the Common Prompt Block (Section 18).
- Standard (author decision, 7.6): the image generator draws the speech balloons, placed and tailed exactly as in manifest field 9, and writes their text by copying it exactly from the panel block or manifest. Give each balloon's text in the prompt like this: Speech balloon 1, spoken by <speaker> (tail to <speaker>'s mouth); copy this text exactly, letter for letter: "<text>".
- Long balloons are the riskiest for copying errors; keep them within the density limits (Section 23) so the generator writes the text at a readable size.
- Fallback: if a panel's text still deviates after regenerating, generate that panel with empty balloons (prompt below) and insert the exact text in Stage 3.
- Priorities for the artwork, in this order:
  1. Correct character identity.
  2. Correct speaking and listening roles (mouths, gestures).
  3. Correct gestures and gaze.
  4. Correct character design.
  5. Correct chess position and continuity.
  6. Clear panel composition.
- Also plan adequate space for lettering before the composition is final: balloons in negative space, roughly 25 to 30% of the panel area in total, never over faces, gestures, props or relevant board details (Section 23.C and 23.E).
- Add this to the prompt when using empty balloons (fallback): "Draw the speech balloons empty, with no letters. The tail of each balloon points to the mouth of the speaking character named below. Listening characters keep their mouths closed."
- Never use the word "boebel", or any other name for it, in a prompt: the image generator does not know the word, and a name makes it draw a label or an explanation. Describe it with the standard sentence from Section 4 (Boebel Specification), which the Common Prompt Block already contains.
- Always include the no-text rule of the Common Prompt Block: the image contains no written words, labels, arrows, captions or explanations; the only text is the dialogue in the balloons, or none at all when the balloons are drawn empty (added in 7.5).
- For a panel in which a move is played, include the move box line with the exact move text from the panel block (Section 13, Move Box; added in 7.8). Check it letter for letter like a balloon.

## Stage 3 - Add the Original Dialogue
- Check every balloon written by the image generator letter for letter against the manifest (field 3): every letter, space, punctuation mark, quote mark and capital. Any deviation, however small, means the balloon fails.
- A failed balloon is corrected (the exact text placed over it with a lettering tool) or the panel is regenerated. It is never accepted as it is (Strict Adaptation Protocol, P.3).
- Fallback: for panels generated with empty balloons, typeset the dialogue separately in the correct balloons, using a lettering or page-layout tool (tool not yet chosen; see Appendix B, item 10).
- Copy the text from the manifest, which copies it from Section 1.
- Preserve Flemish spelling, punctuation, capitalisation, quotation marks (straight and curly, as in Section 1) and chess notation exactly.
- Do not ask the image generator to reconstruct, paraphrase or improvise the dialogue.
- Size the balloons to the actual text and font; keep the text readable at the intended output size (Appendix B, item 12); keep speaker attribution and reading order.
- If a passage does not fit, revise the layout or split the scene into more panels. Never silently shorten or rewrite it.

## Stage 4 - Validate the Result
Compare the finished page with the manifest and with Section 1. Verify that:
- Every balloon belongs to the correct speaker.
- Every balloon tail points to the correct character.
- Listeners are not depicted as speaking.
- Every dialogue line is present and correctly assigned.
- No dialogue has been paraphrased or invented.
- Stage directions are represented faithfully.
- Chess moves and board positions are consistent (Section 12).
- Character designs and visual canon are preserved (Sections 4 to 7).
- Everything in Section 16 (Validation Checklist) holds.
- Everything in the Visual-Composition Acceptance Checklist (Section 23.G) holds: no balloon overwhelms the art, characters stay visible and expressive, board details stay unobstructed, text is readable, panel transitions preserve the story.

If an image fails any check, mark it for correction. Never accept an error silently.

---

# SECTION 22 - COMPLETENESS AND FIDELITY CHECKLIST
Added in 7.1. A final quality-control pass over the entire cartoon, not only over single pages. Run it before any page is considered finished, and again for the whole cartoon at the end.

## 22.A Story Completeness
- Every scene, dialogue line and meaningful stage direction in Section 1 is accounted for in the Script Coverage Map (22.E).
- No part of the story is omitted to save space.
- No scene or dialogue is omitted to reduce the page or panel count (Section 23).
- The opening, the intermediate developments and the ending stay in the original order.
- The original ending is preserved: the draw is offered (reported by Caballo) and accepted by the King; result 1/2 - 1/2.

## 22.B Dialogue Fidelity
- Section 1 is the sole authority for dialogue.
- No invented text in balloons, captions or narration (there are no captions or narration in this cartoon, except the caption box of panel 2b with its stage direction verbatim; Section 14). The move box is not a caption: it appears only in a panel in which a move is played, with the move verbatim from Section 1 (Section 13, Move Box).
- Any uncertainty is flagged in Appendix B, never resolved by guessing.

## 22.C Speaker Attribution
- Every line has the correct speaker.
- Every balloon has the correct owner, and its tail points to that owner.
- Every speaking pose is consistent with the assigned dialogue.
- Every listener's pose is consistent with listening (Section 19.C).

## 22.D Visual Continuity
- Characters keep their canonical appearance (Section 7).
- The board, stains, defects, pieces and positions follow canon (Sections 4, 9, 12).
- No accidental change to the story or the chess sequence.

## 22.E Script Coverage Map
Every item of Section 1, in order. "Panel script" means the panel blocks in Section 18; "manifest" means the Section 20 format.

| # | Script item (speaker and first words) | Scene | Panels | Status |
|---|---|---|---|---|
| 0 | Title: De Miniatuur (Een hedendaagse klucht in één bedrijf) | Cover | - | Decided in 7.3: title and subtitle on the album cover (Section 13, Cover Direction). |
| 1 | Koning: "Wat is het vandaag toch een heuglijke dag..." | 1 | 1a, 1b-1, 1b-2 | Panel script written; manifest written (Section 20.3). |
| 2 | Alfil: "Jawel Sire, zij wachten op uw bevel !" | 1 | 1c | Panel script written; manifest written (Section 20.3). |
| 3 | Koning: "Wel laat ons dan niet langer talmen ... Ten aanval ! 1. e4" | 2 | 2a | Panel script written; manifest written (Section 20.3). |
| 4 | Stage direction: (hoorbaar gemor vanop de tweede rij) | 2 | 2b | Panel script written; manifest written (Section 20.3). |
| 5 | Regina: "Awel ? Waarom gebeurt er niks ?" | 2 | 2c | Panel script written; manifest written (Section 20.3). |
| 6 | Koning: "Alfil m’n raadsheer, ge weet dat ik als koning..." | 3 | 3a-1, 3a-2, 3b | Panel script written (approved); manifest written (Section 20.3). |
| 7 | Stage direction: (Alfil overlegt met pionnen en komt terug) | 4 | 4a | Panel script written (approved); manifest written (Section 20.3). |
| 8 | Alfil: "Muiterij Sire! De pionnen willen niet opspelen..." | 4 | 4b, 4c-1, 4c-2 | Panel script written (approved); manifest written (Section 20.3). |
| 9 | Koning: "Wie is er hier nu godverdoemme eigenlijk koning ?..." | 5 | 5a, 5b-1, 5b-2, 5c | Panel script written (approved); manifest written (Section 20.3). |
| 10 | Alfil: "Vergeef me dat ik u tegenspreek Sire..." | 5 | 5d-1, 5d-2 | Panel script written (approved); manifest written (Section 20.3). |
| 11 | Koning: "Wel nondedju ! Heel mijn voorbereiding om zeep." | 5 | 5e | Panel script written (approved); manifest written (Section 20.3). |
| 12 | Regina: "Speelt dan e3 Sire, dan kan Alfil toch al gaan zien." | 6 | - | Scene catalog only. |
| 13 | Koning: "Allee goed dan, want "Dieje van den overkant" wordt precies..." | 6 | - | Scene catalog only. |
| 14 | Move: 1. e3 | 6 | - | Scene catalog only. |
| 15 | Move: 1. ... d5 | 6 | - | Scene catalog only. |
| 16 | Koning: "Lap, ziet ge ’t nu ? Wat had ik jullie gezegd ?..." | 7 | - | Scene catalog only. |
| 17 | Alfil: "Jamaar Sire, met dieje boebel." | 7 | - | Scene catalog only. |
| 18 | Koning: "Alfil veegt dieje paprika chips van uwe mijter..." | 7 | - | Scene catalog only. |
| 19 | Move: 2. Ld3 | 7 | - | Scene catalog only. |
| 20 | Koning: "Boebel, boebel. Zo zullen we de partij wel winnen..." | 8 | - | Scene catalog only. |
| 21 | Move: 2. ... e6 | 8 | - | Scene catalog only. |
| 22 | Koning: "Ridder Caballo, springt naar f3 zodat ik seffens kan rokeren." | 9 | - | Scene catalog only. |
| 23 | Move: 3. Ph3 | 9 | - | Scene catalog only. |
| 24 | Koning: "Maar Caballo, zijt gij nu een paard of nen stommen ezel ?..." | 9 | - | Scene catalog only. |
| 25 | Caballo: "Daar op dat vies veld in die vettige plek gaan staan ?..." | 9 | - | Scene catalog only. |
| 26 | Move: 3. ... Ld7 | 9 | - | Scene catalog only. |
| 27 | Koning: (zucht) "Al meer als duizend partijen heb ik nu al gespeeld..." | 10 | - | Scene catalog only. |
| 28 | Regina: "Jamaar Sire, uw officieren hebben misschien wel een punt." | 10 | - | Scene catalog only. |
| 29 | Koning: "Regina luistert: Wie kent da bord hier nu eigenlijk het beste ?..." | 11 | - | Scene catalog only. |
| 30 | Move: 4. Dh5 | 11 | - | Scene catalog only. |
| 31 | Move: 4. ... Pe7 | 11 | - | Scene catalog only. |
| 32 | Koning: "Zou er op f6 misschien ook een plek zitten ?..." | 12 | - | Scene catalog only. |
| 33 | Move: 5. Pg5 | 12 | - | Scene catalog only. |
| 34 | Move: 5. ... g6 | 12 | - | Scene catalog only. |
| 35 | Caballo: "Voor de glorie en de overwinning ! Ten aanval !" | 13 | - | Scene catalog only. |
| 36 | Move: 6. Pxh7 | 13 | - | Scene catalog only. |
| 37 | Koning: "Godverdoemme Caballo, gij se stommen ezel !..." | 14 | - | Scene catalog only. |
| 38 | Move: 6. ... gxh5 | 14 | - | Scene catalog only. |
| 39 | Koning: "Lap, daar hebt ge’t al. Regina geslagen..." | 14 | - | Scene catalog only. |
| 40 | Alfil: "Vergeef me dat ik u onderbreek Sire, maar we hebben geloof ik, een mat in één." | 15 | - | Scene catalog only. |
| 41 | Koning: "Bedankt voor dieje info raadsheer Alfil..." | 15 | - | Scene catalog only. |
| 42 | Caballo: "Absoluut geen sprake van Sire ! Er is daar met cola gesmost..." | 15 | - | Scene catalog only. |
| 43 | Koning: (zucht) "Pakt dat dan maar aan." | 16 | - | Scene catalog only. |
| 44 | Result: 1/2 - 1/2 | 16 | - | Scene catalog only. |

Totals: 29 speeches, 2 stage directions, 12 moves, 1 result line, 1 title line.

---

# SECTION 23 - DIALOGUE DENSITY AND VISUAL COMPOSITION
Added in 7.2. Purpose: panels must keep the complete original play and still be attractive, readable and visually balanced. Generated panels were sometimes dominated by one enormous speech balloon, because long Flemish passages were forced into a small area.

**Fundamental principle: the story determines how many panels are needed. The space in a panel never determines how much of the story is shown.**

## 23.0 Priority Order (extends Section 19)
When goals conflict, resolve them in this order:
1. Complete story and exact dialogue (Section 1).
2. Correct speaker attribution (Section 19).
3. Readable lettering (this section).
4. Visual continuity: canon, chess positions, board details (Sections 3 to 12).
5. Visual composition and artistic quality.
6. Minimising the number of panels.

Chess positions and established canon are hard requirements, not trade-offs (Section 13: "If a panel contains an incorrect position, the panel is wrong"). A conflict between any of these goals is always resolved by adding panels or redesigning the composition, never by shortening, rewording, reordering or dropping the play, and never by breaking canon.

## 23.A Visual Storytelling Takes Priority
- Characters, expressions, gestures, interactions and relevant scenery (the board, the boebel, stains) stay visually prominent.
- Speech balloons do not dominate the composition. Avoid panels in which one balloon takes up most of the area.
- General target: all speech balloons of a panel together take roughly 25 to 30% of the panel area, where practical.
- This percentage is a composition guideline. It is never a reason to omit or alter dialogue.
- If the dialogue does not fit comfortably, redesign the panel or add panels.
- Never sacrifice source fidelity to reach a particular panel count.

## 23.B Dividing Long Speeches
- Do not force a long monologue into one panel.
- Divide long speeches into consecutive panels at natural boundaries: sentence ends, clause boundaries, a change of addressee, or a dramatic beat (a new idea, an outburst, an order).
- Every word is kept, in the original reading order.
- Use several balloons of a comfortable size across successive panels rather than one oversized balloon. Two balloons for the same speaker in one panel are allowed when the speech has a natural pause; they are read in order and both tails point to the speaker (Section 19.B).
- Keep continuity across the sequence: character positions, expressions, gestures and scene details carry over (Section 20, field 21).
- The speaker stays identifiable in every panel of the sequence: speaking mouth, gesture, tail to the speaker.
- Add listener reactions where they belong to the scene (Section 13: the listener reacts visibly to what is said).
- Never split in a way that changes the meaning or makes the speaker ambiguous (for example in the middle of a quotation, or so that a fragment seems to answer another character).
- No arbitrary maximum word count when it would force an unnatural split. The capacity estimate in 23.F is a planning aid, not a cut-off.
- Additional panels and pages are preferable to crowded or unreadable compositions.

## 23.C Speech-Balloon Layout
- Place balloons in negative space: sky or background areas, above heads, beside the composition.
- Keep tails clear, short and directed at the correct speaker (Section 19.B).
- Never cover faces, important gestures, significant props (Alfil's mitre with paprika, crowns) or relevant board details (the piece positions, the boebel, the stains when they matter).
- Keep a clear reading order that follows the script (top-left first, then left to right, then top to bottom).
- Avoid excessively narrow balloons, tiny lettering, distorted text and awkwardly stretched balloon shapes.
- Leave room for natural lettering with comfortable margins inside the balloon.
- Do not shrink the text to force a long passage into an undersized balloon.
- No unnecessary balloons, no captions, no narration boxes, no invented text (Section 14). The move box of a move panel (Section 13, Move Box) is required, not optional.

## 23.D Panel Composition Serves the Scene
Choose the shot for the dramatic purpose of the panel:
- **Wide shot:** establishes the board, the piece positions, group interactions or the overall situation (for example panel 2b, the grumbling pawns; panel 1c, both armies).
- **Medium shot:** conversations, gestures and interactions between characters (for example the two-shots of Alfil and the King in Scenes 4 and 5).
- **Close-up:** an important expression or emotional reaction (for example panel 5a, the outburst; panel 5e, despair).
- **Reaction panel:** a listener's response, when it advances the original scene (no balloon; the reaction follows from the line before).
- **Sequential dialogue panels:** a long speech over several panels, with variation in camera distance or angle while positions and continuity are kept.

Do not use a close-up merely to hide an overcrowded layout. A composition never changes the original action, the character relationships or the chess position.

## 23.E Reserving Space for Lettering
Plan the balloon layout before the composition is final (manifest fields 17 and 19).

By author decision (7.6) the image generator writes the balloon text itself (Section 21, Stage 2). Plan for it:
- Specify the balloon positions and sizes in the manifest (fields 9, 17 and 19), so the generator leaves room for the exact text at a readable size.
- Keep important visual information out of the areas intended for dialogue.
- Make the character and background composition work on its own, independent of the text.
- Check the text letter for letter afterwards (Section 21, Stage 3).
- Fallback: generate the illustration with empty speech balloons or reserved lettering areas, and add the original dialogue afterwards in a separate lettering step (Section 21, Stage 3).

The artwork is designed around the scene and its dialogue: balloons sit where the text will naturally be read, at the size the text needs. Empty balloons (fallback) must not become arbitrary blank areas that damage the composition.

## 23.F Estimating Dialogue Length and Balloon Area
For planning (manifest fields 14 and 18):
- Count the words and characters of the exact dialogue assigned to the panel.
- Estimate the balloon area that text needs at the intended lettering size, including margins.
- Rule of thumb, to be calibrated once the output size and font are decided (Appendix B, item 12): at a comfortable reading size, a quarter to a third of a standard panel holds roughly 20 to 30 words of Flemish dialogue. Panels with more text are candidates for splitting at a natural boundary (23.B), or for a wider or taller panel format.
- After the first lettered page, replace this rule of thumb with measured values.
- Output format decided in 7.3 (author decision): a printed album page (A4, Suske en Wiske style), about 8 panels per page, a panel about 85 x 75 mm, lettering about 8 pt in a comic font. Calculated capacity at that size: about 60 words within 30% of a panel with a wide balloon (about 80% of the panel width); with the narrower balloons usual in albums, plan with about 35 to 45 words per panel. The 20 to 30 words above stay as a comfortable target. Measure the first lettered page and record the real value here.

## 23.G Visual-Composition Acceptance Checklist
For every panel, verify:
- The panel communicates one clear visual event or dramatic beat.
- The relevant characters are sufficiently visible.
- The speaking character is immediately identifiable.
- Listener reactions are clear and appropriate.
- Speech balloons do not overwhelm the artwork (roughly 25 to 30% of the area in total, where practical).
- Important faces, gestures, props and board details remain visible.
- The lettering area is sufficient for the exact dialogue.
- The text is readable at the intended output size.
- The dialogue is complete, verbatim and correctly attributed.
- The panel keeps visual and chess-position continuity.
- Any overflow was handled by redesigning the layout or adding panels, never by changing the text.

For the entire comic, additionally verify that no scene or dialogue has been omitted to reduce the page or panel count (Section 22.A).

## 23.H Density Review of Existing Panels
Word counts of the balloons in the panel script (Section 18) as of version 7.2. Panels above the rule of thumb in 23.F are listed for review once the output size is known. Split points are suggestions at natural boundaries; the author decides, and approved panels stay as they are until then.

| Panel | Speaker | Words | Review |
|---|---|---|---|
| 1a | Koning | 26 | Within range. |
| 1b | Koning | 39 | Split in 7.3 into 1b-1 and 1b-2 (author decision). Original note: Review. Possible split: "...dat hij nu al begint te bibberen." / "Want, ik voel het aan mijn viltje, ... Alfil, zijn ook onze pionnen klaar voor deze heldhaftige strijd ?" (two balloons, or a reaction panel for Alfil before 1c). |
| 1c | Alfil | 7 | Within range. |
| 2a | Koning | 17 | Within range. |
| 2c | Regina | 5 | Within range. |
| 3a | Koning | 30 | Split in 7.3 into 3a-1 and 3a-2 (author decision). Original note: At the upper limit. Possible split: "...niet met dat lage boerenvolk spreek." / "Vraag aan die luie pitten op de tweede rij wat er aan de hand is." |
| 3b | Koning | 26 | Within range. |
| 4b | Alfil | 22 | Within range. |
| 4c | Alfil | 33 | Split in 7.3 into 4c-1 and 4c-2 (author decision). Original note: Review. Possible split: "...aan de strijd hebben deelgenomen." / "Als u de partij vandaag wil winnen zal u iets anders moeten spelen." |
| 5a | Koning | 11 | Within range. |
| 5b | Koning | 34 | Split in 7.3 into 5b-1 and 5b-2 (author decision). Original note: Review. Possible split: "...liever tot dame waart gepromoveerd" / "en dat complex van de minor promotie nog altijd in uwe kop speelt maar ik wil hier ‘gene slappen kak’." (see manifest 20.2, field 20). |
| 5c | Koning | 22 | Within range. |
| 5d | Alfil | 29 | Split in 7.3 into 5d-1 and 5d-2 (author decision). Original note: At the upper limit. Possible split: "...nog niet naar buiten." / "Immers, zowel het veld e2 als g2 is nog door opstandige boeren bezet." |
| 5e | Koning | 7 | Within range. |

---

# APPENDIX A - SUPERSEDED CANON
Kept for history. Do not use for generation.

- v1.0: The opponent is invisible and never shown directly. → Corrected in 1.1: he is the Black King.
- v1.0: "Cola spill located near f6." → Corrected: on f6, covering most of the square.
- v1.0 / 1.1 / early 3.x: Paprika chip crumbs visible on the board and frequently visible. → Corrected in 3.0: stains on Alfil's mitre only.
- v1.0 / 1.1: Pawns as "small worker-like pawns". → Superseded by realistic soldier pawns.
- v1.1: White King with gold crown and large expressive moustache. → Superseded by simple medieval crown and medium beard and moustache (L2).
- v3.0 to 5.1: Board is "several years old". → Superseded in 6.0: less than three years old.
- v5.1 to 7.0: Green/beige tournament board (M1). → Superseded in 7.0: dark brown (near black)/beige.
- v1.0 to 3.0: English notation (Bd3, Nh3, Qh5, Ne7, Ng5, Nxh7). → Dutch notation since 5.0.
- v7.0 to 7.2: Plain, neutral placeholder background around the board. -> Superseded in 7.3: an empty chess club room (Section 3, Surroundings).
- v7.0 to 7.2: Panels 1b, 3a, 4c, 5b and 5d as single panels with one long balloon each. -> Split in 7.3 into 1b-1/1b-2, 3a-1/3a-2, 4c-1/4c-2, 5b-1/5b-2, 5d-1/5d-2 (author decision, Section 23.B).
- v7.0 to 7.2: Greasy spot on f3 "clearly visible" in every scene. -> Superseded in 7.3: barely noticeable in Scenes 1 to 8, clearly visible from Scene 9.
- v7.0 to 7.2: Panel 4a camera "low, just above the board at the fourth rank". -> Corrected in 7.3: somewhat elevated, as in the approved sketch.
- v3.0 to 7.2: Pieces described without costumes (plain wood with faces). -> Superseded in 7.3: full costumes for the officers of both armies, soldier uniforms for the pawns (Section 5, Costumes). The v1.1 costume descriptions return; the v1.1 gold crown stays superseded.
- v7.0 to 7.4: Common Prompt Block described the boebel by name with negative wording ("Boebel: the board surface itself is warped upwards ... No outline, no rings, no separate object, no hard-edged dome."). -> Superseded in 7.5: the prompt term "the centre hump" with the standard sentence (Section 4); the negative checks moved to Section 16.
- First 7.5 wording of the standard sentence (named the bump, which made the image generator draw an explanation): "In the exact centre of the board, the plastic board surface itself bulges gently upward into one smooth, low, rounded hill - the centre hump - like a vinyl roll-up chessboard that has warped from heat. Its highest point is the corner where the four centre squares meet, about as high as the base of a chess piece, and from there it slopes smoothly back down until the board is flat again at the outer edges of those four squares. The squares, their grid lines and their colours bend over the hill. The hill is seen only through soft light on the side facing the light and soft shadow on the other side." -> Superseded within 7.5 by the unnamed sentence (Section 4).
- v7.1 to 7.6 (first wording): "Preferred: draw the speech balloons empty, with no letters, placed as described; the original text is typeset afterwards" (Common Prompt Block), "Preferred: request empty speech balloons ... Do not ask the image generator to write long Flemish passages" (Section 21), "Where practical: generate the illustration with empty speech balloons" (Section 23.E), and in the first 7.6 protocol "empty speech balloons" as the generator's only output. -> Superseded in 7.6 by author decision: the generator writes the exact text itself; every balloon is checked letter for letter; empty balloons are the fallback.

- Up to 7.7: "This cartoon has no captions and no narration; chess notation appears only where it is part of the dialogue" (Strict Adaptation Protocol P.3, Section 16, Common Prompt Block, proposal move panels: "no caption, no notation in the image"). -> Superseded in 7.8 by author decision: a panel in which a move is played shows the move verbatim in a move box (Section 13, Move Box). Captions and narration remain forbidden.
- v1.0 to 7.8: "Veteran pawns may have moustaches or short beards" (N2; Section 7, White Pawns; Common Prompt Block). -> Superseded in 7.9 by author decision: the b-pawn and the g-pawn of both armies have a moustache in every image, no other pawn.
- v7.0 to 7.9, panel 4a: "one or two of them point past the camera towards the gentle rise in the middle of the board" (panel block and manifest 4a). -> Superseded in 7.10 by author decision: all white pawns keep their arms crossed in panels 2b to 5d-2; no pawn points.
- v7.0 to 7.11, panel 2b: "small wordless grumble balloons (jagged outline, a wavy scribble inside, no letters)" and no caption (panel block, manifest, Scene Catalog, stage-direction table). -> Superseded in 7.12 by author decision: grumble balloons with chess annotation symbols and #, with short tails, and the stage direction verbatim in a caption box.
---

# APPENDIX B - OPEN QUESTIONS
Items that need a decision from the author.

1. ~~**Play text completeness.**~~ Resolved in 7.0: the original play text was supplied by the author and replaces the shortened copy.
2. ~~**Quote marks.**~~ Resolved in 7.0: the mixed quote marks are in the original and are kept as is.
3. ~~**f3 greasy spot.**~~ Resolved in 7.0: approved by the author as a faint yellowish greasy smear (see Section 4).
4. ~~**Board condition.**~~ Resolved in 7.0: the original confirms the plastic board is less than three years old and the pieces already complain about it.
5. **Missing dossiers.** White rooks, White knight b1, White bishop c1, Black Queen, Black bishops, Black knights, Black rook a8. Status 7.3: proposals in Section 7 (Proposed Dossiers), awaiting author approval.
6. ~~**Clothing.**~~ Resolved in 7.3: full costumes for the officers of both armies, soldier uniforms for the pawns (Section 5, Costumes). Remaining details in item 13.
7. ~~**Language of speech balloons.**~~ Resolved in 7.3: original Flemish only; no translations.
8. ~~**Surroundings of the board.**~~ Resolved in 7.3: an empty chess club room, without people (Section 3, Surroundings).
9. ~~**Coarse language versus "family friendly".**~~ Resolved in 7.3: the original text always takes precedence; "family friendly" applies to the visuals and the tone (Section 10).
10. **Lettering tool.** Which tool is used to correct a deviating balloon text, or to typeset the dialogue into empty balloons in the fallback (Section 21, Stage 3)? Since 7.6 the image generator writes the text itself, so the tool is only needed for corrections and the fallback.
11. ~~**Title.**~~ Resolved in 7.3: title and subtitle on the album cover (Section 13, Cover Direction).
12. **Output format and lettering size.** Partly resolved in 7.3: the format is a printed album page (Section 23.F). Still open: the exact font and the measured capacity of a lettered panel. Original question: For which size is the comic made (printed album page, A4, screen), with which font and minimum text size? This decides how much text fits in a balloon (Section 23.F) and replaces the rule of thumb with measured values.
13. **Costume details.** How does a costume combine with the wooden body (cloth over the wood, or painted or carved on it)? Which darker colours do the black officers wear? What do the white officers without a dossier wear?
14. **A piece on the slope of the raised centre.** From board state 2 the black pawn stands on d5, on the slope of the raised centre. Does it stand upright on the raised surface (as in the SVG preview), lean with the slope, or does it visibly struggle? (Added in 7.7.)
15. **The draw result without a caption.** Scene 16 ends in a draw (1/2 - 1/2), but the cartoon has no captions, and chess notation appears only inside dialogue and in the move box of a played move (a draw is not a move; Section 13, Move Box). How is the result shown: only through the pieces' reactions (as in the preview, panel 16b), or in another way the author approves? (Added in 7.7.)
16. **Approval of the proposed panels for Scenes 6 to 16** (Section 18, Proposed Panels). Per panel: approve, correct, or reject. (Added in 7.7.)
17. ~~**Pawn beards.**~~ Resolved in 7.9: the author confirmed that no pawn has a beard. Original question: No pawn has a beard, so that "no other pawn" holds for all facial hair (Section 18, Common Prompt Block). Confirm, or correct. (Added in 7.9; the first part of this item, the moustache following the pawn after a change of file, was confirmed by the author in 7.9.)
18. **Caption box for other stage directions.** In 7.12 the stage direction of panel 2b got a caption box. Does this apply only to 2b (current reading), or to every stage direction in the play, for example (zucht) in 10a and 16a and (Alfil overlegt met pionnen en komt terug) in 4a? And should the parentheses stay in the caption (current reading: yes, verbatim)? (Added in 7.12.)

---

# APPENDIX C - VERSION HISTORY
| Version | Commit | Notes |
|---|---|---|
| 1.0 | 62fb712 | Exhaustive production bible; core concept, world rules, first master prompt. |
| 1.1 | 38340ea | Canonical corrections: Black King, boebel squares, cola on f6. |
| (2.x) | 3186bd6 | Renamed to The Miniature Cartoon Bible; dossiers, running gags, cover direction. Play text summarized only. |
| 3.0 | a182019 | Adaptation rules, boebel and paprika corrections, position table. |
| 5.0 | 9a7ed4e | Full play text embedded; anthropomorphism; Dutch notation. |
| 5.1 | fc4e769 | Decision log with meanings; visual style details. Play text truncated. |
| 6.0 | f50d551 | Materials, relationship matrix, production rules. Lost content: play text, running gags, decision meanings. |
| 7.0 | bfade89, c56823a | Consolidation of all versions into the 17-section structure; original play text from the author; board history; scene catalog; full board-state tables; Section 18 panel script for Scenes 1 and 2. |
| 7.1 | 1bddc59 | Dialogue attribution specification (Section 19), panel manifest standard (Section 20), artwork/lettering workflow (Section 21), completeness and fidelity checklist with script coverage map (Section 22); cross-references in Sections 13, 14, 16, 17, 18; open questions 9 to 11. |
| 7.2 | (with 7.3) | Dialogue density and visual composition (Section 23); manifest fields 14 to 21; density steps in the workflow; cross-references in Sections 13, 14, 16, 18, 19, 20, 22; open question 12. |
| 7.3 | 13d295a | Author decisions on the open questions: five panel splits, album format, original Flemish text, f3 visibility, Scene 5 approved, shout balloons, 4a camera, title on the cover, chess club room, costumes, proposed dossiers; open question 13. |
| 7.4 | 812366d | Panel manifests for Scenes 1 to 5 (Section 20.3). |
| 7.5 | - | Boebel specification for image generation: standard descriptive sentence without a name, positive description, dimensions (Section 4); prompt texts describe instead of naming; no-text rule for images; generator-neutral (Copilot and ChatGPT), Section 18 renamed. |
| 7.6 | - | Strict Adaptation Protocol (no creative deviation) before Section 1; the image generator writes the exact balloon text, checked letter for letter, empty balloons as fallback (author decision); cross-references in Sections 13, 14, 16, 21 and 23. |
| 7.7 | - | Proposed panels for Scenes 6 to 16 in Section 18 (awaiting approval); SVG preview of the whole comic in `comic/`; open questions 14 to 16. |
| 7.8 | - | Move box for every played move (author decision): Section 13, Move Box; Common Prompt Block; proposal move panels; cross-references; superseded rule in Appendix A. |
| 7.9 | - | Pawn moustache rule (author decision): b-pawn and g-pawn of both armies, every image; open question 17. |
| 7.10 | - | Pawn solidarity (author decision): all white pawns arms crossed in panels 2b to 5d-2; panel 4a without pointing. |
| 7.11 | - | Anger symbols (red popping-vein mark) forbidden after author feedback on panel 5a; removed from the preview. |
| 7.12 | - | Panel 2b: grumble balloons with chess annotation symbols and #, short tails, faces clear; stage direction verbatim in a caption box (only caption in the cartoon); open question 18. |
