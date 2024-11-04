CURR_DIR = .
default: $(CURR_DIR/*.wat)
	wat2wasm $^
serve:
	deno run --allow-net --allow-read --watch index.ts
fmt:
	deno fmt utils.js index.ts
