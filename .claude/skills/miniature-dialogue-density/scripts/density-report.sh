#!/usr/bin/env bash
# Dialogue-density report for the-miniature-cartoon-bible.md.
# Usage: density-report.sh <bible.md> [max_words]
#   max_words: upper end of the rule of thumb in Section 23.F (default 30).
# For every balloon in the panel script (Section 18) and in manifests ("Balloon N:" lines) it prints
# the word and character count and a verdict. For balloons above the limit it lists the natural
# split candidates: positions after a sentence end (. ! ?) or a clause break (, :), with the
# word count of each part, so a split can be chosen that keeps both parts readable.
# Split candidates are only suggestions; the author decides, and the text is never changed.
set -u
bible="$1"; max="${2:-30}"

awk -v max="$max" '
function words(t,   n,i,c,w){ n=split(t,w,/ +/); c=0; for(i=1;i<=n;i++) if(w[i] ~ /[[:alnum:]]/) c++; return c }
function report(panel, who, t,   n,i,c,w,cut,tok,left,verdict){
  gsub(/ +/," ",t)
  n=words(t)
  verdict = (n>max) ? "REVIEW (above " max ")" : (n>max-5 ? "at the upper limit" : "ok")
  printf "%-6s %-14s %3d words %4d chars  %s\n", panel, who, n, length(t), verdict
  if (n > max-5) {
    cnt=split(t,w,/ /); c=0; left=""
    for(i=1;i<cnt;i++){
      tok=w[i]; if (tok ~ /[[:alnum:]]/) c++
      left = left (i>1?" ":"") tok
      if (tok ~ /[.!?]$/ || tok ~ /[,:]$/ || w[i+1] ~ /^[!?:]$/) {
        if (w[i+1] ~ /^[!?:]$/) continue
        printf "         split after word %2d (%2d | %2d): ...%s /\n", c, c, n-c, substr(left, length(left)>45 ? length(left)-44 : 1)
      } else if (w[i+1] ~ /^(en|maar|want|omdat|of|dan|als|terwijl|alvorens|zodat)$/ && c >= 6 && n-c >= 6) {
        printf "         clause before %-8s (%2d | %2d): ...%s / %s...\n", w[i+1], c, n-c, substr(left, length(left)>40 ? length(left)-39 : 1), w[i+1]
      }
    }
  }
}
/^# SECTION 18/ {s=1} /^# SECTION 19/ {s=0}
s && /^### Panel/ {panel=$3}
s && /^- Balloon \(/ { t=$0; who=t; sub(/^- Balloon \(/,"",who); sub(/[,)].*$/,"",who); sub(/^- Balloon \([^)]*\): /,"",t); report(panel, who, t) }
/^PANEL [0-9]+[a-z]/ {mp=$2}
/^ *Balloon [0-9]+: "/ { t=$0; sub(/^ *Balloon [0-9]+: "/,"",t); sub(/"$/,"",t); if (t !~ /<text>/) report("m:" mp, "(manifest)", t) }
' "$bible"
