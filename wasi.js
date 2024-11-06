const { readFileSync } = require("node:fs");
const { WASI } = require("node:wasi");
const { argv, env } = require("node:process");

const wasi = new WASI({ args: argv, env, version: "unstable", preopens: { "/sandbox": "." } });
const wasm = readFileSync("wasi-hello.wasm");
const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

WebAssembly.instantiate(wasm, importObject)
  .then((result) => {
    wasi.start(result.instance);
  });
