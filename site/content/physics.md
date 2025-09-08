# Physics & Constraints (server)

Helpers to manipulate physics and link parts at runtime.

Builtins:
- `SetMassless(Str partPathOrName, I64 on)`
- `AddBodyForce(Str partPathOrName, F64 fx, F64 fy, F64 fz)`
- `AddBodyVelocity(Str partPathOrName, F64 vx, F64 vy, F64 vz, F64 max?)`
- `BreakJoints(Str partPathOrName)`
- `Weld(Str aPath, Str bPath)`
- `AlignPosition(Str aPath, Str bPath, F64 stiffness?, F64 responsiveness?)`

Examples:
```lua
return [[
/* Make parent part floaty and nudge it upward */
SetMassless(".", 1);
AddBodyForce(".", 0, 400, 0);
]]
```

```lua
return [[
/* Give a push in +X with high max force per axis */
AddBodyVelocity(".", 20, 0, 0, 1e6);
]]
```

```lua
return [[
/* Break joints under a nested part */
BreakJoints("Crate/Top");
]]
```

```lua
return [[
/* Weld two parts together */
Weld("Platform/Base", "Platform/Pillar");
]]
```

```lua
return [[
/* Align one part to another */
AlignPosition("Dart", "Target", 1000, 200);
]]
```

Sounds and lighting:
```lua
return [[
PlaySound("18435278", 0.5);  /* or PlaySound("rbxassetid://18435278") */
SetAmbient(64,64,64);
SetOutdoorAmbient(32,32,64);
SetBrightness(2.0);
]]
```

Humanoid helpers:
```lua
return [[
SetWalkSpeed("NPCs/Guard", 24);
SetJumpPower("NPCs/Guard", 70);
]]
```

Create a pad:
```lua
return [[
CreatePart("", "HC_Pad");
SetPartMaterial("HC_Pad", "Neon");
SetPartSize("HC_Pad", 6, 1, 6);
SetPartPosition("HC_Pad", 0, 3, 0);
]]
```
