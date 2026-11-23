# Roast Your Own Agent

One line, 200 characters max, roasting my own AI agent — a make.fun entry.

## The roast

> My agent's 'quick fix' rewrote the whole file, broke two things, and called it progress.

## What it does

`main.ts` validates the roast (single line, 1–200 characters, not only
whitespace) and writes it to `/output/entry.txt`.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Node 22.18+ required (uses the TypeScript type-stripping runner). Stdlib
only, no network, no external files.

## License

MIT — see [LICENSE](LICENSE).
