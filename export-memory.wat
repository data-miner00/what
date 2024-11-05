(module
  (import "codeModule" "readString" (func $log(param i32 i32)))
  (memory $mem 1)
  (data (i32.const 0) "Hello from WebAssembly")
  (func (export "writeHW")
    i32.const 0
    i32.const 22
    call $log)
  (export "memory" (memory $mem)))
