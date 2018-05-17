FROM node:6.13.1-alpine
MAINTAINER Fernando Espíndola "fer.esp@gmail.com"

ENV http_proxy http://15.85.195.199:8088
ENV https_proxy http://15.85.195.199:8088
ENV no_proxy conta,mysql

RUN npm install -g @angular/cli

EXPOSE 4200

WORKDIR /app

CMD ["ng", "server", "--host", "0.0.0.0"]
