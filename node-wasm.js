const { readFileSync } = require("fs");

const wasm = readFileSync("divide.wasm");

const exttag = new WebAssembly.Tag({ parameters: ["i32"] });

WebAssembly.instantiate(wasm, {
  extmod: {
    exttag,
  },
})
  .then((result) => {
    const { divide } = result.instance.exports;

    const numerator = 42;
    const denominator = 2;

    console.log(
      `${numerator}/${denominator} = ${divide(numerator, denominator)}`,
    );
  });
