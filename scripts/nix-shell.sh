#!/usr/bin/env sh

if [[ -z "$FLATPAK_ID" ]]; then
    exec nix-shell $@
else
    exec flatpak-spawn --host --env=TERM=xterm-256color nix-shell $@
fi