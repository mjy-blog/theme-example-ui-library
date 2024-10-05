#!/bin/sh

set -e

rm -rf dist

tsc -p tsconfig.compile.json
tsc-alias -p tsconfig.compile.json
package-json-minifier
cp README.md dist
