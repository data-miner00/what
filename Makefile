WAT_DIR := .
WAT_FILES := $(wildcard $(WAT_DIR)/*.wat)
WASM_FILES := $(WAT_FILES:.wat=.wasm)

all: $(WASM_FILES)
%.wasm: %.wat
	@echo "Compiling $< to $@"
	wat2wasm $< -o $@

serve:
	deno run --allow-net --allow-read --watch index.ts

fmt:
	deno fmt utils.js index.ts

clean:
	rm -f $(WASM_FILES)
