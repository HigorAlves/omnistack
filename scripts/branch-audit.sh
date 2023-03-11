#!/usr/bin/env bash
set -e

echo $"\e[0;34m AUDITING CURRENT BRANCH & COMMITS\e[0m"

yarn lint
yarn lint-staged
yarn validate-branch-name

echo $"\e[32m AUDIT COMPLETE\e[0m"