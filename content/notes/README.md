# Adding a Notes entry

Drop a `.md` file in this folder. The filename becomes the URL slug
(`my-entry.md` → `/notes/my-entry`). No code changes needed.

Frontmatter:

```yaml
---
title: "The problem or decision, stated plainly"
date: "2026-07-15"          # used for sorting, newest first
summary: "One or two sentences shown on the /notes index."
draft: true                  # optional, hides the entry from the site
---
```

Body is plain markdown. Structure that works (from the site strategy doc):

1. What was being built and what the constraint was. One or two sentences.
2. What broke, or what needed explaining, and to whom.
3. What was tried, what didn't work, and why.
4. What worked. If a non-technical person was involved, how it got
   explained to them.

Fill in real specifics. Don't generalize them away.
