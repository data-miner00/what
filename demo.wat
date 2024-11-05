(module 
    ;; Import from 'importModule'
    (import "importModule" "importFunctionOne" (func $log(param i32)))
    (import "importModule" "importFunctionTwo" (func $log2(param i32)))

    ;; Inline function exports
    (func (export "useImports") 
        i32.const 1
        call $log
        i32.const 2
        call $log2)

    ;; Standalone function
    (func $functionOne (result i32)
        i32.const 2)
    (export "functionOne" (func $functionOne))

    (func (export "add") (param $a i32) (param $b i32) (result i32)
        (i32.add
          (local.get $a)
          (local.get $b))))
