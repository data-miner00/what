let instance;
let countReference;

function createInstanceWithGlobalExport() {
    const fileName = 'export-global.wasm'
    const fetchPromise = fetch(fileName);

    WebAssembly.instantiateStreaming(fetchPromise)
        .then(result => {
            instance = result.instance;
            countReference = instance.exports.count;

            console.assert(countReference.value === 0);
            instance.exports.incGlobal();
            console.assert(countReference.value === 1);
            countReference.value = 8;
            instance.exports.incGlobal();
            console.assert(countReference.value === 9);
        });
}
