#!/usr/bin/env sh

# Abort on errors
set -e

# Build the Nuxt.js project
npm run generate

# Navigate into the generated output directory
cd dist

# If you are deploying to a custom domain, add a CNAME file with your domain here

# Initialize a Git repository in the 'dist' directory
git init
git add -A
git commit -m 'Deploy'

# Replace the repository URL with your GitHub Pages repository
# Replace 'master' with the branch you want to use for GitHub Pages (usually 'gh-pages')
git push -f git@github.com:iamoscarbc/moray-encuestas.git master:gh-pages

# Go back to the previous directory to avoid any issues
cd -