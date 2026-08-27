#!/bin/bash
set -e
cd ./src/data/bulanci-map-sorter
git sparse-checkout init --cone
git sparse-checkout set maps_metadata 
cd -
git submodule update