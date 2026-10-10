#!/bin/bash
set -e
echo 'Launching deploy script for haweb'

DEPLOY_BRANCH="master"

ssh -t hhbox.hernihistorie.cz "
    echo 'Please enter password for $USER@hhbox.hernihistorie.cz' &&
    sudo -u deploy -i bash -c '
        cd /home/deploy/haweb &&
        export GIT_SSH_COMMAND=\"ssh -i /home/deploy/keys/haweb-read -o IdentitiesOnly=yes\" &&
        git fetch origin $DEPLOY_BRANCH &&
        git reset --hard origin/$DEPLOY_BRANCH &&
        docker image prune -f --filter label=project=haweb &&
        docker build --label project=haweb -t haweb .
    ' &&
    sudo systemctl restart haweb.service
    echo Done!
"