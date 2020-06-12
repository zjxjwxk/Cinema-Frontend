#!/bin/sh

export NAME=cinema-frontend-www

export VERSION=latest

docker run -itdp 3000:3000 --name ${NAME} --restart=always \
${NAME}:${VERSION}
#-v /images:/home/www/images \
