const globalConfig = { value: "i32", mutable: true };
const count = new WebAssembly.Global(globalConfig, 0);

let instance;

function createInstanceWithGlobal() {
  const fileName = "import-global.wasm";
  const fetchPromise = fetch(fileName);
  const importObject = { gs: { count } };

  WebAssembly.instantiateStreaming(fetchPromise, importObject)
    .then((result) => {
      instance = result.instance;
      console.assert(count.value === 0);
      instance.exports.incGlobal();
      console.assert(count.value === 1);
      count.value = 8;
      instance.exports.incGlobal();
      console.assert(count.value === 9);
    });
}
