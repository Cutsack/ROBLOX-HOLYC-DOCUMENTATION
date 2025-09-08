# Tests, Fuzzing, and Stress

- `src/shared/ExtendedTests.luau` — golden tests covering operators, control flow, strings/escapes, scoping, block expressions, handles, precedence, struct arrays, formatting, and `++/--`.
- `src/shared/FuzzSeeds.luau` — persisted regression seeds (nested blocks, long strings, deep calls, etc.).
- `src/shared/FuzzRunner.luau` — replays seeds and runs a bounded stress test.

Run via GUI quick buttons or require these modules from the console/script.
