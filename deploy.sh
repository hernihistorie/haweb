#!/bin/bash
npm run build
scp -r build sanqui.net:
ssh sanqui.net "cp -r build/* /var/www/haweb/"