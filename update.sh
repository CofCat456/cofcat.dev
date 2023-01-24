#!/bin/bash

# check if the submodule already exists
if [ -f ".gitmodules" ] && grep -q "content" ".gitmodules"; then
  # remove the submodule
  git submodule deinit -f -- content

  # remove the submodule folder
  rm -rf .git/modules/content

  # remove the submodule entry in .gitmodules
  git rm -f content
fi

# add the submodule
git submodule add https://github.com/CofCat456/cofcat.dev_content.git content

# update the submodule
git submodule update --recursive --remote

# run convert command
yarn run convert
