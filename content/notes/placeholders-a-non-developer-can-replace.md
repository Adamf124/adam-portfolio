---
title: "Placeholders a non-developer can replace"
date: "2026-07-12"
summary: "The site had to ship before all of its screenshots existed. The constraint: unfinished content can't look broken to a visitor, and replacing it can't require a developer."
---

This site shipped before all of its project screenshots existed. That's normal — content always lags the build — but it created two constraints that pull against each other. A visitor landing on the page should never see something that reads as *broken*. And whoever eventually adds the real screenshot (me, at 11pm, months from now, having forgotten how any of this works) shouldn't need to touch code to do it.

The obvious options each fail one constraint. Hardcoding an `<img>` tag with a temporary image looks fine to visitors, but swapping it means editing source, rebuilding, and knowing which file to edit. A CMS solves the editing problem and is wildly out of proportion for a three-project portfolio — a database and an admin panel to manage three images.

What worked was making the filesystem the interface. At build time, the site checks whether a screenshot exists at a known path — `public/images/projects/fabric-pots.jpg`, say. If it's there, it renders. If it isn't, the panel renders a styled placeholder instead: designed to match the page, clearly intentional, not a gray broken-image box. And the placeholder's own caption states the exact file path that will replace it.

That last detail is the part I'd keep even if everything else changed. The instruction manual is printed on the thing itself. Nobody has to remember a convention or find a README, because the placeholder tells you, in place: *drop a file named this, here, and I disappear.* Replacing a screenshot is now one file copy — no code, no rebuild logic to understand, nothing to get wrong.

It's a small pattern, but it generalizes: when work will be finished by someone who wasn't there when it started — a client, a teammate, your future self — the state of the system should explain itself at the point where the person is standing. The alternative is documentation nobody finds, for a task they do once a year.
