#!/bin/bash
# Check out the bulanci-map-sorter submodule without its gigabytes of map data.
#
# Two things are needed for that:
#   - a partial ("blobless") clone, so file contents are only downloaded
#     when they actually get checked out, and
#   - a sparse checkout, so only the root files and maps_metadata/ get
#     checked out (and therefore downloaded).
#
# `git submodule update --init` can't do this on its own: it checks out the
# whole tree right after cloning, before a sparse checkout can be configured.
# So the first clone is done by hand here, and from then on plain
# `git submodule update` keeps respecting the settings.
#
# Safe to re-run. To shrink a submodule that was already cloned in full:
#   git submodule deinit -f src/data/bulanci-map-sorter
#   rm -rf .git/modules/src/data/bulanci-map-sorter
#   ./update_submodules.sh
set -euo pipefail
cd "$(dirname "$0")"

SUBMODULE=src/data/bulanci-map-sorter
SPARSE_DIRS=(maps_metadata)

git submodule init "$SUBMODULE"

if [ ! -e "$SUBMODULE/.git" ]; then
    gitdir=$(git rev-parse --git-path "modules/$SUBMODULE")
    if [ -e "$gitdir" ]; then
        echo "error: $gitdir exists but $SUBMODULE is not checked out." >&2
        echo "Remove it (rm -rf '$gitdir') and run this script again." >&2
        exit 1
    fi
    url=$(git config "submodule.$SUBMODULE.url")
    git clone --filter=blob:none --no-checkout "$url" "$SUBMODULE"
    # Move the clone's .git into .git/modules/, like a regular submodule.
    git submodule absorbgitdirs "$SUBMODULE"
fi

# Never run the sparse-checkout commands below unless the submodule really is
# its own repository: in a directory without .git, git walks up and applies
# them to this repository instead.
if [ ! -e "$SUBMODULE/.git" ]; then
    echo "error: $SUBMODULE is not a git repository" >&2
    exit 1
fi

# Cone mode: all files in the root directory, plus the listed directories.
git -C "$SUBMODULE" sparse-checkout set --cone "${SPARSE_DIRS[@]}"

# Check out the commit recorded in this repository.
git submodule update "$SUBMODULE"
