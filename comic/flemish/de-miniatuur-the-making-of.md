# De Miniatuur - The Making Of

Statistics on the effort that went into the comic album "De Miniatuur", collected on 17 October 2026 (bible version 8.12, commit `1280fa0`).

Most numbers are counted exactly from the project files, the git history and the session log. The hours are estimates (see the notes at the end).

## The album

|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Pages              | 14: front cover, 11 story pages, closing page, back cover                                    |
| Panels             | 79 drawings, 4 of them wide and 1 two strips high                                            |
| Speech balloons    | 64, all checked letter for letter against the original text                                  |
| Move boxes         | 13: 12 played moves and the result 1/2 - 1/2                                                 |
| Source text        | the article "De Miniatuur" (2012), about 1,200 words, written as a play and adapted complete |
| Characters         | 32 chess pieces, each with a face; about 15 with a speaking or running role                  |
| Faces and gestures | 28 facial expressions, 29 arm gestures                                                       |
| Files              | 93 SVG drawings (79 panels, 14 pages), a 14-page PDF, 14 PNG images for Facebook             |

## The bible (the script)

|                      |                                                           |
|----------------------|-----------------------------------------------------------|
| Size                 | 5,727 lines, about 105,000 words, roughly a 350-page book |
| Versions             | from v1.0 to 8.12, with 113 version summaries             |
| Change log           | 227 recorded decisions, most of them quoting the author   |
| Corrections          | 51 earlier wordings preserved in Appendix A               |
| Panel specifications | 81 detailed manifests, one per panel                      |

## The process

|            |                                                                                                                   |
|------------|-------------------------------------------------------------------------------------------------------------------|
| Duration   | 9 days, 9 to 17 October 2026                                                                                      |
| Prompts    | at least 417 messages from the author in the last session (12 to 17 October); the earlier sessions were not saved |
| Hours      | about 35 hours of active work: about 25 measured in the last session, about 9.5 estimated for 9 to 12 October     |
| Commits    | 138, of which 62 are bible versions                                                                               |
| Previews   | 177 images and previews sent to the author to choose from; about 450 rendering runs for checks                    |
| Prototypes | 51 throw-away test pages to compare alternatives side by side                                                     |
| Decisions  | about 90 short "accept", "apply" or "yes" moments                                                                 |
| Checks     | about 160 bible checks, 90 balloon-tail checks, 150 SVG exports and 23 PDF builds                                 |
| Code       | a 705-line renderer that draws the whole comic, 260 lines of panel data, plus the album page                      |

## Telling details

- The bible holds about 90 times as many words as the story it adapts.
- On average each panel took about 26 minutes and about 5 of the author's prompts.
- Ideas that were tried and dropped include extra jokes for the b8 knight, a thumbs up and a wink for Alfil on the closing page, a chess clock on the front cover, and Regina being pushed off the board in 14d.

## Notes on the numbers

- Hours, 12 to 17 October: measured from the timestamps in the session log; gaps of more than 15 minutes between messages count as breaks.
- Hours, 9 to 12 October: no session log was kept; estimated from the commit times (gaps of more than an hour count as breaks, plus 15 minutes per work block).
- Prompts: counted from the session log of 12 to 17 October only, so the real total is higher.
- Rendering runs, checks and exports: counted from the tool calls in the session log; repeated runs of the same check are counted each time.
