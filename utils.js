function printExports(fileName) {
  const fetchPromise = fetch(fileName);
  WebAssembly.instantiateStreaming(fetchPromise)
    .then((result) => {
      const instance = result.instance;
      for (const wasmExport in instance.exports) {
        const type = typeof instance.exports[wasmExport];
        console.log(`Export ${wasmExport} is a ${type}`);
      }
    });
}

function printImports(fileName) {
  const fetchPromise = fetch(fileName);
  WebAssembly.compileStreaming(fetchPromise)
    .then((module) => {
      const imports = WebAssembly.Module.imports(module);
      imports.forEach((wasmImport) => {
        console.log(`Import ${JSON.stringify(wasmImport)}`);
      });
    });
}

function useImports() {
  const fileName = "demo.wasm";
  const importObject = {
    importModule: {
      importFunctionOne: (param) => {
        console.log(`1 with ${param}`);
      },
      importFunctionTwo: (param) => {
        console.log(`2 with ${param}`);
      },
    },
  };
  const fetchPromise = fetch(fileName);
  WebAssembly.instantiateStreaming(fetchPromise, importObject)
    .then((result) => {
      const instance = result.instance;
      instance.exports.useImports();
    });
}
