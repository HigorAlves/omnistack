#!/usr/bin/env bash
set -e

# shellcheck disable=SC2028
echo "\n\e[34mCLEANING MONOREPO...\e[0m"

yarn clean
rm -fr node_modules
rm -fr apps/*/node_modules
rm -fr libs/*/node_modules
rm -fr packages/*/node_modules
rm -fr serverless/*/node_modules
rm -fr services/*/node_modules
rm -fr stacks/*/node_modules
rm -fr */**/package-lock.json
rm -fr */**/yarn.lock

# shellcheck disable=SC2028
echo "\n\e[32mCLEAN & DEPENDENCIES COMPLETE\e[0m"