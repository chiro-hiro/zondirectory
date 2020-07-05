#!/usr/bin/make -f

.PHONY: all compile-smartweave browserify

all: compile-smartweave browserify

compile-smartweave:
	-npx typescript --outDir out/js/SmartWeave --project libs/SmartWeave/tsconfig.json
	# npx typescript --outDir out/js/SmartWeave libs/SmartWeave/src/*.ts

browserify: compile-smartweave
	# npx browserify -o ui/artifacts/SmartWeave.js out/js/SmartWeave/index.js
	npx browserify -o ui/artifacts/SmartWeave.js -r ./out/js/SmartWeave/index.js:smartweave