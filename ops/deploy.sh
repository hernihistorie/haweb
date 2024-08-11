#!/bin/bash
set -e
npm install
npm run build
scp -r build sanqui.net:tmp_build
ssh -t sanqui.net "\
    sudo rm -rf tmp_build/build_ && \
    mv tmp_build/build tmp_build/build_ && \
    sudo chown -R www-data. tmp_build/build_ && \
    sudo rm -rf /var/www/haweb_old && \
    sudo mv /var/www/haweb/ /var/www/haweb_old/ 2>/dev/null && \
    sudo cp -r tmp_build/build_ /var/www/haweb/"