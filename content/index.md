# HolyC Interpreter for Roblox Studio

A HolyC-like language interpreter that runs in Roblox Studio and live experiences.

- Author HolyC directly in simple text (ModuleScript returns a string, StringValue, or string literal)
- Run on client or server
- GUI editor for interactive experiments
- Safe Roblox Bridge API to manipulate the world

Key modules:
- `src/shared/HolyC.luau` — Orchestrates lexing, parsing, and interpreting
- `src/shared/HolyCLexer.luau` — Tokenizer with string escape support
- `src/shared/HolyCParser.luau` — Recursive‑descent parser
- `src/shared/HolyCInterpreter.luau` — AST evaluator + Roblox builtins
- `src/shared/HolyCScriptRunner.luau` — Helpers to run HolyC from Scripts/LocalScripts
- `src/client/HolyCGUI.luau` — GUI to write/run HolyC in play mode

Continue with [Getting Started](#/getting-started).
