# Supported HolyC Subset

- Types: `I8/I16/I32/I64`, `U8/U16/U32/U64`, `F64`, `Bool`, `Str`, `Handle`
- Expressions: arithmetic, bitwise, comparison, logical, unary `+ - ~ !`, ternary `?:`
- Control flow: `if/else`, `while`, `for`, `break`, `continue`
- Functions: declarations/calls, parameters, returns, overloading by arity
- Aggregates: fixed-size arrays, structs, struct arrays, field access
- Strings: escapes `\n \t \r \\ \"`, library `SubStr`, `Find`, `Cmp`; concatenation
- Printing: variadic `Print` with `%d %u %x %s %f`, width/precision/alignment
- Block expressions: `{ ... }` produce last value and propagate `return`

Pragmas:
- `pragma("maxLoopIters", N)` — caps loop iterations (default 1000)
- `pragma("warnUndefined", 0|1)` — toggle undefined variable warnings
