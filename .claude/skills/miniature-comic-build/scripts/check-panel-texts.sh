#!/bin/bash
# Checks every balloon text in comic/flemish/panels.js against the play (bible Section 1), letter for letter.
# Runs of spaces are collapsed on both sides; nothing else is normalised.
# Usage: bash check-panel-texts.sh [bible] [panels.js]      (run from the project root)
#   English edition: bash check-panel-texts.sh the-miniature-cartoon-bible-en.md comic/english/panels.js
BIBLE=${1:-the-miniature-cartoon-bible.md}
PANELS=${2:-comic/flemish/panels.js}
PLAY=$(mktemp)
S=$(grep -n -E '^# (SECTION 1|E1) - FULL PLAY' "$BIBLE" | cut -d: -f1)   # the Flemish bible (Section 1) or the English bible (E1)
E=$(awk -v s="$S" 'NR>s && /^#{1,2} /{print NR; exit}' "$BIBLE")   # up to the next heading (Source Notes or Translation Notes)
sed -n "${S},$((E-1))p" "$BIBLE" | tr '\n' ' ' | tr -s ' ' > "$PLAY"
total=0; bad=0
AUTHOR_BALLOONS=("(=) ?")   # panel 15e: the Black King offers a draw in chess notation, author decision (bible 7.84)
while IFS= read -r t; do
  total=$((total+1))
  t2=$(printf '%s' "$t" | tr -s ' ')
  if printf '%s\n' "${AUTHOR_BALLOONS[@]}" | grep -qxF -- "$t2"; then echo "Balloon with author's wording (not in the play, approved): $t2"; continue; fi
  if ! grep -qF -- "$t2" "$PLAY"; then bad=$((bad+1)); echo "NOT IN PLAY: $t2"; fi
done < <(grep -oE 'text: "([^"\\]|\\.)*"' "$PANELS" | sed 's/^text: "//; s/"$//; s/\\"/"/g')
echo "Checked $total balloon texts, $bad not found in the play"
# Move boxes (bible Section 13, Move Box): each must be a whole move line of the play, verbatim.
# The result box of the last panel (bible 7.37) must be the play's result line, verbatim ("1/2 - 1/2").
MOVES=$(mktemp); sed -n "${S},$((E-1))p" "$BIBLE" | grep -E '^[0-9]+\. |^1/2 - 1/2$' > "$MOVES"
mt=0; mb=0
while IFS= read -r t; do
  mt=$((mt+1))
  if ! grep -qxF -- "$t" "$MOVES"; then mb=$((mb+1)); bad=$((bad+1)); echo "MOVE BOX NOT A MOVE LINE OF THE PLAY: $t"; fi
done < <(grep -oE 'movebox: "[^"]*"' "$PANELS" | sed 's/^movebox: "//; s/"$//')
echo "Checked $mt move boxes, $mb not a move line of the play"
# Captions (bible 7.12, 7.14): the text inside the parentheses must be (part of) a stage direction of the play, verbatim.
# Captions whose wording the author chose, deliberately not verbatim (logged in the bible's Section 15).
AUTHOR_CAPTIONS=("(Alfil overlegt met de pionnen)")   # panel 4a, bible 7.14
ct=0; cb=0
while IFS= read -r t; do
  ct=$((ct+1))
  inner=$(printf '%s' "$t" | sed 's/^(//; s/)$//')
  if printf '%s\n' "${AUTHOR_CAPTIONS[@]}" | grep -qxF -- "$t"; then echo "Caption with author's wording (not verbatim, approved): $t"; continue; fi
  if ! grep -qF -- "($inner" "$PLAY"; then cb=$((cb+1)); bad=$((bad+1)); echo "CAPTION NOT IN PLAY: $t"; fi
done < <(grep -oE 'caption: "[^"]*"' "$PANELS" | sed 's/^caption: "//; s/"$//')
echo "Checked $ct captions, $cb not found in the play"
rm -f "$MOVES"
grep -q 'â€\|Ã©\|Ã«' "$PANELS" && echo "WARNING: mojibake (double-encoded UTF-8) in $PANELS"
rm -f "$PLAY"
[ "$bad" -eq 0 ]
