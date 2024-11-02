(module
  (func $functionOne (result i32)
    i32.const 1)
  (func $functionTwo (result i32)
    i32.const 2)
  (export "functionOne" (func $functionOne))
  (export "functionTwo" (func $functionTwo)))
