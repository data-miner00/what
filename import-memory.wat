(module
  (import "codeModule" "readString" (func $log (param i32 i32)))

  ;; Allocate 1 page of memory (64kb)
  (import "memoryModule" "memory" (memory 1))
  (data (i32.const 0) "Hello from WebAssembly")
  (func (export "writeHW")
    i32.const 0
    i32.const 22
    call $log))
