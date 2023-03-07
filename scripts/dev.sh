#!/usr/bin/env bash
set -e

# shellcheck disable=SC2028
echo "\n\e[34mRUNNING IN DEVELOPMENT MODE ALL PACKAGES\e[0m"

turbo run dev

# shellcheck disable=SC2028
echo "\n\e[32mDEV COMPLETE\e[0m"