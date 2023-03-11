#!/usr/bin/env bash
set -e

echo $"\e[0;34m AUDITING YARN PACKAGES\e[0m"

npx audit-ci

# exit code of 16 or higher indicates we have critical security issues.
# critical issues should fail build.
# https://classic.yarnpkg.com/en/docs/cli/audit/#toc-yarn-audit
EXIT_CODE=$?
if [ $EXIT_CODE -ge 16 ]; then
    echo "Security issue found"
    exit EXIT_CODE
fi

echo $"\e[32m AUDIT COMPLETE\e[0m"