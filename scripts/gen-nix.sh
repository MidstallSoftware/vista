#!/usr/bin/env sh

node2nix -d --pkg-name nodejs-16_x --include-peer-dependencies -l package-lock.json