FROM centos

MAINTAINER zjxjwxk "zjxjwxk@gmail.com"

ENV LANG zh_CN.utf-8
USER root

ADD ./node-v12.14.0-linux-x64.tar.xz /home/www/env/node
COPY ./cinema-frontend /home/www/workspace

COPY ./build.sh /home/www/sbin/
COPY ./entrypoint.sh /home/www/sbin/

ENV NODE_HOME /home/www/env/node/node-v12.14.0-linux-x64
ENV PATH /home/www:$NODE_HOME/bin:$PATH


WORKDIR /home/www
RUN chmod a+x sbin/*.sh

### complie nodejs
RUN sbin/build.sh

EXPOSE 3000

ENTRYPOINT ["sbin/entrypoint.sh"]
