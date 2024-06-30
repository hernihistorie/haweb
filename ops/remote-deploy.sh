#!/bin/bash
set -e
ssh -t sanqui.net "\
    cd ~/haweb && \
    git pull && \
    ./ops/deploy.sh"