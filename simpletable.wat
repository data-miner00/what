(module
  (import "js" "table" (table 2 funcref))
  (type $functionType (func (result i32)))
  (func (export "useTableFunc") (result i32)
    i32.const 2
    call_indirect (type $functionType))
  (func $functionOne (result i32)
    i32.const 1)
  (func $functionTwo (result i32)
    i32.const 2)
  (elem (i32.const 0) $functionOne $functionTwo))
