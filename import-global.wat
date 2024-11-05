(module 
  (global $g (import "gs" "count") (mut i32))
  (func (export "incGlobal")
        (global.set $g
            (i32.add (global.get $g) (i32.const 1)))))
