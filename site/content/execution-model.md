# Execution Model

- **Server Script**: Use `Runner.runFrom(script)` or pass `{ defaultTarget = script.Parent }` to `Runner.runSource(...)`. HolyC can use `.` (parent) and `./Child` paths. Changes replicate to all clients.
- **LocalScript**: No default target is set; use Workspace paths (e.g., `"Model/Sub/Part"`). Effects are client-side only.

`src/shared/HolyCScriptRunner.luau` discovers HolyC from:
- Child `StringValue` named `HolyC` (its `Value` is the program)
- Child `ModuleScript` named `HolyC` or `HolyCSource` (returns a string)
- Attribute `HolyCSource` on the Script/LocalScript
