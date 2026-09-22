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
- Shell text still says Part 2 and sustainability: splash stamp and headline, splash
  "Download the public PDF" link (A.susPlan is now unlinked from every exercise), gallery memo
  from Chris Gravitas, TaglineBar wordmark, index.html title, App.jsx title suffix. Needs a
  name for the new workshop from Matt.
- Fallback Deep Research report for 01 (one real run from Matt).
- CLAUDE.md, tasks/todo.md, README rewrite for this repo; new MH anchor hash
  (range is now MH_IMAGE_REVERSE to MH_ACCESSIBILITY_AUDIT).
- src/config.js still points at the Part 2 Apps Script sign-in endpoint.
- Dead data: A.susPlan, A.stepTwoPrompt, A.deepResearch (old fallback PDF), tools/*.py that
  are plan-specific.

## Verify
`npm run build`, `npm run preview -- --port 4174`, open
http://localhost:4174/education/?cb=<ts>#/m1 with the tab in front; `?doctor` all 200.
