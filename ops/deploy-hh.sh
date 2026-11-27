#!/bin/bash
set -e
echo 'Launching deploy script for hhweb (hernihistorie.cz)'

DEPLOY_BRANCH="master"

# hhweb is built from the same checkout as haweb, but doesn't need its submodules
ssh -t hhbox.hernihistorie.cz "
    echo 'Please enter password for $USER@hhbox.hernihistorie.cz' &&
    sudo -u deploy -i bash -c '
        cd /home/deploy/haweb &&
        export GIT_SSH_COMMAND=\"ssh -i /home/deploy/keys/haweb-read -o IdentitiesOnly=yes\" &&
        git fetch origin $DEPLOY_BRANCH &&
        git reset --hard origin/$DEPLOY_BRANCH &&
        docker image prune -f --filter label=project=hhweb &&
        docker build --label project=hhweb -f hhweb/Dockerfile -t hhweb .
    ' &&
    sudo systemctl restart hhweb.service
    echo Done!
"
