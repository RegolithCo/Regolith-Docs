---
title: "May 22, 2023 - 3.19 Update #2: Test build!!"
date: 2023-05-22
tags: [release]
---

Oof. This has been a real journey. I'm definitely not done but there is a test build now available at https://staging.regolith.rocks . All the visual stuff is done and in place but there are still some math-y issues I'm working through. Seems like both UEXCorp and all the others are having similar issues too so.... we're in good company.

**Big changes:**

- All the math has pretty much changed for mining.
- Dynamic prices and a store-chooser-helper widget. Prices now come from UEXCorp and very soon I'll have the dynamic price updates running every hour.
- New Rock calculation equations
- Huge database refactor under the hood.

**Known Issues:**

- ~~The migration didn't seem to work so old totals for old jobs are set at 0. Fix coming soon...~~ (FIXED)
- ~~Adding scouting finds was breaking the site on save~~ (FIXED)
- Some of the totals are still not adding up. I'm working through those and really hoping it's something small.
