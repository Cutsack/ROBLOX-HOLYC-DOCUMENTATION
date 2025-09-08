# Remotes and Input

## Remotes (client/server)
Builtins:
- `FireRemote(Str remotePath, Str payload)` — client to server
- `BroadcastRemote(Str remotePath, Str payload)` — server to all clients
- `BindRemote(Str remotePath, Str holycSnippet)` — binds a handler
- `UnbindRemote(Str remotePath)` — disconnects the binding

Injected vars inside bound snippet:
- `Str Sender` — "Server" on client; `<playerName>` on server
- `Str Payload` — the payload string from the other side

Examples:

Client: fire remote on key press
```lua
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = [[
BindKey("F", "FireRemote(\\\"Remotes/Action\\\", \\\"player pressed F\\\");");
]]
Runner.runSource(holyc, { warnUndefined = 1 })
```

Server: handle client events
```lua
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = [[
BindRemote("Remotes/Action", "\nPrint(\"From %s: %s\\n\", Sender, Payload);\n");
]]
Runner.runSource(holyc, { warnUndefined = 1 })
```

Server: broadcast to all clients
```lua
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = [[
BroadcastRemote("Remotes/Notify", "Hello clients!");
]]
Runner.runSource(holyc, { warnUndefined = 1 })
```

Client: react to server broadcast
```lua
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = [[
BindRemote("Remotes/Notify", "SetText(\\\"MainGui/Tip\\\", Payload);");
]]
Runner.runSource(holyc, { warnUndefined = 1 })
```

## Input (client)
Builtins:
- `BindKey(Str keyName, Str holycSnippet)`
- `UnbindKey(Str keyName)`

Accepted keys:
- Single letters `A..Z`, digits `0..9`
- Common names: `SPACE`, `ENTER`/`RETURN`, `ESC`/`ESCAPE`, `SHIFT`, `CTRL`, `ALT`, `TAB`
- Or exact `Enum.KeyCode` names (e.g., `F1`, `Backspace`, `Left`, `Right`)

Examples (LocalScript):
```lua
local Runner = require(game.ReplicatedStorage.Shared.HolyCScriptRunner)
local holyc = [[
/* Toggle a GUI panel with G */
BindKey("G", "SetVisible(\"MainGui/Panel\", 1);");

/* Refresh tip with random words on R */
BindKey("R", "SetText(\"MainGui/Tip\", godPhrase(4));");
]]
Runner.runSource(holyc, { warnUndefined = 1 })
```
