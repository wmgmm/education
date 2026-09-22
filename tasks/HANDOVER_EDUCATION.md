# HANDOVER, education respin, 2026-09-22 (written while the desktop was wedged)

This repo is the respin of Part 2: same site, exercises replaced one at a time. Part 2 stays
as it is for training. Object store: `~/.local/share/git-repos/education.git` (`.git` here is a
pointer file). Base path `/education/`; site will be https://wmgmm.github.io/education/ once
`gh repo create wmgmm/education` and the first push happen, **only when Matt says push**.

## Done, committed locally (no remote yet)
- 71cc4b9 copy of part2 at 6c9efac; cdf795c rename (base path, package, favicon, URLs,
  storage keys `education_user_v1` / `education_progress_v1:`).
- 6cf67dd Exercises 01 to 03: 01 is Deep Research on AI in UK universities (Matt's brief
  verbatim, `DR_HE_BRIEF`), then Copilot `SCORE_AND_IMPROVE` (15-criterion rubric, then
  rewrite), then `VISUAL_GUIDE` infographic. 02 slimmed (ban step folded into a hint card).
  03 game from the improved report, `CANVAS_GAME`, one placeholder `[responsible AI]`, model
  picks the mechanic. `MH_*` block now covers Exercise 02 only.
- 43408f9 Exercises 04 and 05: source is the improved report. ef88c1c 06 and bonus reframed
  (students rightly concerned about sustainability), data and prompts untouched.
- Blue Peter examples kept everywhere as placeholders (03 step 4 games, 04/05 example
  training and deck, 06 dashboard).

## Not done
- CLAUDE.md, tasks/todo.md, README rewrite for this repo; new MH anchor hash
  (range is now MH_IMAGE_REVERSE to MH_ACCESSIBILITY_AUDIT).
- src/config.js still points at the Part 2 Apps Script sign-in endpoint.
- Dead data: A.susPlan, A.stepTwoPrompt, tools/*.py that are plan-specific.

## Verify
`npm run build`, `npm run preview -- --port 4174`, open
http://localhost:4174/education/?cb=<ts>#/m1 with the tab in front; `?doctor` all 200.

## 2026-09-22, later: named and given its backup (approved item by item by Matt)

Workshop is **"AI in the Workplace Part 2: Education Edition"**: index.html title, App.jsx
suffix, TaglineBar wordmark, splash stamp and headline. Splash deck now "One Deep Research
Report, Six Exercises, ...". Chris Gravitas is now **Digital Education Officer**; the gallery memo
frames the day as building a **staff briefing on responsible AI** (staff must understand it before
they can explain it to students), matching the BUILD THE STAFF BRIEFING PACK heading and the
cartoon's whiteboard. Hero cartoon replaced with Matt's new
Gemini render (document now titled Responsible AI, same scene), resized to 960 wide as webp at
`public/staff_briefing.webp`, same filename; alt text updated to match.

Exercise 01 backup, Part 2's "one we made earlier" pattern: Matt's real run
(`DEEP_RESEARCH_REPORT_ByTheMatts.pdf`, 19 pages, on AI in UK higher education) now sits at
`public/placeholders/Deep_research_output.pdf` under the same filename, `A.deepResearch` note
points at step 2, and `m1.artifacts = [A.deepResearch]`. Splash step 2 links the same PDF as
"the backup report in case Deep Research is slow: the Matts' report", shortened on Matt's ask
to fit one line (measured: 21px, one line, in the 616px splash column). `A.susPlan` is now unlinked everywhere.

Verified in the preview build on port 4177 with a cache-busting query, tab in front: title,
wordmark, memo and signature text read back from the DOM; the 01 card shows blue_peter_icon.webp
(naturalWidth 128), DOWNLOAD pill, VIEW IN BROWSER to the PDF; PDF serves 317,430 bytes;
`?doctor` reports all 28 files 200. **Splash headline now wraps to five lines** at desktop
width (was three); stamp stays on one line. Not committed.

Still open: one "sustainability plan stripped out" line in `PROMPT_LIBRARY` (`#/prompts`,
linked from nowhere); the rest of the Not done list above.

## 2026-09-22, later still: Exercise 01 step 2 prompt reworked (approved item by item)

A live Copilot run of the old `SCORE_AND_IMPROVE` returned a scorecard, then "Revised Report
(Targeted Additions Only)" with "the existing report should be retained": no full report, so
nothing usable cascaded into step 3's infographic or Exercises 03 to 05. Causes in the prompt:
scorecard and change log printed first and ate the reply budget; "mark every addition [NEW]"
framed the job as additions; nothing said the output must stand alone.

New prompt, 2,318 characters (was 3,790), critique-then-revise shape: STEP 1 marks the source
silently against a **nine-point generic rubric** (coverage, recency, sourcing, evidence versus
opinion, clarity, examples, practicality, risks and limits, learning); STEP 2 prints only the
complete rewritten report as a learning resource, 1,500 to 2,500 words, no markers or tables,
then a five-line "Examiner's note". Nothing in it names the topic, so it runs on any Deep
Research report. Step body, label (THE SILENT MARK, THEN THE REWRITE), brief and the verdict's
"nine things" updated to match. `promptEmphasis` "Be critical but constructive" still matches.

**Untested against Copilot**: the word cap and the "[CONTINUED] then reply continue" rule are
standard mitigations for the reply limit, not verified ones. Verified: build green, DOM shows the
new prompt (2,318 chars, bold emphasis rendered), body, label, brief and verdict. Not committed.

Also today: VIEW IN BROWSER on the 01 backup PDF "not working" was this Chrome profile set to
download PDFs (every click landed in ~/Downloads). Link and server are fine; no code change.

Second live run of the new prompt (Matt, same day) produced a complete standalone report with
dated sources and the examiner's note: the cascade works. It read like a form (Benefit / Risk /
Why Human Judgement Matters headings under every development, Key Points duplicating the
executive summary), so one STEP 2 bullet changed: "flowing prose under clear headings", the
problem/approach/benefit/risk pattern for case studies only, and the key-points list dropped.
Prompt now 2,381 characters. Build green, bundle checked. Not committed.

Exercise 01 step 3 (`VISUAL_GUIDE`) rewritten the same day after a live run returned a six-item
text list and no image: the old prompt asked for an image and then a text list under it, so
Copilot's router took the text path. New prompt is image-only, 603 characters: one headline,
five illustrated ideas with four-word labels on a top-to-bottom path, one takeaway, at least
half the page empty, "Your entire reply is the image" (now the emphasis). Step body updated.
Matt rejected a two-send version (extract copy, then draw it) as unnecessary with 2026 image
models. Untested against Copilot. Build green, bundle checked. Not committed.

`VISUAL_GUIDE` revised once more on Matt's ask: role prompt ("innovative visual learning
designer"), audience and what-matters lines in Exercise 04's shape, word limits dropped in
favour of "plenty of white space", "user centric and jargon free". 692 characters, still image
only, emphasis unchanged. Body says "the key ideas as pictures". Build green, bundle checked.

`VISUAL_GUIDE`, final for today: the role-first version produced no image on a live run (trigger
buried mid-sentence). A reordered version (image trigger first) worked but slowly. Matt then
chose Copilot's own suggested prompt, installed verbatim (1,141 characters, en dash and
"whitespace" kept): CREATE AN IMAGE / Output type: IMAGE, role, audience, bullet rules, closing
"do not" block, "Return only the completed image" (now the emphasis). Step body gained "It can
take a minute or two, so wait before resending." Build green, bundle checked. Not committed.

**Lesson for any Copilot image prompt on this site:** the image trigger must be the first words
of the message, and the message must contain no text deliverable at all.

Exercise 01 verdict now the anchoring point (a model is a weak marker of its own work; Gemini
wrote, Copilot marked, a new chat and a different model). Then a read-only subagent review of
the whole m1 entry against the new prompts; eight findings, all approved and applied: step 2
body rewritten (new chat, paperclip, backup PDF route, copy the report not the note, Exercises
03 to 05 use it); step 1 says paste into Word and gained a promptNote that a slow run is covered
by the backup; chip 2 and toolInfo no longer say "fills / close the gaps"; brief now 39 words
and names step 3 and the reuse; step 3 and 4 bodies trimmed, step 3 ends "Save it if you want
to keep it"; stale A.yourReport comment fixed. Bodies are 47 / 61 / 60 / 53 words, over the
45 guide because each carries two fallback replies: accepted. Verified every string in the
served page, old strings gone. Not committed.

Exercise 02 step 2 (people got lost live): title now "Generate a new image in the same style,
using the prompt Copilot wrote in step 1"; body opens "Step 1 gave you a prompt, not a picture.
Copy that whole prompt, start a NEW chat...". Chips 1 and 2 now "Clone the style" and "Draw with
your style prompt". Step 3 title "Review and improve accessibility of your new
images". MH_* block unchanged (anchor hash verified
against HEAD). Build green, bundle checked. Not committed.

Exercise 03 blue peter: Matt's own Copilot rewrite of the Deep Research report, a 10-page
Word-exported PDF, shipped as `public/placeholders/Deep_Research_Report_Revised_By_Copilot.pdf`
(user-centric name kept, spaces to underscores). New `A.revisedReport` (label OPTIONAL: THE
IMPROVED REPORT WE MADE EARLIER, blue peter icon), attached as the step-level `artifact` on
03 step 1 under the prompt. A generated .docx from the pasted chat output was built and then
discarded when Matt supplied the PDF. `?doctor` now reports all 29 files 200. Exercise 01
step 2 title unchanged (Matt did not confirm that item). Seventeen files now ship. Not committed.
Exercise 03 step 1 body gained a closing hint on Matt's ask: "if the game falls short, try a
different model; Pro should be better at this task." Build green, bundle checked.
`CANVAS_GAME` tuned for readability after Matt's live run (`responsible_ai_spectrum_game.html`:
every line in Press Start 2P at 12px and 9px, a 330-character quote on the title screen). Three
in-place tweaks: pixel font for the title only, sans-serif 18px+ elsewhere, at most three short
lines on screen during play; items are a five-word name plus a twelve-word why; the why shows
for two seconds. Prompt now 1,345 characters. Build green, bundle checked. Not committed.
Exercise 03 step 4: the arcade example (`A.demandFirstGame`, Demand_First_Game.html) removed
from the card list on Matt's ask; the text adventure stays. Title now "Play the one the Matts
made earlier", body "One of ours." `A.demandFirstGame` is now dead data and the HTML file is
unlinked (both left in place). `?doctor` will report 28 files. Build green. Not committed.

## 2026-09-22, afternoon: the responsible AI text adventure, and Exercise 04 Copilot-only

**`public/placeholders/Responsible_AI_Adventure.html`** (829 lines, 31 KB, no dependencies)
replaces the Demand First adventure on Exercise 03 step 4 (`A.responsibleAiAdventure`, OPEN IT
only, blue peter thumb). Same green-screen visual system, typewriter, toggles and keyboard as its
ancestor, with the meters, hierarchy strip, points, achievements and level intros stripped.
Engine: `NODES` graph keyed by id, `text`/`opts`/`say` may be functions of the flags, `when`
hides an option, `ENDINGS` first-match list; `applyChoice` and `pickEnding` are pure so a walker
can drive them. Story: a lecturer, 180 students, twelve weeks, nine choices (handbook, inbox,
lecture, reading list, marking, the honest student, assessment meeting, the exam power cut, the
appeals panel), four endings (information governance, the machine marked it, the dark exam,
marker of record). Cascades: teach or not → the pen-and-paper exam; public chatbot → the chair's
question and ending 1; rubber-stamp marking → the Kant student with a highlighter; unread
handbook → the minibus; reporting the honest student → they appeal; viva assessment → the
power cut has nothing to take; runs → the energy footer.

Verified: node walk of all 10,206 paths (four endings reached: governance 3,402, stamp 1,512,
dark 3,528, record 1,764), every cascade string present, every line at most 58 characters,
every scene 3 to 7 lines and 2 or 3 options of at most 8 words. In Chrome, motion off: four
click-through runs reach the four endings with the WEEK 1 to WEEK 12 banner sequence; reload
mid-run shows SESSION FOUND naming the week and CONTINUE resumes; key 3 chooses C and Enter
continues; no console errors; no horizontal overflow at 390 (buttons 371 wide, 60 tall) or 1366
in iframes. `Demand_First_Adventure.html`, `Demand_First_Game.html`, `A.demandFirstAdventure`
and `A.demandFirstGame` all stay on disk, unlinked. CLAUDE.md artifact list updated.

**Exercise 04 is Copilot only** (Matt): `tools: [TOOLS.copilot]`, `toolsJoin` gone, one app,
chip 1 "Use the Revised report to build a training module" (Matt's words). Steps 1 and 2 merged
into one 6-minute step, "Attach the skill and your revised report, then paste the prompt and
send", naming the paperclip, the Training Module Builder skill and the report Copilot revised
in Exercise 01 (or the backup from Exercise 03); the promptEmphasis and its comment kept. The
copy step lost its Gemini sentence. `A.yourImprovedReport` (shared with 03 step 1) is now YOUR
REVISED REPORT, "the report Copilot revised in Exercise 01". CLAUDE.md table and toolsJoin
sentence updated. `estMinutesCore` 13 unchanged. Exercise 04's top cards now carry `A.revisedReport` (the
Copilot-revised PDF) beside the skill, on Matt's ask.

**Exercise 05 step 2 screengrab** replaced with Matt's new capture (Pictures/Screenshots,
09:14, the description box reads the responsible-AI prompt and [INSERT THE BRAND SKILL TEXT
HERE], Generate now visible); alt text updated. Same filename `notebook_slide_deck.webp`.

Not committed.
Exercise 05 step 4 title on Matt's ask: "Now generate a new slide deck with a different brand
skill (The Matts)". Build green, bundle checked.
Exercise 05 backup training session replaced with Matt's Copilot run: 8-page Word PDF shipped as
`Half_Hour_Responsible_AI_Training.pdf` under `A.exampleTraining` (same label and note);
`Example_Training_Session.pdf` stays on disk, unlinked. `?doctor` still 28 files.
