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
    })

    // Error handling
    .catch((error) => {
      // When .wasm file is corrupted
      if (error instanceof WebAssembly.CompileError) {
        console.log(`Compile error ${error.message}`);
        console.log(error.name);
        console.log(error.fileName);
        console.log(error.lineNumber);
        console.log(error.columnNumber);
        console.log(error.stack);

        // When not passing the correct import object
      } else if (error instanceof TypeError) {
        console.log(`Type error ${error.message}`);

        // When passing the unexpected functions
      } else if (error instanceof WebAssembly.LinkError) {
        console.log(`Link error ${error.message}`);
      }
    });
}
