#!/bin/bash
# Run this in Terminal.app (outside Cursor) to logout of the current GitHub account.
set -euo pipefail

echo "→ Erasing GitHub credentials from Keychain..."
printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase || true
printf "protocol=https\nhost=github.com\nusername=244722367\n\n" | git credential-osxkeychain erase || true

while security delete-internet-password -s github.com >/dev/null 2>&1; do
  echo "  deleted a github.com keychain item"
done

echo "→ Clearing git commit identity..."
git config --global --unset-all user.name 2>/dev/null || true
git config --global --unset-all user.email 2>/dev/null || true

echo
echo "Done. Current state:"
git config --global --get user.name || echo "  user.name: (cleared)"
git config --global --get user.email || echo "  user.email: (cleared)"
if security find-internet-password -s github.com >/dev/null 2>&1; then
  echo "  keychain: STILL HAS github.com — open Keychain Access and delete it manually"
else
  echo "  keychain: cleared"
fi

echo
echo "→ Setting new git identity..."
git config --global user.name "shreya-ghimire"
git config --global user.email "shreyaghimiree.22@gmail.com"
echo "  user.name=$(git config --global --get user.name)"
echo "  user.email=$(git config --global --get user.email)"
echo
echo "Then login as shreya-ghimire:"
echo "  1) brew install gh && gh auth login"
echo "  2) Or push/pull once — username: shreya-ghimire + a Personal Access Token as password"
echo
echo "Also revoke the old token at: https://github.com/settings/applications"
