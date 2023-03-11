#!/usr/bin/env bash
set -e

echo $"\e[0;34m PRETTYING STAGED FILES...\e[0m"

rm -fr .husky
yarn husky install
yarn husky add .husky/pre-commit "yarn audit:commit"
yarn husky add .husky/pre-push "yarn lint"
yarn husky add .husky/commit-msg "npx commitlint --edit $1"

echo $"\e[32m FILES ARE NOW PRETTY AGAIN\e[0m"