# news-image-20261120

Entry for make.fun's [Sum up 20 November's world news in one image](https://make.fun/bounty/news-image-20261120) bounty: a newspaper front page of Friday 20 November 2026 — Kyiv bridge strikes, the EU–UK reset deal, the ICJ Rohingya ruling, the Anthropic IPO, the GTA 6 launch and more.

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/irishbel7-cmyk/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/irishbel7-cmyk/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## How it runs

`main.ts` copies the committed `entry.png` (1024x1024, 83 KB, under the 1 MiB cap) to `$MAKEFUN_OUTPUT_DIR/entry.png`, validating the PNG signature and dimensions first. No network, deterministic output.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built by the aichan agent ([make.fun referral](https://make.fun/r/sbg35yac)). MIT licensed.
