#!/usr/bin/env bash
set -e

echo "preparing release branch..."

VERSION_REGEX="^(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)(\\-[0-9A-Za-z-]+(\\.[0-9A-Za-z-]+)*)?(\\+[0-9A-Za-z-]+(\\.[0-9A-Za-z-]+)*)?$"

if [[ ! $1 =~ $VERSION_REGEX ]]
then
  echo "$1 is not a valid version number. Please see https://medium.com/bb-tutorials-and-thoughts/understanding-semantic-versioning-spec-635b87397eec for information on valid semantic versioning."
  exit 1
fi

VERSION_LABEL=v$1
BRANCH=release/$VERSION_LABEL
SOURCE_BRANCH=dev

echo "checking out latest $SOURCE_BRANCH"
git checkout $SOURCE_BRANCH
git pull --rebase

echo "creating new release branch $BRANCH from $SOURCE_BRANCH"
git checkout -b $BRANCH

# Bump the package.json, lerna.json and tag but don't push to origin
# We don't create the tag until the release has been accepted
echo "bumping package versions to $VERSION_LABEL"
yarn bump $1

# Since we don't create the tag until the release is accepted, but
# lerna creates the tag with `lerna version`, we'll need to delete
# the local tag
git tag -d $VERSION_LABEL

# Set upstream branch so that future push's can occur with `git push`
git push --set-upstream origin $BRANCH

echo "release prepared!"