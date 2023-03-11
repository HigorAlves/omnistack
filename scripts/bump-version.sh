#!/usr/bin/env bash
set -e

# shellcheck disable=SC2028
echo "\n\e[34mCLEANING MONOREPO...\e[0m"

yarn version apply

# shellcheck disable=SC2028
echo "\n\e[32mCLEAN & DEPENDENCIES COMPLETE\e[0m"