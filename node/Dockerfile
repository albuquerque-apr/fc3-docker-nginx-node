FROM node:22.15.0-alpine

WORKDIR /usr/src/app

RUN 

ENV DOCKERIZE_VERSION=v0.6.1
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .
RUN npm install

EXPOSE 3000