---
title: "What broke between the AI mockup and the production build"
date: "2026-07-11"
summary: "This site was designed in Claude and rebuilt in Next.js. The prototype code was throwaway; the pixels weren't. Two things broke in translation, and neither was where I expected."
---

This portfolio was designed in Claude Design as an HTML prototype, then handed off to be rebuilt as a real Next.js app. The instruction that matters with a handoff like this: the prototype's *rendered output* is the spec. Its internal code is not. Design tools optimize their markup for iteration speed, not production, so the structure gets thrown away and only the pixels survive.

Two things broke in the translation.

First, the prototype used a drag-and-drop image component — you could drop a screenshot onto a project panel and it would persist inside the design tool. That interaction can't exist on a static production site, and porting the component would have meant shipping a thousand lines of editor code to visitors who will never drag anything. The production answer had to solve the actual underlying need — "screenshots will arrive later, after the site ships" — which is a content problem, not a UI problem. (How that got solved is its own note.)

Second, a reviewer looked at a project screenshot and said: *"The screenshot is not showing the full site. It's cropped poorly."* One sentence, non-technical, completely correct. The diagnosis turned out to be two problems stacked on top of each other. The capture itself was too tight — reshooting it wider fixed half the issue. But the frame around it was also silently eating the edges: the image sat inside a parallax wrapper inset by −4% on top and bottom, so that it could move on scroll without showing gaps. That's a fine trick for atmospheric imagery. For a screenshot — where the edges are content — it's a crop you shipped without deciding to.

The fix was to recapture the shot *and* soften the parallax range, and to check the other panels for the same silent crop. They had it too.

What I took from it: an AI design tool produces output that looks plausible at every step, which moves the hard work from *making* the thing to *checking* it. The reviewer who caught the crop wasn't reading code. They were looking at the result with a clear standard for what "correct" meant — the full site visible in the frame — and that standard did more for the build than the tooling did.
