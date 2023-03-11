#!/usr/bin/env bash
set -e

echo $"\e[0;34m AUDITING YOUR ENVIRONMENT\e[0m"

yarn solidarity

echo $"\e[32m AUDIT COMPLETE\e[0m"