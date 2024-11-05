(module
  (global $g (mut i32) (i32.const 0))
  (func (export "incGlobal")
    (global.set $g
      (i32.add (global.get $g) (i32.const 1))))
  (export "count" (global $g)))
