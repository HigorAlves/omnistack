#!/usr/bin/env bash
set -e
SOURCE_BRANCH=dev
VERSION_TYPE=$1

echo "PREPARING RELEASE BRANCH"

# Check if an argument was passed
if [ -z "$VERSION_TYPE" ]; then
    echo "Please provide one of the options"
    echo "major || minor || patch"
    exit 1
fi

if [[ "$VERSION_TYPE" =~ \b(major|minor|patch)\b ]]; then
    echo "$VERSION_TYPE IS A VALID VERSION TYPE"
else
    echo "$VERSION_TYPE is not a valid version type"
    exit 1
fi

echo "AUDITING YOUR CODE"
yarn build
yarn lint:ci
yarn audit

echo "CHECKING OUT LATEST $SOURCE_BRANCH"
git checkout $SOURCE_BRANCH
git pull --rebase
yarn release:prepare -- --release-as "$VERSION_TYPE"

# Read the version number from the package.json file in the current directory
# shellcheck disable=SC2002
VERSION_LABEL=v$(cat package.json | grep "\"version\":" | awk -F'"' '{print $4}')
BRANCH=release/$VERSION_LABEL

echo "CREATING NEW RELEASE BRANCH $BRANCH FROM $SOURCE_BRANCH"
git checkout -b "$BRANCH"
git push --set-upstream origin "$BRANCH"

echo "RELEASE PREPARED!"