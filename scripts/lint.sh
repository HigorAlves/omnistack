#!/usr/bin/env bash
set -e

echo $"\e[0;34m PRETTYING STAGED FILES...\e[0m"

prettier -w "**/*.{ts,tsx,md,json,yml}"
eslint --fix --cache --quiet --ext ts,tsx,js,jsx "$@"

echo $"\e[32m FILES ARE NOW PRETTY AGAIN\e[0m"