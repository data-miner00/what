(module
 (import "extmod" "exttag" (tag $tagname (param i32)))

(func $divide (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.div_u)
  (export "divide" (func $divide)))
