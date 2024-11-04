default:
	wat2wasm demo.wat
serve:
	deno run --allow-net --allow-read --watch index.ts
fmt:
	deno fmt utils.js index.ts
