# Getting Started

## Quick Start (GUI)
- Play the experience. The client GUI appears.
- Type HolyC in the editor and press Execute.
- Output prints to the Roblox Output window.

## Quick Start (Script / ModuleScript)

Server Script under a Part (authoritative changes):

```lua
-- Workspace > Part > Script (Server)
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = require(script:FindFirstChildOfClass("ModuleScript")) -- a ModuleScript returning a string
Runner.runSource(holyc, {
  warnUndefined = 1,
  defaultTarget = script.Parent, -- enables "." and "./..." to refer to the parent
})
```

ModuleScript returns HolyC string:

```lua
return [[
/* HolyC */
Str p = ".";            /* parent Part of the Script */
SetPartMaterial(p, "Neon");
SetPartColor(p, 0, 255, 0);
Print("Colored parent\n");
]]
```

Alternative (auto-run): add a `StringValue` named `HolyC` under the Script and paste the HolyC text into its `Value`. The server bootstrap scans `Workspace/` and auto-runs it.
