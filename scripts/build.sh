#!/usr/bin/env bash
set -e

# shellcheck disable=SC2028
echo "\n\e[34mBUILDING THE ENTIRE MONOREPO...\e[0m"

turbo run build

# shellcheck disable=SC2028
echo "\n\e[32mBUILD COMPLETE\e[0m"