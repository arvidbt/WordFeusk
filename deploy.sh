#!/usr/bin/env bash

# abort on errors
set -e



npm run build
git add .
git commit -m "automatic script deployment"
git subtree push --prefix dist origin gh-pages