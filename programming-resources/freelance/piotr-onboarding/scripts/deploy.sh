#!/bin/bash

git stash
git pull origin main
pm2 delete onboarding 2> /dev/null
yarn prod
