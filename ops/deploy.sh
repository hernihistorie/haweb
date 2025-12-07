#!/bin/bash
set -e
echo 'Launching deploy script for haweb'
ssh -t herniarchiv.cz "
    echo 'Please enter password for $USER@herniarchiv.cz' &&
    sudo -u deploy -i bash -c '
        cd /home/deploy/haweb &&
        git fetch origin master &&
        git reset --hard origin/master &&
        npm install --force &&
        npm run build
    ' &&
    cd /home/deploy/haweb &&
    sudo rm -rf build_ &&
    sudo mv build build_ &&
    sudo chown -R www-data. build_ &&
    sudo rm -rf /var/www/haweb_old &&
    sudo mv /var/www/haweb/ /var/www/haweb_old/ 2>/dev/null &&
    sudo cp -r build_ /var/www/haweb/ &&
    echo Done!
"