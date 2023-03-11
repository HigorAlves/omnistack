#!/usr/bin/env bash
set -e

# shellcheck disable=SC2028
echo "\n\e[34mCLEANING DEPENDENCIES AND NODE_MODULES...\e[0m"

rm -fr node_modules
rm -fr apps/*/node_modules
rm -fr libs/*/node_modules
rm -fr packages/*/node_modules
rm -fr serverless/*/node_modules
rm -fr services/*/node_modules
rm -fr stacks/*/node_modules
rm -fr reports
rm -fr "*/**/package-lock.json"
rm -fr "*/**/yarn.lock"
rm -fr .husky

# shellcheck disable=SC2028
echo "\n\e[32mCLEAN & DEPENDENCIES COMPLETE\e[0m"