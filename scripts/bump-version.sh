#!/bin/bash
set -e

echo "BUMPING PACKAGES VERSIONS"
# Check if an argument was passed
if [ -z "$1" ]; then
    echo "Please provide a version number in the semantic versioning style (e.g. 1.2.3)"
    exit 1
fi

# Check if the argument follows semantic versioning style
if [[ ! "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "The version number should follow the semantic versioning style (e.g. 1.2.3)"
    exit 1
fi

# Update the version number in all package.json files
find . -name "package.json" -type f -exec sed -i '' "s/\"version\": \".*\"/\"version\": \"$1\"/g" {} +

echo "All package.json files have been updated to version $1"
