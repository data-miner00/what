const divideErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
const importObject = {
  extmod: {
    divideError: divideErrorTag,
  },
};

let instance;

function instantiate() {
  const fetchPromise = fetch("tags.wasm");
  WebAssembly.instantiateStreaming(fetchPromise, importObject)
    .then((result) => {
      instance = result.instance;
    });
}

function divide(numerator, denominator) {
  try {
    const result = instance.exports.divide(numerator, denominator);
    return result;
  } catch (error) {
    if (error.is(divideErrorTag)) {
      console.error("Divide error: " + error.getArg(divideErrorTag, 0));
    }
  }
}
