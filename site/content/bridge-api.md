# Roblox Bridge API

HolyC builtins that operate on Roblox Instances (safe subset). Return `1` on success, `0` on failure.

## Addressing
- `"Part"` — first descendant under `Workspace` named Part
- `"Model/Sub/Part"` — slash path from `Workspace`
- Default target (server only) — if `defaultTarget = script.Parent` is provided:
  - `"."` targets the Script's parent
  - `"./Child/Sub"` resolves relative to the parent

## Builtins
- `SetPartColor(Str name, I64 r, I64 g, I64 b)`
- `SetPartRandomColor(Str name)`
- `Random(I64 a, I64 b) -> I64`
- `Sleep(I64 ms)`
- `SetPartTransparency(Str name, F64 t)`
- `SetPartAnchored(Str name, I64 on)`
- `SetPartCanCollide(Str name, I64 on)`
- `SetPartMaterial(Str name, Str material)`
- `SetPartSize(Str name, F64 x, F64 y, F64 z)`
- `SetPartPosition(Str name, F64 x, F64 y, F64 z)`
- `MovePart(Str name, F64 dx, F64 dy, F64 dz)`
- `SetPartOrientation(Str name, F64 rx, F64 ry, F64 rz)`
- `CreatePart(Str parentPathOrName, Str name)`
- `DestroyInstance(Str pathOrName)`
- `SetParent(Str childPath, Str parentPath)`

### New bridges
- `PlaySound(Str idOrPath, F64 volume?)`
- `StopSound(Str path)`
- `SetAmbient(I64 r, I64 g, I64 b)`
- `SetOutdoorAmbient(I64 r, I64 g, I64 b)`
- `SetBrightness(F64 value)`
- `SetWalkSpeed(Str modelOrHumanoidPath, F64 speed)`
- `SetJumpPower(Str modelOrHumanoidPath, F64 power)`
- `SetBillboardText(Str partPathOrName, Str text)`

### Examples
```lua
return [[
/* Color parent Part */
Str p = ".";
SetPartMaterial(p, "Neon");
SetPartColor(p, 0, 255, 0);
]]
```

```lua
return [[
/* Randomize color for ~6 seconds */
Str target = "."; /* or "Model/Sub/Part" */
I64 i=0; while (i < 60) { SetPartRandomColor(target); Sleep(100); i++; }
]]
```
