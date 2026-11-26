#!/bin/sh
# Shared helper: branches nobody may commit/push to directly.
PROTECTED="main dev"

is_protected() {
  for b in $PROTECTED; do [ "$1" = "$b" ] && return 0; done
  return 1
}

deny() {
  echo "ERROR: $1" >&2
  echo "main and dev only accept merges of approved pull requests." >&2
  echo "Create a feature branch (git switch -c feature/<name>) and open a PR." >&2
  exit 1
}
