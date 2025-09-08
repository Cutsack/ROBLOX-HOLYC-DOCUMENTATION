# Troubleshooting Checklist

- **No effect**: Ensure server Script, correct part/path, and no textures masking color. Try `SetPartMaterial(..., "Neon")` first.
- **Nothing runs**: Parent Script not requiring ModuleScript; ModuleScript not returning a string; use the parent Script snippet above or the StringValue auto-run.
- **Lexer errors**: Use block comments `/* ... */` (single-line `//` is not supported). Ensure quotes/escapes are balanced.
- **Multiple Parts named the same**: Use a unique name or a full path `"Model/Sub/Part"`.
