const memory = new WebAssembly.Memory({ initial: 1 });
const importObject = {
  codeModule: { readString },
  memoryModule: { memory },
};

let instance;

function instantiateWithMemory() {
  const fetchPromise = fetch("import-memory.wasm");
  WebAssembly.instantiateStreaming(fetchPromise, importObject)
    .then((result) => {
      instance = result.instance;
      instance.exports.writeHW();
    });
}

function readString(offset, length) {
  const bytes = new Uint32Array(memory.buffer, offset, length);
  const str = new TextDecoder("utf8").decode(bytes);
  console.log(str);
}
