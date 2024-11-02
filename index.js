var func = WebAssembly.instantiateStreaming;

function printExports(fileName) {
    const fetchPromise = fetch(fileName)
    WebAssembly.instantiateStreaming(fetchPromise)
        .then(result => {
            const instance = result.instance;
            for (const wasmExport in instance.exports) {
                const type = typeof instance.exports[wasmExport];
                console.log(`Export ${wasmExport} is a ${type}`);
            }
        })
}
