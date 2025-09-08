# Known Limitations

- HolyC cannot directly call arbitrary Roblox APIs beyond the safe builtins listed.
- Client-side changes are cosmetic unless coordinated with the server.
- `Script.Source` is protected at runtime; pass HolyC text via ModuleScript/StringValue/Attribute, or via data channels if remote.
