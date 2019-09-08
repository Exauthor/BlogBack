FROM node:11.13.0-alpine

RUN mkdir -p /usr/src/back
WORKDIR /usr/src/back

COPY package.json /usr/src/back
COPY yarn.lock /usr/src/back

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  yarn add global node-gyp && \
  yarn install && \
  yarn global add @nestjs/cli

COPY . /usr/src/back

EXPOSE 8080

CMD ["yarn", "start:dev"]
