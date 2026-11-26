#!/bin/sh
# Run once after cloning: points git at the versioned hooks in .githooks/.
set -e
cd "$(git rev-parse --show-toplevel)"
chmod +x .githooks/*
git config core.hooksPath .githooks
echo "Git hooks installed (core.hooksPath=.githooks)."
