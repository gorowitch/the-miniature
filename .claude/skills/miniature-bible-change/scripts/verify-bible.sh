#!/usr/bin/env bash
# Verify the-miniature-cartoon-bible.md after a change, against a snapshot taken before the change.
# Usage: verify-bible.sh <snapshot-before.md> <bible.md>
# Checks:
#   1. Section 1 (the play) is byte-identical to the snapshot.
#   2. Lists every line that was removed or changed (each must be an intended, logged correction).
#   3. Every balloon text in Section 18 and in manifests (Section 20) occurs in the play (runs of spaces collapsed).
#   4. Counts the rows of the Script Coverage Map (Section 22.E); expected 45.
set -u
before="$1"; bible="$2"
play() { awk '/^# SECTION 1 /{s=1;next} s&&/^## Source Notes/{exit} s' "$1"; }

echo "== 1. Play (Section 1) verbatim"
if diff <(play "$before") <(play "$bible") >/dev/null; then echo "OK: identical to snapshot"; else echo "FAIL: the play changed:"; diff <(play "$before") <(play "$bible"); fi

echo "== 2. Lines removed or changed since the snapshot"
removed=$(diff "$before" "$bible" | grep '^<' || true)
if [ -z "$removed" ]; then echo "OK: none (purely additive)"; else echo "$removed"; echo "-> each line above must be an intended correction, logged in Section 15 and (for canon) Appendix A"; fi
echo "Lines added: $(diff "$before" "$bible" | grep -c '^>' || true)"

echo "== 3. Balloon texts against the play"
playtext=$(play "$bible" | tr -s ' \n' ' ')
miss=0; n=0
while IFS= read -r b; do
  [ -z "$b" ] && continue
  case "$b" in *"<text>"*) continue;; esac
  n=$((n+1))
  norm=$(printf '%s' "$b" | tr -s ' ')
  case "$playtext" in *"$norm"*) ;; *) echo "MISS: $b"; miss=$((miss+1));; esac
done < <(
  grep -E '^- Balloon \([^)]*\): ' "$bible" | sed -E 's/^- Balloon \([^)]*\): //'
  grep -E '^ *Balloon [0-9]+: "' "$bible" | sed -E 's/^ *Balloon [0-9]+: "//; s/"$//'
)
echo "Checked $n balloon texts, $miss not found in the play"

echo "== 4. Script Coverage Map rows (Section 22.E)"
awk '/^## 22.E/{s=1} /^# /{if(s&&!/^## /)s=0} s&&/^\| [0-9]+ \|/{n++} END{print (n+0)" rows (expected 45)"}' "$bible"
