# GUI, Camera & Text

## GUI & Quick Actions
- `src/client/HolyCGUI.luau` provides a TempleOS-inspired editor UI.
- Quick buttons: Run Tests, Fuzz Replay.
- Status bar shows inline diagnostics.

## Camera (client)
- `SetCameraSubject(Str pathOrName)`
- `SetCameraCFrame(F64 x, F64 y, F64 z, F64 rx, F64 ry, F64 rz)`
- `TweenCameraCFrame(F64 x, F64 y, F64 z, F64 rx, F64 ry, F64 rz, I64 ms)`

Example:
```lua
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = [[
SetCameraSubject("MyModel/Sub/Part");
TweenCameraCFrame(0, 30, 40, -20, 0, 0, 1200);
]]
Runner.runSource(holyc, { warnUndefined = 1 })
```

## Text utilities
- `godWord()` -> `Str`
- `godPhrase(F64 length)` -> `Str`
- `godVerse(F64 quantity)` -> `Arr(Str)`

Example:
```lua
return [[
Str w = godWord();
Str p = godPhrase(5);
Auto verses = godVerse(3);
]]
```
