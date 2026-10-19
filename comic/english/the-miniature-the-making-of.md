# The Miniature - The Making Of the English Edition

Statistics on the effort that went into the English edition of "De Miniatuur", collected on 19 October 2026 (English bible en-0.4, commit `726c5f2`). For the Flemish original, see `the-miniature-the-making-of.md` in the project root.

Most numbers are counted exactly from the project files, the git history and the session log. The hours are estimates (see the notes at the end).

## The album

|                 |                                                                                                              |
|-----------------|--------------------------------------------------------------------------------------------------------------|
| Pages           | 14, as the Flemish album: front cover, 11 story pages, closing page, back cover                              |
| Panels          | 79, the same drawings as the Flemish edition: no panel redrawn                                               |
| Speech balloons | 64, each a verbatim piece of the English play text, split at the same points as the Flemish balloons         |
| Move boxes      | 13, 7 of them rewritten in English notation (Bd3, Nh3, Bd7, Qh5, Ne7, Ng5, Nxh7)                             |
| Other text      | 2 captions, the front cover, the closing page (epilogue line, scoresheet, colophon) and the back cover blurb |
| Files           | 93 SVG drawings (79 panels, 14 pages), a 14-page PDF (`pdf/the-miniature.pdf`, 6.8 MB)                       |

## The translation

|                           |                                                                                                                                                                                                                                                                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source                    | the Flemish play text, about 1,120 words                                                                                                                                                                                                                                                                   |
| English play text         | about 1,090 words; about 95% of the Flemish length in characters, so the balloons did not grow                                                                                                                                                                                                             |
| Corrections by the author | 9: the nickname ("The One Across the Board"), "Counsellor Alfil" in the first speech, "used the square", "using his own last pawn", "what's going on with that bump", two tightenings to keep long speeches short, "quality" instead of "the exchange", and translating every remaining text in the images |
| Double meanings reviewed  | 11 Flemish words that are both a chess term and an everyday word (raadsheer, boeren, officieren, kwaliteit, ridder, toren and others)                                                                                                                                                                      |

## The English bible

|          |                                                                                                                                                           |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Size     | 236 lines, about 3,800 words: a supplement, not a copy                                                                                                    |
| Contents | the English play text (E1), the 64 balloons per panel, the move boxes and captions, the balloon layout, and the texts of the covers and closing page (E2) |
| Ratio    | about 3.5% of the size of the Flemish bible (about 105,000 words), which it does not repeat                                                               |

## The process

|               |                                                                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------|
| Duration      | 17 October 2026, from the tagged Flemish release `the-miniature-flemish-v1.0.0` to commit `726c5f2`            |
| Prompts       | 18 messages from the author                                                                                    |
| Hours         | about 2 to 2.5 hours of active work, against about 35 hours for the Flemish edition                            |
| Commits       | 3 on the branch `creating-the-miniature-english-version`, 1 of them the full English edition                   |
| Repository    | the comic split into `comic/flemish/` and `comic/english/`; the skill scripts gained an `-Edition` switch      |
| Layout tuning | 19 balloons given a balanced number of lines, 2 balloons repositioned (3a-1 and 10i) so no tail crosses a face |

## Telling details

- The English edition shares the drawing code with the Flemish one file for file: the renderer, the font and the helper pages are identical; only `panels.js` (the texts and 21 balloon layouts) and `index.html` (the covers, closing page and labels) differ.
- No exception to "no redrawing" was needed: every English text fitted the existing drawings.
- Building the English edition took about one fifteenth of the time of the Flemish one, because the bible, the drawings and the tools were already there.

## Notes on the numbers

- Hours: measured from the timestamps in the session log from the author's first message about the English branch; gaps of more than 15 minutes (lower figure) or 30 minutes (upper figure) count as breaks. The author's own reading and reviewing outside the session is not included.
- Prompts: counted from the session log over the same period.
- Lengths: words counted on the play texts as written; characters compared speech by speech.
