const importObject = {
  codeModule: { readString },
};

let memory;
let instance;

function instantiateWithMemory() {
  WebAssembly.instantiateStreaming(fetch("export-memory.wasm"), importObject)
    .then((result) => {
      instance = result.instance;
      memory = instance.exports.memory;
      instance.exports.writeHW();
    });
}

function readString(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const str = new TextDecoder("utf8").decode(bytes);
  console.log(str);
}
