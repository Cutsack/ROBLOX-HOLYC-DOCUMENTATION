# Generic Setter and Advanced Helpers

## Generic setter
A safe generic setter reduces boilerplate:

- `SetInstanceProperty(Str pathOrDot, Str propertyName, Any v1 [, v2, v3])`

Addressing follows the same rules as other bridges:
- `"."` and `"./Child"` resolve relative to the Script's parent (server only, when `defaultTarget = script.Parent` is passed)
- Workspace paths like `"Model/Sub/Part"` are supported

Safety: only a whitelisted subset of properties per class can be set.

Allowed properties:
- BasePart: `Color (r,g,b)`, `Transparency`, `Anchored`, `CanCollide`, `Material`, `Size (x,y,z)`, `Position (x,y,z)`, `Orientation (rx,ry,rz)`, `Name`
- Lighting: `Ambient (r,g,b)`, `OutdoorAmbient (r,g,b)`, `Brightness`, `ClockTime`, `FogStart`, `FogEnd`
- Humanoid: `WalkSpeed`, `JumpPower`
- BillboardGui: `Enabled`
- TextLabel: `Text`, `TextColor3 (r,g,b)`, `Visible`
- Sound: `Volume`, `PlaybackSpeed`, `Looped`

Examples:
```lua
return [[
/* Parent part via generic setter */
SetInstanceProperty(".", "Material", "Neon");
SetInstanceProperty(".", "Color", 0, 255, 0);
SetInstanceProperty(".", "Anchored", 1);
]]
```

```lua
return [[
/* Lighting */
SetInstanceProperty("Lighting", "Ambient", 64,64,64);
SetInstanceProperty("Lighting", "Brightness", 2.0);
SetInstanceProperty("Lighting", "ClockTime", 18.5);
]]
```

```lua
return [[
/* Humanoid at path */
SetInstanceProperty("NPCs/Guard", "WalkSpeed", 24);
SetInstanceProperty("NPCs/Guard", "JumpPower", 70);
]]
```

## Advanced generics (power users)
Higher‑flexibility helpers for advanced workflows. Guarded by whitelists where appropriate.

Builtins:
- `GetInstanceProperty(Str pathOrDot, Str propertyName) -> Any`
  - Returns primitive types. `Color3`/`Vector3` as arrays `[r,g,b]` / `[x,y,z]`. `EnumItem` as its `Name`.
- `SetAttribute(Str pathOrDot, Str name, Any value)` / `GetAttribute(Str pathOrDot, Str name) -> Any`
- `CreateInstance(Str className, Str parentPathOrDot, Str name?)`
- `ConnectSignal(Str pathOrDot, Str signalName, Str holycSnippet)` / `DisconnectSignal(Str pathOrDot, Str signalName)`
  - Allowed signals:
    - BasePart: `Touched`, `TouchEnded`
    - GuiObject: `Activated`, `MouseButton1Click`, `MouseButton1Down`, `MouseButton1Up`
  - Injected vars:
    - `Str Sender` — the instance name
    - `Str Payload` — context string (e.g., hitter full name for `Touched`, or "gui")

Examples:
```lua
return [[
/* Read a Color3 as [r,g,b] and print */
Auto rgb = GetInstanceProperty(".", "Color");
Print("RGB: %d,%d,%d\n", rgb[0], rgb[1], rgb[2]);

/* Attributes */
SetAttribute(".", "Owner", "Player1");
Auto who = GetAttribute(".", "Owner");
Print("Owner: %s\n", who);

/* Create a part under Workspace */
CreateInstance("Part", "", "HC_Temp");
SetInstanceProperty("HC_Temp", "Material", "Neon");
SetInstanceProperty("HC_Temp", "Color", 255, 80, 120);
]]
```

```lua
return [[
/* Connect part touch to a snippet */
ConnectSignal(".", "Touched", "\nPrint(\"Touched by: %s\\n\", Payload);\n");
]]
```

```lua
return [[
/* Connect GUI button click */
ConnectSignal("ScreenGui/PlayButton", "MouseButton1Click", "\nPrint(\"Sender: %s\\n\", Sender);\n");
]]
```

### Advanced utilities
Discovery and math helpers for power users.

- `GetDescendants(Str pathOrDot) -> Arr(Str fullNames)`
- `FindFirst(Str pathOrDot, Str query) -> Str fullName` (matches by Name or `IsA(query)`)
- `GetCFrame(Str partPathOrName) -> Arr(12 numbers)` — `[x,y,z,r00,r01,r02,r10,r11,r12,r20,r21,r22]`
- `SetCFrame(Str partPathOrName, [Arr nums] | 12 numbers) -> 1/0`
- `Raycast(F64 ox,oy,oz, F64 dx,dy,dz, F64 maxDist) -> Str hitFullName`
- `CFrameToEuler(Str partPathOrName) -> Arr(3 numbers)`
- `SetEuler(Str partPathOrName, F64 px,py,pz, F64 rx,ry,rz)`
- `SelectStudio(Str pathOrDot)` (Studio only)
- `DebugSphere(F64 x,y,z, F64 radius, I64 ms, I64 r,g,b, F64 a)`
- `DebugLine(F64 x1,y1,z1, F64 x2,y2,z2, I64 ms, I64 r,g,b, F64 a)`

Example:
```lua
return [[
Str lamp = FindFirst("", "Lamp");
Print("Lamp path: %s\n", lamp);
Auto cf = GetCFrame(".");
SetCFrame(".", cf);
Str hit = Raycast(0,5,0, 0,0,-1, 100);
Print("Ray hit: %s\n", hit);
Auto e = CFrameToEuler(".");
Print("Euler XYZ = %f,%f,%f\n", e[0], e[1], e[2]);
SetEuler(".", 0, 10, 0, e[0], e[1]+15, e[2]);
SelectStudio(".");
DebugSphere(0, 5, 0, 1.5, 1200, 255, 64, 64, 0.3);
DebugLine(0, 5, 0, 0, 5, -10, 1200, 64, 255, 64, 0.1);
]]
```
