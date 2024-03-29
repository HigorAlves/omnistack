#!/usr/bin/env bash
set -e

echo $"\e[0;34m PRETTYING STAGED FILES...\e[0m"

prettier --write "**/*.{ts,tsx,js,jsx,md,json,yml}"
eslint --fix --cache --quiet --ext ts,tsx,js,jsx,json,yml --format html --output-file ./reports/eslint.html

echo $"\e[32m FILES ARE NOW PRETTY AGAIN\e[0m"