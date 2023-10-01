#!/bin/bash
npm run build
scp -r build sanqui.net:tmp_build
ssh sanqui.net "cp -r tmp_build/* /var/www/haweb/"