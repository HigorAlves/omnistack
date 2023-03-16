#!/usr/bin/env bash
set -e

# shellcheck disable=SC2028
echo "TESTING THE ENTIRE MONOREPO...\e[0m"

turbo run test

# shellcheck disable=SC2028
echo "\n\e[32mBUILD COMPLETE\e[0m"