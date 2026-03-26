#!/bin/bash
set -e
echo 'Launching deploy script for haweb'

DEPLOY_BRANCH="adapter-node"

ssh -t hhbox.hernihistorie.cz "
    echo 'Please enter password for $USER@hhbox.hernihistorie.cz' &&
    sudo -u deploy -i bash -c '
        cd /home/deploy/haweb &&
        git fetch origin $DEPLOY_BRANCH &&
        git reset --hard origin/$DEPLOY_BRANCH &&
        docker build -t haweb .
    ' &&
    sudo systemctl restart haweb.service
    echo Done!
"