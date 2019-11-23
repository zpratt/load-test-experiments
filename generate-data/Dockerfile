FROM node:10.17-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install --production --ignore-optional --ignore-platform
USER node

#######################################

FROM node:10.17-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .
COPY --from=builder /usr/src/app/template-transactions ./template-transactions
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/render-utils.js .
COPY --from=builder /usr/src/app/generate-migrations.js .

USER node
ENTRYPOINT ["node", "--experimental-modules",  "generate-migrations.js"]
