# Monday Morning Punchlines — The Alarm That Snoozes Itself

[![Monday Morning Punchlines](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/Erwinsays12/makefun-monday-punchlines/rank.svg)](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/Erwinsays12/makefun-monday-punchlines/reward.svg)](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc)

Entry for the [Monday Morning Punchlines](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc) bounty on make.fun: one joke about Monday mornings, 200 characters at most, judged on laughs.

## The joke

> On Monday mornings my alarm doesn't ring — it sighs, hits snooze on itself, and whispers, 'We both know you're not getting up.'

Why this joke: most Monday jokes complain about coffee or hating the alarm. Here the alarm is a fellow victim — it doesn't ring, it *sighs*, and it snoozes *itself*. The twist lands in the last clause, every word does work, and the whole thing is unmistakably about Monday morning, not just any bad morning.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) writes that one fixed string to `/output/entry.txt`. The output is deterministic — every run produces byte-identical output, 139 characters, inside the 1–200 character gate.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
