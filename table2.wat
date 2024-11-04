(module
  ;; Require a table with three slots
  (import "js" "table" (table 3 funcref))
  (func $functionThree (result i32)
    i32.const 3)

  ;; Place the above function in the third slot of the table
  (elem (i32.const 2) $functionThree))
