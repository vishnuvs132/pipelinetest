FROM node:lts-alpine AS builder

WORKDIR /ms.04-01.all

COPY package.json /ms.04-01.all

COPY . /ms.04-01.all

ENV NODE_ENV=development

RUN  npm install --no-package-lock && npm run build

FROM node:lts-alpine

WORKDIR /ms.04-01

COPY --from=builder  /ms.04-01.all/package.json /ms.04-01
COPY --from=builder  /ms.04-01.all/dist/. /ms.04-01


ENV NODE_ENV=production

RUN  npm install


CMD [ "node", "index.js" ]