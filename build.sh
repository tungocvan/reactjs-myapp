#!/bin/bash
rm -rf build
npm run build
cp htaccess build
tar -czvf dichvucong.tar.gz --exclude='*.Identifier' build/
sshpass -p '13062021@Han' scp -r dichvucong.tar.gz nhathhmd@tungocvan.com:/home1/nhathhmd/public_html/chau
sshpass -p '13062021@Han' ssh nhathhmd@tungocvan.com
