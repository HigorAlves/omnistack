#!/usr/bin/env bash
set -e
SOURCE_BRANCH=dev
VERSION_TYPE=$1

echo "preparing release branch..."

# Check if an argument was passed
if [ -z "$VERSION_TYPE" ]; then
    echo "Please provide one of the options"
    echo "major || minor || patch"
    exit 1
fi

if [[ "$VERSION_TYPE" =~ \b(major|minor|patch)\b ]]; then
    echo "$VERSION_TYPE is a valid version type"
    exit 1
else
    echo "$VERSION_TYPE is not a valid version type"
fi

echo "checking out latest $SOURCE_BRANCH"
git checkout $SOURCE_BRANCH
git pull --rebase
yarn release:prepare -- --release-as $VERSION_TYPE

# Read the version number from the package.json file in the current directory
VERSION_LABEL=v$(cat package.json | grep "\"version\":" | awk -F'"' '{print $4}')
BRANCH=release/$VERSION_LABEL

echo "creating new release branch $BRANCH from $SOURCE_BRANCH"
git checkout -b $BRANCH

# Set upstream branch so that future push's can occur with `git push`
git push --set-upstream origin $BRANCH

echo "release prepared!"