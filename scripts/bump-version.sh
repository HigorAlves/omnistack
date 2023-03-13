#!/bin/bash
set -e

echo "BUMPING PACKAGES VERSIONS"

# Read the version number from the package.json file in the current directory
VERSION=$(cat package.json | grep "\"version\":" | awk -F'"' '{print $4}')

# Check if the version number is valid
if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Invalid version number in package.json"
    exit 1
fi

# Update the version number in all other package.json files within subdirectories
find . -name "package.json" -not -path "./node_modules/*" -not -path "./package.json" -type f -exec sed -i '' "s/\"version\": \".*\"/\"version\": \"$VERSION\"/g" {} +

echo "All package.json files have been updated to version $VERSION"
