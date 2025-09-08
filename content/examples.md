# Examples Library

- Minimal parent Part coloring:
```lua
return [[ Str p = "."; SetPartColor(p, 0, 255, 0); ]]
```

- Relative child:
```lua
return [[ SetPartColor("./Handle", 255, 0, 0); ]]
```

- Workspace path:
```lua
return [[ SetPartColor("MyModel/Sub/Part", 0, 128, 255); ]]
```

- Motion:
```lua
return [[ Str t = "."; MovePart(t, 0, 3, 0); ]]
```
